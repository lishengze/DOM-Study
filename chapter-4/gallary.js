var showPic = function (object) {
    var img = document.getElementById("placeholder");
    var source = object.getAttribute("href");
    img.setAttribute("src", source);
    
    // var body = document.getElementsByTagName("body");
    // for (var i = 0; i < body[0].length; ++i) {
    //     if (body[0][i].getAttribute("id") === "description") {
    //         bod
    //     }
    //  }
}

var testGetElementByTagName = function (params) {
    var bodyItem = document.getElementsByTagName("ol");
    var bodyItemArray = bodyItem[0];
    console.log(bodyItem);
    console.log(bodyItemArray);
    
    var desItem = document.getElementById("description");
    console.log(desItem);
    console.log(desItem[0]);   
}

testGetElementByTagName();