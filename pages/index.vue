<template>
  <div class="container">
    <h1 class="header"> My Todo List</h1>
    <div class="todo">
        <input type="text" placeholder="+  Add a to-do..." class="list" v-model="pushItem"  @keyup.enter="pushInput" />
        <br><br><div class="all-todos">
          <p v-for="note in notes" :key="note.title" class="list-item">
            <input type="checkbox" id="checkbox" class="checkmark" v-model="note.checked" v-on:change="toggleNote">
            {{note.title}}
            <button @click="removeItem(note)" class="btn" type="button">x</button>
          </p> 
        </div>
    </div> 
  </div>
</template>


<script>
export default {
  data() {
    return {
      pushItem: '',
      notes : []
    }
  },
  mounted() {
    const str = localStorage.getItem('myTodos')
    if (str) { 
      const parsedArr = JSON.parse(str)
      this.notes = parsedArr
    } else {
      this.notes = []
    }
  },
  methods: {
    pushInput(){
      this.notes.push({title: this.pushItem, checked: false})
      this.pushItem= '';
      this.saveNotesToStorage()
    },
    toggleNote(e) {
      this.saveNotesToStorage()
    },
    removeItem(note) {
      this.notes.splice(this.notes.indexOf(note),1)
      this.saveNotesToStorage()
    },
    saveNotesToStorage() {
      localStorage.setItem('myTodos', JSON.stringify(this.notes));
    }
  },
};
</script>

<style>
.container {
  height: 100vh;
  background-color:cornsilk;
}
.header {
  text-align: center;
  margin: 20px 20px;
  font-size: 36px;
  font-family: 'Times New Roman', Times, serif;
  color: blue;
}

.todo {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}
.list{
border: 1px solid aquamarine;
border-radius: 15px;
height: 40px;
padding-left: 10px;
background-color: aquamarine;
width: 35%;
}
.all-todos{
  width: 35%;
}
.list-item{
  background-color:white;
  margin-bottom: 10px;
  height: 30px;
}
.btn{
  
  float: right;
  background: transparent;
  
}
</style>
