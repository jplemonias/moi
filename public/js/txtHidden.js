var c = document.querySelectorAll(".clickViewable")
for (var i = 0; i < c.length; i++) {
    c[i].addEventListener("click", function () {
        var r = this.querySelectorAll(".jp-txtTrans")
        for (var j = 0; j < r.length; j++) {
            r[j].classList.remove("jp-txtTrans")
        }
    }, { once: true })
}