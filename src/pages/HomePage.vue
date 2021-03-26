<template>
  <h1>Todo</h1>

  <AddTodoItemForm/>
  <TodoItems v-bind:done="false"/>

  <router-link to="/done" class="page-link">Show done items</router-link>
</template>

<script>
import TodoItems from '@/components/TodoItems';
import AddTodoItemForm from "@/components/AddTodoItemForm";

export default {
  name: 'HomePage',
  components: {
    AddTodoItemForm,
    TodoItems,
  }
}
</script
>
