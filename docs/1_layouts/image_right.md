# Макет Image Right
#
параметры позиционирования картинки
#
### backgroundSize: contain<br>
сохранит aspect ratio
#
### imageWidth: 100%<br>
если надо растянуть картинку во весь экран
#

<NavButtonFixed 
    :slideNumber="2"
    buttonText="Left"
    buttonColor="bg-purple-500"
    width="60px"
    height="30px"
    textSize="16px"
    arrowSize="10px"
    position="left_bottom"
/>
<NavButtonFixed 
    :slideNumber="4"
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
    position="right_top"
/>