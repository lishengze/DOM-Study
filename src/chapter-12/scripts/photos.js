function showPic(node) {
    if (!document.getElementById) return false;
    if (!document.getElementsByTagName) return false;
    var ulNode = document.getElementById('imagegallery');
    var articleNode = document.getElementsByTagName('article')[0];
    
    var imgSrc  = node.getAttribute('href');
    var imgText = node.getAttribute('title');
    
    console.log('imgSrc: ' + imgSrc);
    console.log(articleNode.style.height + ' ' + articleNode.style.width);
    
    if (!document.getElementById('image')) {
        var divNode = document.createElement('div');
        
        var imageNode = document.createElement('img');
        imageNode.setAttribute('id', 'image');
        imageNode.setAttribute('src', imgSrc);
        imageNode.setAttribute('alt', imgText);
        
        var descriptionNode = document.createElement('p');
        descriptionNode.setAttribute('id', 'description');
        var textNode = document.createTextNode(imgText);
        descriptionNode.appendChild(textNode);
        
        
        console.log(imageNode.style.height + ' ' + imageNode.style.width);
        
        // divNode.appendChild(descriptionNode);
        // divNode.appendChild(imageNode);
        // ulNode.appendChild(divNode);
        
        insertAfter(descriptionNode, ulNode);
        insertAfter(imageNode, descriptionNode);
        
        return true;
    } else {
        var imageNode = document.getElementById('image');
        imageNode.setAttribute('src', imgSrc);
        imageNode.setAttribute('alt', imgText);
        
        var descriptionNode = document.getElementById('description');
        descriptionNode.lastChild.nodeValue = imgText;
        
        return true;
    }
}

function prepareImagegallery() {
    if (!document.getElementById) return false;
    if (!document.getElementsByTagName) return false;
    if (!document.getElementById('imagegallery')) return false;
    var ulNode = document.getElementById('imagegallery');
    if (!ulNode.getElementsByTagName('a')) return false;
    var links = ulNode.getElementsByTagName('a');
    
    console.log(links);    
        
    for(var i = 0; i<links.length; ++i) {
        links[i].onclick = function () {            
            return !showPic(this);           
        }
    }    
}

addloadEvent(prepareImagegallery);