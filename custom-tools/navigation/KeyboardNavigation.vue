<template>
  <div class="keyboard-navigation"></div>
</template>

<script setup>
import { onMounted, onUnmounted, watch, ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()
const isActive = ref(false)

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
  console.log('Статус активации:', isActive.value, 'Текущий слайд:', currentSlideNumber, 'Целевой слайд:', props.currentSlide)
}, { immediate: true })

function handleKeyDown(event) {
  // Работаем только если компонент активен для данного слайда
  if (!isActive.value) return

  console.log('Нажата клавиша:', event.key)

  if (event.key === 'ArrowLeft') {
    event.preventDefault()
    console.log('Переход на слайд:', props.leftSlide)
    navigateTo(props.leftSlide)
  } else if (event.key === 'ArrowRight') {
    event.preventDefault()
    console.log('Переход на слайд:', props.rightSlide)
    navigateTo(props.rightSlide)
  } else if (event.key === 'ArrowUp') {
    event.preventDefault()
    console.log('Переход на слайд вверх:', props.upSlide)
    navigateTo(props.upSlide)
  } else if (event.key === 'ArrowDown') {
    event.preventDefault()
    console.log('Переход на слайд вниз:', props.downSlide)
    navigateTo(props.downSlide)
  }
}

function navigateTo(page) {
  try {
    router.push(`/${page}`)
    console.log('Использован router.push')
  } catch (e) {
    console.error('Ошибка при переходе:', e)
  }
}

onMounted(() => {
  console.log('Компонент KeyboardNavigation загружен')
  document.addEventListener('keydown', handleKeyDown, true)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeyDown, true)
  console.log('Компонент KeyboardNavigation удален')
})
</script>