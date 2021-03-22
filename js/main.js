$('.menu-right .menu-marker > input[type=checkbox]').on("click",function(){
    if($(this).is(":checked")){
      $('.menu-right > ul').addClass(" menu-active");
    }
    else{
      $('.menu-right > ul').removeClass(" menu-active");
    }
  });
  
  AOS.init();


  document.addEventListener("mousemove", function(event) {
    const x = event.pageX - 10;
    const y = event.pageY - 10;
    const cursor = document.querySelector("#cursor");
    cursor.style.left = x + "px";
    cursor.style.top = y + "px";
  });
  
  $('div').on("mouseover", function(){
    $('#cursor').css({'transform': 'scale(2)'});
  });
  
  $('div').on("mouseleave", function(){
    $('#cursor').css({'transform': 'scale(1)'});
  });
  
  