"use strict";

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

    if (text === "trevjnels") {
      noPlaceLikeHome();
      console.log(text);
    } else if (text === "Projects") {
      projectsRender(projectsArray);
      console.log(text);
    } else if (text === "Contact") {
      // return contactRender()
      console.log(text);
    } else if (text === "Photography") {
      // return photoPageRender();
      console.log(text);
    }
  });
};

const noPlaceLikeHome = function() {
  $(".left")
    .html(`<div class="mission-summary"><h2 class="Summary">Summary</h2><p>I am an obsessive and relentless tinkerer and have an unlimited thirst for new information with a strong appreciate for symmetry balance and natural patterns. I read thoroughly too much about the world and like to get caught up in the details. I am a mostly self-taught developer with an enterprise sales background. That said I was destined for engineering as child but was thrown off track. I had all the signs of a young steampunk Jedi: setting up the family computer at 5yo, becoming a mechanical pencil modder in 1st grade, spending much of my childhood solo in my dad’s workshop in the basement, and leading my physics/geometry/math
    classes without even trying. </p><p>At the ripe age of 12 on a sunny afternoon, I met a mechanical engineer - well a whole bunch of them - in a hot tub in Disney World. They were attending an industry conference. This downtrodden and dissatisfied man told me that engineering was a miserable pursuit and to find greener pastures. At that point I stoped focusing on building. I’ve now seen what its like to do what you do not love for money, Now I'm fixing that and building.
    When not coding, I'm summiting mountains and if(winter){c(snowboarding down them)};.</p></div>`);
  $(".right")
    .html(`<img class="profPic" alt="a hybrid photo of myself and my favorite grandparent" src="./resources/Louvor.jpg">
    `);
  $(".navUL").toggleClass("summaryNav", true);
};

const projectsRender = function(array) {
  var leftOutput = "";
  var rightOutput = "";
  array.forEach(function(elem) {
    leftOutput += `<h1 class='projectTitle'>${
      elem.name
    }</h1><img class='workImage' src='${
      elem.photoSRC
    }'><h2 class='projectDescription'>Description:</h2><p class='projectDescription'> ${
      elem.description
    } </p></div><div class='rightProject'>`;

    rightOutput += `<ul class='projectUL'><li class='projectLink'><a href='${
      elem.github
    }'>Github<a/></li><li><a class='projectLink' href='${
      elem.live
    }'>Live</a></li></ul>`;
  });

  $(".left").html(leftOutput);
  $(".right").html(rightOutput);
  $(".content").toggleClass("projects", true);
  $(".right").toggleClass("projectLinks", true);
};
const contactRender = function() {
  //
};
const photoPageRender = function() {
  //
};

const arrayMixer = function(array) {
  var useArray = array.slice();
  var resultArray = [];
  var num = array.length;
  console.log(num);
  var i = num;
  while (i) {
    var pushed = Math.floor(Math.random() * num);
    if (resultArray.indexOf(pushed) === -1) {
      resultArray.push(pushed);
      --i;
    }
  }
  return resultArray;
};

const borderFiller = function(array, num) {
  let borderOutPutBottom = "";
  let borderOutPutTop = "";
  let indexesTop = arrayMixer(array).slice(0, num);
  let indexesBottom = arrayMixer(array).slice(0, num);
  // let length = array.length;
  let i = 0;
  indexesTop.forEach(function(index) {
    var photoSource = array[index];

    borderOutPutTop += `<img class='photoB photoB-${i}' src='${photoSource}' alt='photo from my instagram'>`;
    i++;
  });
  i = 0;
  indexesBottom.forEach(function(index) {
    var photoSource = array[index];

    borderOutPutBottom += `<img class='photoB photoB-${i}' src='${photoSource}' alt='photo from my instagram'>`;
    i++;
  });
  console.log("borderFiller is running");
  $(".photoBorder.footer").html(borderOutPutTop);
  $(".photoBorder.header").html(borderOutPutBottom);
};

const autoRunner = function() {
  // scrollTo("footer");
  navHandler();
  borderFiller(photoArray, 10);
  // noPlaceLikeHome();
  // contactRender();
  // photoPageRender();
  // noPlaceLikeHome();
  // playTheRising();
};

$(autoRunner);

// _________ maybe useful later below
