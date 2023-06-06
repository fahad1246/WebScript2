//Fahad Mohammed
// 03/10/21
// part c


var unblurImage = function(eventObj){//this creates a function to unblur the image 
  var imageTag = eventObj.target;//declares the variable and retuns the element 
  var newFileName = "probc1-images/" + imageTag.id + ".jpg";//displays the unblured picture
  imageTag.src = newFileName;
}

var blurImage = function(eventObj){//this creates a function to blur the image
  var imageTag = eventObj.target;//declares the variable and retuns the element 
  var newFileName = "probc1-images/" + imageTag.id + "blur.jpg";//displays the blured picture
  imageTag.src = newFileName;
}

function unblurAll(){//this creates a function to unblur all the image
  var images = document.getElementsByTagName("IMG");//declares the variable recalls the function 
  for(let imageTag of images){//its a global function
    var newFileName = "probc1-images/" + imageTag.id + ".jpg";//displays all the unblured picture
    imageTag.src = newFileName;
    imageTag.style.borderColor = "red";//sets the border color to red
  }
}

function init(){//this function loads the images, blurs and unblurs the img based on the mouse postion of enter or leave 
  var para =document.getElementById("images");
  for(let i = 1; i<= 4; i++){
    let imageCell = document.createElement("img");
    imageCell.setAttribute("id", i);
    para.appendChild(imageCell);
    let imgName = "probc1-images/" + i + "blur.jpg";
    imageCell.src = imgName;
    imageCell.addEventListener("mouseover", unblurImage);
    imageCell.addEventListener("mouseleave", blurImage);
  }

  
  var button = document.getElementById("btn1");//assign the button variable
  button.addEventListener("click",unblurAll);//this is the function for the button
}
window.addEventListener("load",init);// loads windows