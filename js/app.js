var startingCredits = 100;
var startingBet = 0;
var totalCredits = document.getElementById("totalCredits");
var betSize = document.getElementById("activeBet");
var lever =document.getElementById("handle");
var middleRow = document.querySelectorAll('.horz2');
var topRow = document.querySelectorAll('.horz1');
var bottomRow = document.querySelectorAll('.horz3');
var slotImages = [
	{
		name: "kylo",
		source: "images/kylo.png"

	},
	{
		name: "leia",
		source: "images/leia.png"
	},
	{
		name: "x-wing",
		source: "images/x-wing.gif"
	},
	{
		name: "chewy",
		source: "images/chewy.png"
	},
	{
		name: "solo",
		source: "images/solo.gif-c200"
	},
	{
		name: "droid",
		source: "images/droid.gif"
	},
	{
		name: "rebel",
		source: "images/rebel.png"
	},
	{
		name: "empire",
		source: "images/empire.png"
	},
	{
		name: "rey",
		source: "images/rey.png"
	},
	{
		name: "vader",
		source:"images/vader.gif"
	}
];

function drySpin(num) {
	var randomFirst = Math.floor(Math.random()*10);
	var randomSecond = Math.floor(Math.random()*10);
	var randomThird = Math.floor(Math.random()*10);
	middleRow[num].appendChild(document.createElement("img")).src = slotImages[randomFirst].source;
	middleRow[num].childNodes.className = slotImages[randomFirst].name;
	if (randomFirst > 0) {
		topRow[num].appendChild(document.createElement("img")).src = slotImages[randomSecond].source;
		topRow[num].childNodes.className = slotImages[randomSecond].name;
	} else {
		topRow[num].appendChild(document.createElement("img")).src = slotImages[9].source;
		topRow[num].childNodes.className = slotImages[9].name;
	};
	if (randomFirst < 9) {
		bottomRow[num].appendChild(document.createElement("img")).src =slotImages[randomThird].source;
		bottomRow[num].childNodes.className = slotImages[randomThird].name;
	} else {
		bottomRow[num].appendChild(document.createElement("img")).src =slotImages[0].source;
		bottomRow[num].childNodes.className = slotImages[0].name;
	};
};


//Event Listeners for each of the different betting options
$('#button1').on('click', function(){
	startingBet = 1;
	betSize.textContent = betWithZeros(startingBet, 3);
});
$('#button3').on('click', function(){
	startingBet = 3;
	betSize.textContent = betWithZeros(startingBet, 3);
});
$('#button5').on('click', function(){
	startingBet = 5;
	betSize.textContent = betWithZeros(startingBet, 3);
});
$('#button20').on('click', function(){
	startingBet = 20;
	betSize.textContent = betWithZeros(startingBet, 3);
});
$('#button60').on('click', function(){
	startingBet = 60;
	betSize.textContent = betWithZeros(startingBet, 3);
});
$('#button100').on('click', function(){
	startingBet = 100;
	betSize.textContent = betWithZeros(startingBet, 3);
});

//functions to display total credits and bet with leading zeros for style
function creditWithZeros(number, length) {
    var my_string = '' + number;
    while (my_string.length < length) {
        my_string = '0' + my_string;
    }
    return my_string;
};
totalCredits.textContent = creditWithZeros(startingCredits, 6);
function betWithZeros(number, length) {
    var my_string = '' + number;
    while (my_string.length < length) {
        my_string = '0' + my_string;
    }
    return my_string;
};
betSize.textContent = betWithZeros(startingBet, 3);

//make the Falcon move across the page like its make a kessel run
function movingFalcon() {
	$("#falcon").removeClass('hidden');
	$("#falcon").animate({left: '800px'}, 5000, function(){
		$(this).removeAttr('style')});
	setTimeout(function(){
		$("#falcon").addClass('hidden');
	}, 5000);
};


