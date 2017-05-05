function displayCitation() {
    if (!document.getElementsByTagName) return false;
    if (!document.createElement) return false;
    if (!document.getElementsByTagName('blockquote')) return false;
    
    var blockquoteNodes = document.getElementsByTagName('blockquote');
    var dlNode = document.createElement('dl');
    for (var i = 0; i < blockquoteNodes.length; ++i) {
        if (!blockquoteNodes[i].getAttribute('cite')) continue;
        
        var source = blockquoteNodes[i].getAttribute('cite');
        var aNode = document.createElement('a');
        var aTxtNode = document.createTextNode('source');
        aNode.setAttribute('href', source);
        aNode.appendChild(aTxtNode);
        
        var curr_blockquote = blockquoteNodes[i].getElementsByTagName('*');
        if (curr_blockquote.length < 1) continue;
        
        var supNode = document.createElement('sup');
        supNode.appendChild(aNode);
        
        curr_blockquote[curr_blockquote.length-1].appendChild(supNode);
    }
}

loadEvent(displayCitation);