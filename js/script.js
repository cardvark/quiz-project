$(document).ready(function(){
/*	$(".answerItems").selectable();*/

	$(".selectableItems").selectable();

	$(".answerBox").click(function(){ 
		$(this).addClass("ui-selected").siblings().removeClass("ui-selected");
	});

	$("#mainButton").click(function(){
		var pinyinGuess = $("#pinyinItems .ui-selected").text().replace(/\s+/g,' ').trim();
		var englishGuess = $("#englishItems .ui-selected").text().replace(/\s+/g,' ').trim();
		var pinyinID = $("#pinyinItems .ui-selected").attr("id");
		var englishID = $("#englishItems .ui-selected").attr("id");

		debug(pinyinGuess);
		debug(englishGuess);
		debug(pinyinID);
		debug(englishID);

		if (pinyinGuess && englishGuess) {
			feedbackUpdate("Feedback");
			$(this).hide();
			$("#nextButton").show();
			$(".answerBox").siblings().removeClass("ui-selected");
			$(".answerItems").toggleClass("selectableItems");
		} else {
			feedbackUpdate("Select BOTH answers!");
		}

	});

	$("#nextButton").click(function(){
		$(this).hide();
		$("#mainButton").show();
		$(".answerBox").siblings().removeClass("ui-selected");
		$(".answerItems").toggleClass("selectableItems");
	});

});

var DEBUG_MODE = true;

var debug = function(msg) {
    if (DEBUG_MODE == true) {
        console.log("DEBUG:", msg);
    }
}

function feedbackUpdate(newText) {
	$(".yesNoText").html(newText);
}

function playerAnswer(pinyinID, englishID, pinyinText, englishText) {
	this.pinyinID = pinyinID || "default";
	this.englishID = englishID || "default";
	this.pinyinText = pinyinText || "default";
	this.englishText = englishText || "default";
}

function questionObject(pinyinArr, englishArr, correctPinyin, correctEnglish, chineseDisplay) {
	this.pinyinArr = pinyinArr || [];
	this.englishArr = englishArr || [];
	this.correctPinyin = correctPinyin || "text";
	this.correctEnglish = correctEnglish || "text";
	this.chineseDisplay = chineseDisplay || "中国话";
}

var question1 = new questionObject(["Zhōngguó huà", "Wèishēngzhǐ", "Zìxíngchē", "Liúshuǐ"], ["Chinese words", "Toilet paper", "Bicycle", "Fire hose"], "Zìxíngchē", "Bicycle", "自行车");

function newQuestion(questionItem){
	
}