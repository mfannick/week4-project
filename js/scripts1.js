

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

  return this.pizzaCrustVal + this.pizzaSizeVal+ this.pizzaToppingVal;
}
Order.prototype.totaleFinal=function(){
  return this.totale()+delivery;
}


