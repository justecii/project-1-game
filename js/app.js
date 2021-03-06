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
var tieAudio = new Audio("audio/battle_sfx.wav");
var vaderAudio = new Audio("audio/dont_underestimate.wav");
var c3poAudio = new Audio("audio/alerted.wav");
var exitAudio = new Audio("audio/lack_of_faith.wav");
var chewyAudio = new Audio("audio/chewy.mp3");
var r2d2Audio = new Audio("audio/r2d2.mp3");
var lukeAudio = new Audio("audio/learn_the_ways.wav");
var obiAudio = new Audio("audio/luck.wav");
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
	topRow[num].appendChild(document.createElement("img")).src = slotImages[randomSecond].source;
	topRow[num].childNodes.className = slotImages[randomSecond].name;
	bottomRow[num].appendChild(document.createElement("img")).src =slotImages[randomThird].source;
	bottomRow[num].childNodes.className = slotImages[randomThird].name;
};


//Event Listeners for each of the different betting options
$('#button1').on('click', function(){
	startingBet = 1;
	r2d2Audio.play();
	betSize.textContent = betWithZeros(startingBet, 3);
});
$('#button3').on('click', function(){
	startingBet = 3;
	r2d2Audio.play();
	betSize.textContent = betWithZeros(startingBet, 3);
});
$('#button5').on('click', function(){
	startingBet = 5;
	r2d2Audio.play();
	betSize.textContent = betWithZeros(startingBet, 3);
});
$('#button20').on('click', function(){
	startingBet = 20;
	r2d2Audio.play();
	betSize.textContent = betWithZeros(startingBet, 3);
});
$('#button60').on('click', function(){
	startingBet = 60;
	r2d2Audio.play();
	betSize.textContent = betWithZeros(startingBet, 3);
});
$('#button100').on('click', function(){
	startingBet = 100;
	r2d2Audio.play();
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
	// falconAudio.play();
	tieAudio.play();
	$("#falcon").animate({left: '80%'}, 5000, function(){
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
			vaderAudio.play();
			startingCredits = startingCredits + 10;
			totalCredits.textContent = creditWithZeros(startingCredits, 6);
		};
		
	} else if (middleRow[0].childNodes.className === middleRow[2].childNodes.className) {
		if(middleRow[0].childNodes.className === middleRow[3].childNodes.className || middleRow[0].childNodes.className === middleRow[4].childNodes.className) {
			$('#display p').text("Winner - Line 1!");
			vaderAudio.play();
			startingCredits = startingCredits + 10;
			totalCredits.textContent = creditWithZeros(startingCredits, 6);
		}
	} else if(middleRow[0].childNodes.className === middleRow[3].childNodes.className && middleRow[0].childNodes.className === middleRow[4].childNodes.className) {
		$('#display p').text("Winner - Line 1!");
		vaderAudio.play();
		startingCredits = startingCredits + 10;
		totalCredits.textContent = creditWithZeros(startingCredits, 6);
	} else if(middleRow[1].childNodes.className === middleRow[2].childNodes.className) {
		if (middleRow[1].childNodes.className === middleRow[3].childNodes.className || middleRow[1].childNodes.className === middleRow[4].childNodes.className) {
			$('#display p').text("Winner - Line 1!");
			vaderAudio.play();
			startingCredits = startingCredits + 10;
			totalCredits.textContent = creditWithZeros(startingCredits, 6);
		};
	} else if(middleRow[2].childNodes.className === middleRow[3].childNodes.className && middleRow[2].childNodes.className === middleRow[4].childNodes.className) {
		$('#display p').text("Winner - Line 1!");
		vaderAudio.play();
		startingCredits = startingCredits + 10;
		totalCredits.textContent = creditWithZeros(startingCredits, 6);
	};
};
function topWinner() {
	if (topRow[0].childNodes.className === topRow[1].childNodes.className) {
		if(topRow[0].childNodes.className === topRow[2].childNodes.className || topRow[0].childNodes.className === topRow[3].childNodes.className || topRow[0].childNodes.className === topRow[4].childNodes.className) {
			$('#display p').text("Winner - Line 2!");
			c3poAudio.play();
			startingCredits = startingCredits + 10;
			totalCredits.textContent = creditWithZeros(startingCredits, 6);
		};
		
	} else if (topRow[0].childNodes.className === topRow[2].childNodes.className) {
		if(topRow[0].childNodes.className === topRow[3].childNodes.className || topRow[0].childNodes.className === topRow[4].childNodes.className) {
			$('#display p').text("Winner - Line 2!");
			c3poAudio.play();
			startingCredits = startingCredits + 10;
			totalCredits.textContent = creditWithZeros(startingCredits, 6);
		}
	} else if(topRow[0].childNodes.className === topRow[3].childNodes.className && topRow[0].childNodes.className === topRow[4].childNodes.className) {
		$('#display p').text("Winner - Line 2!");
		c3poAudio.play();
		startingCredits = startingCredits + 10;
		totalCredits.textContent = creditWithZeros(startingCredits, 6);
	} else if(topRow[1].childNodes.className === topRow[2].childNodes.className) {
		if (topRow[1].childNodes.className === topRow[3].childNodes.className || topRow[1].childNodes.className === topRow[4].childNodes.className) {
			$('#display p').text("Winner - Line 2!");
			c3poAudio.play();
			startingCredits = startingCredits + 10;
			totalCredits.textContent = creditWithZeros(startingCredits, 6);
		};
	} else if(topRow[2].childNodes.className === topRow[3].childNodes.className && topRow[2].childNodes.className === topRow[4].childNodes.className) {
		$('#display p').text("Winner - Line 2!");
		c3poAudio.play();
		startingCredits = startingCredits + 10;
		totalCredits.textContent = creditWithZeros(startingCredits, 6);
	};
};
function bottomWinner() {
		if (bottomRow[0].childNodes.className === bottomRow[1].childNodes.className) {
		if(bottomRow[0].childNodes.className === bottomRow[2].childNodes.className || bottomRow[0].childNodes.className === bottomRow[3].childNodes.className || bottomRow[0].childNodes.className === bottomRow[4].childNodes.className) {
			$('#display p').text("Winner - Line 3!");
			chewyAudio.play();
			startingCredits = startingCredits + 10;
			totalCredits.textContent = creditWithZeros(startingCredits, 6);
		};
		
	} else if (bottomRow[0].childNodes.className === bottomRow[2].childNodes.className) {
		if(bottomRow[0].childNodes.className === bottomRow[3].childNodes.className || bottomRow[0].childNodes.className === bottomRow[4].childNodes.className) {
			$('#display p').text("Winner - Line 3!");
			chewyAudio.play();
			startingCredits = startingCredits + 10;
			totalCredits.textContent = creditWithZeros(startingCredits, 6);
		}
	} else if(bottomRow[0].childNodes.className === bottomRow[3].childNodes.className && bottomRow[0].childNodes.className === bottomRow[4].childNodes.className) {
		$('#display p').text("Winner - Line 3!");
		chewyAudio.play();
		startingCredits = startingCredits + 10;
		totalCredits.textContent = creditWithZeros(startingCredits, 6);
	} else if(bottomRow[1].childNodes.className === bottomRow[2].childNodes.className) {
		if (bottomRow[1].childNodes.className === bottomRow[3].childNodes.className || bottomRow[1].childNodes.className === bottomRow[4].childNodes.className) {
			$('#display p').text("Winner - Line 3!");
			chewyAudio.play();
			startingCredits = startingCredits + 10;
			totalCredits.textContent = creditWithZeros(startingCredits, 6);
		};
	} else if(bottomRow[2].childNodes.className === bottomRow[3].childNodes.className && bottomRow[2].childNodes.className === bottomRow[4].childNodes.className) {
		$('#display p').text("Winner - Line 3!");
		chewyAudio.play();
		startingCredits = startingCredits + 10;
		totalCredits.textContent = creditWithZeros(startingCredits, 6);
	};
};
function line4Winner(){
	if (bottomRow[0].childNodes.className === middleRow[1].childNodes.className) {
		if(bottomRow[0].childNodes.className === topRow[2].childNodes.className || bottomRow[0].childNodes.className === middleRow[3].childNodes.className || bottomRow[0].childNodes.className === bottomRow[4].childNodes.className) {
			$('#display p').text("Winner - Line 4!");
			obiAudio.play();
			startingCredits = startingCredits + 10;
			totalCredits.textContent = creditWithZeros(startingCredits, 6);
		} 
	} else if(bottomRow[0].childNodes.className === topRow[2].childNodes.className) {
		if (bottomRow[0].childNodes.className === middleRow[3].childNodes.className || bottomRow[0].childNodes.className === bottomRow[4].childNodes.className) {
			$('#display p').text("Winner - Line 4!");
			obiAudio.play();
			startingCredits = startingCredits + 10;
			totalCredits.textContent = creditWithZeros(startingCredits, 6);
		};
	} else if (bottomRow[0].childNodes.className === middleRow[3].childNodes.className && bottomRow[0].childNodes.className === bottomRow[4].childNodes.className) {
		$('#display p').text("Winner - Line 4!");
		obiAudio.play();
		startingCredits = startingCredits + 10;
		totalCredits.textContent = creditWithZeros(startingCredits, 6);
	} else if (middleRow[1].childNodes.className === topRow[2].childNodes.className){
		if (middleRow[1].childNodes.className === middleRow[3].childNodes.className || middleRow[1].childNodes.className === bottomRow[4].childNodes.className) {
			$('#display p').text("Winner - Line 4!");
			obiAudio.play();
			startingCredits = startingCredits + 10;
			totalCredits.textContent = creditWithZeros(startingCredits, 6);
		}
	} else if (middleRow[1].childNodes.className === middleRow[3].childNodes.className && middleRow[1].childNodes.className === bottomRow[4].childNodes.className) {
		$('#display p').text("Winner - Line 4!");
		obiAudio.play();
		startingCredits = startingCredits + 10;
		totalCredits.textContent = creditWithZeros(startingCredits, 6);
	} else if (topRow[2].childNodes.className === middleRow[3].childNodes.className && topRow[2].childNodes.className === bottomRow[4].childNodes.className) {
		$('#display p').text("Winner - Line 4!");
		obiAudio.play();
		startingCredits = startingCredits + 10;
		totalCredits.textContent = creditWithZeros(startingCredits, 6);
	};
};
function line5Winner(){
	if (topRow[0].childNodes.className === middleRow[1].childNodes.className) {
		if(topRow[0].childNodes.className === bottomRow[2].childNodes.className || topRow[0].childNodes.className === middleRow[3].childNodes.className || topRow[0].childNodes.className === topRow[4].childNodes.className) {
			$('#display p').text("Winner - Line 5!");
			lukeAudio.play();
			startingCredits = startingCredits + 10;
			totalCredits.textContent = creditWithZeros(startingCredits, 6);
		} 
	} else if(topRow[0].childNodes.className === bottomRow[2].childNodes.className) {
		if (topRow[0].childNodes.className === middleRow[3].childNodes.className || topRow[0].childNodes.className === topRow[4].childNodes.className) {
			$('#display p').text("Winner - Line 5!");
			lukeAudio.play();
			startingCredits = startingCredits + 10;
			totalCredits.textContent = creditWithZeros(startingCredits, 6);
		};
	} else if (topRow[0].childNodes.className === middleRow[3].childNodes.className && topRow[0].childNodes.className === topRow[4].childNodes.className) {
		$('#display p').text("Winner - Line 5!");
		lukeAudio.play();
		startingCredits = startingCredits + 10;
		totalCredits.textContent = creditWithZeros(startingCredits, 6);
	} else if (middleRow[1].childNodes.className === bottomRow[2].childNodes.className){
		if (middleRow[1].childNodes.className === middleRow[3].childNodes.className || middleRow[1].childNodes.className === topRow[4].childNodes.className) {
			$('#display p').text("Winner - Line 5!");
			lukeAudio.play();
			startingCredits = startingCredits + 10;
			totalCredits.textContent = creditWithZeros(startingCredits, 6);
		}
	} else if (middleRow[1].childNodes.className === middleRow[3].childNodes.className && middleRow[1].childNodes.className === topRow[4].childNodes.className) {
		$('#display p').text("Winner - Line 5!");
		lukeAudio.play();
		startingCredits = startingCredits + 10;
		totalCredits.textContent = creditWithZeros(startingCredits, 6);
	} else if (bottomRow[2].childNodes.className === middleRow[3].childNodes.className && bottomRow[2].childNodes.className === topRow[4].childNodes.className) {
		$('#display p').text("Winner - Line 5!");
		lukeAudio.play();
		startingCredits = startingCredits + 10;
		totalCredits.textContent = creditWithZeros(startingCredits, 6);
	};
};
function doubleMiddle () {
	if (middleRow[0].childNodes.className === middleRow[1].childNodes.className) {
		if(middleRow[0].childNodes.className === middleRow[2].childNodes.className || middleRow[0].childNodes.className === middleRow[3].childNodes.className || middleRow[0].childNodes.className === middleRow[4].childNodes.className) {
			$('#display p').text("Winner - Line 1!");
			vaderAudio.play();
			startingCredits = startingCredits + 200;
			totalCredits.textContent = creditWithZeros(startingCredits, 6);
		};
		
	} else if (middleRow[0].childNodes.className === middleRow[2].childNodes.className) {
		if(middleRow[0].childNodes.className === middleRow[3].childNodes.className || middleRow[0].childNodes.className === middleRow[4].childNodes.className) {
			$('#display p').text("Winner - Line 1!");
			vaderAudio.play();
			startingCredits = startingCredits + 200;
			totalCredits.textContent = creditWithZeros(startingCredits, 6);
		}
	} else if(middleRow[0].childNodes.className === middleRow[3].childNodes.className && middleRow[0].childNodes.className === middleRow[4].childNodes.className) {
		$('#display p').text("Winner - Line 1!");
		vaderAudio.play();
		startingCredits = startingCredits + 200;
		totalCredits.textContent = creditWithZeros(startingCredits, 6);
	} else if(middleRow[1].childNodes.className === middleRow[2].childNodes.className) {
		if (middleRow[1].childNodes.className === middleRow[3].childNodes.className || middleRow[1].childNodes.className === middleRow[4].childNodes.className) {
			$('#display p').text("Winner - Line 1!");
			vaderAudio.play();
			startingCredits = startingCredits + 200;
			totalCredits.textContent = creditWithZeros(startingCredits, 6);
		};
	} else if(middleRow[2].childNodes.className === middleRow[3].childNodes.className && middleRow[2].childNodes.className === middleRow[4].childNodes.className) {
		$('#display p').text("Winner - Line 1!");
		vaderAudio.play();
		startingCredits = startingCredits + 200;
		totalCredits.textContent = creditWithZeros(startingCredits, 6);
	};
};
function doubleTop () {
	if (topRow[0].childNodes.className === topRow[1].childNodes.className) {
		if(topRow[0].childNodes.className === topRow[2].childNodes.className || topRow[0].childNodes.className === topRow[3].childNodes.className || topRow[0].childNodes.className === topRow[4].childNodes.className) {
			$('#display p').text("Winner - Line 2!");
			c3poAudio.play();
			startingCredits = startingCredits + 200;
			totalCredits.textContent = creditWithZeros(startingCredits, 6);
		};
		
	} else if (topRow[0].childNodes.className === topRow[2].childNodes.className) {
		if(topRow[0].childNodes.className === topRow[3].childNodes.className || topRow[0].childNodes.className === topRow[4].childNodes.className) {
			$('#display p').text("Winner - Line 2!");
			c3poAudio.play();
			startingCredits = startingCredits + 200;
			totalCredits.textContent = creditWithZeros(startingCredits, 6);
		}
	} else if(topRow[0].childNodes.className === topRow[3].childNodes.className && topRow[0].childNodes.className === topRow[4].childNodes.className) {
		$('#display p').text("Winner - Line 2!");
		c3poAudio.play();
		startingCredits = startingCredits + 200;
		totalCredits.textContent = creditWithZeros(startingCredits, 6);
	} else if(topRow[1].childNodes.className === topRow[2].childNodes.className) {
		if (topRow[1].childNodes.className === topRow[3].childNodes.className || topRow[1].childNodes.className === topRow[4].childNodes.className) {
			$('#display p').text("Winner - Line 2!");
			c3poAudio.play();
			startingCredits = startingCredits + 200;
			totalCredits.textContent = creditWithZeros(startingCredits, 6);
		};
	} else if(topRow[2].childNodes.className === topRow[3].childNodes.className && topRow[2].childNodes.className === topRow[4].childNodes.className) {
		$('#display p').text("Winner - Line 2!");
		c3poAudio.play();
		startingCredits = startingCredits + 200;
		totalCredits.textContent = creditWithZeros(startingCredits, 6);
	};
};
function doubleBottom () {
	if (bottomRow[0].childNodes.className === bottomRow[1].childNodes.className) {
		if(bottomRow[0].childNodes.className === bottomRow[2].childNodes.className || bottomRow[0].childNodes.className === bottomRow[3].childNodes.className || bottomRow[0].childNodes.className === bottomRow[4].childNodes.className) {
			$('#display p').text("Winner - Line 3!");
			chewyAudio.play();
			startingCredits = startingCredits + 200;
			totalCredits.textContent = creditWithZeros(startingCredits, 6);
		};
		
	} else if (bottomRow[0].childNodes.className === bottomRow[2].childNodes.className) {
		if(bottomRow[0].childNodes.className === bottomRow[3].childNodes.className || bottomRow[0].childNodes.className === bottomRow[4].childNodes.className) {
			$('#display p').text("Winner - Line 3!");
			chewyAudio.play();
			startingCredits = startingCredits + 200;
			totalCredits.textContent = creditWithZeros(startingCredits, 6);
		}
	} else if(bottomRow[0].childNodes.className === bottomRow[3].childNodes.className && bottomRow[0].childNodes.className === bottomRow[4].childNodes.className) {
		$('#display p').text("Winner - Line 3!");
		chewyAudio.play();
		startingCredits = startingCredits + 200;
		totalCredits.textContent = creditWithZeros(startingCredits, 6);
	} else if(bottomRow[1].childNodes.className === bottomRow[2].childNodes.className) {
		if (bottomRow[1].childNodes.className === bottomRow[3].childNodes.className || bottomRow[1].childNodes.className === bottomRow[4].childNodes.className) {
			$('#display p').text("Winner - Line 3!");
			chewyAudio.play();
			startingCredits = startingCredits + 200;
			totalCredits.textContent = creditWithZeros(startingCredits, 6);
		};
	} else if(bottomRow[2].childNodes.className === bottomRow[3].childNodes.className && bottomRow[2].childNodes.className === bottomRow[4].childNodes.className) {
		$('#display p').text("Winner - Line 3!");
		chewyAudio.play();
		startingCredits = startingCredits + 200;
		totalCredits.textContent = creditWithZeros(startingCredits, 6);
	};
};
function doubleLine4() {
	if (bottomRow[0].childNodes.className === middleRow[1].childNodes.className) {
		if(bottomRow[0].childNodes.className === topRow[2].childNodes.className || bottomRow[0].childNodes.className === middleRow[3].childNodes.className || bottomRow[0].childNodes.className === bottomRow[4].childNodes.className) {
			$('#display p').text("Winner - Line 4!");
			obiAudio.play();
			startingCredits = startingCredits + 200;
			totalCredits.textContent = creditWithZeros(startingCredits, 6);
		} 
	} else if(bottomRow[0].childNodes.className === topRow[2].childNodes.className) {
		if (bottomRow[0].childNodes.className === middleRow[3].childNodes.className || bottomRow[0].childNodes.className === bottomRow[4].childNodes.className) {
			$('#display p').text("Winner - Line 4!");
			obiAudio.play();
			startingCredits = startingCredits + 200;
			totalCredits.textContent = creditWithZeros(startingCredits, 6);
		};
	} else if (bottomRow[0].childNodes.className === middleRow[3].childNodes.className && bottomRow[0].childNodes.className === bottomRow[4].childNodes.className) {
		$('#display p').text("Winner - Line 4!");
		obiAudio.play();
		startingCredits = startingCredits + 200;
		totalCredits.textContent = creditWithZeros(startingCredits, 6);
	} else if (middleRow[1].childNodes.className === topRow[2].childNodes.className){
		if (middleRow[1].childNodes.className === middleRow[3].childNodes.className || middleRow[1].childNodes.className === bottomRow[4].childNodes.className) {
			$('#display p').text("Winner - Line 4!");
			obiAudio.play();
			startingCredits = startingCredits + 200;
			totalCredits.textContent = creditWithZeros(startingCredits, 6);
		}
	} else if (middleRow[1].childNodes.className === middleRow[3].childNodes.className && middleRow[1].childNodes.className === bottomRow[4].childNodes.className) {
		$('#display p').text("Winner - Line 4!");
		obiAudio.play();
		startingCredits = startingCredits + 200;
		totalCredits.textContent = creditWithZeros(startingCredits, 6);
	} else if (topRow[2].childNodes.className === middleRow[3].childNodes.className && topRow[2].childNodes.className === bottomRow[4].childNodes.className) {
		$('#display p').text("Winner - Line 4!");
		obiAudio.play();
		startingCredits = startingCredits + 200;
		totalCredits.textContent = creditWithZeros(startingCredits, 6);
	};
};
function doubleLine5 () {
	if (topRow[0].childNodes.className === middleRow[1].childNodes.className) {
		if(topRow[0].childNodes.className === bottomRow[2].childNodes.className || topRow[0].childNodes.className === middleRow[3].childNodes.className || topRow[0].childNodes.className === topRow[4].childNodes.className) {
			$('#display p').text("Winner - Line 5!");
			lukeAudio.play();
			startingCredits = startingCredits + 200;
			totalCredits.textContent = creditWithZeros(startingCredits, 6);
		} 
	} else if(topRow[0].childNodes.className === bottomRow[2].childNodes.className) {
		if (topRow[0].childNodes.className === middleRow[3].childNodes.className || topRow[0].childNodes.className === topRow[4].childNodes.className) {
			$('#display p').text("Winner - Line 5!");
			lukeAudio.play();
			startingCredits = startingCredits + 200;
			totalCredits.textContent = creditWithZeros(startingCredits, 6);
		};
	} else if (topRow[0].childNodes.className === middleRow[3].childNodes.className && topRow[0].childNodes.className === topRow[4].childNodes.className) {
		$('#display p').text("Winner - Line 5!");
		lukeAudio.play();
		startingCredits = startingCredits + 200;
		totalCredits.textContent = creditWithZeros(startingCredits, 6);
	} else if (middleRow[1].childNodes.className === bottomRow[2].childNodes.className){
		if (middleRow[1].childNodes.className === middleRow[3].childNodes.className || middleRow[1].childNodes.className === topRow[4].childNodes.className) {
			$('#display p').text("Winner - Line 5!");
			lukeAudio.play();
			startingCredits = startingCredits + 200;
			totalCredits.textContent = creditWithZeros(startingCredits, 6);
		}
	} else if (middleRow[1].childNodes.className === middleRow[3].childNodes.className && middleRow[1].childNodes.className === topRow[4].childNodes.className) {
		$('#display p').text("Winner - Line 5!");
		lukeAudio.play();
		startingCredits = startingCredits + 200;
		totalCredits.textContent = creditWithZeros(startingCredits, 6);
	} else if (bottomRow[2].childNodes.className === middleRow[3].childNodes.className && bottomRow[2].childNodes.className === topRow[4].childNodes.className) {
		$('#display p').text("Winner - Line 5!");
		lukeAudio.play();
		startingCredits = startingCredits + 200;
		totalCredits.textContent = creditWithZeros(startingCredits, 6);
	};
};

//call functions equal to what bet is placed
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

	var wait = false;
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
	if (startingBet <= startingCredits && wait === false) {
		wait = true;
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
		setTimeout(function(){
			wait = false;
		}, 5000);
		if ($('#button1').prop("checked")) {
			setTimeout(middleWinner, 5000);
		} else if ($('#button3').prop("checked")) {
			setTimeout(tripleWinner, 5000);
		} else if ($('#button5').prop("checked")) {
			setTimeout(diagWinner, 5000);
		} else if($('#button20').prop("checked")) {
			setTimeout(doubleMiddle, 5000);
		} else if($('#button60').prop("checked")) {
			setTimeout(doubleTriple, 5000);
		} else if($('#button100').prop("checked")) {
			setTimeout(doubleDiag, 5000);
		} else {
			$('#display p').text("Place your Bets")
		}

	} else {
		$('#display p').text("Enter More Credits"); //make sure they add more credits to keep playing
		$('#display p').addClass("needsCredits");
	}	
});

//add credits
	$('#submitCredits').on('click', function(){
		var addedCredits = $('#cashIn').val();
			if (addedCredits > 0 && addedCredits < 100000) {
				cantinaAudio.play();
				startingCredits = startingCredits + parseInt(addedCredits);
				totalCredits.textContent = creditWithZeros(startingCredits, 6);
				$("#addCredits").modal('hide');
				$('#display p').text("Pull the saber and Defeat the Empire");
				$('#display p').removeClass("needsCredits");
			} else {
				$('.modal-body p').text("insert a valid amount of Credits or Depart")
			}
	});

//cash out
	$('#cashOut').click(function(){
		startingCredits = 0;
		totalCredits.textContent = creditWithZeros(startingCredits, 6);
		$('#outCredits').modal('hide');
		cantinaAudio.pause();
		exitAudio.play();
	});