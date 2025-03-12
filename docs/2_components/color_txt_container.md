# Color Text Container 

Цветной Контейнер с градиентом без фоновой картинки

<ColorContainer 
    gradient="bg-gradient-to-r from-red to-orange-500"
    titleColor="text-black"
    title="Заголовок"
    contentColor="#358fff"
    content="Текст содержания"
    width="500px"
    height="300px"
    titleSize="24px"
    contentSize="16px"
/>

<!-- gradient
- from-pink-500 to-orange-500
- from-green-400 to-blue-500
- from-indigo-500 via-purple-500 to-pink-500

если нужен просто черный или белый контейнер
- from-white to-white"
- from-black to-black" -->

<NavButtonFixed 
    :slideNumber="5"
    buttonText="Left"
    buttonColor="bg-purple-500"
    width="60px"
    height="30px"
    textSize="16px"
    arrowSize="10px"
    position="left_bottom"
/>
<NavButtonFixed 
    :slideNumber="7"
    buttonText="Right"
    buttonColor="bg-purple-500"
    width="60px"
    height="30px"
    textSize="16px"
    arrowSize="10px"
    position="right_bottom"
/>