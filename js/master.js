"use strict";

function getRandomNumber()
{
  const LOW = 1;
  const HIGH = 15;

  let randomNumber = (Math.random() * HIGH) + LOW;
  let floorValue = Math.floor(randomNumber);
  return floorValue;
}