<template>
  <canvas ref="riveContainer" :style="containerStyle"></canvas>
</template>

<script>
import { Rive } from '@rive-app/webgl';

export default {
  props: {
    src: {
      type: String,
      required: true,
    },
    autoplay: {
      type: Boolean,
      default: true,
    },
    width: {
      type: [String, Number],
      default: '400px'
    },
    height: {
      type: [String, Number],
      default: '400px'
    },
    artboard: {
      type: String,
      default: null
    },
    stateMachine: {
      type: String,
      default: null
    },
    animations: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      riveInstance: null,
      error: null
    };
  },
  computed: {
    containerStyle() {
      return {
        width: typeof this.width === 'number' ? `${this.width}px` : this.width,
        height: typeof this.height === 'number' ? `${this.height}px` : this.height,
        display: 'block',
      };
    }
  },
  methods: {
    async initRive() {
      console.log('Initializing Rive with src:', this.src);
      
      if (this.riveInstance) {
        this.riveInstance.cleanup();
        this.riveInstance = null;
      }

      try {
        const canvas = this.$refs.riveContainer;
        if (!canvas) return;

        // Устанавливаем размеры canvas
        canvas.width = canvas.offsetWidth || parseInt(this.width);
        canvas.height = canvas.offsetHeight || parseInt(this.height);
        
        const config = {
          src: this.src,
          canvas: canvas,
          autoplay: this.autoplay,
          fit: 'contain',
          alignment: 'center',
          onLoad: () => {
            console.log('Rive animation loaded successfully');
          },
          onError: (err) => {
            console.error('Rive loading error:', err);
          }
        };

        if (this.artboard) config.artboard = this.artboard;
        if (this.stateMachine) config.stateMachines = this.stateMachine;
        if (this.animations.length) config.animations = this.animations;

        this.riveInstance = new Rive(config);
      } catch (err) {
        console.error('Ошибка инициализации Rive:', err);
        this.error = err;
      }
    }
  },
  mounted() {
    this.$nextTick(this.initRive);
  },
  updated() {
    this.$nextTick(this.initRive);
  },
  beforeDestroy() {
    if (this.riveInstance) {
      this.riveInstance.cleanup();
      this.riveInstance = null;
    }
  },
  activated() {
    this.$nextTick(this.initRive);
  },
  deactivated() {
    if (this.riveInstance) {
      this.riveInstance.cleanup();
      this.riveInstance = null;
    }
  }
};
</script>

<style scoped>
canvas {
  max-width: 100%;
  max-height: 100%;
}
</style>