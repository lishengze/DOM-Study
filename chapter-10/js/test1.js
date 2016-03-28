function  setPos() {
    var pNode = document.getElementById('message');
    pNode.style.position = 'absolute';
    pNode.style.left = '100px';
    pNode.style.top  = '80px';
}

function movStep(params) {
    
}

function  moveMes() {
    var move = setInterval(function () {
        var pNode = document.getElementById('message');
        var leftPos = parseInt(pNode.style.left);
        var topPos = parseInt(pNode.style.top);
        
        if (leftPos > 200) {
            --leftPos;
        }else {
            ++leftPos;
        }
        
        if (topPos > 100) {
            --topPos;
        }else{
            ++topPos;
        }
        pNode.style.left = leftPos + 'px';
        pNode.style.top  = topPos + 'px';
        
        if (leftPos === 200 && topPos === 100) {
            clearInterval(move);    
        }
        
    }, 100);
}

loadEvent(setPos);