//check for winners on line 1
function middleWinner () {
	if (middleRow[0].childNodes.className === middleRow[1].childNodes.className) {
		if(middleRow[0].childNodes.className === middleRow[2].childNodes.className || middleRow[0].childNodes.className === middleRow[3].childNodes.className || middleRow[0].childNodes.className === middleRow[4].childNodes.className) {
			$('#display p').text("Winner - Line 1!");
			startingCredits = startingCredits + 2;
			totalCredits.textContent = creditWithZeros(startingCredits, 6);
		};
		
	} else if (middleRow[0].childNodes.className === middleRow[2].childNodes.className) {
		if(middleRow[0].childNodes.className === middleRow[3].childNodes.className || middleRow[0].childNodes.className === middleRow[4].childNodes.className) {
			$('#display p').text("Winner - Line 1!");
			startingCredits = startingCredits + 2;
			totalCredits.textContent = creditWithZeros(startingCredits, 6);
		}
	} else if(middleRow[0].childNodes.className === middleRow[3].childNodes.className && middleRow[0].childNodes.className === middleRow[4].childNodes.className) {
		$('#display p').text("Winner - Line 1!");
		startingCredits = startingCredits + 2;
		totalCredits.textContent = creditWithZeros(startingCredits, 6);
	} else if(middleRow[1].childNodes.className === middleRow[2].childNodes.className) {
		if (middleRow[1].childNodes.className === middleRow[3].childNodes.className || middleRow[1].childNodes.className === middleRow[4].childNodes.className) {
			$('#display p').text("Winner - Line 1!");
			startingCredits = startingCredits + 2;
			totalCredits.textContent = creditWithZeros(startingCredits, 6);
		};
	} else if(middleRow[2].childNodes.className === middleRow[3].childNodes.className && middleRow[2].childNodes.className === middleRow[4].childNodes.className) {
		$('#display p').text("Winner - Line 1!");
		startingCredits = startingCredits + 2;
		totalCredits.textContent = creditWithZeros(startingCredits, 6);
	}
	else {
		// $('#display p').text("You've Lost, Try again.")
	};
};
function topWinner() {
	if (topRow[0].childNodes.className === topRow[1].childNodes.className) {
		if(topRow[0].childNodes.className === topRow[2].childNodes.className || topRow[0].childNodes.className === topRow[3].childNodes.className || topRow[0].childNodes.className === topRow[4].childNodes.className) {
			$('#display p').text("Winner - Line 2!");
			startingCredits = startingCredits + 2;
			totalCredits.textContent = creditWithZeros(startingCredits, 6);
		};
		
	} else if (topRow[0].childNodes.className === topRow[2].childNodes.className) {
		if(topRow[0].childNodes.className === topRow[3].childNodes.className || topRow[0].childNodes.className === topRow[4].childNodes.className) {
			$('#display p').text("Winner - Line 2!");
			startingCredits = startingCredits + 2;
			totalCredits.textContent = creditWithZeros(startingCredits, 6);
		}
	} else if(topRow[0].childNodes.className === topRow[3].childNodes.className && topRow[0].childNodes.className === topRow[4].childNodes.className) {
		$('#display p').text("Winner - Line 2!");
		startingCredits = startingCredits + 2;
		totalCredits.textContent = creditWithZeros(startingCredits, 6);
	} else if(topRow[1].childNodes.className === topRow[2].childNodes.className) {
		if (topRow[1].childNodes.className === topRow[3].childNodes.className || topRow[1].childNodes.className === topRow[4].childNodes.className) {
			$('#display p').text("Winner - Line 2!");
			startingCredits = startingCredits + 2;
			totalCredits.textContent = creditWithZeros(startingCredits, 6);
		};
	} else if(topRow[2].childNodes.className === topRow[3].childNodes.className && topRow[2].childNodes.className === topRow[4].childNodes.className) {
		$('#display p').text("Winner - Line 2!");
		startingCredits = startingCredits + 2;
		totalCredits.textContent = creditWithZeros(startingCredits, 6);
	}
	else {
		// $('#display p').text("You've Lost, Try again.")
	};
};
function bottomWinner() {
		if (bottomRow[0].childNodes.className === bottomRow[1].childNodes.className) {
		if(bottomRow[0].childNodes.className === bottomRow[2].childNodes.className || bottomRow[0].childNodes.className === bottomRow[3].childNodes.className || bottomRow[0].childNodes.className === bottomRow[4].childNodes.className) {
			$('#display p').text("Winner - Line 3!");
			startingCredits = startingCredits + 2;
			totalCredits.textContent = creditWithZeros(startingCredits, 6);
		};
		
	} else if (bottomRow[0].childNodes.className === bottomRow[2].childNodes.className) {
		if(bottomRow[0].childNodes.className === bottomRow[3].childNodes.className || bottomRow[0].childNodes.className === bottomRow[4].childNodes.className) {
			$('#display p').text("Winner - Line 3!");
			startingCredits = startingCredits + 2;
			totalCredits.textContent = creditWithZeros(startingCredits, 6);
		}
	} else if(bottomRow[0].childNodes.className === bottomRow[3].childNodes.className && bottomRow[0].childNodes.className === bottomRow[4].childNodes.className) {
		$('#display p').text("Winner - Line 3!");
		startingCredits = startingCredits + 2;
		totalCredits.textContent = creditWithZeros(startingCredits, 6);
	} else if(bottomRow[1].childNodes.className === bottomRow[2].childNodes.className) {
		if (bottomRow[1].childNodes.className === bottomRow[3].childNodes.className || bottomRow[1].childNodes.className === bottomRow[4].childNodes.className) {
			$('#display p').text("Winner - Line 3!");
			startingCredits = startingCredits + 2;
			totalCredits.textContent = creditWithZeros(startingCredits, 6);
		};
	} else if(bottomRow[2].childNodes.className === bottomRow[3].childNodes.className && bottomRow[2].childNodes.className === bottomRow[4].childNodes.className) {
		$('#display p').text("Winner - Line 3!");
		startingCredits = startingCredits + 2;
		totalCredits.textContent = creditWithZeros(startingCredits, 6);
	}
	else {
		// $('#display p').text("You've Lost, Try again.")
	};
};
function line4Winner(){
	if (bottomRow[0].childNodes.className === middleRow[1].childNodes.className) {
		if(bottomRow[0].childNodes.className === topRow[2].childNodes.className || bottomRow[0].childNodes.className === middleRow[3].childNodes.className || bottomRow[0].childNodes.className === bottomRow[4].childNodes.className) {
			$('#display p').text("Winner - Line 4!");
			startingCredits = startingCredits + 2;
			totalCredits.textContent = creditWithZeros(startingCredits, 6);
		} 
	} else if(bottomRow[0].childNodes.className === topRow[2].childNodes.className) {
		if (bottomRow[0].childNodes.className === middleRow[3].childNodes.className || bottomRow[0].childNodes.className === bottomRow[4].childNodes.className) {
			$('#display p').text("Winner - Line 4!");
			startingCredits = startingCredits + 2;
			totalCredits.textContent = creditWithZeros(startingCredits, 6);
		};
	} else if (bottomRow[0].childNodes.className === middleRow[3].childNodes.className && bottomRow[0].childNodes.className === bottomRow[4].childNodes.className) {
		$('#display p').text("Winner - Line 4!");
		startingCredits = startingCredits + 2;
		totalCredits.textContent = creditWithZeros(startingCredits, 6);
	} else if (middleRow[1].childNodes.className === topRow[2].childNodes.className){
		if (middleRow[1].childNodes.className === middleRow[3].childNodes.className || middleRow[1].childNodes.className === bottomRow[4].childNodes.className) {
			$('#display p').text("Winner - Line 4!");
			startingCredits = startingCredits + 2;
			totalCredits.textContent = creditWithZeros(startingCredits, 6);
		}
	} else if (middleRow[1].childNodes.className === middleRow[3].childNodes.className && middleRow[1].childNodes.className === bottomRow[4].childNodes.className) {
		$('#display p').text("Winner - Line 4!");
		startingCredits = startingCredits + 2;
		totalCredits.textContent = creditWithZeros(startingCredits, 6);
	} else if (topRow[2].childNodes.className === middleRow[3].childNodes.className && topRow[2].childNodes.className === bottomRow[4].childNodes.className) {
		$('#display p').text("Winner - Line 4!");
		startingCredits = startingCredits + 2;
		totalCredits.textContent = creditWithZeros(startingCredits, 6);
	} else {
		//display
	}
};
function line5Winner(){
	if (topRow[0].childNodes.className === middleRow[1].childNodes.className) {
		if(topRow[0].childNodes.className === bottomRow[2].childNodes.className || topRow[0].childNodes.className === middleRow[3].childNodes.className || topRow[0].childNodes.className === topRow[4].childNodes.className) {
			$('#display p').text("Winner - Line 5!");
			startingCredits = startingCredits + 2;
			totalCredits.textContent = creditWithZeros(startingCredits, 6);
		} 
	} else if(topRow[0].childNodes.className === bottomRow[2].childNodes.className) {
		if (topRow[0].childNodes.className === middleRow[3].childNodes.className || topRow[0].childNodes.className === topRow[4].childNodes.className) {
			$('#display p').text("Winner - Line 5!");
			startingCredits = startingCredits + 2;
			totalCredits.textContent = creditWithZeros(startingCredits, 6);
		};
	} else if (topRow[0].childNodes.className === middleRow[3].childNodes.className && topRow[0].childNodes.className === topRow[4].childNodes.className) {
		$('#display p').text("Winner - Line 5!");
		startingCredits = startingCredits + 2;
		totalCredits.textContent = creditWithZeros(startingCredits, 6);
	} else if (middleRow[1].childNodes.className === bottomRow[2].childNodes.className){
		if (middleRow[1].childNodes.className === middleRow[3].childNodes.className || middleRow[1].childNodes.className === topmRow[4].childNodes.className) {
			$('#display p').text("Winner - Line 5!");
			startingCredits = startingCredits + 2;
			totalCredits.textContent = creditWithZeros(startingCredits, 6);
		}
	} else if (middleRow[1].childNodes.className === middleRow[3].childNodes.className && middleRow[1].childNodes.className === topRow[4].childNodes.className) {
		$('#display p').text("Winner - Line 5!");
		startingCredits = startingCredits + 2;
		totalCredits.textContent = creditWithZeros(startingCredits, 6);
	} else if (bottomRow[2].childNodes.className === middleRow[3].childNodes.className && bottomRow[2].childNodes.className === topRow[4].childNodes.className) {
		$('#display p').text("Winner - Line 5!");
		startingCredits = startingCredits + 2;
		totalCredits.textContent = creditWithZeros(startingCredits, 6);
	} else {
		//display
	}
}

