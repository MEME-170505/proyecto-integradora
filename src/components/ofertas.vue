<template>
  <section class="hero">
    <div class="carousel w-full mx-auto overflow-hidden relative" ref="carousel">
      <div
        class="carousel-inner flex transition-transform duration-1000"
        :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
      >
        <div class="carousel-item min-w-full">
          <img src="../img/descuento en llaveros.jpg" class="w-full h-48 sm:h-64 md:h-80 lg:h-96 object-cover" />
        </div>
        <div class="carousel-item min-w-full">
          <img src="../img/descuento en mallas.jpg" class="w-full h-48 sm:h-64 md:h-80 lg:h-96 object-cover" />
        </div>
        <div class="carousel-item min-w-full">
          <img src="../img/promos de stikers.jpg" class="w-full h-48 sm:h-64 md:h-80 lg:h-96 object-cover" />
        </div>
      </div>
      <button
        @click="prevSlide"
        class="absolute left-0 top-1/2 transform -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white text-2xl p-2 sm:p-4 rounded-full border-2 border-white shadow-lg"
      >
        ❮
      </button>
      <button
        @click="nextSlide"
        class="absolute right-0 top-1/2 transform -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white text-2xl p-2 sm:p-4 rounded-full border-2 border-white shadow-lg"
      >
        ❯
      </button>
    </div>
  </section>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from 'vue';

export default {
  setup() {
    const carousel = ref(null);
    const currentIndex = ref(0);
    let interval = null;

    const startCarousel = () => {
      interval = setInterval(() => {
        nextSlide();
      }, 5000); // Cambia la diapositiva cada 5 segundos
    };

    const stopCarousel = () => {
      clearInterval(interval);
    };

    const nextSlide = () => {
      currentIndex.value = (currentIndex.value + 1) % 3; // 3 es el número de diapositivas
      resetCarousel();
    };

    const prevSlide = () => {
      currentIndex.value = (currentIndex.value - 1 + 3) % 3; // 3 es el número de diapositivas
      resetCarousel();
    };

    const resetCarousel = () => {
      stopCarousel();
      startCarousel();
    };

    onMounted(() => {
      startCarousel();
    });

    onBeforeUnmount(() => {
      stopCarousel();
    });

    return {
      carousel,
      currentIndex,
      nextSlide,
      prevSlide,
      stopCarousel,
      startCarousel,
      resetCarousel,
    };
  },
};
</script>

<style scoped>
.carousel {
  width: 100%;
  position: relative;
  z-index: 50;
}

.carousel-inner {
  display: flex;
  width: 100%;
}

.carousel-item img {
  width: 100%;
  object-fit: cover;
}

button {
  z-index: 10;
}
</style>
