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

  //Remove parent if child empty
  $("p:empty, h1:empty, h2:empty, h3:empty, h4:empty, h5:empty, h6:empty").parent(":empty").remove();
  //Remove if empty
  $("p:empty, h1:empty, h2:empty, h3:empty, h4:empty, h5:empty, h6:empty, .ifEmpty:empty").remove();

  //Dropdown button addClass.btn_secondary
  $(".uk-nav-dropdown li").parent().parent().siblings().removeClass("btn_secondary");
  $(".uk-nav-dropdown li.uk-active").parent().parent().siblings().addClass("btn_secondary");

});

$(window).on("resize load", function() {

  //keep aspect ratio of image's height to width
  $(".ratio3_4 li img, .thisRatio3_4").each(function() {
    $(this).css({
      height: $(this).width() * 4 / 3
      //portrait
    });
  });
  $(".ratio9_16 li img, .thisRatio9_16").each(function() {
    $(this).css({
      height: $(this).width() * 16 / 9
      //portrait
    });
  });
  $(".ratio4_3 li img, .thisRatio4_3").each(function() {
    $(this).css({
      height: $(this).width() * 3 / 4
      //landscape
    });
  });
  $(".ratio16_9 li img, .thisRatio16_9").each(function() {
    $(this).css({
      height: $(this).width() * 9 / 16
      //landscape
    });
  });
  $(".ratio1_1 li img, .thisRatio1_1").each(function() {
    $(this).css({
      height: $(this).width()
    });
  });
});