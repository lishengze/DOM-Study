function insertAfter(newNode, oldNode) {
    var parentNode = oldNode.parent;
    if (oldNode === parentNode.lastChild) {
        parentNode.insertBefore(newNode, oldNode);
    } else {
        parentNode.insertBefore(newNode, oldNode.nextSibling);
    }
}