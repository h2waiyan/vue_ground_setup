<template>
  <h1>{{ msg }}</h1>

  <h1 class="text-3xl font-bold underline text-yellow">
    Hello world with Tailwind CSS and VueX Store!
  </h1>

  <div class="card">
    <button
      class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
      @click="increment"
    >
      count is {{ count }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import store from '../store/index'

defineProps<{ msg: string }>()

const count = ref(store.state.count)

const increment = () => {
  store.commit('increment')
  count.value = store.state.count
}

</script>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
