<template>
  <div class="keyboard-navigation"></div>
</template>

<script setup>
import { onMounted, onUnmounted, watch, ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()
const isActive = ref(false)
const lastKeyPressTime = ref(0)
const debounceTime = 300 // миллисекунды для предотвращения двойного срабатывания

const props = defineProps({
  leftSlide: {
    type: Number,
    required: true
  },
  rightSlide: {
    type: Number,
    required: true
  },
  upSlide: {
    type: Number,
    required: true
  },
  downSlide: {
    type: Number,
    required: true
  },
  currentSlide: {
    type: Number,
    required: true
  }
})

// Проверяем, находимся ли мы на целевом слайде
watch(() => route.path, (newPath) => {
  const currentSlideNumber = parseInt(newPath.replace('/', '')) || 1
  isActive.value = currentSlideNumber === props.currentSlide
  // console.log('Статус активации:', isActive.value, 'Текущий слайд:', currentSlideNumber, 'Целевой слайд:', props.currentSlide)

  // Деактивируем все другие экземпляры компонента
  if (isActive.value) {
    // Устанавливаем флаг, что этот экземпляр активен
    window.activeKeyboardNavigationInstance = props.currentSlide
  }
}, { immediate: true })

function handleKeyDown(event) {
  // Работаем только если компонент активен для данного слайда
  // и это единственный активный экземпляр
  if (!isActive.value || window.activeKeyboardNavigationInstance !== props.currentSlide) return

  // Проверяем, не слишком ли быстро повторяется нажатие
  const now = Date.now()
  if (now - lastKeyPressTime.value < debounceTime) {
    // console.log('Игнорирую повторное нажатие (дебаунс)')
    event.preventDefault()
    event.stopPropagation()
    return
  }

  // Обновляем время последнего нажатия
  lastKeyPressTime.value = now

  // console.log('Нажата клавиша:', event.key)

  if (event.key === 'ArrowLeft') {
    event.preventDefault()
    event.stopPropagation()
    // console.log('Переход на слайд:', props.leftSlide)
    navigateTo(props.leftSlide)
  } else if (event.key === 'ArrowRight') {
    event.preventDefault()
    event.stopPropagation()
    // console.log('Переход на слайд:', props.rightSlide)
    navigateTo(props.rightSlide)
  } else if (event.key === 'ArrowUp') {
    event.preventDefault()
    event.stopPropagation()
    // console.log('Переход на слайд вверх:', props.upSlide)
    navigateTo(props.upSlide)
  } else if (event.key === 'ArrowDown') {
    event.preventDefault()
    event.stopPropagation()
    // console.log('Переход на слайд вниз:', props.downSlide)
    navigateTo(props.downSlide)
  }
}

function navigateTo(page) {
  try {
    // Добавляем проверку, чтобы избежать циклических переходов
    const currentPage = parseInt(route.path.replace('/', '')) || 1
    if (currentPage === page) {
      // console.log('Попытка перехода на текущий слайд, игнорирую')
      return
    }

    // Устанавливаем флаг, что переход уже выполняется
    const transitionKey = `transition_${props.currentSlide}_${page}`
    if (window[transitionKey]) {
      // console.log('Переход уже выполняется, игнорирую повторный вызов')
      return
    }

    window[transitionKey] = true
    // console.log('Переход на слайд:', page, 'с текущего:', currentPage)

    // Выполняем переход с небольшой задержкой
    setTimeout(() => {
      router.push(`/${page}`)
      // console.log('Использован router.push')

      // Сбрасываем флаг перехода через некоторое время
      setTimeout(() => {
        window[transitionKey] = false
      }, 500)
    }, 50)
  } catch (e) {
    console.error('Ошибка при переходе:', e)
  }
}

onMounted(() => {
  // console.log('Компонент KeyboardNavigation загружен для слайда', props.currentSlide)
  // Инициализируем глобальную переменную, если она еще не существует
  if (typeof window.activeKeyboardNavigationInstance === 'undefined') {
    window.activeKeyboardNavigationInstance = null
  }
  document.addEventListener('keydown', handleKeyDown, true)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeyDown, true)
  // console.log('Компонент KeyboardNavigation удален')
})
</script>