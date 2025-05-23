# Кастомная тема для Slidev

Эта тема включает в себя:
- Пользовательские компоненты
- Кастомные инструменты
- Специальные стили и макеты

## Установка

Сам Slidev yстанавливается стандартно
в консоли из папки проекта запустите
```bash
npm init slidev@latest
```
подробнее на https://sli.dev/guide/

## Настройка

1) Отредактируйте `package.json`:
```json
{
  "name": "slidev",
  "type": "module",
  "private": true,
  "scripts": {
    "build": "slidev build",
    "export": "slidev export",
    "dev": "slidev --open",
    "dev:chrome": "BROWSER='google chrome' slidev --open",
    "intro": "BROWSER='google chrome' slidev docs/intro.md --open", 
    "docs": "slidev docs/docs.md --open",
    "clean": "rm -rf node_modules/.vite && npm cache clean --force && rm -rf node_modules && rm -rf package-lock.json"
  },
  "dependencies": {
    "@slidev/cli": "^51.4.0",
    "@slidev/types": "^51.4.0",
    "@vueuse/core": "^13.0.0",
    "codemirror-theme-vars": "^0.1.1",
    "prism-theme-vars": "^0.2.4",
    "vue": "^3.5.13"
  },
  "devDependencies": {
    "slidev-theme-custom": "https://github.com/xeno-sama/slidev_theme.git"
  }
}
```

2) запустите в консоли
```bash
npm install 
```

3) запустите в консоли
```bash
cp -r node_modules/slidev-theme-custom/docs/ docs
```
это скопирует документацию из кастомной темы в ваш проект в папку docs
чтобы доустановить недостаюшие пакеты для кастомной темы 

# Документация по кастомным компонентам
просмотреть можно через команду
```bash
npm run docs
```

# Офф. документация SliDev
просмотреть можно через команду
```bash
npm run intro
```

# Навигация

1. Клавиатурные стрелки вверх/вниз переходят по уровням
стрелки вправо/влево ходят по вложенным маршрутам
```html
<KeyboardNavigation 
  :leftSlide="1"
  :rightSlide="1"
  :upSlide="1"
  :downSlide="2"
  :currentSlide="1"
/>
```

2. Фиксированная кнопка навигации. Автоматически распологается по углам экрана
```html
<NavButtonFixed 
    :slideNumber="1"
    buttonText="Left"
    buttonColor="bg-purple-500"
    width="60px"
    height="30px"
    textSize="16px"
    arrowSize="10px"
    position="left_bottom"
/>
```
примеры 
left_top : left_bottom : right_top : right_bottom<br>*

3. Плавающая кнопка навигации
```html
<NavButtonDrag 
    :slideNumber="3"
    buttonText="To Slide 3"
    direction="left"
    buttonColor="bg-blue-500"
    :initialX="50"
    :initialY="100"
/>
```

## Блоки с изображением

1. Текстовый блок с фоновой картинкой
```html
<ImageWithText 
    imagePath="/images/fon.jpg"
    textColor="text-blue"
    title="Заголовок здесь"
    contentColor="#000000"
    content="Текст содержания"
    width="700px"
    height="300px"
    imageFit="fitWidth"
/>
```
imageFit ["contain", "fitWidth", "fitHeight", "fitAll"]
_SliDev по умолчанию ищет файлы/картинки в корневой папке /public_

2. Цветной Контейнер с градиентом без фоновой картинки
```html
<TxtColorBloc 
    gradient="bg-gradient-to-r from-red to-orange-500"
    titleColor="text-blue"
    title="Заголовок"
    contentColor="#000000"
    content="Текст содержания"
    width="500px"
    height="300px"
    titleSize="24px"
    contentSize="16px"
/>
```
примеры нгаписания градиентов
- from-pink-500 to-orange-500
- from-green-400 to-blue-500
- from-indigo-500 via-purple-500 to-pink-500

если нужен просто черный или белый контейнер
- from-white to-white"
- from-black to-black"

3. Градиентный Контейнер с текстом, который можно перемещать.
```html
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
```
*(text-left, text-center, text-justify)*