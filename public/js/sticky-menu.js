var  mn = $(".menu");
    mnm = $(".menu-media");
    mns = "menu-scrolled";
    hdr = $('home').height();

$(window).scroll(function() {
  if( $(this).scrollTop() > hdr ) {
    mn.addClass(mns);
    mnm.addClass(mns);
  } else {
    mn.removeClass(mns);
    mnm.removeClass(mns);
  }
});
