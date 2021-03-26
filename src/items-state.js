import {reactive} from "@vue/reactivity";

let items = reactive([
    { id: "1", text: "Item 1 (from JS)", done: false },
    { id: "2", text: "Item 2 (from JS)", done: true },
    { id: "3", text: "Item 3 (from JS)", done: false },
    { id: "4", text: "Item 4 (from JS)", done: true }
]);

let lastId = "4";

export const TodoItemsState = {
  get items() {
    return items;
  },

  addItem(text) {
    lastId = String(Number(lastId) + 1); // generate a new `lastId` value
    items.push({ id: lastId, text, done: false }); // adds a new item to the `todoItems` array
  },

  toggleDone(id) {
    const item = items.find(item => item.id === id); // find todo item for id
    item.done = !item.done;
  },

  removeItem(id) {
    const index = items.findIndex(item => item.id === id);
    items.splice(index, 1);
  }
}
