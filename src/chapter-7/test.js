var addNewNode = function(){
    var body = document.getElementsByTagName('body')[0];
    var newNode = document.createElement('p');
    var textNode = document.createTextNode("Hello TextNode");
    newNode.appendChild(textNode);
    // newNode.innerText = "Hello World";
    body.appendChild(newNode);
}

var addLoadEvent = function (func) {
    var oldLoad = window.onload;
    if (typeof window.onload !== 'function') {
        window.onload = func;
    }else {
        window.onload = function () {
            oldLoad();
            func();
        }
    }
}

addLoadEvent(addNewNode);