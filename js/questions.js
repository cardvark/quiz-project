var question1 = new questionObject(
	["Shēn Tǐ", "Tóu Fa", "Jiān Băng", "Xī Gài"], 
	["Body", "Hair", "Shoulder", "Knee"], 
	"Jiān Băng", 
	"Shoulder", 
	"肩膀");

var question2 = new questionObject(
	["Shēn Tǐ", "Tóu Fa", "Jiān Băng", "Xī Gài"], 
	["Body", "Hair", "Shoulder", "Knee"], 
	"Shēn Tǐ", 
	"Body", 
	"身体");

var question3 = new questionObject(
	["Shēn Tǐ", "Tóu Fa", "Jiān Băng", "Yăn Jīng"], 
	["Body", "Hair", "Shoulder", "Eye"], 
	"Tóu Fa", 
	"Hair", 
	"头发");

var question4 = new questionObject(
	["Shé Tou", "Tóu Fa", "Zuĭ Bā", "Yăn Jīng"], 
	["Tongue", "Hair", "Mouth", "Eye"], 
	"Yăn Jīng", 
	"Eye", 
	"眼睛");

var question5 = new questionObject(
	["Shé Tou", "Tóu Fa", "Zuĭ Bā", "Yăn Jīng"], 
	["Tongue", "Hair", "Mouth", "Eye"], 
	"Zuĭ Bā", 
	"Mouth", 
	"嘴巴");

var questionArr = [
	question1,
	question2,
	question3,
	question4,
	question5
];


function loadQuestions(questionArr, count) {
	count = count || questionArr.length;
	return questionArr.slice(0, count);
}

function questionObject(pinyinArr, englishArr, correctPinyin, correctEnglish, chineseDisplay) {
	this.pinyinArr = shuffle(pinyinArr) || [];
	this.englishArr = shuffle(englishArr) || [];
	this.correctPinyin = correctPinyin || "text";
	this.correctEnglish = correctEnglish || "text";
	this.chineseDisplay = chineseDisplay || "中国话";

	this.pinyinID = "pinyin" + pinyinArr.indexOf(correctPinyin);
	this.englishID = "english" + englishArr.indexOf(correctEnglish);
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex ;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
