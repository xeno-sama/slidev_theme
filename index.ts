// theme entry
import './styles/index'
import './styles/custom'

export default {
  name: 'custom-theme',
  defaults: {
    fonts: {
      sans: 'Roboto',
      mono: 'Fira Code',
      serif: 'Merriweather',
    },
    hightlighter: 'prism',
    colorSchema: 'dark',
    layout: 'default',
    aspectRatio: '16/9',
    canvasWidth: 980,
    
    // Настройки переходов между слайдами
    transition: {
      name: 'fade',
      duration: 500
    },
    
    // Настройки сетки
    layouts: {
      center: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      cover: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'var(--slidev-theme-background)'
      }
    }
  }
}
