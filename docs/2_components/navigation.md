# Navigation

### 1. Перемещаемая кнопка навигации

<NavButton 
    :slideNumber="3"
    buttonText="To Slide 3"
    direction="left"
    buttonColor="bg-blue-500"
    :initialX="50"
    :initialY="100"
/>

### 2. Кнопка навигации, фиксированная 
: left_top : left_bottom : right_top : right_bottom<br>
Направление стрелки - автоматически выбирает положение

<NavButtonFixed 
    :slideNumber="4"
    buttonText="Left"
    buttonColor="bg-purple-500"
    width="60px"
    height="30px"
    textSize="16px"
    arrowSize="10px"
    position="left_bottom"
/>
<NavButtonFixed 
    :slideNumber="6"
    buttonText="Right"
    buttonColor="bg-purple-500"
    width="60px"
    height="30px"
    textSize="16px"
    arrowSize="10px"
    position="right_bottom"
/>

<NavButtonFixed 
    :slideNumber="1"
    buttonText="Content"
    buttonColor="bg-purple-500"
    width="80px"
    height="30px"
    textSize="16px"
    arrowSize="10px"
    position="left_top"
/>
<NavButtonFixed 
    :slideNumber="5"
    buttonText="End"
    buttonColor="bg-purple-500"
    width="60px"
    height="30px"
    textSize="16px"
    arrowSize="10px"
    position="right_top"
/>

