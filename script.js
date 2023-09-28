let x = Math.floor(Math.random()*50) + 1
x = x.toString()
let i = 0

numberList = []
const onClickPlay = (e)=>{
 e.preventDefault()
 i++
 let number =  document.querySelector('#input').value
 numberList.push(number)
 document.querySelector('form').reset()
 if(number === x)
 {
   document.querySelector('#Strong').innerHTML = `You guessed it correctly ! The number is ${x}`
   document.querySelector('#guesses').innerHTML = `You took ${i} chances to guess it correctly!`
   document.querySelector('#guessNumber').innerHTML = ``
 }
 else{
  document.querySelector('#guesses').innerHTML = `Number of Guesses: ${i}`
  document.querySelector('#guessNumber').innerHTML = `Your Guesses: ${numberList}`
  console.log(x);
 }
}

document.querySelector('#submit').addEventListener('click',onClickPlay)