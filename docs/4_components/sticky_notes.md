---
level: 2
---

<KeyboardNavigation 
  :leftSlide="9"
  :rightSlide="10"
  :upSlide="5"
  :downSlide="10"
  :currentSlide="10"
/>

# Sticky Note

Липкие заметки
настраиваемая, можно перемещать

# 1. Базовый конструктор
кнопка вызывающая создание липкой заметки в центре экрана<br>
выбранный цвет кнопки - также будет цветом фона создаваемой липкой заметки

<StickyButton buttonColor="bg-yellow-200" textColor="text-black" />

все возможные цвета
['text-white', 'text-black', 'text-blue-500', 'text-blue-600', 'text-blue-700', 'text-red-500', 'text-red-600', 'text-green-500', 'text-green-600', 'text-yellow-500', 'text-yellow-600', 'text-orange-500', 'text-orange-600', 'text-purple-500', 'text-purple-600', 'text-pink-500', 'text-pink-600', 'text-gray-500', 'text-gray-600']

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
    :slideNumber="1"
    buttonText="Content"
    buttonColor="bg-purple-500"
    width="80px"
    height="30px"
    textSize="16px"
    arrowSize="10px"
    position="right_bottom"
/>