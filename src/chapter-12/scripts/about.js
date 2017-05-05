function showSection(id) {
    if (!document.getElementById) return false;
    if (!document.getElementsByTagName) return false;
    
    var sections = document.getElementsByTagName('section');
    for(var i = 0; i < sections.length; ++i) {
        if (sections[i].getAttribute('id') === id) {
            sections[i].style.display = 'block';
        } else {
            sections[i].style.display = 'none';
        }
    }
    return true;
}

function prepareIntervalnav() {
    if (!document.getElementsByTagName) return false;
    if (!document.getElementsByTagName('article')) return false;    
    var articleNode = document.getElementsByTagName('article')[0];
    if (!articleNode.getElementsByTagName('nav')) return false;
    var ulNode = articleNode.getElementsByTagName('nav')[0];
    if (!ulNode.getElementsByTagName('a')) return false;
    var links = ulNode.getElementsByTagName('a');
    
    for(var i=0; i<links.length; ++i) {
        var id = links[i].getAttribute('href').slice(1);
        document.getElementById(id).style.display = 'none';
        links[i].destination = id;
        
        // links[i].onclick = (function (ID) {
        //     return function () {
        //         console.log("ID: " + ID);
        //         return !showSection(ID);    
        //     }
        // })(id);    
        
        links[i].onclick = function () {
            showSection(this.destination);
            return false;
        }        
    }
}

addloadEvent(prepareIntervalnav);