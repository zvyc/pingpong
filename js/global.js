/**
 * @file
 * Global utilities.
 *
 */
(function ($, Drupal) {

  'use strict';

  Drupal.behaviors.pingpong = {
    attach: function (context, settings) {
    }
  };

})(jQuery, Drupal);

window.onscroll = function() {scrollFunction()};


function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.querySelector(".masthead").classList.add("masthead-min");
    document.querySelector(".navbar-brand img").classList.add("logo-min");
  } else {
    document.querySelector(".masthead").classList.remove("masthead-min");
    document.querySelector(".navbar-brand img").classList.remove("logo-min");
  }
}
// function scrollFunction() {
//   if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
//     document.querySelector(".masthead").style.marginTop = "4.7rem";
//     document.querySelector(".navbar-brand img").style.width = "40%";
//   } else {
//     document.querySelector(".masthead").style.marginTop = "9rem";
//     document.querySelector(".navbar-brand img").style.width = "";
//   }
// }
