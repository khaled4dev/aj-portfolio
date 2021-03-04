$('.menu-right .menu-marker > input[type=checkbox]').on("click",function(){
    if($(this).is(":checked")){
      $('.menu-right > ul').addClass(" menu-active");
    }
    else{
      $('.menu-right > ul').removeClass(" menu-active");
    }
  });
  
  AOS.init();