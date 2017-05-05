function addloadEvent(func) {
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

// 为不同的页面配置id 与 导航栏高亮属性；
// 1. 通过window.location.url 确定当前页面的ID;
// 2. 为当前页面body标签添加id属性，并为需要高亮的部分添加calss='here', 通过匹配对应的样式达到高亮的效果。
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
            // console.log(localHerf);
            // console.log(window.location.href);
            if (window.location.href.indexOf(localHerf)!==-1) {
                // console.log('succeed');
                linkList[i].className = 'here';
                var linkText = linkList[i].lastChild.nodeValue.toLowerCase();
                // console.log(linkText);
                document.body.setAttribute('id', linkText);
            }
        }
    }
}

/*
目标：为intro页面配置幻灯片效果。
方法：当指针悬停在不同的超链接上时显示缩略图的不同部分， 通过移动缩略图来完成;
*/ 
function  moveElement(elementId, desLeftPos, desTopPos, moveSpeed) {
    if (!document.getElementById) return false;
    if (!document.getElementById(elementId)) return false;
    
    var elementNode = document.getElementById(elementId);
    if (!elementNode) return false;
    
    if (elementNode.movement) {
        clearTimeout(elementNode.movement);
    }
    var leftPos = parseInt(elementNode.style.left);
    var topPos = parseInt(elementNode.style.top);
    var dist;
    // console.log ('left: ' + elementNode.style.left + ' top: ' + elementNode.style.top );
    // console.log('leftPos: ' + leftPos + ' topPos: ' + topPos 
    //           + ' desLeftPos: ' + desLeftPos + ' desTopPos: ' + desTopPos);
    
    if (leftPos === desLeftPos && topPos === desTopPos) {
          return true;  
    } 
    
    if (leftPos < desLeftPos) {
        dist = Math.ceil((desLeftPos - leftPos)/10);
        leftPos += dist;
    }
    if (leftPos > desLeftPos) {
        dist = Math.ceil((leftPos - desLeftPos)/10);
        leftPos -= dist;
    }    

    if (topPos < desTopPos) {
        dist = Math.ceil((desTopPos - topPos)/10);
        topPos += dist;
    } 
    if (topPos > desTopPos) {
        dist = Math.ceil((topPos - desLeftPos)/10);
        topPos -= dist;
    }
    
    elementNode.style.left = leftPos + 'px';
    elementNode.style.top  = topPos  + 'px'; 
    var repeat = "moveElement('"+elementId+"',"+ desLeftPos +", "+ desTopPos +", " + moveSpeed +")";   
    elementNode.movement = setTimeout(repeat, moveSpeed);
}

function addImg() {

    if (!document.getElementById) return false;
    if (!document.getElementsByTagName) return false;
    if (!document.createElement) return false;
    if (!document.getElementById('index')) {return false; }   
    var indexBody = document.getElementById('index');
    if (!indexBody.getElementsByTagName('article')) return false;
    
    var articleNode = indexBody.getElementsByTagName('article')[0];
    
    var slideShowNode = document.createElement('div');
    slideShowNode.setAttribute('id', 'slideshow');

    // var frame = document.createElement('img');
    // frame.setAttribute('src', 'images/spring-1-s-s.jpg');
    // frame.setAttribute('alt', '');
    // frame.setAttribute('id',  'frame');
    // slideShowNode.appendChild(frame);
    
    var imgNode = document.createElement('img');
    imgNode.style.position = 'absolute';    
    imgNode.style.left = '0px';
    imgNode.style.top  = '0px';
    imgNode.setAttribute('src', 'images/classical-painting-spring.jpg');
    imgNode.setAttribute('alt', 'Vincent\'s classical oil painting about spring.');
    imgNode.setAttribute('id',  'image-spring');
    
    slideShowNode.appendChild(imgNode);        
    articleNode.appendChild(slideShowNode);   
     
    setMouseover();
}

function setMouseover() {
    var indexBody = document.getElementById('index');
    var articleNode = indexBody.getElementsByTagName('article')[0];
    var links = articleNode.getElementsByTagName('a');
        
    for (var i = 0; i<links.length; ++i) {
        links[i].onmouseover = (function (index) {
            return function() {
                moveElement('image-spring', 0 - index*201, 0, 2);             
            }
        })(i);               
    }
    console.log(links);
}

addloadEvent(heightPage);
addloadEvent(addImg);
