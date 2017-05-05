function setHeader() {
    var header = document.getElementsByTagName('h1');
    for (var i = 0; i<header.length; ++i) {
        console.log(header[i]);
        header[i].style.color = 'blue';
    }
}

function testStyle() {
    alert(typeof document.getElementsByTagName('p')[0].getAttribute('style'));
    alert(typeof document.getElementById('example').style);
    alert(typeof document.getElementById('example').id);    
}

// 给表格的奇偶行设置不同的颜色;
function setTableStyle(params) {
    if (!document.getElementsByTagName) return false;
    if (!document.getElementsByTagName('table')) return false;
    
    var tableNode = document.getElementsByTagName('table');
    for (var j = 0; j < tableNode.length; ++j) {
        var trNode = tableNode[j].getElementsByTagName('tr');
        var odd = false; 
        for (var i = 0; i < trNode.length; ++i) {
            if (odd === true) {
                trNode[i].style.background = '#ffc';
                odd = false;
            } else {
                odd = true;
                trNode[i].style.background = "#fff";
            }
        }       
    }

}

function highlightRows() {
    if (!document.getElementsByTagName) return false;
    if (!document.getElementsByTagName('tr')) return false;    
    
    // console.log('highlightRows');
    
    var trNode = document.getElementsByTagName('tr');
    // console.log(trNode);
    for (var i = 0; i < trNode.length; ++i) {
        trNode[i].onmouseover = function () {
            console.log('onmouseover');
            this.style.fontWeight = 'bold';
        }
        
        trNode[i].onmouseout = function () {
             console.log('onmouseout');
            this.style.fontWeight = 'normal';
        }
    }
}

loadEvent(setHeader);
loadEvent(setTableStyle);
loadEvent(highlightRows);