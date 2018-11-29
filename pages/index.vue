<template>
  <div class="container">
    <p class="header">This is a sample Todo List</p>
    <div class="todo">

        <textarea type="text" v-model="message" class="list" name="list" required></textarea>
        <p> {{ message }} </p> 
    </div> 
  </div>
</template>


<script>
export default {
  data() {
    return {
    message : ' '
  }
  }
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
textarea {
  width: 90%;
  margin: 10px;
  padding: 5px;
  border-radius: 4px;
  border: 1px solid #eee;
}
</style>
