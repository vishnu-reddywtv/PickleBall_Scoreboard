//toggling the pickleplay buttons



function toggleRadio(element) {
    const isEnabled = element.dataset.enabled === "true";

    if (isEnabled) {
      element.classList.remove("enabled"); 
      element.dataset.enabled = "false";
    } else {
      element.classList.add("enabled"); 
      element.dataset.enabled = "true";
    }

   
  }



  function swapAttributes(element1, element2, attribute) {
    const temp = element1.getAttribute(attribute);
    element1.setAttribute(attribute, element2.getAttribute(attribute));
    element2.setAttribute(attribute, temp);
    console.log(element1.getAttribute(attribute)+ ":"+element1.textContent);
    console.log(element2.getAttribute(attribute)+":"+element2.textContent);

  }


function swapTextContent(element1, element2) {
  const temp = element1.textContent;
  element1.textContent = element2.textContent;
  element2.textContent = temp;
}


function swapInnerHTML(element1, element2) {
  const temp = element1.innerHTML;
  element1.innerHTML = element2.innerHTML;
  element2.innerHTML = temp;
}



document.getElementById("refreshButton").addEventListener("click", () => {
  console.log("Refresh button clicked"); 
  // refreshReviewButtons();

  // Swap team names
  const teamLeft = document.getElementById("team-left");
  const teamRight = document.getElementById("team-right");
  console.log("Before swapping team names:", teamLeft.textContent, teamRight.textContent); 
  swapTextContent(teamLeft, teamRight);
  console.log("After swapping team names:", teamLeft.textContent, teamRight.textContent); 

  // Swap players
  const teamPlayersLeft = document.querySelector(".team-players-left");
  const teamPlayersRight = document.querySelector(".team-players-right");
  console.log("Before swapping players:", teamPlayersLeft.innerHTML, teamPlayersRight.innerHTML); 
  swapInnerHTML(teamPlayersLeft, teamPlayersRight);
  console.log("After swapping players:", teamPlayersLeft.innerHTML, teamPlayersRight.innerHTML);


  const teamScoreLeft = document.getElementById("value-left");
  const teamScoreRight = document.getElementById("value-right");
  console.log("Before swapping team names:", teamScoreLeft.textContent, teamScoreRight.textContent); 
  swapTextContent(teamScoreLeft, teamScoreRight);
  console.log("After swapping team names:", teamScoreLeft.textContent, teamScoreRight.textContent); 



  const verbalWarningLeft = document.getElementById("verbal-warning-left"); 
  const verbalWarningRight = document.getElementById("verbal-warning-right"); 
  const technicalWarningLeft = document.getElementById("technical-warning-left"); 
  const technicalWarningRight = document.getElementById("technical-warning-right"); 
  const technicalFoulLeft = document.getElementById("technical-foul-left"); 
  const technicalFoulRight = document.getElementById("technical-foul-right"); 
  
  console.log("Before swapping warnings:", verbalWarningLeft.textContent, verbalWarningRight.textContent, technicalWarningLeft.textContent, technicalWarningRight.textContent, technicalFoulLeft.textContent, technicalFoulRight.textContent); 

  swapTextContent(verbalWarningLeft, verbalWarningRight); 
  swapTextContent(technicalWarningLeft, technicalWarningRight); 
  swapTextContent(technicalFoulLeft, technicalFoulRight); 
  
  console.log("After swapping warnings:", verbalWarningLeft.textContent, verbalWarningRight.textContent, technicalWarningLeft.textContent, technicalWarningRight.textContent, technicalFoulLeft.textContent, technicalFoulRight.textContent);


  // swapAttributes(verbalWarningLeft, verbalWarningRight, "id");
  // swapAttributes(technicalWarningLeft, technicalWarningRight, "id");
  // swapAttributes(technicalFoulLeft, technicalFoulRight, "id");

  
  // const teamWarningsContentLeft = document.getElementById("warnings-left");
  // const teamWarningsContentRight = document.getElementById("warnings-right");
  // console.log("Before swapping team names:", teamWarningsContentLeft.textContent, teamWarningsContentRight.textContent); 
  // swapTextContent(teamWarningsContentLeft, teamWarningsContentRight);
  // console.log("After swapping team names:", teamWarningsContentLeft.textContent, teamWarningsContentRight.textContent);
  
  // Refresh_foul_warnings();
 

});

