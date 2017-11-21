/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
function switchInst(data) {
    var inst = "";
    
    if (data == "G6"){
        inst = "Guitair (6 Strings)";
    } if (data == "B5"){
        inst = "Bass (5 Strings)";
    } if (data == "U"){
        inst = "Ukelalylyie";
    } else {
        inst = "Guitair (6 Strings)";
    }
document.getElementsByClassName("dropbtn").value= inst;
   
}