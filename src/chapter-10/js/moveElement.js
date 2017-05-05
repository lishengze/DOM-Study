function  moveElement(elementId, desLeftPos, desTopPos, moveSpeed) {
    if (!document.getElementById) return false;
    if (!document.getElementById(elementId)) return false;
    
    var elementNode = document.getElementById(elementId);
    if (elementNode.movement) {
        clearTimeout(elementNode.movement);
    }
    var leftPos = parseInt(elementNode.style.left);
    var topPos = parseInt(elementNode.style.top);
    var dist;
    
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
