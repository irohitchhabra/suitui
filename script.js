var menuarea = document.getElementById('navUl');

function navBar() {
  menuarea.classList.toggle("navUlActive");
  document.getElementById('navback').classList.toggle("navUlActive");
}

// When the user clicks anywhere outside of the modal, close it
document.getElementById('navback').onclick = function (event) {
  if (event.target == document.getElementById('navback')) {
    menuarea.classList.toggle("navUlActive")
    document.getElementById('navback').classList.toggle("navUlActive");
  }
}

function copyFunction() {
  /* Get the text field */
  var copyText = document.getElementById("icss");

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /*For mobile devices*/

  /* Copy the text inside the text field */
  document.execCommand("copy");

  /* Alert the copied text */
  console.log("Copied the text: " + copyText.value);
}

function copyFunction2() {
  /* Get the text field */
  var copyText = document.getElementById("iscript");

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /*For mobile devices*/

  /* Copy the text inside the text field */
  document.execCommand("copy");

  /* Alert the copied text */
  console.log("Copied the text: " + copyText.value);
}

function copyFunction3() {
  /* Get the text field */
  var copyText = document.getElementById("istarter");

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /*For mobile devices*/

  /* Copy the text inside the text field */
  document.execCommand("copy");

  /* Alert the copied text */
  console.log("Copied the text: " + copyText.value);
}



// side nav bar script 

var intro = document.getElementById("intro");
var underintro = document.getElementById("underintro");
var documentation = document.getElementById("documentation");
var layout = document.getElementById("layout");
var underlayout = document.getElementById("underlayout");
var content = document.getElementById("content");
var undercontent = document.getElementById("undercontent");
var project = document.getElementById("project");
var underproject = document.getElementById("underproject");

documentation.onclick = function () {
  underdocumentation.classList.toggle('sidebartoogle');
  underdocumentation.classList.toggle('h-0');
  underintro.classList.remove('sidebartoogle');
  underintro.classList.add('h-0');
  underlayout.classList.remove('sidebartoogle');
  underlayout.classList.add('h-0');
  undercontent.classList.remove('sidebartoogle');
  undercontent.classList.add('h-0');
  undercontent.classList.remove('sidebartoogle');
  undercontent.classList.add('h-0');
  underproject.classList.remove('sidebartoogle');
  underproject.classList.add('h-0');

}

intro.onclick = function () {
  underintro.classList.toggle('sidebartoogle');
  underintro.classList.toggle('h-0');
  underdocumentation.classList.remove('sidebartoogle');
  underdocumentation.classList.add('h-0');
  underlayout.classList.remove('sidebartoogle');
  underlayout.classList.add('h-0');
  undercontent.classList.remove('sidebartoogle');
  undercontent.classList.add('h-0');
  undercontent.classList.remove('sidebartoogle');
  undercontent.classList.add('h-0');
  underproject.classList.remove('sidebartoogle');
  underproject.classList.add('h-0');
}
layout.onclick = function () {
  underlayout.classList.toggle('sidebartoogle');
  underlayout.classList.toggle('h-0');
  underdocumentation.classList.remove('sidebartoogle');
  underdocumentation.classList.add('h-0');
  underintro.classList.remove('sidebartoogle');
  underintro.classList.add('h-0');
  undercontent.classList.remove('sidebartoogle');
  undercontent.classList.add('h-0');
  undercontent.classList.remove('sidebartoogle');
  undercontent.classList.add('h-0');
  underproject.classList.remove('sidebartoogle');
  underproject.classList.add('h-0');
}
content.onclick = function () {
  undercontent.classList.toggle('sidebartoogle');
  undercontent.classList.toggle('h-0');
  underdocumentation.classList.remove('sidebartoogle');
  underdocumentation.classList.add('h-0');
  underintro.classList.remove('sidebartoogle');
  underintro.classList.add('h-0');
  underlayout.classList.remove('sidebartoogle');
  underlayout.classList.add('h-0');
  underproject.classList.remove('sidebartoogle');
  underproject.classList.add('h-0');
}
project.onclick = function () {
  underproject.classList.toggle('sidebartoogle');
  underproject.classList.toggle('h-0');
  underdocumentation.classList.remove('sidebartoogle');
  underdocumentation.classList.add('h-0');
  underintro.classList.remove('sidebartoogle');
  underintro.classList.add('h-0');
  underlayout.classList.remove('sidebartoogle');
  underlayout.classList.add('h-0');
  undercontent.classList.remove('sidebartoogle');
  undercontent.classList.add('h-0');
}
