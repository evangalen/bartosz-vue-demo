<template>
  <ul>
    <li v-for="item in items" v-bind:key="item.id">
      <input type="checkbox" v-bind:checked="item.done" v-on:click="toggleDone(item.id)" />
      <span>{{item.text}}</span>
      <button v-on:click="removeTodoItem(item.id)">x</button>
    </li>
  </ul>
</template>

<script>
import {TodoItemsState} from "@/items-state";

export default {
  name: 'TodoItems',
  props: {
    done: Boolean,
  },
  computed: {
    items() {
      return TodoItemsState.items.filter(item => item.done === this.done);
    },
  },
  methods: {
    removeTodoItem(id) {
      TodoItemsState.removeItem(id);
    },
    toggleDone(id) {
      TodoItemsState.toggleDone(id);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
