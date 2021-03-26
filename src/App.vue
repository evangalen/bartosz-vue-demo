<template>
  <img alt="Vue logo" src="./assets/logo.png">
<!--  <HelloWorld msg="Welcome to Your Vue.js App"/>-->
  <TodoItems v-bind:done="false"/>
  <TodoItems v-bind:done="true"/>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import TodoItems from './components/TodoItems';

export default {
  name: 'App',
  components: {
    // HelloWorld,
    TodoItems,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
