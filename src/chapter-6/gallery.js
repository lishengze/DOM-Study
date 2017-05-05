var showPic = function (object) {
    if(!document.getElementById("placeholder")) return false;
    
    var img = document.getElementById("placeholder");
    if (img.nodeName === 'IMG') {
        var source = object.getAttribute("href");
        img.setAttribute("src", source);       
    }else {
        return false;
    }
    
    if (document.getElementById("description")) {
        var description = document.getElementById("description");
        if (description.firstChild.nodeType === 3) {
            description.firstChild.nodeValue = object.getAttribute("title")?object.getAttribute("title"):"";               
        }
        console.log(description);       
    }    
    return true;
}

var prepareLinks = function () {
    var picItem = document.getElementsByClassName("Pic");
    console.log(picItem);
    
    for(var i = 0; i < picItem.length; ++i) {
        picItem[i].onclick = function () {
            return !showPic(this);;
        }
    }
}

var prepareLinksb = function () {    
    if (!document.getElementById) return false;
    if (!document.getElementsByTagName) return false;
    if (!document.getElementById('gallery')) return false;
    
    console.log(document.getElementsByTagName('body'))
    
    var gallery = document.getElementById('gallery');
    var links = document.getElementsByTagName('a');
    console.log(gallery);
    console.log(links);
    console.log(gallery.childNodes.length);
    for(var i = 0; i < links.length; ++i) {
        links[i].onclick = function () {
            return !showPic(this);
        }
        links[i].onkeypress = links[i].onclick;
    }
}

var addLoadEvent = function (func) {
    var oldLoad = window.onload;
    if (typeof window.onload !== "function") {
        window.onload = func;
    }else{
        window.onload = function () {
            oldLoad();
            func();
        }
    }
}

addLoadEvent(prepareLinksb);