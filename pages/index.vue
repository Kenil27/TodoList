<template>
  <div class="container">
    <p class="header">This is a sample Todo List</p>
    <div class="todo">
        <input type="text" class="list" v-model="pushItem"  @keyup.enter="pushInput" />
        <div>
          <p v-for="note in notes" :key="note" class="list-item">
            <input type="checkbox" id="checkbox" v-model="note.checked">
            {{note.title}}
          </p><br>
        </div>
    </div> 
  </div>
</template>


<script>
export default {
  data() {
    return {
      pushItem: '',
      notes : [
        {title: 'First note', checked: true},
        {title: 'Second item',checked: false},
        {title: 'Third note', checked: false}]
    }
  },
  methods: {
    pushInput(){
     this.notes.push({title: this.pushItem, checked: false})
     this.pushItem= '';
    }
  },
};
</script>

<style>
.container {
  width: 100%;
  height: 100vh;
  
}
.header {
  text-align: center;
  margin: 20px 20px;
  font-size: 26px;
}
.todo {
  margin :0 auto;
  width: 50%;
}
.list{
border: 1px solid black;
height: 40px;
padding-left: 10px;
}
textarea {
  width: 90%;
  margin: 10px;
  padding: 5px;
  border-radius: 4px;
  border: 1px solid #eee;
}
</style>
