# Navigation

### 1. Перемещаемая кнопка навигации

<NavButtonDrag 
    :slideNumber="3"
    buttonText="To Slide 3"
    direction="left"
    buttonColor="bg-blue-500"
    :initialX="50"
    :initialY="100"
/>

### 2. Кнопка навигации с изображением

<NavButtonImageText 
    :slideNumber="5"
    buttonText="Image Button"
    buttonColor="bg-blue-500"
    width="200px"
    height="50px"
    textSize="18px"
    textColor="text-white"
    imagePosition="left"
    imageSrc="/images/01.png"
    :initialX="50"
    :initialY="150"
/>

<NavButtonImageText 
    :slideNumber="6"
    buttonText="Right Image"
    buttonColor="bg-green-500"
    width="180px"
    height="40px"
    textSize="16px"
    textColor="text-white"
    imagePosition="right"
    imageSrc="/images/02.jpg"
    :initialX="300"
    :initialY="150"
/>

### 3. Кнопка навигации, фиксированная 
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
<!-- <NavButtonFixed 
    :slideNumber="6"
    buttonText="Right"
    buttonColor="bg-purple-500"
    width="60px"
    height="30px"
    textSize="16px"
    arrowSize="10px"
    position="right_bottom"
/> -->




<NavImageButtonFixed
    :slideNumber="2"
    buttonText="Right"
    buttonColor="bg-blue-500"
    width="120px"
    height="45px"
    textSize="16px"
    textColor="text-white"
    imagePosition="right"
    imageSrc="/images/arrow_right.png"
    :initialX="200"
    :initialY="200"
/>


