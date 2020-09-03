const ratio = 1

const options = {
    root: null,
    rootMargin: '0px',
    threshold: ratio
}

const handleIntersect = function (enties, observer) {
    enties.forEach(function (entry) {
        if (entry.intersectionRatio == ratio) {
            entry.target.classList.add("pop_scroll")
            observer.unobserve(entry.target)
        }
    })
}

const observer = new IntersectionObserver(handleIntersect, options)
observer.observe(document.querySelector('.pop'))