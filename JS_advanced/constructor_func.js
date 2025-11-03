// -------------constructor functions----------------------

function moldofBiscuit() {
  this.width = 12;
  this.height = 22;
  this.colour = "brown";
}

var bisc1 = new moldofBiscuit();
var bisc2 = new moldofBiscuit();

//------------------------------

function circularButton(color) {
  this.radius = 2;
  this.color = color;
  this.icon = false;
  this.pressable = true;
}

var redButton = new circularButton("red");
var greenButton = new circularButton("green");
