// If the toolbar is open, offset the navbar by its height
if (document.querySelector("#toolbar-bar") && document.querySelector("body").classList.contains("toolbar-fixed")) {
  document.querySelector("#navbar-top").style.top = document.querySelector('#toolbar-bar').offsetHeight.toString() + "px";
}


// Shirnk the navbar when scrolling
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if ((document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) && (document.body.scrollHeight >= 790)) {
    document.querySelector(".navbar-brand img").classList.add("logo-min");
  } else {
    document.querySelector(".navbar-brand img").classList.remove("logo-min");
  }
}