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
      <br>

      <div class="all-todos">
        <p v-for="note in notes" :key="note.title" class="list-item">
          <input type="checkbox" id="checkbox" v-model="note.checked" v-on:change="toggleNote">
          {{note.title}} 
          <a @click="removeItem(note)" class="close">x</a>
          <br> <span class="date">{{today}}</span> 
        </p>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      pushItem: "",
      notes: [],
      today: new Date().toLocaleDateString()
    };
  },
  mounted() {
    const str = localStorage.getItem("myTodos");
    if (str) {
      const parsedArr = JSON.parse(str);
      this.notes = parsedArr;
    } else {
      this.notes = [];
    }
  },
  methods: {
    pushInput() {
      this.notes.push({ title: this.pushItem, checked: false });
      this.pushItem = "";
      this.saveNotesToStorage();
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

<style>
@import url('https://fonts.googleapis.com/css?family=Alegreya');
.container {
  height: 100vh;
  background-color: cornsilk;
}
.header {
  text-align: center;
  margin: 20px 20px;
  font-size: 36px;
  font-family: "Times New Roman", Times, serif;
  color: blue;
}

.todo {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.list {
  border: 1px solid aquamarine;
  border-radius: 15px;
  height: 40px;
  padding-left: 10px;
  background-color: aquamarine;
  width: 35%;
}
@media only screen and (max-width: 600px) {
  .list {
    width: 75%;
  }
}
.all-todos {
  width: 35%;
}
@media only screen and (max-width: 600px) {
  .all-todos {
    width: 75%;
  }
}
.list-item {
  background-color: white;
  margin-bottom: 15px;
  height: 45px;
  font-size: 16px;
  
}
#checkbox {
  width: 15px;
  height: 15px;
}
.date{
  font-size: 12px;
  padding-left: 20px;
  opacity: 0.7;
}
.close {
  opacity: 0.4;
  float: right;
  margin-right: 10px;
  font-size: 18px;
}
.close:hover {
  opacity: 1;
  cursor: pointer;
}
</style>
