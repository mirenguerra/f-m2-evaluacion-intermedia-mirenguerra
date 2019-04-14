"use strict";const testNumberEl=document.querySelector(".test__number"),testFeedbackEl=document.querySelector(".test__feedback"),testCounterEl=document.querySelector(".test__counter"),testButton=document.querySelector(".test__btn");let aleatoryNumber=getRandomNumber();const froggyEl=document.querySelector(".svg-frog");let counter=0;function getRandomNumber(){return Math.ceil(100*Math.random())}function handleRestartButtonClick(){testNumberEl.value="",counter=0,testCounterEl.innerHTML=counter,testFeedbackEl.innerHTML="Escribe un número y dale a Prueba",aleatoryNumber=getRandomNumber(),console.log("Nuevo número aleatorio: "+aleatoryNumber),testButton.addEventListener("click",handleButtonClick),froggyEl.classList.remove("svg-frog__jumping"),testNumberEl.disabled=!1}function feedback(e){testFeedbackEl.innerHTML=e}function win(){froggyEl.classList.add("svg-frog__jumping"),document.querySelector(".restart__btn").addEventListener("click",handleRestartButtonClick),testNumberEl.disabled=!0}function addFeedbackText(){let e=parseFloat(testNumberEl.value);e===aleatoryNumber?(feedback('¡HAS GANADO!<button class="restart__btn">¡Juega otra vez!</button>'),win()):e<1||e>100||e%1!=0?feedback("Ese número no vale. Prueba con uno del 1 al 100."):e>aleatoryNumber?feedback("Demasiado alto."):e<aleatoryNumber?feedback("Demasiado bajo."):isNaN(e)&&feedback("No has puesto ningún número. Prueba con uno del 1 al 100.")}function incrementCounter(){counter+=1,testCounterEl.innerHTML=counter,parseInt(counter)>=100&&(testCounterEl.innerHTML="+99")}function handleButtonClick(){addFeedbackText(),incrementCounter(),testNumberEl.value=""}function enterKey(e){13==e.which&&handleButtonClick()}console.log("Número aleatorio: "+aleatoryNumber),testButton.addEventListener("click",handleButtonClick),testNumberEl.addEventListener("keyup",enterKey);