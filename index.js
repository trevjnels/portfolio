"use strict";

const classResetter = function() {
  $(".content").toggleClass("projects", false);
  $(".right").toggleClass("projectLinks", false);
  $(".content").toggleClass("contactPage", false);
  $(".navUL").toggleClass("summaryNav", false);
  $(".right").toggleClass("noDisplay", false);
  $(".navUL").toggleClass("contactNavUL", false);
  $(".right").toggleClass("profPicRight", false);
  $(".left").toggleClass("summaryLeft", false);
  $(".left").toggleClass("mainProjects", false);
  $(".main").toggleClass("mainProjects", false);
  $("body").toggleClass("photoPageBody", false);
};

const navHandler = function() {
  console.log("navHandler is running");

  $("button").keydown(function(event) {
    if (event.keyCode === 13) {
      console.log("ENTER!");
      var text = $(event.target)
        .text()
        .trim();
      event.stopPropagation();
      navEvent(text);
    }
  });

  $(".nav-option-js").on("click", function(event) {
    event.preventDefault();
    var text = $(event.target)
      .text()
      .trim();
    //removes any previously attached classes to elements to prevent css leakag
    navEvent(text);
  });
};

const navEvent = function(text) {
  classResetter();
  var lowtext = text.toLowerCase();
  if (lowtext !== "photography") {
    borderFiller(photoArray, 10);

    if (lowtext === "trevjnels") {
      noPlaceLikeHome();
      console.log(lowtext);
      scrollTo(".main");
    } else if (lowtext === "projects") {
      projectsRender(projectsArray);
      console.log(lowtext);
      scrollTo(".main");
    } else if (lowtext === "contact") {
      contactRender();
      scrollTo(".main");
      console.log(lowtext);
    }
  } else {
    photoPageRender();
    alert("Click or hit Enter anywhere on the screen to return to home page");
  }
};

const noPlaceLikeHome = function() {
  $(".left")
    .html(`<div class="mission-summary"><h2 class="Summary">A repressed engineer formerally stuck in a enterprise-salesperson's life</h2><p>I am an obsessive and relentless tinkerer and have an unlimited thirst for new information with a strong appreciation for symmetry balance and natural patterns. I read thoroughly too much about the world and like to get caught up in the details. I am a mostly self-taught developer with an enterprise sales background. That said I was destined for engineering as child but was thrown off track. I had all the signs of a young steampunk Jedi: setting up the family computer at 5yo, becoming a mechanical pencil modder in 1st grade, spending much of my childhood solo in my dad’s workshop in the basement, and leading my physics/geometry/math classes without even trying.

At the ripe age of 12 on a sunny afternoon, I met a mechanical engineer - well a whole bunch of them - in a hot tub in Disney World. They were attending an industry conference. This downtrodden and dissatisfied man told me that engineering was a miserable pursuit and to find greener pastures. At that point I stoped focusing on building. I’ve now seen what it's like to do what you do not love for money, Now I'm fixing that and building.I am not actively looking for a job at the moment and won't be.  I am going to be building a business once my coding education is "done", or just really starting depending on your perspective.

When not coding, I'm summiting mountains and if(winter){c(snowboarding down them)};.</p></div>`);
  $(".right")
    .html(`<img class="profPic" alt="a hybrid photo of myself and my favorite grandparent" src="./resources/Louvor.jpg"><p>An overlay of my face and my late grandfather's.</p>
    `);
  $(".navUL").toggleClass("summaryNav", true);
  $(".right").toggleClass("profPicRight", true);
  $(".left").toggleClass("summaryLeft", true);
};

const projectsRender = function(array) {
  var leftOutput = "";

  array.forEach(function(elem) {
    leftOutput += `<div class=" left project"><div class="topProject"><div class="leftProject"><h1 class='projectTitle'>${
      elem.name
    }</h1><img alt='${elem.name} project screenshot'class='workImage' src='${
      elem.photoSRC
    }'></div><div class="rightProject"><ul class='projectUL'><li class='projectLink'><a href='${
      elem.github
    }'target='_blank'>Github<a/></li><li class='projectLink'><a href='${
      elem.live
    }'target='_blank'>Live</a></li></ul></div></div><h2 class='projectDescription'>Description:</h2><p class='projectDescription'> ${
      elem.description
    } </p><p>Skills Used: <span class="skills">${
      elem.skillsUsed
    }</span></p></div></div>`;

    // rightOutput += `<ul class='projectUL'><li class='projectLink'><a href='${
    //   elem.github
    // }'>Github<a/></li><li><a class='projectLink' href='${
    //   elem.live
    // }'>Live</a></li></ul>`;
  });

  // $(".content").html(
  //   `<div class="content flex-container projects">${leftOutput}`
  // );
  $(".left").html(leftOutput);
  $(".right").html("");
  $(".right").toggleClass("noDisplay", true);
  $(".left").toggleClass("mainProjects", true);
  $(".main").toggleClass("mainProjects", true);

  $(".content").toggleClass("projects", true);
  // $(".right").toggleClass("projectLinks", true);
};

