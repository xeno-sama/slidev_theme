<KeyboardNavigation
  :leftSlide="2"
  :rightSlide="3"
  :upSlide="1"
  :downSlide="5"
  :currentSlide="2"
/>

<style>
    .col-left {
        padding-right: 1em;
    }
</style>
<!-- отступ справа для удобства -->
# Макет 2 колонки

## контент слева
#
В широком смысле слова любая система искусственного интеллекта обладает неким целеполаганием — её ведь в процессе тренировки обучали выдавать ожидаемые ответы на модельные вопросы, то есть к чему-то так или иначе устремляли. Интереснее создать goal-driven AI в узком смысле — способный достигать неких чётких целей, самостоятельно выбирая оптимальный для этого путь.

::right::

<h1><br></h1>
<!-- лайфхак чтобы выравнять колонки -->

## контент справа
#
В широком смысле слова любая система искусственного интеллекта обладает неким целеполаганием — её ведь в процессе тренировки обучали выдавать ожидаемые ответы на модельные вопросы, то есть к чему-то так или иначе устремляли. Интереснее создать goal-driven AI в узком смысле — способный достигать неких чётких целей, самостоятельно выбирая оптимальный для этого путь.

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
<NavButtonFixed 
    :slideNumber="3"
    buttonText="Right"
    buttonColor="bg-purple-500"
    width="60px"
    height="30px"
    textSize="16px"
    arrowSize="10px"
    position="right_bottom"
/>

<!--
<StickyButton buttonColor="bg-yellow-200" textColor="text-black" />
-->
