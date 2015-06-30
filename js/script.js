$(document).ready(function(){
	$(".selectableItems").selectable();

	$(".answerBox").click(function(){ 
		$(this).addClass("ui-selected").siblings().removeClass("ui-selected");
	});

	$("#mainButton").click(function(){
		var pinyinGuess = $("#pinyinItems .ui-selected").text().replace(/\s+/g,' ').trim();
		var englishGuess = $("#englishItems .ui-selected").text().replace(/\s+/g,' ').trim();
		var pinyinID = $("#pinyinItems .ui-selected").attr("id");
		var englishID = $("#englishItems .ui-selected").attr("id");

		if (pinyinGuess && englishGuess) {
			/*feedbackUpdate("Feedback");*/
			$(this).hide();
			$("#nextButton").show();
			$(".answerBox").siblings().removeClass("ui-selected");
			$(".answerItems").toggleClass("selectableItems");

			debug("Player guess: " + pinyinGuess + ", " + englishGuess);
			questionManager.answerCheck(pinyinGuess, englishGuess, pinyinID, englishID);

		} else {
			feedbackUpdate("Select BOTH answers!");
		}

	});

	$("#nextButton").click(function(){
		$(this).hide();
		
		$(".answerBox").siblings().removeClass("ui-selected");

		$(".answerBox").removeClass("correctItem");
		$(".answerBox").removeClass("wrongItem");

		if (questionManager.totalQuestions > questionManager.questionNum) {
			$("#mainButton").show();
			$(".answerItems").toggleClass("selectableItems");
			feedbackUpdate("Select your answers.");

			questionManager.newQuestion(questionManager.questionList[questionManager.questionNum]);
		} else {
			feedbackUpdate ("All done! " + questionManager.questionPoints + "/" + questionManager.totalQuestions + " correct!");
			$(".answerBox").html("^__^").css
		}

	});

	questionManager.newQuestion(questionManager.questionList[questionManager.questionNum]);

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

function counterUpdate(count, total) {
	$(".counterSpace").html(count + " of " + total);
}

var questionManager = {
	questionNum : 0,
	questionPoints : 0,
	totalQuestions : 5,
	questionList : loadQuestions(questionArr, this.totalQuestions),

/*	questionList : loadQuestions(questionArr),
	totalQuestions : this.questionList.length,*/

	newQuestion : function(questionItem){
		$("#pinyinItems").children().remove();
		$("#englishItems").children().remove();
		$(".charSpace").html(questionItem.chineseDisplay);

		questionItem.pinyinArr.forEach(function(word, idx) {
			appendBlock(word, idx, "pinyin");
		});

		questionItem.englishArr.forEach(function(word, idx) {
			appendBlock(word, idx, "english");
		});

		debug("Correct answer: " + questionManager.questionList[questionManager.questionNum].correctPinyin + ", " + questionManager.questionList[questionManager.questionNum].correctEnglish);

		counterUpdate(this.questionNum + 1, this.totalQuestions);
	},

	answerCheck : function(pinyinGuess, englishGuess, pinyinID, englishID) {
		var corrPin = this.questionList[this.questionNum].correctPinyin;
		var corrEng = this.questionList[this.questionNum].correctEnglish;
	
		if (corrPin == pinyinGuess && corrEng == englishGuess) {
			feedbackUpdate("That's right!");
			this.questionPoints++;
		} else if (corrPin != pinyinGuess && corrEng != englishGuess) {
			feedbackUpdate("Totally wrong!");
		} else {
			feedbackUpdate("Close!");

		}

		$("#" + pinyinID).addClass("wrongItem");
		$("#" + englishID).addClass("wrongItem");

		$("#" + this.questionList[this.questionNum].pinyinID).addClass("correctItem");
		
		$("#" + this.questionList[this.questionNum].englishID).addClass("correctItem");

		this.questionNum++;
	}

}

appendBlock = function(word, idx, lang) {
	$("#" + lang + "Items").append('\
				<li class="answerBox" id="'+ lang + idx + '">' + word + '</li>');
}

/*
var totalQuestions = questionManager.questionList.length;
*/