const contactRender = function() {
  $(".left").html(
    `
        <div class="contactLinkForm">
          <button class="contactGitHub"><div class="contactLink contact-github"><img class="contactPhoto github" src="./resources/githublogo.png" alt="github logo"></div></button>
          <button class="contactLinkedin"><div class="contactLink contact-linkedin"><img  class="contactPhoto link"src="./resources/linkedin-logo.png" alt="linkedin logo"></div></button>
          <button class="contactEmail"><div class="contactLink contact-emailMe"><img class="contactPhoto email" src="./resources/emailicon.png" alt="image of an email"></div></button>
        </div>`
  );
  $(".right").html(
    `  <div class="contactPhotoContainer"><img class="largeContactPhoto" src="./resources/contactPhoto.jpg" alt="photo looking up a glass dome that I took in Vancouver"> </div>
  </div>`
  );

  // scrollTo(".content");
  $(".content").toggleClass("contactPage", true);

  $(".contact-github").on("click", function() {
    console.log("github clicked");
    window.open("https://www.github.com/trevjnels", "_blank");
  });
  $(".contact-linkedin").on("click", function() {
    console.log("linkedin clicked");
    window.open("https://www.linkedin.com/in/trevorjohnnels/", "_blank");
  });
  $(".contact-emailMe").on("click", function() {
    console.log("email-me clicked");
    window.open(
      "mailto:trevorjohnnels@gmail.com?Subject=Found your portfolio site and wanted to get in contact",
      "_self"
    );
  });
  //
  // $("button").keydown(function(event) {
  //   if (event.keyCode === 13) {
  //     console.log("ENTER!");
  //     var text = $(event.target)
  //       .text()
  //       .trim();
  //     event.stopPropagation();
  //     navEvent(text);
  //   }
  // });

  $(".contactGitHub").keydown(function(event) {
    event.stopPropagation();
    if (event.keyCode === 13) {
      console.log("github entered");
      window.open("https://www.github.com/trevjnels", "_blank");
    }
  });
  $(".contactLinkedin").keydown(function(event) {
    event.stopPropagation();
    if (event.keyCode === 13) {
      console.log("linkedin entered");
      window.open("https://www.linkedin.com/in/trevorjohnnels/", "_blank");
    }
  });
  $(".contactEmail").keydown(function(event) {
    event.stopPropagation();
    if (event.keyCode === 13) {
      console.log("email-me entered");
      window.open(
        "mailto:trevorjohnnels@gmail.com?Subject=Found your portfolio site and wanted to get in contact",
        "_self"
      );
    }
  });
  $(".navUL").toggleClass("contactNavUL", true);
};
const photoPageRender = function() {
  $("body").toggleClass("photoPageBody", true);
  var result = `<div class="photo-container">`;
  var counter = 10;
  let indexes = arrayMixer(photoArray);
  for (let i = 0; i < 200; ++i) {
    // if (counter === 10) {
    //   result += `<div class='row'>`;
    // }
    var photo = photoArray[indexes[i % indexes.length]];
    result += `<img class="photoPagePhoto" src="${photo.url}" alt=${
      photo.alt
    }>`;
    // counter--;
    // if (counter === 1) {
    //   result += `</div>`;
    //   counter = 10;
    // }
  }
  result += `</div>`;

  $("body").html(
    `<div class="photoPage">${result}
  `
  );

  $(".photoPage").on("click", function() {
    window.location = "./index.html";
  });

  $(".photoPageBody").keydown(function(event) {
    if (event.keyCode === 13) {
      console.log("ENTER!");
      window.location = "./index.html";
    }
  });
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
    var photoSource = array[index].url;
    var photoAlt = array[index].alt;

    borderOutPutTop += `<img class='photoB photoB-${i}' src='${photoSource}' alt='${photoAlt}'>`;
    i++;
  });
  i = 0;
  indexesBottom.forEach(function(index) {
    var photoSource = array[index].url;
    var photoAlt = array[index].alt;

    borderOutPutBottom += `<img class='photoB photoB-${i}' src='${photoSource}' alt='${photoAlt}'>`;
    i++;
  });
  console.log("borderFiller is running");
  $(".photoBorder.footer").html(borderOutPutTop);
  $(".photoBorder.header").html(borderOutPutBottom);
};

const scrollTo = function(elem) {
  var viewportHeight = $(window).height();
  var elemHeight = $(elem).height();
  var elemTop = $(elem).offset().top;
  var scrollIt = elemTop - (viewportHeight - elemHeight) / 2;
  console.log(`scrollTo is running`);

  $(window).scrollTop(scrollIt);
};

const resizeListner = function() {
  $(window).resize(function() {
    borderFiller(photoArray, 10);
    console.log("window resized");
    scrollTo(".main");
  });
};

const autoRunner = function() {
  navHandler();
  borderFiller(photoArray, 10);
  noPlaceLikeHome();
  resizeListner();
  // contactRender();
  // photoPageRender();
  // noPlaceLikeHome();
  // playTheRising();
};

$(autoRunner);

// _________ maybe useful later below
