var popUp = function (href) {
    alert(href);
    window.open(href, "PopUp", "width=400, height=400");
}

var prepareLinks = function (params) {
    if (!document.getElementsByTagName) return false;
    var item = document.getElementsByTagName("a");
    for (var i = 0; i < item.length; ++i) {
        if (item[i].getAttribute("class") === "popup") {
            item[i].onclick = function () {
                popUp(this.href);
                return false;   
            }
        }
    }
}

window.onload = prepareLinks;