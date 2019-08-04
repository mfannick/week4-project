
/************************************BACK END*************************************/
function Order(name, pizzaCrust, pizzaSize, pizzaTopping, pizzaCrustPrice, pizzaSizePrice, pizzaToppingPrice) {
  this.name = name;
  this.pizzaCrust = pizzaCrust;
  this.pizzaSize = pizzaSize;
  this.pizzaTopping = pizzaTopping;
  this.pizzaCrustVal = pizzaCrustPrice;
  this.pizzaSizeVal = pizzaSizePrice;
  this.pizzaToppingVal = pizzaToppingPrice;
}
var delivery = 2000;

Order.prototype.totale = function () {

  return this.pizzaCrustVal + this.pizzaSizeVal + this.pizzaToppingVal;
}
Order.prototype.totaleFinal = function () {
  return this.totale() + delivery;
}


/************************************FRONT END*************************************/

/**********************************menu index2.html***************************************/
$(document).ready(function () {
  // click on another order another form adds itsleft to the later form
  // $('#submitAnother').click(function (event) {
  //   event.preventDefault();
  //   $('#form1').append(
  //     '<div class="form-group">' +
  //     '<label>Pizza size</label>' +
  //     '<div class="form-check">' +
  //     '<input class="form-check-input" type="radio" name="gridRadios" id="small" value="option1" checked>' +
  //     '<label class="form-check-label" for="gridRadios1">Small</label>' +
  //     '</div>' +
  //     '<div class="form-check">' +
  //     '<input class="form-check-input" type="radio" name="gridRadios" id="medium" value="option2">' +
  //     '<label class="form-check-label" for="gridRadios2">Medium</label>' +
  //     '</div>' +
  //     '<div class="form-check">' +
  //     '<input class="form-check-input" type="radio" name="gridRadios" id="large" value="option2">' +
  //     '<label class="form-check-label" for="gridRadios2">Large</label>' +
  //     '</div>' +

  //     '</div>' +
  //     '<div class="form-group">' +
  //     '<label>Pizza crust</label>' +
  //     '<select id="crust" class="form-control inputForm">' +
  //     '<option selected>Choose pizza crust ...</option>' +
  //     '<option value="1">thin </option>' +
  //     '<option value="2">thick </option>' +
  //     '<option value="3">staffed </option>' +
  //     '</select>' +
  //     '</div>' +
  //     '<div class="form-group">' +
  //     '<label>Pizza toppings</label>' +
  //     ' <select id="topping" class="form-control inputForm">' +
  //     '<option selected>Choose pizza topping ...</option>' +
  //     '<option value="1">Bacon, onion, potato & spinach</option>' +
  //     '<option value="2">Beef mince, red onion, mozzarella & BBQ sauce</option>' +
  //     '<option value="3">Ham, pineapple & cheese</option>' +
  //     '</select>' +
  //     '</div>'
  //   )
  // });
  /***************************************************************************************/

  // clicking on order button the form will come
  $('#submitCart3').click(function (event) {
    event.preventDefault();
    $('#form').show();

    /***************************************************************************************/

    // clicking on the ordersummary button the order receipt displays

    $('#submitOrder').last().click(function (event) {
      event.preventDefault();
      $('#order').show();
      //  fetching info text from the user
      //     name
      var inputName = $('#name').val()
      // crust
      var inputCrust = $('#crust option:selected').text();

      // pizza size
      var inputSize = $("input[type=radio]:checked+label").text();
      // topping
      var inputTopping = $('#topping option:selected').text();

      // fetching info values
      // crustvalue
      var inputCrustPrice = parseInt($('#crust option:selected').val());
      // pizza sizevalue
      var inputSizePrice = parseInt($("input[type=radio]:checked").val());
      // toppingvalue
      var inputToppingPrice = parseInt($('#topping option:selected').val());


      var newOrder = new Order(inputName, inputCrust, inputSize, inputTopping, inputCrustPrice, inputSizePrice, inputToppingPrice, delivery);
      console.log(inputSizePrice + '/' + inputCrustPrice + '/' + inputToppingPrice);
      console.log(newOrder.totale());

      $('.name').text(newOrder.name);
      $('.sizeName').text(newOrder.pizzaSize);
      $('.toppingName').text(newOrder.pizzaTopping);
      $('.crustName').text(newOrder.pizzaCrust);
      $('.sizePrice').text(newOrder.pizzaSizeVal);
      $('.toppingPrice').text(newOrder.pizzaToppingVal);
      $('.crustPrice').text(newOrder.pizzaCrustVal);
      $('.totalCost').text(newOrder.totale());
      $('.totalCostD').text('2000');
      $('.totalCostT').text(newOrder.totaleFinal());




      /***************************************************************************************/


      // clicking on the Check order amount  button the total amount displays
      $('#submitDeliver').hide();
      $('.total1').hide();
      $('.total2').hide();
      $('.total3').hide();
      $('#submitCheck').click(function (event) {
        event.preventDefault();
        $('.total1').show();
        $('#submitDeliver').show();

        /***************************************************************************************/
        // clicking on deliver to me the prompt and the alert pops up

        $('#submitDeliver').click(function (event) {
          event.preventDefault();
          // 1st the prompt comes
          var location = prompt('Enter your location:')
          // 2nd the alert comes
          alert('your order will be delivered to ' + location)
          $('.total2').show();
          $('.total3').show();

        });
      });
    });



  });

});
