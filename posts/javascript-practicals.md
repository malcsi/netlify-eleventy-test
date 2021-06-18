---
layout: layouts/post.njk
title: JavaScript functions
description: Modern functions and switch statements
date: 2021-06-18
---

In this exercise, I completed three tasks using JavaScript functions written this time in a modern style, and also switch statements were used.
<br/><br/>-----------------------------------<br/><br/>
For the first exercise, I wrote a function that returns a percentage of a given integer.<br/>
<br/>
<code>
const percentageCalculator = (number, percentage) => {<br/>
  let result = percentage / 100 * number;<br/>
  return result;<br/>
}<br/>
<br/>
document.write(percentageCalculator(387, 4.3));</code>
<br/>
<em>OUTPUT: 16.641 </em>


<br/><br/>-----------------------------------<br/><br/>
The second exercise is a basic programme that allows us to order three different types of drinks, each with three different sizes.
<br/><br/>
<code>
const sizeAndDrinkOrder = (size, drink) => {<br/>
  switch(drink) {<br/>
    case "cola":<br/>
      var softDrinkLabel = "Cola"<br/>
      break;<br/>
    case "orange":<br/>
      var softDrinkLabel = "Orangeade"<br/>
      break;<br/>
    case "lemon":<br/>
      var softDrinkLabel = "Lemonade"<br/>
      break;<br/>
  }<br/>
  return `You have ordered a ${size} of ${softDrinkLabel}`;<br/>
}<br/>
<br/>
document.write(sizeAndDrinkOrder("Large", "cola"));<br/>
document.write(sizeAndDrinkOrder("Medium", "orange"));<br/>
document.write(sizeAndDrinkOrder("Small", "lemon"));</code><br/>
<br/>
<em>OUTPUT:<br/>
You have ordered a Large of Cola<br/>
You have ordered a Medium of Orangeade<br/>
You have ordered a Small of Lemonade
</em>

<br/><br/>-----------------------------------<br/><br/>
The third function produced a calculator able to operate in two numbers by adding, supplying, multiplying, dividing or modulus.
<br/>
<code>
const calculator = (number1, number2, operator) => {<br/>
  switch (operator) {<br/>
      case"+":<br/>
         result = number1 + number2;<br/>
         break;<br/>
      case"-":<br/>
         result = number1 - number2;<br/>
         break;<br/>
      case"*":<br/>
         result = number1 * number2;<br/>
         break;<br/>
      case"/":<br/>
         result = number1 / number2;<br/>
         break;<br/>
      case"%":<br/>
         result = number1 % number2;<br/>
         break;<br/>
  };<br/>
  return `${number1} ${operator} ${number2} = ${result}`<br/>
};<br/>
<br/>
document.write(calculator(1,2, "+"));<br/>
document.write(calculator(30,2, "-"));<br/>
document.write(calculator(26,13, "*"));<br/>
document.write(calculator(30,5, "/"));<br/>
document.write(calculator(10,2, "%"));</code><br/>
<br/>
<em>OUTPUT:<br/>
1 + 2 = 3<br/>
30 - 2 = 28<br/>
26 * 13 = 338<br/>
30 / 5 = 6<br/>
10 % 2 = 0<br/>
</em>