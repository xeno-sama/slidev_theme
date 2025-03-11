## Контейнеры ##

# 1. Контейнер с фоновой картинкой и текстом с заголовком поверх нее

<ImageWithText 
    imagePath="/images/01.png"
    textColor="text-blue"
    title="Заголовок здесь"
    contentColor="#000000"
    content="Содержание здесь
текст новой строки
<br>текст с дополнительным переносом строки"
  width="700px"
  height="300px"
  imageFit="contain"
/>

imageFit ["contain", "fitWidth", "fitHeight", "fitAll"]

# 2 . Цветной Контейнер с градиентом без фоновой картинки

<ColorContainer 
    gradient="bg-gradient-to-r from-white to-orange-500"
    titleColor="text-red"
    contentColor="#358fff"
    title="Your Title"
    content="Your content here<br>with multiple lines"
    width="500px"
    height="300px"
    titleSize="24px"
    contentSize="16px"
/>

gradient
- from-pink-500 to-orange-500
- from-green-400 to-blue-500
- from-indigo-500 via-purple-500 to-pink-500

если нужен просто черный или белый контейнер
- from-white to-white"
- from-black to-black"