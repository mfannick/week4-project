/************************************FRONT END*************************************/

/**********************************menu index2.html***************************************/
$(document).ready(function(){
    
    // $('#form').hide();
    // $('#order').hide();
    // var submits=['submit1','submit2','submit3']
    // submits.forEach(function(){
    //    $('#' + submit).click(function(){
    //     $('#form').toggle();
    //   });
    // })
    $('#submit1').click(function(){
      $('#form').show();
    });
    $('#submit2').click(function(){
        $('#form').show();
      });
    $('#submit3').click(function(){
        $('#form').show();
      });
    
    $('#submit5').click(function(event){
        event.preventDefault(); 
        $('#order').show();
      });
    //   event.preventDefault(); 
    
})
