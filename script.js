const mesGen = document.querySelector(".button-74");
let message = document.querySelector(".message");

function numGen(num) {
  return Math.floor(Math.random() * num);
}


const MessageComponents = {
  days: ["Monday", "Tuesday", " Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
  
  temp: ["28", "12", "24", "5", "0"],
  
  conditions: ["foggy", "sunny", "cloudy", "snowy", "partly cloudy"]

}

const RandomWord = (array) => {
  
  for(let i in MessageComponents) {
    
    let index = numGen(MessageComponents[i].length);
    
    if(i === 'days' && array === 'days') {
      return MessageComponents[array][index]
    } else if (i === 'temp' && array === 'temp') {
      return MessageComponents[array][index]
    } else if (i === 'conditions' && array === 'conditions'){
      return MessageComponents[array][index]
    }
  }
    
}

const generateRandomMessage = () => {
  return `It's ${RandomWord('days')}, and the temperature is ${RandomWord('temp')} ° C so it looks like it'll be ${RandomWord('conditions')}`;
};


mesGen.addEventListener("click", function () {
  message.textContent = generateRandomMessage();
});
