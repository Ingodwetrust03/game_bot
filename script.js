"use strict"

let botNumber
let message 
let userNumber 
let hints


const isNumber = function(num){
    return !isNaN(parseFloat(num)) && isFinite(num)
}



function startGame(){

        botNumber = Math.round(Math.random()*100)
        console.log(botNumber) 

       
        message = +prompt('Угадай число от 1 до 100')

    function getHints(message, userNumber ){
    message
    userNumber = message

    console.log(userNumber)
    console.log(botNumber)   


        if(botNumber < userNumber){
            message = +prompt('Загаданное число меньше')
            getHints(message)
            return userNumber

        } else if(botNumber > userNumber){
                message = +prompt('Загаданное число больше')
                getHints(message)
                return userNumber
            } else if(!isNumber(userNumber)){
                message = +prompt('Введи число!')
                getHints(message)
                return userNumber
        } else if (message == null || message == false ){
                alert('Игра окончена')
        } else if (botNumber == userNumber){
            alert('Поздравляю, Вы угадали!!!')
        }
    }
          
          
    hints = getHints()
return userNumber
   }

    startGame(botNumber) 

