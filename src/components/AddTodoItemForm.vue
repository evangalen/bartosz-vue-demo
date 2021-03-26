<template>
  <form v-on:submit.prevent="addTodo(text)">
    <input type="text" v-model="text"/>
    <button class="add-todo" type="submit">Add todo</button>
  </form>
</template>

<script>
import {TodoItemsState} from "@/items-state";

export default {
  name: 'AddTodoItemForm',
  data() {
    return {
      text: '',
    };
  },
  methods: {
    addTodo(text) {
      TodoItemsState.addItem(text);
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
