'use strict';

var quotesTexts = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec leo nisi, feugiat vel placerat vitae, vulputate ac nibh. Ut scelerisque quis nulla sed tempor.",
  "Maecenas viverra leo sed risus laoreet rutrum. Praesent lobortis ultrices vestibulum. Mauris rhoncus sagittis elit, a congue justo eleifend adipiscing.",
  "Ut pulvinar dignissim ante, at mollis justo laoreet et. Vestibulum viverra purus ligula, in placerat sapien condimentum nec. In diam nulla, pharetra dapibus molestie vitae, luctus a ante."
];

var setButtonDisabled = function(button, isEnabled) {
  if (!isEnabled) {
    if (button.classList.contains("quotes__button--disable")) {
      button.classList.remove("quotes__button--disable");
    }
  } else {
    button.classList.add("quotes__button--disable");
  }  
};

var quotesTextContainer = document.querySelector(".quotes__main-text");
var prevButton = document.querySelector(".quotes__button:first-child");
var nextButton = document.querySelector(".quotes__button:last-child");

var currentQuotesTextIndex = 0;

var setButtonStatus = function() {
  if (currentQuotesTextIndex <= 0) {
    setButtonDisabled(prevButton, true);
    setButtonDisabled(nextButton, false);
  } else if (currentQuotesTextIndex >= quotesTexts.length - 1) {
    setButtonDisabled(prevButton, false);
    setButtonDisabled(nextButton, true);
  } else {
    setButtonDisabled(prevButton, false);
    setButtonDisabled(nextButton, false);
  }
};

quotesTextContainer.textContent = quotesTexts[currentQuotesTextIndex];
setButtonStatus();


var prevButtonClickHandler = function() {
  currentQuotesTextIndex = currentQuotesTextIndex - 1;
  setButtonStatus();
  if (currentQuotesTextIndex < 0) {
    setButtonStatus();
    currentQuotesTextIndex = 0;
  }
  quotesTextContainer.textContent = quotesTexts[currentQuotesTextIndex];
};

var nextButtonClickHandler = function() {
  currentQuotesTextIndex = currentQuotesTextIndex + 1;
  setButtonStatus();
  if (currentQuotesTextIndex > (quotesTexts.length - 1)) {
    setButtonStatus();
    currentQuotesTextIndex = quotesTexts.length - 1;
  }
  quotesTextContainer.textContent = quotesTexts[currentQuotesTextIndex];
};

prevButton.addEventListener('click', prevButtonClickHandler);
nextButton.addEventListener('click', nextButtonClickHandler);
