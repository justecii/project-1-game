var startingCredits = 0;
var startingBet = 0;
var totalCredits = document.getElementById("totalCredits");
var betSize = document.getElementById("activeBet");
var lever =document.getElementById("handle");
var middleRow = document.querySelectorAll('.horz2');
var topRow = document.querySelectorAll('.horz1');
var bottomRow = document.querySelectorAll('.horz3');
var saberAudio = new Audio("audio/lightsaber.mp3");
var cantinaAudio = new Audio("audio/cantina.mp3");
var falconAudio = new Audio("audio/falcon.mp3");
var exitAudio = new Audio("audio/lack_of_faith.wav");
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
cantinaAudio.play();
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
	falconAudio.play();
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
			startingCredits = startingCredits + 10;
			totalCredits.textContent = creditWithZeros(startingCredits, 6);
		};
		
	} else if (middleRow[0].childNodes.className === middleRow[2].childNodes.className) {
		if(middleRow[0].childNodes.className === middleRow[3].childNodes.className || middleRow[0].childNodes.className === middleRow[4].childNodes.className) {
			$('#display p').text("Winner - Line 1!");
			startingCredits = startingCredits + 10;
			totalCredits.textContent = creditWithZeros(startingCredits, 6);
		}
	} else if(middleRow[0].childNodes.className === middleRow[3].childNodes.className && middleRow[0].childNodes.className === middleRow[4].childNodes.className) {
		$('#display p').text("Winner - Line 1!");
		startingCredits = startingCredits + 10;
		totalCredits.textContent = creditWithZeros(startingCredits, 6);
	} else if(middleRow[1].childNodes.className === middleRow[2].childNodes.className) {
		if (middleRow[1].childNodes.className === middleRow[3].childNodes.className || middleRow[1].childNodes.className === middleRow[4].childNodes.className) {
			$('#display p').text("Winner - Line 1!");
			startingCredits = startingCredits + 10;
			totalCredits.textContent = creditWithZeros(startingCredits, 6);
		};
	} else if(middleRow[2].childNodes.className === middleRow[3].childNodes.className && middleRow[2].childNodes.className === middleRow[4].childNodes.className) {
		$('#display p').text("Winner - Line 1!");
		startingCredits = startingCredits + 10;
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
			startingCredits = startingCredits + 10;
			totalCredits.textContent = creditWithZeros(startingCredits, 6);
		};
		
	} else if (topRow[0].childNodes.className === topRow[2].childNodes.className) {
		if(topRow[0].childNodes.className === topRow[3].childNodes.className || topRow[0].childNodes.className === topRow[4].childNodes.className) {
			$('#display p').text("Winner - Line 2!");
			startingCredits = startingCredits + 10;
			totalCredits.textContent = creditWithZeros(startingCredits, 6);
		}
	} else if(topRow[0].childNodes.className === topRow[3].childNodes.className && topRow[0].childNodes.className === topRow[4].childNodes.className) {
		$('#display p').text("Winner - Line 2!");
		startingCredits = startingCredits + 10;
		totalCredits.textContent = creditWithZeros(startingCredits, 6);
	} else if(topRow[1].childNodes.className === topRow[2].childNodes.className) {
		if (topRow[1].childNodes.className === topRow[3].childNodes.className || topRow[1].childNodes.className === topRow[4].childNodes.className) {
			$('#display p').text("Winner - Line 2!");
			startingCredits = startingCredits + 10;
			totalCredits.textContent = creditWithZeros(startingCredits, 6);
		};
	} else if(topRow[2].childNodes.className === topRow[3].childNodes.className && topRow[2].childNodes.className === topRow[4].childNodes.className) {
		$('#display p').text("Winner - Line 2!");
		startingCredits = startingCredits + 10;
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
			startingCredits = startingCredits + 10;
			totalCredits.textContent = creditWithZeros(startingCredits, 6);
		};
		
	} else if (bottomRow[0].childNodes.className === bottomRow[2].childNodes.className) {
		if(bottomRow[0].childNodes.className === bottomRow[3].childNodes.className || bottomRow[0].childNodes.className === bottomRow[4].childNodes.className) {
			$('#display p').text("Winner - Line 3!");
			startingCredits = startingCredits + 10;
			totalCredits.textContent = creditWithZeros(startingCredits, 6);
		}
	} else if(bottomRow[0].childNodes.className === bottomRow[3].childNodes.className && bottomRow[0].childNodes.className === bottomRow[4].childNodes.className) {
		$('#display p').text("Winner - Line 3!");
		startingCredits = startingCredits + 10;
		totalCredits.textContent = creditWithZeros(startingCredits, 6);
	} else if(bottomRow[1].childNodes.className === bottomRow[2].childNodes.className) {
		if (bottomRow[1].childNodes.className === bottomRow[3].childNodes.className || bottomRow[1].childNodes.className === bottomRow[4].childNodes.className) {
			$('#display p').text("Winner - Line 3!");
			startingCredits = startingCredits + 10;
			totalCredits.textContent = creditWithZeros(startingCredits, 6);
		};
	} else if(bottomRow[2].childNodes.className === bottomRow[3].childNodes.className && bottomRow[2].childNodes.className === bottomRow[4].childNodes.className) {
		$('#display p').text("Winner - Line 3!");
		startingCredits = startingCredits + 10;
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
			startingCredits = startingCredits + 10;
			totalCredits.textContent = creditWithZeros(startingCredits, 6);
		} 
	} else if(bottomRow[0].childNodes.className === topRow[2].childNodes.className) {
		if (bottomRow[0].childNodes.className === middleRow[3].childNodes.className || bottomRow[0].childNodes.className === bottomRow[4].childNodes.className) {
			$('#display p').text("Winner - Line 4!");
			startingCredits = startingCredits + 10;
			totalCredits.textContent = creditWithZeros(startingCredits, 6);
		};
	} else if (bottomRow[0].childNodes.className === middleRow[3].childNodes.className && bottomRow[0].childNodes.className === bottomRow[4].childNodes.className) {
		$('#display p').text("Winner - Line 4!");
		startingCredits = startingCredits + 10;
		totalCredits.textContent = creditWithZeros(startingCredits, 6);
	} else if (middleRow[1].childNodes.className === topRow[2].childNodes.className){
		if (middleRow[1].childNodes.className === middleRow[3].childNodes.className || middleRow[1].childNodes.className === bottomRow[4].childNodes.className) {
			$('#display p').text("Winner - Line 4!");
			startingCredits = startingCredits + 10;
			totalCredits.textContent = creditWithZeros(startingCredits, 6);
		}
	} else if (middleRow[1].childNodes.className === middleRow[3].childNodes.className && middleRow[1].childNodes.className === bottomRow[4].childNodes.className) {
		$('#display p').text("Winner - Line 4!");
		startingCredits = startingCredits + 10;
		totalCredits.textContent = creditWithZeros(startingCredits, 6);
	} else if (topRow[2].childNodes.className === middleRow[3].childNodes.className && topRow[2].childNodes.className === bottomRow[4].childNodes.className) {
		$('#display p').text("Winner - Line 4!");
		startingCredits = startingCredits + 10;
		totalCredits.textContent = creditWithZeros(startingCredits, 6);
	} else {
		//display
	};
};
function line5Winner(){
	if (topRow[0].childNodes.className === middleRow[1].childNodes.className) {
		if(topRow[0].childNodes.className === bottomRow[2].childNodes.className || topRow[0].childNodes.className === middleRow[3].childNodes.className || topRow[0].childNodes.className === topRow[4].childNodes.className) {
			$('#display p').text("Winner - Line 5!");
			startingCredits = startingCredits + 10;
			totalCredits.textContent = creditWithZeros(startingCredits, 6);
		} 
	} else if(topRow[0].childNodes.className === bottomRow[2].childNodes.className) {
		if (topRow[0].childNodes.className === middleRow[3].childNodes.className || topRow[0].childNodes.className === topRow[4].childNodes.className) {
			$('#display p').text("Winner - Line 5!");
			startingCredits = startingCredits + 10;
			totalCredits.textContent = creditWithZeros(startingCredits, 6);
		};
	} else if (topRow[0].childNodes.className === middleRow[3].childNodes.className && topRow[0].childNodes.className === topRow[4].childNodes.className) {
		$('#display p').text("Winner - Line 5!");
		startingCredits = startingCredits + 10;
		totalCredits.textContent = creditWithZeros(startingCredits, 6);
	} else if (middleRow[1].childNodes.className === bottomRow[2].childNodes.className){
		if (middleRow[1].childNodes.className === middleRow[3].childNodes.className || middleRow[1].childNodes.className === topRow[4].childNodes.className) {
			$('#display p').text("Winner - Line 5!");
			startingCredits = startingCredits + 10;
			totalCredits.textContent = creditWithZeros(startingCredits, 6);
		}
	} else if (middleRow[1].childNodes.className === middleRow[3].childNodes.className && middleRow[1].childNodes.className === topRow[4].childNodes.className) {
		$('#display p').text("Winner - Line 5!");
		startingCredits = startingCredits + 10;
		totalCredits.textContent = creditWithZeros(startingCredits, 6);
	} else if (bottomRow[2].childNodes.className === middleRow[3].childNodes.className && bottomRow[2].childNodes.className === topRow[4].childNodes.className) {
		$('#display p').text("Winner - Line 5!");
		startingCredits = startingCredits + 10;
		totalCredits.textContent = creditWithZeros(startingCredits, 6);
	} else {
		//display
	};
};
function doubleMiddle () {
	if (middleRow[0].childNodes.className === middleRow[1].childNodes.className) {
		if(middleRow[0].childNodes.className === middleRow[2].childNodes.className || middleRow[0].childNodes.className === middleRow[3].childNodes.className || middleRow[0].childNodes.className === middleRow[4].childNodes.className) {
			$('#display p').text("Winner - Line 1!");
			startingCredits = startingCredits + 100;
			totalCredits.textContent = creditWithZeros(startingCredits, 6);
		};
		
	} else if (middleRow[0].childNodes.className === middleRow[2].childNodes.className) {
		if(middleRow[0].childNodes.className === middleRow[3].childNodes.className || middleRow[0].childNodes.className === middleRow[4].childNodes.className) {
			$('#display p').text("Winner - Line 1!");
			startingCredits = startingCredits + 100;
			totalCredits.textContent = creditWithZeros(startingCredits, 6);
		}
	} else if(middleRow[0].childNodes.className === middleRow[3].childNodes.className && middleRow[0].childNodes.className === middleRow[4].childNodes.className) {
		$('#display p').text("Winner - Line 1!");
		startingCredits = startingCredits + 100;
		totalCredits.textContent = creditWithZeros(startingCredits, 6);
	} else if(middleRow[1].childNodes.className === middleRow[2].childNodes.className) {
		if (middleRow[1].childNodes.className === middleRow[3].childNodes.className || middleRow[1].childNodes.className === middleRow[4].childNodes.className) {
			$('#display p').text("Winner - Line 1!");
			startingCredits = startingCredits + 100;
			totalCredits.textContent = creditWithZeros(startingCredits, 6);
		};
	} else if(middleRow[2].childNodes.className === middleRow[3].childNodes.className && middleRow[2].childNodes.className === middleRow[4].childNodes.className) {
		$('#display p').text("Winner - Line 1!");
		startingCredits = startingCredits + 100;
		totalCredits.textContent = creditWithZeros(startingCredits, 6);
	}
	else {
		// $('#display p').text("You've Lost, Try again.")

	};
};
function doubleTop () {
	if (topRow[0].childNodes.className === topRow[1].childNodes.className) {
		if(topRow[0].childNodes.className === topRow[2].childNodes.className || topRow[0].childNodes.className === topRow[3].childNodes.className || topRow[0].childNodes.className === topRow[4].childNodes.className) {
			$('#display p').text("Winner - Line 2!");
			startingCredits = startingCredits + 100;
			totalCredits.textContent = creditWithZeros(startingCredits, 6);
		};
		
	} else if (topRow[0].childNodes.className === topRow[2].childNodes.className) {
		if(topRow[0].childNodes.className === topRow[3].childNodes.className || topRow[0].childNodes.className === topRow[4].childNodes.className) {
			$('#display p').text("Winner - Line 2!");
			startingCredits = startingCredits + 100;
			totalCredits.textContent = creditWithZeros(startingCredits, 6);
		}
	} else if(topRow[0].childNodes.className === topRow[3].childNodes.className && topRow[0].childNodes.className === topRow[4].childNodes.className) {
		$('#display p').text("Winner - Line 2!");
		startingCredits = startingCredits + 100;
		totalCredits.textContent = creditWithZeros(startingCredits, 6);
	} else if(topRow[1].childNodes.className === topRow[2].childNodes.className) {
		if (topRow[1].childNodes.className === topRow[3].childNodes.className || topRow[1].childNodes.className === topRow[4].childNodes.className) {
			$('#display p').text("Winner - Line 2!");
			startingCredits = startingCredits + 100;
			totalCredits.textContent = creditWithZeros(startingCredits, 6);
		};
	} else if(topRow[2].childNodes.className === topRow[3].childNodes.className && topRow[2].childNodes.className === topRow[4].childNodes.className) {
		$('#display p').text("Winner - Line 2!");
		startingCredits = startingCredits + 100;
		totalCredits.textContent = creditWithZeros(startingCredits, 6);
	}
	else {
		// $('#display p').text("You've Lost, Try again.")
	};
};
function doubleBottom () {
	if (bottomRow[0].childNodes.className === bottomRow[1].childNodes.className) {
		if(bottomRow[0].childNodes.className === bottomRow[2].childNodes.className || bottomRow[0].childNodes.className === bottomRow[3].childNodes.className || bottomRow[0].childNodes.className === bottomRow[4].childNodes.className) {
			$('#display p').text("Winner - Line 3!");
			startingCredits = startingCredits + 100;
			totalCredits.textContent = creditWithZeros(startingCredits, 6);
		};
		
	} else if (bottomRow[0].childNodes.className === bottomRow[2].childNodes.className) {
		if(bottomRow[0].childNodes.className === bottomRow[3].childNodes.className || bottomRow[0].childNodes.className === bottomRow[4].childNodes.className) {
			$('#display p').text("Winner - Line 3!");
			startingCredits = startingCredits + 100;
			totalCredits.textContent = creditWithZeros(startingCredits, 6);
		}
	} else if(bottomRow[0].childNodes.className === bottomRow[3].childNodes.className && bottomRow[0].childNodes.className === bottomRow[4].childNodes.className) {
		$('#display p').text("Winner - Line 3!");
		startingCredits = startingCredits + 100;
		totalCredits.textContent = creditWithZeros(startingCredits, 6);
	} else if(bottomRow[1].childNodes.className === bottomRow[2].childNodes.className) {
		if (bottomRow[1].childNodes.className === bottomRow[3].childNodes.className || bottomRow[1].childNodes.className === bottomRow[4].childNodes.className) {
			$('#display p').text("Winner - Line 3!");
			startingCredits = startingCredits + 100;
			totalCredits.textContent = creditWithZeros(startingCredits, 6);
		};
	} else if(bottomRow[2].childNodes.className === bottomRow[3].childNodes.className && bottomRow[2].childNodes.className === bottomRow[4].childNodes.className) {
		$('#display p').text("Winner - Line 3!");
		startingCredits = startingCredits + 100;
		totalCredits.textContent = creditWithZeros(startingCredits, 6);
	}
	else {
		// $('#display p').text("You've Lost, Try again.")
	};
};
function doubleLine4() {
	if (bottomRow[0].childNodes.className === middleRow[1].childNodes.className) {
		if(bottomRow[0].childNodes.className === topRow[2].childNodes.className || bottomRow[0].childNodes.className === middleRow[3].childNodes.className || bottomRow[0].childNodes.className === bottomRow[4].childNodes.className) {
			$('#display p').text("Winner - Line 4!");
			startingCredits = startingCredits + 100;
			totalCredits.textContent = creditWithZeros(startingCredits, 6);
		} 
	} else if(bottomRow[0].childNodes.className === topRow[2].childNodes.className) {
		if (bottomRow[0].childNodes.className === middleRow[3].childNodes.className || bottomRow[0].childNodes.className === bottomRow[4].childNodes.className) {
			$('#display p').text("Winner - Line 4!");
			startingCredits = startingCredits + 100;
			totalCredits.textContent = creditWithZeros(startingCredits, 6);
		};
	} else if (bottomRow[0].childNodes.className === middleRow[3].childNodes.className && bottomRow[0].childNodes.className === bottomRow[4].childNodes.className) {
		$('#display p').text("Winner - Line 4!");
		startingCredits = startingCredits + 100;
		totalCredits.textContent = creditWithZeros(startingCredits, 6);
	} else if (middleRow[1].childNodes.className === topRow[2].childNodes.className){
		if (middleRow[1].childNodes.className === middleRow[3].childNodes.className || middleRow[1].childNodes.className === bottomRow[4].childNodes.className) {
			$('#display p').text("Winner - Line 4!");
			startingCredits = startingCredits + 100;
			totalCredits.textContent = creditWithZeros(startingCredits, 6);
		}
	} else if (middleRow[1].childNodes.className === middleRow[3].childNodes.className && middleRow[1].childNodes.className === bottomRow[4].childNodes.className) {
		$('#display p').text("Winner - Line 4!");
		startingCredits = startingCredits + 100;
		totalCredits.textContent = creditWithZeros(startingCredits, 6);
	} else if (topRow[2].childNodes.className === middleRow[3].childNodes.className && topRow[2].childNodes.className === bottomRow[4].childNodes.className) {
		$('#display p').text("Winner - Line 4!");
		startingCredits = startingCredits + 100;
		totalCredits.textContent = creditWithZeros(startingCredits, 6);
	} else {
		//display
	};
};
function doubleLine5 () {
	if (topRow[0].childNodes.className === middleRow[1].childNodes.className) {
		if(topRow[0].childNodes.className === bottomRow[2].childNodes.className || topRow[0].childNodes.className === middleRow[3].childNodes.className || topRow[0].childNodes.className === topRow[4].childNodes.className) {
			$('#display p').text("Winner - Line 5!");
			startingCredits = startingCredits + 100;
			totalCredits.textContent = creditWithZeros(startingCredits, 6);
		} 
	} else if(topRow[0].childNodes.className === bottomRow[2].childNodes.className) {
		if (topRow[0].childNodes.className === middleRow[3].childNodes.className || topRow[0].childNodes.className === topRow[4].childNodes.className) {
			$('#display p').text("Winner - Line 5!");
			startingCredits = startingCredits + 100;
			totalCredits.textContent = creditWithZeros(startingCredits, 6);
		};
	} else if (topRow[0].childNodes.className === middleRow[3].childNodes.className && topRow[0].childNodes.className === topRow[4].childNodes.className) {
		$('#display p').text("Winner - Line 5!");
		startingCredits = startingCredits + 100;
		totalCredits.textContent = creditWithZeros(startingCredits, 6);
	} else if (middleRow[1].childNodes.className === bottomRow[2].childNodes.className){
		if (middleRow[1].childNodes.className === middleRow[3].childNodes.className || middleRow[1].childNodes.className === topRow[4].childNodes.className) {
			$('#display p').text("Winner - Line 5!");
			startingCredits = startingCredits + 100;
			totalCredits.textContent = creditWithZeros(startingCredits, 6);
		}
	} else if (middleRow[1].childNodes.className === middleRow[3].childNodes.className && middleRow[1].childNodes.className === topRow[4].childNodes.className) {
		$('#display p').text("Winner - Line 5!");
		startingCredits = startingCredits + 100;
		totalCredits.textContent = creditWithZeros(startingCredits, 6);
	} else if (bottomRow[2].childNodes.className === middleRow[3].childNodes.className && bottomRow[2].childNodes.className === topRow[4].childNodes.className) {
		$('#display p').text("Winner - Line 5!");
		startingCredits = startingCredits + 100;
		totalCredits.textContent = creditWithZeros(startingCredits, 6);
	} else {
		//display
	};
};
function line4Winner(){
	if (bottomRow[0].childNodes.className === middleRow[1].childNodes.className) {
		if(bottomRow[0].childNodes.className === topRow[2].childNodes.className || bottomRow[0].childNodes.className === middleRow[3].childNodes.className || bottomRow[0].childNodes.className === bottomRow[4].childNodes.className) {
			$('#display p').text("You Won!");
			startingCredits = startingCredits + 2;
			totalCredits.textContent = creditWithZeros(startingCredits, 6);
		} 
	} else if(bottomRow[0].childNodes.className === topRow[2].childNodes.className) {
		if (bottomRow[0].childNodes.className === middleRow[3].childNodes.className || bottomRow[0].childNodes.className === bottomRow[4].childNodes.className) {
			$('#display p').text("You Won!");
			startingCredits = startingCredits + 2;
			totalCredits.textContent = creditWithZeros(startingCredits, 6);
		};
	} else if (bottomRow[0].childNodes.className === middleRow[3].childNodes.className && bottomRow[0].childNodes.className === bottomRow[4].childNodes.className) {
		$('#display p').text("You Won!");
		startingCredits = startingCredits + 2;
		totalCredits.textContent = creditWithZeros(startingCredits, 6);
	} else if (middleRow[1].childNodes.className === topRow[2].childNodes.className){
		if (middleRow[1].childNodes.className === middleRow[3].childNodes.className || middleRow[1].childNodes.className === bottomRow[4].childNodes.className) {
			$('#display p').text("You Won!");
			startingCredits = startingCredits + 2;
			totalCredits.textContent = creditWithZeros(startingCredits, 6);
		}
	} else if (middleRow[1].childNodes.className === middleRow[3].childNodes.className && middleRow[1].childNodes.className === bottomRow[4].childNodes.className) {
		$('#display p').text("You Won!");
		startingCredits = startingCredits + 2;
		totalCredits.textContent = creditWithZeros(startingCredits, 6);
	} else if (topRow[2].childNodes.className === middleRow[3].childNodes.className && topRow[2].childNodes.className === bottomRow[4].childNodes.className) {
		$('#display p').text("You Won!");
		startingCredits = startingCredits + 2;
		totalCredits.textContent = creditWithZeros(startingCredits, 6);
	} else {
		//display
	}
};
function line5Winner(){
	if (topRow[0].childNodes.className === middleRow[1].childNodes.className) {
		if(topRow[0].childNodes.className === bottomRow[2].childNodes.className || topRow[0].childNodes.className === middleRow[3].childNodes.className || topRow[0].childNodes.className === topRow[4].childNodes.className) {
			$('#display p').text("You Won!");
			startingCredits = startingCredits + 2;
			totalCredits.textContent = creditWithZeros(startingCredits, 6);
		} 
	} else if(topRow[0].childNodes.className === bottomRow[2].childNodes.className) {
		if (topRow[0].childNodes.className === middleRow[3].childNodes.className || topRow[0].childNodes.className === topRow[4].childNodes.className) {
			$('#display p').text("You Won!");
			startingCredits = startingCredits + 2;
			totalCredits.textContent = creditWithZeros(startingCredits, 6);
		};
	} else if (topRow[0].childNodes.className === middleRow[3].childNodes.className && topRow[0].childNodes.className === topRow[4].childNodes.className) {
		$('#display p').text("You Won!");
		startingCredits = startingCredits + 2;
		totalCredits.textContent = creditWithZeros(startingCredits, 6);
	} else if (middleRow[1].childNodes.className === bottomRow[2].childNodes.className){
		if (middleRow[1].childNodes.className === middleRow[3].childNodes.className || middleRow[1].childNodes.className === topmRow[4].childNodes.className) {
			$('#display p').text("You Won!");
			startingCredits = startingCredits + 2;
			totalCredits.textContent = creditWithZeros(startingCredits, 6);
		}
	} else if (middleRow[1].childNodes.className === middleRow[3].childNodes.className && middleRow[1].childNodes.className === topRow[4].childNodes.className) {
		$('#display p').text("You Won!");
		startingCredits = startingCredits + 2;
		totalCredits.textContent = creditWithZeros(startingCredits, 6);
	} else if (bottomRow[2].childNodes.className === middleRow[3].childNodes.className && bottomRow[2].childNodes.className === topRow[4].childNodes.className) {
		$('#display p').text("You Won!");
		startingCredits = startingCredits + 2;
		totalCredits.textContent = creditWithZeros(startingCredits, 6);
	} else {
		//display
	}
}
//different functions for the
function tripleWinner () {
	topWinner();
	middleWinner();
	bottomWinner();
}

