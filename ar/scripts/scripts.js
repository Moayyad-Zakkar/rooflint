var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {
    slideIndex = 1;
  }
  x[slideIndex - 1].style.display = "block";
  setTimeout(carousel, 5000); // Change image every 5 seconds
}

// side nav

// sidenav drop down
//* Loop through all dropdown buttons to toggle between hiding and showing its dropdown content - This allows the user to have multiple dropdowns without any conflict */
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}

function toggleNav(x) {
  function openNav(x) {
    document.getElementById("mySidenav").style.width = "100%";
    x.classList.toggle("change");
  }

  function closeNav(x) {
    document.getElementById("mySidenav").style.width = "0";
    x.classList.toggle("change");
  }
  if (document.getElementById("mySidenav").style.width === "100%") {
    closeNav(x);
  } else {
    openNav(x);
  }
}
