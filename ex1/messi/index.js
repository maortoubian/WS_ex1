var events = require('events');
var util = require('util');

util.inherits(Messi,events.EventEmitter);

function Messi(){
	this.trophies = 0;
	this.lastEventAmount = 0;
	this.lastEventAmountFlag = 0;
	events.EventEmitter.call(this);
}

httpStr = "";

Messi.prototype.win = function(new_trophies){
	this.trophies+=new_trophies;
	this.lastEventAmount = new_trophies;
	this.lastEventAmountFlag = 1;
	this.emit('awards');
}

Messi.prototype.lose = function(new_trophies){
	if((this.trophies-new_trophies)<=0){
		this.lastEventAmount = new_trophies;
		this.lastEventAmountFlag = 2;
		this.emit('awards');
	}
	else{
		this.trophies-=new_trophies;
		this.lastEventAmount = new_trophies;
		this.lastEventAmountFlag = 0;
		this.emit('awards');
	}
}

Messi.prototype.showTrophies = function(){
	var str = "Messi's Trophies:" + this.trophies;
	console.log(str);
	httpStr += str + "\n";
}

Messi.prototype.isBest = function(){
	if(this.trophies>=100){
		var str = "Messi now have more then 100 Trophies!";
		var str2 = "Messi IS THE BEST!!!";

		console.log(str +"\n"+ str2);
		httpStr += str +"\n"+ str2;
	}
}

Messi.prototype.showLoseOrWin = function(){	
	if(this.lastEventAmountFlag==0){
		var str = "Messi just lost: " + this.lastEventAmount + " trophies";

		console.log(str);
		httpStr += str + "\n";
	}
	if(this.lastEventAmountFlag==1){
		var str = "Messi just won: " + this.lastEventAmount + " trophies";
		
		console.log(str);
		httpStr += str + "\n";
	}	
	if(this.lastEventAmountFlag==2){
		var str = "You trying to take "+ this.lastEventAmount + " from messi!";
		var str2 = "Messi can't have 0 or less trophies!";

		console.log(str);
		console.log(str2);
		httpStr += str + "\n" + str2;
	}
}

Messi.prototype.printHtml = function(){	
	return httpStr;
}

module.exports = Messi;