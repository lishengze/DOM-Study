function addloadEvent(func) {
    var oldLoad = window.onload;
    if (typeof window.onload !== 'function') {
        window.onload = func;
    }else {
        window.onload = function () {
            func();
            oldLoad();
        }
    }
}

function insertAfter(newNode, oldNode) {
    var parentNode = oldNode.parentNode;
    if (parentNode.lastChild === oldNode) {
        parentNode.appentChild(newNode);
    } else {
        parentNode.insertBefore(newNode, oldNode.nextSibling);
    }
}

function addClass(element, className, value) {
    if (!element.className) {
        element.className = value;
    } else {
        var newClassValue = element.className;
        newClassValue += " ";
        newClassValue += value;
        element.className = newClassValue;
    }
}

function heightPage() {
    if (!document.getElementsByTagName) return false;
    var headers = document.getElementsByTagName('header');
    if (headers.length < 1) return false;
    var navs = headers[0].getElementsByTagName('nav');
    if (navs.length < 1) return false;

    var linkList = navs[0].getElementsByTagName('a');
    if (linkList.length > 1) {
        for (var i = 0; i < linkList.length; ++i) {
            var localHerf = linkList[i].getAttribute('href');
            console.log(localHerf);
            console.log(window.location.href);
            if (window.location.href.indexOf(localHerf)!==-1) {
                console.log('succeed');
                linkList[i].className = 'here';
                var linkText = linkList[i].lastChild.nodeValue.toLowerCase();
                console.log(linkText);
                document.body.setAttribute('id', linkText);
            }
        }
    }
}

addloadEvent(heightPage);