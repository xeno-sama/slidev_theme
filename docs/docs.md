--- #1
theme: slidev-theme-custom
layout: two-cols
---

# Content
<h1>Содержание документации</h1>

```html
<Toc minDepth="1" maxDepth="2" />
```
::right::

<Toc text-sm minDepth="1" maxDepth="2" />

<!-- Перейти можно только стрелкой вниз к следующей колонке с элементами / возможно есть смысл добавлять порядковый номер слайда в имена файлов -->
<KeyboardNavigation 
  :leftSlide="1"
  :rightSlide="1"
  :upSlide="1"
  :downSlide="2"
  :currentSlide="1"
/>

--- #2
src: /1_layouts/two_cols.md
hide: false
layout: two-cols
# level: 2
---

--- #3
src: /1_layouts/image_right.md
hide: false
layout: image-right
image: ./images/01.png
backgroundSize: contain
# imageWidth: 100%
---

--- #4
src: /1_layouts/image.md
hide: false
layout: image
image: ./images/02.jpg
imageWidth: 100%
---

--- #5
src: /2_blocs/txt_img_bloc.md
hide: false
---

--- #6
src: /2_blocs/txt_clr_bloc.md
hide: false
---

--- #7
src: /2_blocs/txt_clr_bloc_drag.md
hide: false
---

--- #8
src: /4_components/navigation.md
hide: false
---

--- #9
src: /3_styles/custom.md
hide: false
layout: two-cols
---

--- #10
src: /4_components/sticky_notes.md
hide: false
---