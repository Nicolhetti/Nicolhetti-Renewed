<template>
    <button v-if="showScrollToTop" @click="scrollToTop" class="fixed bottom-4 right-4 z-50 p-3 rounded-full bg-blue-800 dark:bg-blue-700 shadow-md hover:bg-blue-900 dark:hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-opacity-75">
      <Icon name="mdi:chevron-up" size="30" class="text-white dark:text-gray-900" />
    </button>
</template>
  
<script lang="ts">
  import { defineComponent, ref, onMounted, onUnmounted } from 'vue';
  
  export default defineComponent({
    name: 'ScrollToTop',
    setup() {
      const showScrollToTop = ref(false);
  
      const handleScroll = () => {
        showScrollToTop.value = window.scrollY > 200;
      };
  
      const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth', 
        });
      };
  
      onMounted(() => {
        window.addEventListener('scroll', handleScroll);
      });
  
      onUnmounted(() => {
        window.removeEventListener('scroll', handleScroll);
      });
  
      return {
        showScrollToTop,
        scrollToTop,
      };
    },
  });
</script>