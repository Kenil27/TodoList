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
        <p v-for="note in notes" :key="note.title" >
          <label class="list-item">
          <input type="checkbox" v-model="note.checked" v-on:change="toggleNote">
          <span class="checkmark"></span>
          {{note.title}} 
          <a @click="removeItem(note)" class="close">x</a>
          <br> <span class="date">{{today}}</span> 
          </label>
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
      notes: [
        { title : 'Learn JavaScript' , checked: false},
        { title : 'Make a To-do List', checked : true}
      ],
      today: new Date().toLocaleDateString()
    };
  },
  mounted() {
    let str = localStorage.getItem("myTodos");
    const strInitial = JSON.stringify(this.notes);
    if(strInitial){
      str = strInitial;
    }
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
  height: 50px;
  padding-left: 10px;
  background-color: aquamarine;
  width: 50%;
}
@media only screen and (max-width: 600px) {
  .list {
    width: 75%;
  }
}
.all-todos {
  width: 50%;
}
@media only screen and (max-width: 600px) {
  .all-todos {
    width: 75%;
  }
}
.list-item {
  display: block;
  background-color: white;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 18px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default checkbox */
.list-item input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 40px;
  width: 35%;
  margin-left: -60px;
}

/* Create a custom checkbox */
.checkmark {
  position: absolute;
  top: 5px;
  left: 5px;
  height: 20px;
  width: 20px;
  background-color:white;
  border: 1px solid lightgray;
}

/* On mouse-over, add a grey background color */
.list-item:hover input ~ .checkmark {
  background-color: #ccc;
}

/* When the checkbox is checked, add a blue background */
.list-item input:checked ~ .checkmark {
  background-color: #2196F3;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.list-item input:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.list-item .checkmark:after {
  left: 7px;
  top: 3px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
.date{
  font-size: 12px;
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
