---
level: 2
---

<KeyboardNavigation 
  :leftSlide="8"
  :rightSlide="10"
  :upSlide="5"
  :downSlide="9"
  :currentSlide="9"
/>

# Styles

## Цитаты и выделения

> Важный текст может быть выделен с помощью <span class="gradient-text">градиентного</span> стилей

Текст с <span class="important">акцентами</span> выглядит особенно.

- 1 line

<NavButtonFixed 
    :slideNumber="8"
    buttonText="Left"
    buttonColor="bg-purple-500"
    width="60px"
    height="30px"
    textSize="16px"
    arrowSize="10px"
    position="left_bottom"
/>
<NavButtonFixed 
    :slideNumber="10"
    buttonText="Right"
    buttonColor="bg-purple-500"
    width="60px"
    height="30px"
    textSize="16px"
    arrowSize="10px"
    position="right_bottom"
/>