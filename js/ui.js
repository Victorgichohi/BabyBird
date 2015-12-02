// sliding the div in left
$(document).ready(function() {
    var count=0;
      $("#div2").click(function(){

       if(count==0)
                 {
         $(".target").hide( "slide",
                     { direction: "left"  }, 800 );
          $("#div2").animate({
                       left: "-=100"
                                        },"slow")


         count=1;

                  }
      else
                 {
         $(".target").show( "slide",
                     { direction: "left"  }, 800 );
          $("#div2").animate({
                       left: "+=100"
                                        },"slow")
      count=0;
                  }

});
   });
// sliding left
