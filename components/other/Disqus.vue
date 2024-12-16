<script setup lang="ts">
import { onMounted } from 'vue'

// Definimos las props que aceptará este componente
const props = defineProps({
  disqusEnabled: {
    type: Boolean,
    required: true
  },
  shortname: {
    type: String,
    required: true
  }
})

// Cargar el script de Disqus solo si disqusEnabled es true
onMounted(() => {
  if (props.disqusEnabled) {
    const script = document.createElement('script')
    script.src = `https://${props.shortname}.disqus.com/embed.js`
    script.setAttribute('data-timestamp', +new Date())
    document.head.appendChild(script)
  }
})
</script>

<template>
  <div v-if="disqusEnabled">
    <!-- Aquí se cargará el thread de Disqus -->
    <div id="disqus_thread"></div>
  </div>
</template>
