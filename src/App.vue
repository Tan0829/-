<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  <el-button type="primary" @click="onClick">显示消息</el-button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HelloWorld from './components/HelloWorld.vue'

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld
  },
  setup() {
    const onClick = () => alert('我是一条消息')
    // const onClick = () => window.$toast('success', '我是一条消息')

    return {
      onClick
    }
  }
})
</script>
