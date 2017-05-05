function  setPos() {
    var pNode = document.getElementById('message');
    pNode.style.position = 'absolute';
    pNode.style.left = '100px';
    pNode.style.top  = '50px';
}

function  moveMessage() {
    moveElement('message', 200, 200, 10);
    
    // var move = setInterval(function () {
    //     var pNode = document.getElementById('message');
    //     var leftPos = parseInt(pNode.style.left);
    //     var topPos = parseInt(pNode.style.top);
        
    //     if (leftPos === 200 && topPos === 100) {
    //         clearInterval(move);    
    //     }
                
    //     if (leftPos > 400) {
    //         --leftPos;
    //     }else if (leftPos < 400){
    //         ++leftPos;
    //     }
        
    //     if (topPos > 200) {
    //         --topPos;
    //     }else if (topPos < 200){
    //         ++topPos;
    //     }
    //     pNode.style.left = leftPos + 'px';
    //     pNode.style.top  = topPos + 'px';
                
    // }, 50);
}

loadEvent(setPos);
loadEvent(moveMessage);