// function Refresh_foul_warnings(){
//   const element_foul_right= document.getElementById("technical-foul-right");
//   if (element_foul_right.textContent.contains("2")) {
//     document.getElementById("technical-foul-right").classList.add("red-warning");
//   }
//   else{
//     document.getElementById("technical-foul-right").classList.remove("red-warning");
//   }

//   const element_foul_left= document.getElementById("technical-foul-left");
//   if (element_foul_left.textContent.contains("2")) {
//     document.getElementById("technical-foul-left").classList.add("red-warning");
//   }
//   else{
//     document.getElementById("technical-foul-left").classList.remove("red-warning");
//   }
// }



  document.addEventListener("DOMContentLoaded", () => {
    let timerInterval; // Store the interval ID
    let timeRemaining = 15 * 60; // Timer starts at 15 minutes (in seconds)
  
    // Function to format time as MM:SS
    function formatTime(seconds) {
      const minutes = Math.floor(seconds / 60);
      const secs = seconds % 60;
      return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
    }
  
    // Function to update the timer display
    function updateTimerDisplay() {
      const timerElement = document.querySelector(".timer");
      if (timerElement) {
        timerElement.textContent = formatTime(timeRemaining);
      }
    }
  
    // Function to start the timer
    function startTimer() {
      if (timerInterval) return; // Prevent multiple intervals
      timerInterval = setInterval(() => {
        if (timeRemaining > 0) {
          timeRemaining--;
          updateTimerDisplay();
        } else {
          clearInterval(timerInterval); // Stop timer at 0
          timerInterval = null;
        }
      }, 1000);
    }
  
    // Function to stop the timer
    function stopTimer() {
      clearInterval(timerInterval);
      timerInterval = null;
    }
  
    // Function to reset the timer
    function resetTimer() {
      stopTimer();
      timeRemaining = 15 * 60; // Reset to 15 minutes
      updateTimerDisplay();
    }
  
    // Attach event listeners to buttons
    const startButton = document.querySelector(".match-row-team1 .match-row-button:nth-of-type(1)");
    const stopButton = document.querySelector(".match-row-team1 .match-row-button:nth-of-type(2)");
    const resetButton = document.querySelector(".match-row-team2 .match-row-button:nth-of-type(1)");
  
    if (startButton) startButton.addEventListener("click", startTimer);
    if (stopButton) stopButton.addEventListener("click", stopTimer);
    if (resetButton) resetButton.addEventListener("click", resetTimer);
  
    // Initialize the timer display
    updateTimerDisplay();
  });
  

  
  let timerInterval; 
  let seconds_Internal = 60; 

  function increment(side) { 
    const valueElement = document.getElementById(`${side}-value`); 
    let value = parseInt(valueElement.textContent); 
    valueElement.textContent = value + 1; 
  }
  function decrement(side) { 
    const valueElement = document.getElementById(`${side}-value`); 
    let value = parseInt(valueElement.textContent); 
    if (value > 0) { 
      valueElement.textContent = value - 1;
    } 
  } 

  function formatTime_Internal(seconds_Internal) { 
    const minutes = Math.floor(seconds_Internal / 60); 
    const remainingSeconds = seconds_Internal % 60; 
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
  }

  function startTimer_Internal() { 
    clearInterval(timerInterval); 
    seconds_Internal = 60; 
    document.getElementById('timer').textContent="01:00";
    timerInterval = setInterval(() => 
      { seconds_Internal--; 
        document.getElementById('timer').textContent = formatTime_Internal(seconds_Internal);
        if (seconds_Internal <= 0) { 
          clearInterval(timerInterval); 
        } 
      }, 1000); 
  } 
  function stopTimer_Internal() {
    clearInterval(timerInterval); 
  } 
  


  //for incrementing and decrementing the value in left side value
  
  
  function increment(side) { 
    console.log(`increment function called for ${side}`);
    var valueElement = document.getElementById(`value-${side}`); 
    console.log(valueElement);
    let value = parseInt(valueElement.textContent); 
    valueElement.textContent = value + 1;
  }

  function decrement(side) { 
    console.log(`Decrement function called for ${side}`);
    var valueElement = document.getElementById(`value-${side}`); 
    console.log(valueElement)
    let value = parseInt(valueElement.textContent); 
    if (value > 0) { 
      valueElement.textContent = value - 1; 
    }
  }


  function incrementVWReviewCount(side) { 
    console.log(`verbal-warning-${side}`)
    const valueElement = document.getElementById(`verbal-warning-${side}`); 
    // if (!valueElement) {
    //   console.log("vishnu");
    //   console.error(`Element with ID verbal-warning-${side}-value not found.`);
    //   return;
    // }
  
    // Parse the current value or set it to 0 if it's not a number
    let [prefix, number] = valueElement.textContent.split(" "); // Splits by space
    // let value = parseInt(valueElement.textContent);
    console.log(parseInt(number));
    if (isNaN(parseInt(number))) {
      console.log("vishnureddy");

      number = 0; // Initialize to 0 if the content is invalid
    }
  
    // Increment and update the value
    // valueElement.textContent = value + 1;
    NewNumber=parseInt(number)+1;
    valueElement.textContent=`${prefix}${" "}${NewNumber}`;
    if (NewNumber === 2) {
      document.getElementById(`verbal-warning-${side}`).classList.add("red-warning"); // Add the red-warning class
    } else {
      document.getElementById(`verbal-warning-${side}`).classList.remove("red-warning"); // Remove the red-warning class if not VW 2
    }
  }

 

  function incrementTWReviewCount(side) { 
    console.log(`technical-warning-${side}`)
    const valueElement = document.getElementById(`technical-warning-${side}`); 
    // if (!valueElement) {
    //   console.log("vishnu");
    //   console.error(`Element with ID verbal-warning-${side}-value not found.`);
    //   return;
    // }
  
    // Parse the current value or set it to 0 if it's not a number
    let [prefix, number] = valueElement.textContent.split(" "); // Splits by space
    // let value = parseInt(valueElement.textContent);
    if (isNaN(parseInt(number))) {
      number = 0; // Initialize to 0 if the content is invalid
    }
  
    // Increment and update the value
    // valueElement.textContent = value + 1;
    NewNumber=parseInt(number)+1;
    valueElement.textContent=`${prefix}${" "}${NewNumber}`;
    if(NewNumber === 2){
      document.getElementById(`technical-warning-${side}`).classList.add("red-warning");
    }
    else{
      document.getElementById(`technical-warning-${side}`).classList.remove("red-warning");
    }
  }

  
  function incrementTFReviewCount(side) { 
    console.log(`technical-foul-${side}`)
    const valueElement = document.getElementById(`technical-foul-${side}`); 
    // if (!valueElement) {
    //   console.log("vishnu");
    //   console.error(`Element with ID verbal-warning-${side}-value not found.`);
    //   return;
    // }
  
    // Parse the current value or set it to 0 if it's not a number
    let [prefix, number] = valueElement.textContent.split(" "); // Splits by space
    // let value = parseInt(valueElement.textContent);
    if (isNaN(parseInt(number))) {
      number = 0; // Initialize to 0 if the content is invalid
    }
  
    // Increment and update the value
    // valueElement.textContent = value + 1;
    NewNumber=parseInt(number)+1;
    valueElement.textContent=`${prefix}${" "}${NewNumber}`;
    if (NewNumber === 2) {
      
      document.getElementById(`technical-foul-${side}`).classList.add("red-warning"); // Add the red-warning class
    } else {
      document.getElementById(`technical-foul-${side}`).classList.remove("red-warning"); // Remove the red-warning class if not VW 2
    }
  }

  // if(document.getElementById("technical-foul-right").textContent.contains("2")){
  //   document.getElementById("technical-foul-right").classList.add("red-warning"); 
  // }
  // if(document.getElementById("technical-foul-left").textContent.contains("2")){
  //   document.getElementById("technical-foul-left").classList.add("red-warning"); 
  // }


  // function decrement(side) { 
  //   const valueElement = document.getElementById(`value-${side}`); 
  //   let value = parseInt(valueElement.textContent); 
  //   if (value > 0) { 
  //     valueElement.textContent = value - 1; 
  //   }
  // }


  document.getElementById('increment-left').addEventListener('click', () =>{console.log('Increment left button clicked'); increment('left')}); 
  document.getElementById('decrement-left').addEventListener('click', () => {console.log('Decrement left button clicked'); decrement('left')});
  document.getElementById('increment-right').addEventListener('click', () => increment('right')); 
  document.getElementById('decrement-right').addEventListener('click', () => decrement('right'));
  document.getElementById("verbal-warning-left").addEventListener("click", () => incrementVWReviewCount("left"));
  document.getElementById("verbal-warning-right").addEventListener("click", () => incrementVWReviewCount("right"));
  document.getElementById("technical-warning-left").addEventListener("click", () => incrementTWReviewCount("left"));
  document.getElementById("technical-warning-right").addEventListener("click", () => incrementTWReviewCount("right"));
  document.getElementById("technical-foul-left").addEventListener("click", () => incrementTFReviewCount("left"));
  document.getElementById("technical-foul-right").addEventListener("click", () => incrementTFReviewCount("right"));



  // document.addEventListener("DOMContentLoaded", () => {
  //   // Function to increment the value inside a span tag
  //   // function incrementValue(spanId) {
  //   //   const spanElement = document.getElementById(spanId);
  //   //   console.log("outside");
     
  //   //   if(isNaN(parseInt(spanElement.textContent))){
  //   //     console.log("nbvkjnxvknvkjjk");
  //   //     spanElement.textContent = 1;
  //   //   }
  //   //   else{
  //   //     let value = parseInt(spanElement.textContent);
  //   //     spanElement.textContent = value + 1;
  //   //   }
  //   // }

  //   function incrementValue(spanId) {
  //     console.log("sssssssssssssss",spanId)
  //     const spanElement = document.getElementById(`${spanId}`);
  //     if (spanElement) {
  //       if (isNaN(parseInt(spanElement.textContent))) {
  //         spanElement.textContent = 1;
  //       } else {
  //         let value = parseInt(spanElement.textContent);
  //         spanElement.textContent = value + 1;
  //       }
  //     } else {
  //       console.error(`Element with ID ${spanId} not found.`);
  //     }
  //   }
    
  //   // document.getElementById("verbal-warning-left").addEventListener("click", () => incrementValue("verbal-warning-left-value"));
  //   document.getElementById("technical-warning-left").addEventListener("click", () => incrementValue("technical-warning-left-value"));
  //   document.getElementById("technical-foul-left").addEventListener("click", () => incrementValue("technical-foul-left-value"));
    
    
  
  //   // Add event listeners to the VW, TW, and TF buttons for the left side
    
  // });



  

  // document.addEventListener("DOMContentLoaded", () => {
  //   // Function to increment the value inside a span tag
  //   function incrementValues(spanId) {
  //     console.log("span_id",spanId)
  //     const spanElement = document.getElementById(`${spanId}`);
  //     console.log("outside");
  //     if(isNaN(parseInt(spanElement.textContent))){
  //       console.log("nbvkjnxvknvkjjk");
  //       spanElement.textContent = 1;
  //     }
  //     else{
  //       let value = parseInt(spanElement.textContent);
  //       spanElement.textContent = value + 1;
  //     }
  //   }
  
  //   // Add event listeners to the VW, TW, and TF buttons for the left side
  //   // document.getElementById("verbal-warning-right").addEventListener("click", () => incrementValues("verbal-warning-right-value"));
  //   document.getElementById("technical-warning-right").addEventListener("click", () => incrementValues("technical-warning-right-value"));
  //   document.getElementById("technical-foul-right").addEventListener("click", () => incrementValues("technical-foul-right-value"));
  // });


