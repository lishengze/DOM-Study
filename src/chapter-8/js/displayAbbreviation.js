function displayAbbr() {
    if (!document.getElementsByTagName) return false;
    if (!document.createElement) return false;
    if (!document.getElementsByTagName('abbr')) return false;
    
    var abbrNodes = document.getElementsByTagName('abbr');
    var dlNode = document.createElement('dl');
    for (var i = 0; i < abbrNodes.length; ++i) {
        var dtNode = document.createElement('dt');
        var dtTextNode = document.createTextNode(abbrNodes[i].firstChild.nodeValue);
        dtNode.appendChild(dtTextNode);
        
        var ddNode = document.createElement('dd');
        var ddTextNode = document.createTextNode(abbrNodes[i].getAttribute('title'));
        ddNode.appendChild(ddTextNode);
        
        dlNode.appendChild(dtNode);
        dlNode.appendChild(ddNode);
    }
    
    var h2Node = document.createElement('h2');
    var h2TxtNode = document.createTextNode('Abbreviations');
    h2Node.appendChild(h2TxtNode);
        
    var bodyNode = document.getElementsByTagName('body')[0];
    // bodyNode.insertBefore(dlNode, bodyNode.firstChild);
    // bodyNode.insertBefore(h2Node, bodyNode.firstChild);
        
    bodyNode.appendChild(h2Node);
    bodyNode.appendChild(dlNode);
}

loadEvent(displayAbbr);