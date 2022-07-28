![frontend5](https://user-images.githubusercontent.com/106176876/180295414-58ee77f6-da7c-4892-9df6-3caa5952513a.gif)


# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). 

This is the fourth challenge I've done.
Netlify link: https://nimble-meerkat-78e299.netlify.app/

*Note that I did not have the figma/sketch file to get exact pixels, colors or styles. I did make deviations from the style-guide.md when they did not match the final design. 


## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)

- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Vanilla JS

### What I learned

In this project I started using a reset.css file, similar to the settings that I used in the sandbox while learning through SuperHi.
My 1st version of this project did not work. I was using individual divs and ids for all the "ratings" which I was having a hard time writing a changing JS scrript for. I went looking for how others did this challenge, I found one on Github ny Brotli. 
Reviewing this code introducted me to new concpets. In SuperHi I was so use to changing my elements directly in JS. But this one taught me that you can assign a class to the parent element (in this example, using ul/li) to change the child elements. As well as an introduction to the concpet of "e" in JS. 


### Useful resources

- [Solution by Brotli](https://github.com/Brotli/Interactive-rating-component) - When I was having a hard time doing the JS on my own, this code helped me tackle the problem a different way.