function tripleWinner () {
	setTimeout(topWinner, 1000);
	setTimeout(middleWinner, 2000);
	setTimeot(bottomWinner, 3000);
}

function diagWinner () {
	setTimeout(topWinner, 1000);
	setTimeout(middleWinner, 2000);
	setTimeout(bottomWinner, 3000);
	setTimeout(line4Winner, 4000);
	setTimeout(line5Winner, 5000);
}


// move the handle on click
$('#handle').on('click', function(){
	$(this).addClass('clicked');
	setTimeout(function(){
		$('#handle').removeClass('clicked');
	}, 600);
	$('.horz1').empty(); //clears the form so that new images may appear
	$('.horz2').empty();
	$('.horz3').empty();
	//make sure the user has enough credits to make the desired bet.
	if (startingBet <= startingCredits) {
		startingCredits = startingCredits - startingBet; // removes bet values from total remaining
		totalCredits.textContent = creditWithZeros(startingCredits, 6);
		$('#display p').text("May the Force be With You");
		movingFalcon();
		setTimeout(drySpin, 1900, 0);
		setTimeout(drySpin, 2300, 1);
		setTimeout(drySpin, 3000, 2);
		setTimeout(drySpin, 3600, 3);
		setTimeout(drySpin, 4200, 4);
		if ($('#button1').prop("checked")) {
			setTimeout(middleWinner, 5000)
			console.log("button 1 checked")
		} else if ($('#button3').prop("checked")) {
			setTimeout(tripleWinner, 5000);
			console.log("button 3 checked")
		} else if ($('#button5').prop("checked")) {
			setTimeout(diagWinner, 5000);
			console.log("button 5 checked")
		} else if($('#button20').prop("checked")) {
			console.log("button 20 checked")
		} else if($('#button60').prop("checked")) {
			console.log("Button 60 checked")
		} else if($('#button100').prop("checked")) {
			console.log("button 100 checked")
		} else {
			$('#display p').text("Place your Bets")
		}

	} else {
		$('#display p').text("Enter More Credits");
		$('#display p').addClass("needsCredits");
	}	
});