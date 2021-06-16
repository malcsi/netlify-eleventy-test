---
layout: layouts/post.njk
title: JavaScript practise
description: Different functions used
date: 2021-06-16
---


I have been working with JavaScript variables, "if" and "else if" statements, arithmetic operators and functions as part of this exercise.
I built a few functions in this assignment and invoked them as needed.
As seen below, the first function outputs a sentence. 
A simple program was created that merges a first and a last name. After that,a return statement was included. 


<code>
function combineNames(firstName, secondName) {
  document.write('My name is :' + firstName + ' ' + secondName);
  document.write('<br />');
}

combineNames('Ana', 'Maria'); </code>
<em>OUTPUT: My name is :Ana Maria <br/>
        My name is :Maria</em>

The variable "temperature" is used in the second function. A code was created that instructs you to put on a coat if the temperature falls below 50 degrees. The software was expanded to display several phrases based on the value that was entered.</


<code>
  function temperatureFunction(currentTemp) {
  let coat ='YES!';
  if (currentTemp > 50) {
    coat = 'NO!'
  }
  return coat;
}
document.write('Should I wear a coat if the temp is less than 50: ' + temperatureFunction(40));</code>

  <em>OUTPUT: Should I wear a coat if the temp is less than 50: YES!</em>


<code>
  function temperatureFunc(currentTemp) {
  let coat = "";
  
  if (currentTemp < 0) {
    coat = 'Stay inside!';
  } else if (currentTemp < 30) {
    coat = 'Yes, but with a hat.';
  } else if (currentTemp < 50) {
    coat = 'YES!'
  } else {
    coat = 'Pants and vest is fine!';
  }
  return coat;
}

document.write('Less than 50 degrees: ' + temperatureFunc(49) + '<br/>');
document.write('Less than 30 degrees: ' + temperatureFunc(25) + '<br/>');
document.write('Less than 0 degrees: ' + temperatureFunc(-2) + '<br/>');
document.write('Over 50 degrees: ' + temperatureFunc(55) + '<br/>'); </code>

<em>OUTPUT: <br/>
Less than 50 degrees: YES! <br/>
Less than 30 degrees: Yes, but with a hat.<br/>
Less than 0 degrees: Stay inside!<br/>
Over 50 degrees: Pants and vest is fine!<br/>
</em>

<strong>The third function adds a logical operator to the "Shall I wear a coat?" program. The software defines "if" and "else if" to determine whether you should go or stay inside.</strong>

<code>
function tempFunc(currentTemp) {
  let coat = "Go outside";
  
  if (currentTemp > 70 || currentTemp < 20) {
    coat = "Stay inside";
  }
  return coat;
}

document.write(tempFunc(50));
document.write('<br />');
document.write(tempFunc(10));
document.write('<br />');
document.write(tempFunc(72));
</code>

<em>OUTPUT: <br/>
Go outside<br/>
Stay inside<br/>
Stay inside<br/>
</em>