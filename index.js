

//nav bar
/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function changeNav() {
  var x = document.getElementById("navbar");
  var y = document.getElementById("subnav");
  if (x.className === "topnav") {
    x.className += " responsive";
    
  } else {
    x.className = "topnav";
  }
  y.classList.toggle("transform-active");

}

function transform() {
   var element = document.getElementById("t");
   element.classList.toggle("transform-active");
}

//for parallax scrolling
var rellax = new Rellax('.rellax');

//parallax scrolling doesn't work well on some browsers. To disable:
