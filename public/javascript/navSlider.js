window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("headerr").style.backgroundColor = "black";
  } else {
    document.getElementById("headerr").style.backgroundColor = "";
  }
}