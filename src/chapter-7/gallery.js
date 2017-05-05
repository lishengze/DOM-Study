var showPic = function (object) {
    // if(!document.getElementById("placeholder")) return false;    
    // var img = document.getElementById("placeholder");
    // if (img.nodeName === 'IMG') {
    //     var source = object.getAttribute("href");
    //     img.setAttribute("src", source);       
    // }else {
    //     return false;
    // }
    // if (document.getElementById("description")) {
    //     var description = document.getElementById("description");
    //     if (description.firstChild.nodeType === 3) {
    //         description.firstChild.nodeValue = object.getAttribute("title")?object.getAttribute("title"):"";               
    //     }
    //     console.log(description);       
    // }    
    if (!document.createElement) return false;    
    if (!document.getElementById) return false;
    
    var galleryNode = document.getElementById('gallery');
    if (!galleryNode) return false;
        
    if (document.getElementById('placeholder')) {
        var imgNode = document.getElementById("placeholder");
        if (imgNode.nodeName === 'IMG') {
            var source = object.getAttribute("href");
            imgNode.setAttribute("src", source);       
        }else {
            return false;
        }
        if (document.getElementById("description")) {
            var descriptionNode = document.getElementById("description");
            if (descriptionNode.firstChild.nodeType === 3) {
                descriptionNode.firstChild.nodeValue = object.getAttribute("title")?object.getAttribute("title"):"";               
            }
            console.log(description);       
        }          
    } else {
        var imgNode = document.createElement('img');
        if (!imgNode) return false;
        
        imgNode.setAttribute('id', 'placeholder');
        imgNode.setAttribute('src', object.getAttribute('href'));

        console.log(galleryNode);
        console.log(galleryNode.nextSibling);
        // galleryNode.parentNode.insertBefore(imgNode, galleryNode);
        insertAfter(imgNode, galleryNode);
        
        var descriptionNode = document.createElement('p');
        if (descriptionNode) {
            descriptionNode.setAttribute('id', 'description');
            var text = object.getAttribute("title")?object.getAttribute("title"):"";
            var textNode = document.createTextNode(text);
            descriptionNode.appendChild(textNode);    
            // galleryNode.parentNode.insertBefore(descriptionNode, galleryNode); 
            insertAfter(descriptionNode, galleryNode);      
        }        
    }
    return true;
}

var insertAfter = function (newNode, originNode) {
    var parentNode = originNode.parentNode;    
    if (parentNode.lastChild === originNode) {        
       parentNode.appendChild(newNode);
    } else {
       parentNode.insertBefore(newNode, originNode.nextSibling);
    }    
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

var prepareGallery = function () {    
    if (!document.getElementById) return false;
    if (!document.getElementsByTagName) return false;
    if (!document.getElementById('gallery')) return false;
    
    var gallery = document.getElementById('gallery');
    var links = document.getElementsByTagName('a');
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
 
addLoadEvent(prepareGallery);