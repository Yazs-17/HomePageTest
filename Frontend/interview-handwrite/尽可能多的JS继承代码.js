function Coder () {
	this.type = 'Coder'
}
Coder.prototype.rap = function () {
	console.log("yo yo yo")
}

function Yazs (name) {
	this.name = name;
	this.age = 10086;
}
// ---------------Main---------------- //
// Yazs.prototype = new Coder();
// Yazs.prototype.constructer = Yazs;

// OR

// function Yazs2 (name) {
// 	Coder.call(this);
// 	this.name = name;
// 	this.age = 10086;
// }

// OR



// ---Test-- //
const yazs = new Yazs();
console.log(yazs.__proto__)