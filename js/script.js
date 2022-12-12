// Copyright (c) 2022 Youngwook All rights reserved
//
// Created by: Youngwook
// Created on: OCT 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */

if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit6-02-JS/sw.js", {
    scope: "/ICS2O-Unit6-02-JS/",
  })
}

function count() {
  console.log("click")
  let count = localStorage.getItem("number");
  count++
  localStorage.setItem("number", count);
  console.log(count)

  document.getElementById("answer").innerHTML = "The count is : " + count
}

function reset() {
    console.log("clear count")
    let count = 0
    localStorage.setItem("number", count);
    console.log(count)
  
    document.getElementById("answer").innerHTML = "The count is : " + count
}

