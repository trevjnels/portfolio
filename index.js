"use strict";

var docRoute = "/Users/trevornelson/Desktop/Projects/portfolio/";

const takeMeHomeLink =
  '<a href="/Users/trevornelson/Desktop/Projects/portfolio/index.html" class="takeMeHome">Take Me Home</a>';
// const express = require("express");
//
// const app = express();
//user ex
//enter web page, be resting in the middle of the top and bototm
//page auto-returns to this resting position once user lets go

//the intial route will auto scroll the user on the "Trevor J. Nelson"
//link.
//the trevorjnelson Route will give you my short bio and technical spcecialities

//they can view my projects link to scroll through the various projects
// each project will have the image (which expands under hover)
// eliminating the other elements besides the title using display: none
//the other elements will be a short description and the github code link as well as
//a deployed version link

//Contact page will simply be a picture of a huge mtn covering half and white as the other background. they can go to contact for github, linkedin, twitter, gmail butotns

//photography will bring them to a scrolling gallary of my instagram without connections
//to the IG api.

const scrollTo = function(div, offS) {
  console.log(`scrollTo is running`);

  $("html, body").animate(
    {
      scrollTop: $(`${div}`).offset(offS).top
    },
    1000
  );
};

const navHandler = function() {
  console.log("navHandler is running");

  $(".nav-option-js").on("click", function(event) {
    var text = $(event.target)
      .text()
      .trim();
    console.log(text);
    if (text === "Trevor J. Nelson") {
      noPlaceLikeHome();
    } else if (text === "Projects") {
      projectsRender();
    } else if (text === "Contact") {
      return contactRender();
    } else if (text === "Photography") {
      return photoPageRender();
    }
  });
};
const contactRender = function() {
  console.log("contactRender is running");
  $(".container").html(
    `<div class='contactPage'><div class='contactLink'><ul> <li><a href='https://github.com/trevjnels/quizAppjq'>GitHub</a></li><li><a href='https://www.linkedin.com/in/trevorjohnnels/'>LinkedIn</a></li><li><a href="mailto:joeSchmo@gmail.com?subject=Found your portfolio site">EmailMe</a></li> </ul></div><div class='contactImage'><img class='imageContact' src='/Users/trevornelson/Desktop/Projects/portfolio/resources/contactPhoto.jpg'></div>`
  );
  // $("body").on("click", function() {
  //   noPlaceLikeHome();
  // });
};
const projectsRender = function() {
  console.log("projectsRender is running");
  $(".container").html(
    "<div class='content-js'><div class='leftProject'><h1 class='projectTitle'>JQuery Quiz App</h1><img class='workImage' src='./resources/quizAppPic.png'><h2 class='projectDescription'>Description:</h2><p class='projectDescription'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteusint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div><div class='rightProject'><ul class='projectUL'><li class='projectLink'><a href='https://github.com/trevjnels/quizAppjq'>Github<a/></li><li><a class='projectLink' href='https://trevjnels.github.io/quizAppjq/'>Live</a></li></ul></div></div>"
  );
  // scrollTo("header");
  window.location.hash = ".main";
  projectHoverHandler();
};
const projectHoverHandler = function() {
  console.log("projectHoverHandler is running");

  $(".workImage").hover(
    function() {
      $(".workImage").attr("class", "getBigger");
      $(".projectTitle").hide();
      $(".projectDescription").hide();
      $(".projectUL").hide();
    },
    function() {
      projectsRender();
    }
  );
};
const photoPageRender = function() {
  console.log("photoPageRender is running");
  var photos = "";
  // console.log(photoArray, "photoarray");
  photoArray.forEach(function(photo) {
    photos += `<img class="border-image bottom" src=${photo} >`;
  });
  console.log("photos ", photos);
  $("body").html(`<p>${photos}</p>`);
  $("body").on("click", function() {
    noPlaceLikeHome();
  });
};
const noPlaceLikeHome = function() {
  console.log("noPlaceLikeHome Theres noPlaceLikeHome");
  if ($("header").length === 0) {
    console.log("take me home baby");

    $("body").on("click", function() {
      document.location.href = docRoute + "index.html";
    });
  } else {
    $(".container").html(
      "<div class='paddingBottom content-js'><h1>Mission</h1><div class='spacer'><div></div><p>I am an obsessive and relentless tinkerer and have an unlimited thirst for new information with a strong appreciate for symmetry balance and natural patterns. When not coding, I'm summiting mountains and if(winter){c(snowboarding down them)}. </p>"
    );
  }
};

// const playTheRising(){
//   // play action bronson's song
// }

const autoRunner = function() {
  scrollTo("footer");
  navHandler();
  // contactRender();
  // photoPageRender();
  // noPlaceLikeHome();
  // playTheRising();
};

$(autoRunner);

// _________ maybe useful later below
