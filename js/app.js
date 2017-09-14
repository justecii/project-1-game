var startingCredits = 10;
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

//  function drySpin(num){
//  	var randomFirst = Math.floor(Math.random()*10);
//  	$('.horz2').eq(num).append('<img />');
// 	$('.horz2 img').attr("src", slotImages[randomFirst].source);
// 	$('.horz2').eq(num).addClass(slotImages[randomFirst].name);
// 	if (randomFirst > 0) {
// 		$('.horz1').eq(num).append('<img />');
// 		$('.horz1 img').attr("src", slotImages[randomFirst -1].source);
// 		$('.horz1').eq(num).addClass(slotImages[randomFirst -1].name);
// 	} else {
// 		$('.horz1').eq(num).append('<img />');
// 		$('.horz1 img').attr("src", slotImages[9].source);
// 		$('.horz1').eq(num).addClass(slotImages[9].name);
// 	};
// 	if (randomFirst < 9) {
// 		$('.horz3').eq(num).append('<img />');
// 		$('.horz3 img').attr("src", slotImages[randomFirst + 1].source);
// 		$('.horz3').eq(num).addClass(slotImages[randomFirst + 1].name);
// 	} else {
// 		$('.horz3').eq(num).append('<img />');
// 		$('.horz3 img').attr("src", slotImages[0].source);
// 		$('.horz3').eq(num).addClass(slotImages[0].name);
// 	};
//  };
//  function doubleDry() {
//  	for (var i = 0; i <5; i++) {
// 		drySpin(i);
// 	}
// }
//functions to declare the "spins" for each slot
function spin0() {
	var randomFirst =Math.floor(Math.random()*10);
	$('.horz2').eq(0).append('<img />');
	$('.horz2 img').attr("src", slotImages[randomFirst].source);
	$('.horz2').eq(0).addClass(slotImages[randomFirst].name);
	if (randomFirst > 0) {
		$('.horz1').eq(0).append('<img />');
		$('.horz1 img').attr("src", slotImages[randomFirst -1].source);
		$('.horz1').eq(0).addClass(slotImages[randomFirst -1].name);
	} else {
		$('.horz1').eq(0).append('<img />');
		$('.horz1 img').attr("src", slotImages[9].source);
		$('.horz1').eq(0).addClass(slotImages[9].name);
	};
	if (randomFirst < 9) {
		$('.horz3').eq(0).append('<img />');
		$('.horz3 img').attr("src", slotImages[randomFirst + 1].source);
		$('.horz3').eq(0).addClass(slotImages[randomFirst + 1].name);
	} else {
		$('.horz3').eq(0).append('<img />');
		$('.horz3 img').attr("src", slotImages[0].source);
		$('.horz3').eq(0).addClass(slotImages[0].name);
	};

};
function spin1() {
	var randomFirst =Math.floor(Math.random()*10);
	$('.horz2').eq(1).append('<img />');
	$('.horz2 img').attr("src", slotImages[randomFirst].source);
	$('.horz2').eq(1).addClass(slotImages[randomFirst].name);
	if (randomFirst > 0) {
		$('.horz1').eq(1).append('<img />');
		$('.horz1 img').attr("src", slotImages[randomFirst -1].source);
		$('.horz1').eq(1).addClass(slotImages[randomFirst -1].name);
	} else {
		$('.horz1').eq(1).append('<img />');
		$('.horz1 img').attr("src", slotImages[9].source);
		$('.horz1').eq(1).addClass(slotImages[9].name);
	};
	if (randomFirst < 9) {
		$('.horz3').eq(1).append('<img />');
		$('.horz3 img').attr("src", slotImages[randomFirst + 1].source);
		$('.horz3').eq(1).addClass(slotImages[randomFirst + 1].name);
	} else {
		$('.horz3').eq(1).append('<img />');
		$('.horz3 img').attr("src", slotImages[0].source);
		$('.horz3').eq(1).addClass(slotImages[0].name);
	};
};
function spin2() {
	var randomFirst =Math.floor(Math.random()*10);
	middleRow[2].appendChild(document.createElement("img")).src = slotImages[randomFirst].source;
	// middleRow[2].childNode.className = slotImages[randomFirst].name;
	// console.log(middleRow[2].childNode)
	if (randomFirst > 0) {
		topRow[2].appendChild(document.createElement("img")).src = slotImages[randomFirst - 1].source;
	} else {
		topRow[2].appendChild(document.createElement("img")).src = slotImages[9].source;
	};
	if (randomFirst < 9) {
		bottomRow[2].appendChild(document.createElement("img")).src =slotImages[randomFirst +1].source;
	} else {
		bottomRow[2].appendChild(document.createElement("img")).src =slotImages[0].source;
	};
};
function spin3() {
	var randomFirst =Math.floor(Math.random()*10);
	middleRow[3].appendChild(document.createElement("img")).src = slotImages[randomFirst].source;
	if (randomFirst > 0) {
		topRow[3].appendChild(document.createElement("img")).src = slotImages[randomFirst - 1].source;
	} else {
		topRow[3].appendChild(document.createElement("img")).src = slotImages[9].source;
	};
	if (randomFirst < 9) {
		bottomRow[3].appendChild(document.createElement("img")).src =slotImages[randomFirst +1].source;
	} else {
		bottomRow[3].appendChild(document.createElement("img")).src =slotImages[0].source;
	};
};
function spin4() {
	var randomFirst =Math.floor(Math.random()*10);
	middleRow[4].appendChild(document.createElement("img")).src = slotImages[randomFirst].source;
	if (randomFirst > 0) {
		topRow[4].appendChild(document.createElement("img")).src = slotImages[randomFirst - 1].source;
	} else {
		topRow[4].appendChild(document.createElement("img")).src = slotImages[9].source;
	};
	if (randomFirst < 9) {
		bottomRow[4].appendChild(document.createElement("img")).src =slotImages[randomFirst +1].source;
	} else {
		bottomRow[4].appendChild(document.createElement("img")).src =slotImages[0].source;
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
		movingFalcon();
		setTimeout(spin0, 1900);
		setTimeout(spin1, 2300);
		setTimeout(spin2, 3000);
		setTimeout(spin3, 3600);
		setTimeout(spin4, 4200);

		if ($("#button1").prop("checked", true)) {
			if ($('.horz2').eq(0).hasClass("rey") && $('.horz2').eq(1).hasClass("rey")) {
				startingCredits = startingCredits +1
			} else {
			}
		};
		console.log($('.horz2').eq(0));
		console.log($('.horz2').eq(1));
		console.log($('.horz2').eq(2));
		console.log($('.horz2').eq(3));
		console.log($('.horz2').eq(4));
		
	} else {
		$('#display p').text("Enter More Credits");
		$('#display p').addClass("needsCredits");
	}	
});

//victory logic
//only 1 line





