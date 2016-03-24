function  getNewContent() {
    var xmlrequest = getHttpObject();
    if (xmlrequest) {
        xmlrequest.open("GET", 'example.txt', true);
        xmlrequest.onreadystatechange = function () {
            if (xmlrequest.readyState === 4) {
                var pNode = document.createElement('p');
                var txtNode = document.createTextNode(xmlrequest.responseText);
                pNode.appendChild(txtNode);
                document.getElementById('new').appendChild(pNode);
                console.log(pNode);
            }
            alert('Data received!');
        };     
        xmlrequest.send(null);
    } else {
        alert('Your browser doesn\'t support XMLHttpRequest'); 
    }    
    alert('Function Done!');
}

addLoadEvent(getNewContent);