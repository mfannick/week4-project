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

    // clicking on add to cart the form will come
    $('#submitCart1').click(function(){
      $('#form').show();
    });
    $('#submitCart2').click(function(){
        $('#form').show();
      });
    $('#submitCart3').click(function(){
        $('#form').show();
      });

    // clicking on the order button the order receipt displays
    
    $('#submitOrder').click(function(event){
        event.preventDefault(); 
        $('#order').show();
      });
    
    // clicking on the Check order amount  button the total amount displays
    $('#submitDeliver').hide();
    $('.total1').hide();
    $('#submitCheck').click(function(event){
        event.preventDefault(); 
        $('.total1').show();
        $('#submitDeliver').show();
      });
    
  // clicking on deliver to me the prompt and the alert pops up
  $('.total2').hide();
  $('.total3').hide();
  $('#submitDeliver').click(function(event){
    event.preventDefault();
    // 1st the prompt comes
    var location =prompt('Enter your location:')
    // 2nd the alert comes
    alert('your order will be delivered to ' + location)
    $('.total2').show();
    $('.total3').show();

  });

  // click on another order another form adds itsleft to the later form
  $('#submitAnother').click(function(event){
    event.preventDefault(); 
    $('#form1').append( 
'<div class="form-group">'+
        '<label>Pizza size</label>'+
          '<div class="form-check">'+
            '<input class="form-check-input" type="radio" name="gridRadios" id="small" value="option1" checked>'+
            '<label class="form-check-label" for="gridRadios1">Small</label>'+
          '</div>'+
          '<div class="form-check">'+
            '<input class="form-check-input" type="radio" name="gridRadios" id="medium" value="option2">'+
            '<label class="form-check-label" for="gridRadios2">Medium</label>'+
          '</div>'+
          '<div class="form-check">'+
                '<input class="form-check-input" type="radio" name="gridRadios" id="large" value="option2">'+
                '<label class="form-check-label" for="gridRadios2">Large</label>'+
              '</div>'+

'</div>'+
'<div class="form-group">'+
        '<label>Pizza crust</label>'+
        '<select id="crust" class="form-control inputForm">'+
          '<option selected>Choose pizza crust ...</option>'+
          '<option>thin </option>'+
          '<option>thick </option>'+
          '<option>staffed </option>'+
        '</select>'+
'</div>'+
'<div class="form-group">'+
        '<label>Pizza toppings</label>'+
       ' <select id="topping" class="form-control inputForm">'+
          '<option selected>Choose pizza topping ...</option>'+
          '<option>Bacon, onion, potato & spinach</option>'+
          '<option>Beef mince, red onion, mozzarella & BBQ sauce</option>'+
          '<option>Ham, pineapple & cheese</option>'+
        '</select>'+
'</div>'
    )
  });

    
})
