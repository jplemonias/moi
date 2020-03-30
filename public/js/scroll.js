"use strict";

(function () {

  // Build new scrollbar DOM elements
  const buildScrollableElement = function (elt, nativeScrollbarOffset) {

    // 1. Create new srollable element and replace the old container
    const markup = `
        <div class="Scrollable__scrollbar"></div>
        <div class="Scrollable__scrollbar-fill"></div>
    `;
    let containerDOM = document.createElement("div");
    containerDOM.className = 'Scrollable';

    containerDOM.style.width = elt.offsetWidth + 'px';
    containerDOM.style.height = elt.style.height;
    containerDOM.innerHTML = markup;

    let scrollableContainerContent = document.createElement("div");
    scrollableContainerContent.className = 'Scrollable__scrollable';

    let scrollableContainerContentElement = document.createElement(elt.localName);
    scrollableContainerContentElement.className = elt.className;
    scrollableContainerContentElement.id = elt.id;
    scrollableContainerContentElement.innerHTML = elt.innerHTML;

    scrollableContainerContent.appendChild(scrollableContainerContentElement);
    containerDOM.appendChild(scrollableContainerContent);
    document.body.appendChild(containerDOM);
    document.body.removeChild(elt);

    let scrollbarDOM = containerDOM.firstElementChild;
    let scrollbarFillDOM = scrollbarDOM.nextElementSibling;
    let scrollableDOM = containerDOM.lastElementChild;

    // 2. Define the sizes
    let boxSize = scrollbarDOM.clientHeight;
    let scrollSize = scrollableDOM.scrollHeight;
    let toScrollSize = scrollSize - boxSize;
    let scrollbarSize;

    // 3. Initalize scrollbar fill
    scrollbarFillDOM.style.transform = "translate3d(0, 0, 0)";
    scrollbarFillDOM.style.height = 100 * (boxSize / scrollSize) + "%";
    scrollbarSize = scrollbarFillDOM.clientHeight;
    scrollbarFillDOM.style.zIndex = boxSize >= scrollSize ? -1 : 2;
    scrollbarDOM.style.zIndex = boxSize >= scrollSize ? -1 : 1;

    // 4. Add event listener to move artificial scrollbar synced the real one and define the transformation function
    const setScroll = function ($event) {
      scrollbarFillDOM.style.transform =
        "translate3d(0, " +
        boxSize * ($event.target.scrollTop / scrollSize) +
        "px, 0)";
    };

    scrollableDOM.addEventListener("scroll", setScroll);

    // 5. Modify the width or the position of scrollbars if the current browser is FF
    if (isFirefox()) {
      if (nativeScrollbarOffset) {
        scrollableDOM.style.width =
          "calc(100% + " + nativeScrollbarOffset + "px)";
      }
      else {
        scrollableDOM.style.paddingRight = nativeScrollbarOffset;
      }
    }

    // 6. Add event to scrollbarDOM to handle user's clicks
    const onScrollbarClick = function ($event) {
      scrollableDOM.scrollTop = scrollSize * ($event.offsetY / boxSize);
    };
    // 7. Handle scrollbar fill mousedown event
    let offsetStart = null;
    const onScrollbarFillMousedown = function ($event) {
      $event.preventDefault();
      $event.stopPropagation();
      offsetStart =
        $event.offsetY + containerDOM.getBoundingClientRect().top;
      window.addEventListener("mousemove", onScrollbarFillMousemove, false);
      window.addEventListener("mouseup", onScrollbarFillMouseup, false);
    };
    const onScrollbarFillMousemove = function ($event) {
      $event.preventDefault();
      $event.stopPropagation();
      scrollableDOM.scrollTop =
        scrollSize * (($event.clientY - offsetStart) / boxSize);
    };
    const onScrollbarFillMouseup = function ($event) {
      $event.preventDefault();
      $event.stopPropagation();
      window.removeEventListener("mousemove", onScrollbarFillMousemove);
      window.removeEventListener("mouseup", onScrollbarFillMouseup);
    };
    scrollbarFillDOM.addEventListener("mousedown", onScrollbarFillMousedown, false);

    scrollbarDOM.addEventListener("mousedown", onScrollbarClick, false);
  };

  const isFirefox = function () {
    return typeof InstallTrigger !== 'undefined';
  };

  const scrollbarPresenceDetection = function () {
    // Scrollbar presence detection
    let noScrollElement = window.document.createElement("div");
    noScrollElement.style.width = "100px";
    let scrollElement = window.document.createElement("div");
    let container = window.document.createElement("div");
    container.style.width = "100%";
    let container2 = window.document.createElement("div");
    container2.style.width = "100%";
    noScrollElement.appendChild(container);
    scrollElement.appendChild(container2);
    scrollElement.style.width = "100px";
    scrollElement.style.overflow = "scroll";
    window.document.body.appendChild(noScrollElement);
    window.document.body.appendChild(scrollElement);
    let nativeScrollbarOffset = container.clientWidth - container2.clientWidth;
    window.document.body.removeChild(noScrollElement);
    window.document.body.removeChild(scrollElement);
    return nativeScrollbarOffset;
  }

  setTimeout(function () {
    let elements = Array.from(document.getElementsByClassName('scrollable'));
    let nativeScrollbarOffset;
    if (elements.length) nativeScrollbarOffset = scrollbarPresenceDetection();
    elements.map(function (elt) {
      buildScrollableElement(elt, nativeScrollbarOffset);
    });
  });

})()