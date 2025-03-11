## Навигация ##

# 1. Кнопка навигации, которую можно переместить

<NavButton 
    :slideNumber="5"
    buttonText="To Slide 5"
    direction="right"
    buttonColor="bg-blue-500"
    :initialX="100"
    :initialY="200"
/>

# 2. Кнопка навигации, фиксированная 
['left_top', 'left_bottom', 'right_top', 'right_bottom']
direction_arrow - автоматически выбирает положение

<NavButtonFixed 
    :slideNumber="2"
    buttonText="To Contents"
    buttonColor="bg-green-500"
    width="120px"
    height="40px"
    textSize="16px"
    arrowSize="10px"
    position="left_bottom"
/>

