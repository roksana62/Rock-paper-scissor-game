const game= ()=>{
    let pScore=0;
    let cScore=0;

//start the game with this function 
  const startGame= ()=>{
    const playBtn= document.querySelector('.intro button');
    const introScreen= document.querySelector('.intro');
    const match= document.querySelector('.match');

    playBtn.addEventListener('click', ()=>{
        introScreen.classList.add('fadeOut');
        match.classList.add('fadeIn')
    })
   
  }

  // play Match
  let playMatch = ()=>{
    let options= document.querySelectorAll('.options button')
    let playerHand= document.querySelector('.player_hand')
    let ComputerHand= document.querySelector('.computer_hand')

    let hands= document.querySelectorAll('.hands img');
    hands.forEach(hand =>{
      hand.addEventListener('animationend', function () {
        this.style.animation= "";
      })
      // const hands = document.querySelectorAll(".hands img");

      // hands.forEach(hand => {
      //   hand.addEventListener("animationend", function() {
      //     this.style.animation = "";
      //   });
    })

    let computerOptions= ['rock', 'paper', 'scissors']

    options.forEach(options =>{
      options.addEventListener('click', (event)=>{
        // computer chooise
        let computerNumber= Math.floor(Math.random()*3);
        let computerChoise= computerOptions[computerNumber];
        let playerChoice = event.target.textContent.toLowerCase();
      //  here is where we call compare hands
    //   options.forEach(option => {
    //     option.addEventListener('click', (event) => {
    //         // Get the text content of the clicked button
    //         let playerChoice = event.target.textContent.toLowerCase();
    
    //         // Computer choice logic...
            
    //         // Update hand images
    //         playerHand.src = `./image/${playerChoice}.png`;
    //         ComputerHand.src = `./image/${computerChoice}.png`;
    
    //         // Compare hands
    //         compareHands(playerChoice, computerChoice);
    //     });
    // });
       setTimeout(()=>{
        compareHands(playerChoice,computerChoise)
        
        playerHand.src = `./assets/${playerChoice}.png`;
        ComputerHand.src = `./assets/${computerChoise}.png`;
       },2000)

    playerHand.style.animation='shakePlayer 2s ease';
    ComputerHand.style.animation='shakeComputer 2s ease';


      });
      
    });

  };

  let updateScore= ()=>{
    let playerScore= document.querySelector('.player_score p')
    let ComputerScore= document.querySelector('.computer_score p')
    playerScore.textContent= pScore;
    ComputerScore.textContent= cScore;
  }

  let compareHands =(playerChoise, computerChoise)=>{
    // update text
    let winner= document.querySelector('.winner')
    // chacking if tie
    if(playerChoise===computerChoise){

      winner.textContent= 'It is a tie';
      return;
    }
    // check for rock
    if(playerChoise==='rock'){
      if(computerChoise==='scissors'){
        winner.textContent='player wins';
        pScore++;
        updateScore();
        return;
      }
      else{
        winner.textContent='computer wins';
        cScore++;
        updateScore();
        return;
      }
    }
    // check for paper
    if(playerChoise==='paper'){
      if(computerChoise==='scissors'){
        winner.textContent='computer wins';
        cScore++;
        updateScore();
        return;
      }
      else{
        winner.textContent='player wins';
        pScore++;
        updateScore();
        return;
      }
    }
    // check for scissors
    if(playerChoise==='scissors'){
      if(computerChoise==='rock'){
        winner.textContent='computer wins';
        cScore++;
        updateScore();
        return;
      }
      else{
        winner.textContent='player wins';
        pScore++;
        updateScore();
        return;
      }
    }
  }

// is call all the inner function
startGame();
playMatch();
}


// start the game function
game();

