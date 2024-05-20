<template>
  <div class="flex flex-col justify-center items-center mt-12">
    <h1 class="text-3xl font-bold underline text-yellow">
      Hello world with Tailwind CSS and VueX Store!
    </h1>

    <div class="card mt-12">
      <button
        class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
        @click="increment"
      >
        count is {{ count }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

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