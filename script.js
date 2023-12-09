// Wait for the DOM content to be fully loaded
window.addEventListener("DOMContentLoaded", function () {

  // Add an event listener for the form submission
  window.addEventListener("submit",function(forma){

    // Prevent the default form submission behavior
  forma.preventDefault();

  // Get all radio buttons with the class "answer" using querySelectorAll
  var radioButtons = document.querySelectorAll('.answer');

  // Get the element with the id "alert"
  var alertDiv = document.getElementById("alert");
    
  var quest = document.querySelectorAll(".question-item");

  // Function to check answers and update styles
  
    var allChecked = Array.from(radioButtons).filter((radioButton) => radioButton.checked);

    var ques_repons = allChecked.reduce(function (acc, radioButton) {
      if(!acc[radioButton.name]) acc[radioButton.name] = 'false';
      if (radioButton.checked) {
        acc[radioButton.name] = radioButton.value;
      }
      return acc;
    }, {});

    var allCorrect = allChecked.every((radioButton) => radioButton.value == "true");

// Function to check answers and update styles
  function checkAnswers() {

    quest.forEach((element, i) => {

      if (ques_repons["answer-" + (i + 1)] == 'true'){
        quest[i].classList.remove('incorrect')
        quest[i].classList.add('correct')
      }
      else {
        quest[i].classList.remove('incorrect') 
        quest[i].classList.add('incorrect');
      }

       
    });

    if(allCorrect && allChecked.length==quest.length){
          
      alertDiv.classList.remove("hide_congrats");
    }else{
      
      alertDiv.classList.add("hide_congrats");
    }

  }

  

  // Find the button and add an event listener
let button = document.querySelector("button");
button.onclick =  checkAnswers();
  


});
});
