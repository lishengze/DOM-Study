var showPic = function (object) {
    var img = document.getElementById("placeholder");
    var source = object.getAttribute("href");
    img.setAttribute("src", source);
    
    var description = document.getElementById("description");
    description.firstChild.nodeValue = object.getAttribute("title");
    
    console.log(description);
   
}

// var testGetElementByTagName = function (params) {
//     var bodyItem = document.getElementsByTagName("body");
//     var bodyItemArray = bodyItem[0];
//     console.log(bodyItem);
//     console.log(bodyItemArray);
    
//     var description = document.getElementById("description");
//     console.log(description);   
// }

// window.onload = testGetElementByTagName();