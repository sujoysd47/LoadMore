$(document).ready(function(){
  $(".content").slice(0,3).show()
  $(".sujoy").on("click", function(){
      $(".content:hidden").slice(0,3).slideDown()
      if($(".content:hidden").length==0){
          $(".sujoy").fadeIn('slow')
      }
  })
})