function diagWinner () {
	topWinner();
	middleWinner();
	bottomWinner();
	line4Winner();
	line5Winner();
}

function tripleWinner () {
	setTimeout(topWinner, 1000);
	setTimeout(middleWinner, 2000);
	setTimeout(bottomWinner, 3000);
};

function diagWinner () {
	setTimeout(topWinner, 1000);
	setTimeout(middleWinner, 2000);
	setTimeout(bottomWinner, 3000);
	setTimeout(line4Winner, 4000);
	setTimeout(line5Winner, 5000);
};
function doubleTriple() {
	setTimeout(doubleTop, 1000);
	setTimeout(doubleMiddle, 2000);
	setTimeout(doubleBottom, 3000);
};
function doubleDiag() {
	setTimeout(doubleTop, 1000);
	setTimeout(doubleMiddle, 2000);
	setTimeout(doubleBottom, 3000);
	setTimeout(doubleLine4, 4000);
	setTimeout(doubleLine5, 5000);

}


// move the handle on click
$('#saber').on('click', function(){
	$(this).addClass('clicked');
	setTimeout(function(){
		$('#saber').removeClass('clicked');
	}, 600);
	$('.horz1').empty(); //clears the form so that new images may appear
	$('.horz2').empty();
	$('.horz3').empty();
	//make sure the user has enough credits to make the desired bet.
	if (startingBet <= startingCredits) {
		startingCredits = startingCredits - startingBet; // removes bet values from total remaining
		totalCredits.textContent = creditWithZeros(startingCredits, 6);
		$('#display p').text("May the Force be With You");
		saberAudio.play();
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
			setTimeout(doubleMiddle, 5000);
			console.log("button 20 checked")
		} else if($('#button60').prop("checked")) {
			setTimeout(doubleTriple, 5000);
			console.log("Button 60 checked")
		} else if($('#button100').prop("checked")) {
			setTimeout(doubleDiag, 5000);
			console.log("button 100 checked")
		} else {
			$('#display p').text("Place your Bets")
		}

	} else {
		$('#display p').text("Enter More Credits");
		$('#display p').addClass("needsCredits");
	}	
});

//add credits
	$('#submitCredits').on('click', function(){
		var addedCredits = $('#cashIn').val();
			if (addedCredits > 0 && addedCredits < 100000) {
			startingCredits = startingCredits + parseInt(addedCredits);
			totalCredits.textContent = creditWithZeros(startingCredits, 6);
			$("#addCredits").modal('hide');
			} else {
				$('.modal-body p').text("insert a valid amount of Credits or Depart")
			}
	});

//cash out
	$('#cashOut').click(function(){
		startingCredits = 0;
		totalCredits.textContent = creditWithZeros(startingCredits, 6);
		$('#outCredits').modal('hide');
		exitAudio.play();
	});