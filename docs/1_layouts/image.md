---
level: 2
---

# Макет Image Cover
#
## Картинка на заднем фоне - контент поверх нее

<KeyboardNavigation 
  :leftSlide="3"
  :rightSlide="4"
  :upSlide="2"
  :downSlide="5"
  :currentSlide="4"
/>

<NavButtonFixed 
    :slideNumber="3"
    buttonText="Left"
    buttonColor="bg-purple-500"
    width="60px"
    height="30px"
    textSize="16px"
    arrowSize="10px"
    position="left_bottom"
/>
<NavButtonFixed 
    :slideNumber="5"
    buttonText="Right"
    buttonColor="bg-purple-500"
    width="60px"
    height="30px"
    textSize="16px"
    arrowSize="10px"
    position="right_bottom"
/>