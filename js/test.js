$(document).ready(() => {
    $('.hamBar').click(function(){
      $('.nav-right .nav').toggleClass('show');  
    })
    $('.nav-right .nav li a').click(function(){
      $('.nav-right .nav').removeClass('show');
      //以下是滾動動畫
      var sectionTitle = this.title;
      console.log(sectionTitle);
      var sectionId = "#section--" + sectionTitle;
      console.log(sectionId);
      var scrollPoint = $(sectionId).offset().top;
      var lastScrollPoint = scrollPoint - 100;
      $("html,body").animate({ scrollTop: lastScrollPoint }, 800);
    })
  });