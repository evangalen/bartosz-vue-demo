<template>
  <h1>Done Items</h1>

  <TodoItems v-bind:done="true"/>

  <router-link to="/">Back to todo</router-link>
</template>

<script>
import TodoItems from '@/components/TodoItems';

export default {
  name: 'HomePage',
  components: {
    TodoItems,
  }
}
</script
>
