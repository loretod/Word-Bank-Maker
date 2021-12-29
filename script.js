/*Future things to work on:
- enter keypress for inputs
- new word bank button
- ability to save and reload word banks
*/

function parseText(){
  //gets the text from the textarea
  var pastedText = document.getElementById('pastedText').value;

  //remove the stop words from the string
  pastedText = pastedText.removeStopWords();

  //Creates a word list and remove extra spaces, punctuation marks and lowercases everything
  var wordList = [];
  wordList = pastedText.toLowerCase().replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ");
  wordList= wordList.split(" ").sort();
  let uniqueList = [...new Set(wordList)];
  console.log(uniqueList);

  //hides textarea
  var pastingWindow = document.getElementById('pastingWindow').style.display = "none";

  //creates new div for each word on the list and adds one word to each div 
  var h = document.getElementById('wordBank');
  for (i = 0; i < uniqueList.length; i++){
    var div = document.createElement('div');div.classList.add('word');
    div.addEventListener('click',onClick);
    div.innerHTML = uniqueList[i];
    h.appendChild(div);
  }

  //Shows print button
  document.getElementById('printBtn').style.visibility = "visible";

  //Shows directions to click on words to remove
  M.toast({html: 'Click on the words you would like to remove from the word bank.'})
  
  //Hides unwanted words with a click
  function onClick(div){
    div.target.style.display = "none";
  };

  return uniqueList;
}

//Initializes modals from Materializecss
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems);
  });

//changes the title of the word bank from modal input
function wordBankTitleInput(){
  var wordBankTitle = document.getElementById('titleName').value;
  console.log(wordBankTitle);
  document.getElementById('title').innerText = wordBankTitle;
}

//hides the print button and prints window
function printButton(){
  document.getElementById('printBtn').style.visibility = "hidden"; 
  window.print();
}