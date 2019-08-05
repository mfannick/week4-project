
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
function resetField() {
  $('#name').val(' ')
  $('#crust option:selected').text('');
  $("input[type=radio]:checked+label").text('');
  $('#topping option:selected').text('');
  $('#crust option:selected').val('');
  $("input[type=radio]:checked").val('');
  $('#topping option:selected').val('');
}


/************************************FRONT END*************************************/

/**********************************menu index2.html***************************************/
$(document).ready(function () {
  
  /***************************************************************************************/

  // clicking on order button the form will come
  $('#submitCart3').click(function (event) {
    event.preventDefault();
    $('#form').show();
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
      resetField() ;




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
