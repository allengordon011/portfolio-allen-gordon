var  mn = $(".menu");
    mns = "menu-scrolled";
    hdr = $('home').height();

$(window).scroll(function() {
  if( $(this).scrollTop() > hdr ) {
    mn.addClass(mns);
  } else {
    mn.removeClass(mns);
  }
});
