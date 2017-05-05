// 为元素绑定 onmouseover 事件
//将图片img放置在div 容器中， 
// div.position 设置为 relative;
// img.position 设置为 absolute, 这样img 一直是在div的坐标系中移动。 

function setMouseover(params) {
    if (!document.getElementById) return false;
    if (!document.getElementsByTagName) return false;
    if (!document.getElementById('linklist')) return false;
    if (!document.getElementById('preview')) return false;
    
    var imgNode = document.getElementById('preview');
    imgNode.style.position = 'absolute';
    
    if (!imgNode.style.left) {
        imgNode.style.left = '0px';
    }
    
    if (!imgNode.style.top) {
        imgNode.style.top = '0px';
    }
    
    var ol = document.getElementById('linklist'); 
    var list = ol.getElementsByTagName('a');
    
    console.log(list);
    
    list[0].onmouseover = function () {
            moveElement('preview', 0, 0, 10);
    }
    
    list[1].onmouseover = function () {
            moveElement('preview', -130, 0, 10);
    }
    
    list[2].onmouseover = function () {
            moveElement('preview', -240, 0, 10);
    }                
}


loadEvent(setMouseover);