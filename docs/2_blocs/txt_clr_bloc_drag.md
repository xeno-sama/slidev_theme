---
level: 2
---

<KeyboardNavigation 
  :leftSlide="6"
  :rightSlide="7"
  :upSlide="2"
  :downSlide="8"
  :currentSlide="7"
/>

# Text Color Bloc Draggable

Градиентный Контейнер с текстом, который можно перемещать.

<TxtColorBlocDrag 
  title="Gradient Purple"
  titleColor="text-yellow"
  content="This is a draggable container with brown text color. Try moving it around!"
  contentColor="#ffffff"
  gradient="bg-gradient-to-r from-blue to-orange-500"
  minWidth="250px"
  minHeight="150px"
  initialX="100" 
  initialY="200"
  textAlignment="text-left"
  padding="p-4"
/>

<!-- (text-left, text-center, text-justify) -->

<NavButtonFixed 
    :slideNumber="7"
    buttonText="Left"
    buttonColor="bg-purple-500"
    width="60px"
    height="30px"
    textSize="16px"
    arrowSize="10px"
    position="left_bottom"
/>
<NavButtonFixed 
    :slideNumber="9"
    buttonText="Right"
    buttonColor="bg-purple-500"
    width="60px"
    height="30px"
    textSize="16px"
    arrowSize="10px"
    position="right_bottom"
/>