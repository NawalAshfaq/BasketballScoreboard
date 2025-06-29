
let count1 = document.getElementById("count-el")
let count2 = document.getElementById("count1-el")
let msg = document.getElementById("message")

let count = 0
let num = 0

function increment1(){
  count += 1
  count1.textContent=count
   if(count>num){
    let incre = count - num
  msg.textContent = "Home leads with" + " " + incre +" "+ "points"}
 else if(num>count){
  let decre = num - count
  msg.textContent = "Guest leads with" + " " + decre +" "+ "points"}
  else{
     msg.textContent = "Draw"
  }
}

function increment2(){
  count +=2
  count1.textContent=count
  if(count>num){
    let incre = count - num
  msg.textContent = "Home leads with" + " " + incre +" "+ "points"}
  else if(num>count){
    let decre = num - count
  msg.textContent = "Guest leads with" + " " + decre+" "+ "points"}
  else{
     msg.textContent = "Draw"
  }
}
function increment3(){
  count += 3
  count1.textContent=count
   if(count>num){
    let incre = count - num
  msg.textContent = "Home leads with" + " " + incre +" "+ "points"}
 else if(num>count){
  let decre =num - count
  msg.textContent = "Guest leads with" + " " + decre +" "+ "points"}
  else{
     msg.textContent = "Draw"
  }
}

function increment11(){
  num += 1
  count2.textContent=num
   if(num>count){
    let incre = num - count
  msg.textContent = "Guest leads with" + " " + incre +" "+ "points"}
 else if(count>num){
  let decre = count - num
  msg.textContent = "home leads with" + " " + decre +" "+ "points"}
  else{
     msg.textContent = "Draw"
  }
}
function increment22(){
  num +=2
  count2.textContent=num
   if(num>count){
    let incre = num - count
  msg.textContent = "Guest leads with" + " " + incre +" "+ "points"}
  else if(count>num){
    let decre = count - num
  msg.textContent = "home leads with" + " " + decre +" "+ "points"}
  else{
     msg.textContent = "Draw"
  }
}
function increment33(){
  num += 3
  count2.textContent=num
   if(num>count){
    let incre = num - count
  msg.textContent = "Guest leads with" + " " + incre +" "+ "points"}
  else if(count>num){
    let decre = count - num
  msg.textContent = "home leads with" + " " + decre +" "+ "points"}
  else{
     msg.textContent = "Draw"
  }
}

function restart(){
   count = 0
   count1.textContent=count
   num = 0
   count2.textContent=num
   msg.textContent = null
}