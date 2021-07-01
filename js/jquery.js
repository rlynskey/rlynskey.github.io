var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("subnav").style.top = "30px";
  } else {
    document.getElementById("subnav").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
};



$(document).ready(function(){
  $(".subicon").click(function(){
    $(".links").toggleClass("responsive");
  });

});


$(document).ready(function(){
  $(".icon").click(function(){
    $(".links").toggleClass("responsive");
  });

});
