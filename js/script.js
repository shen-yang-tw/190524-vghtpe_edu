//--Toggle Input Type (Password Visibility) with onclick="togglePassword('>input')"
function togglePassword(sl) {
  var el = document.querySelector(sl);
  if (el.type === "password") {
    el.type = "text";
  } else {
    el.type = "password";
  }
}

//toggle all class by array - onclick="toggleAllClass(findChildren(findParent(this, 'LI'), '.detail'), 'hidden'); return false;"
//return false - avoid the page jumping straight to the top"
function toggleAllClass(allChildren, cls) {
  for (var i = 0; i < allChildren.length; i++) {
    allChildren[i].classList.toggle(cls);
  }
}

function findParent(thisElement, parentTagName) {
  while ((thisElement = thisElement.parentElement) && (thisElement.tagName != parentTagName));
  //Searching loop only stop while parent is founded
  return thisElement; //if searching no one will return null
}

function findChildren(parentEL, sl) {
  return parentEL.querySelectorAll(sl);
}


$(document).ready(function() {

});

$(window).on("resize load", function() {

});