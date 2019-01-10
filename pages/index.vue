<template>
  <div class="container">
    <h1 class="header">My Todo List</h1>
    <div class="todo">
      <input
        type="text"
        placeholder="+  Add a to-do..."
        class="list"
        v-model="pushItem"
        @keyup.enter="pushInput"
      >
      <br>
      <h4>Data Stored in localStorage</h4>
      <br>
      <br>
      <div class="all-todos">
        <p v-for="note in notes" :key="note.title">
          <label class="list-item">
            <input type="checkbox" v-model="note.checked" v-on:change="toggleNote">
            <span class="checkmark"></span>
            {{note.title}}
            <a @click="removeItem(note)" class="close">x</a>
            <br>
            <span class="date">{{today}}</span>
          </label>
        </p>
      </div>
      <br>
      <h4 class="fire">Click <nuxt-link to="firebase">here</nuxt-link> to see to-do list for firebase</h4>
    </div>
  </div>
</template>


<script>
import { firebase, auth, db } from "~/plugins/fire.js";

const initialNotes = [
  { title: "Learn JavaScript", checked: false },
  { title: "Make a To-do List", checked: true }
];

export default {
  data() {
    return {
      pushItem: "",
      notes: [],
      today: new Date().toLocaleDateString()
    };
  },
  mounted() {

    const isFirstVisitedJSON = localStorage.getItem("isFirstVisited");
    const isFirstVisited = JSON.parse(isFirstVisitedJSON);

    if (isFirstVisited) {
      const str = localStorage.getItem("myTodos");
      var parsedArr = JSON.parse(str);
      this.notes = parsedArr;
    } else {
      this.notes = initialNotes;
      localStorage.setItem("isFirstVisited", "true");
    }
    
  },
  methods: {
    pushInput() {
      this.notes.push({ title: this.pushItem, checked: false });
      this.saveNotesToStorage(),
      this.pushItem = "";
    },
    toggleNote(e) {
      this.saveNotesToStorage();
    },
    removeItem(note) {
      this.notes.splice(this.notes.indexOf(note), 1);
      this.saveNotesToStorage();
    },
    saveNotesToStorage() {
      localStorage.setItem("myTodos", JSON.stringify(this.notes));
    }
  }
};
</script>