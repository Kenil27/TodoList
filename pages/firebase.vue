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
      <h4>Data Stored in firebase</h4>
      <br>
      <div class="all-todos">
        <p v-for="data in myTodos" :key="data.id">
          <label class="list-item">
            <input
              type="checkbox"
              v-model="data.checked"
              v-on:change="toggleFireNote(data.id, data)"
            >
            <span class="checkmark"></span>
            {{data.title}}
            <a @click="removeFireItem(data.id, data)" class="close">x</a>
            <br>
            <span class="date">{{today}}</span>
          </label>
        </p>
      </div>
      <br>
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
      userId: null,
      errorMessage: '',
      myTodos: [],
      today: new Date().toLocaleDateString()
    };
  },
  mounted() {
    auth.signInAnonymously().catch(function(error) {
      this.errorMessage = error.message
    });
    this.listenToAuth()
    
  },
  methods: {
    listenToAuth() {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {    
          // User is signed in.
          this.userId = user.uid;
          this.getMyTodos();
        } else {
          // User is signed out.
          this.userId = null
        }
      });
    },
    pushInput() {
      const newTodo = {
        title: this.pushItem,
        checked: false,
        user : this.userId,
        createdAt:  new Date().toLocaleDateString()
      }
      db.collection("todoList").add(newTodo).then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
        this.myTodos.push({
          ...newTodo,
          id: docRef.id,
        });
      })

      this.pushItem = "";
    },
    getMyTodos(){
      db.collection("todoList").where("user", "==", this.userId)
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            const { title, createdAt, checked } = doc.data()
            this.myTodos.push({
              title, 
              createdAt, 
              checked,
              id: doc.id,
            });
          });
        });
    },
    toggleFireNote(id, data) {
      // Create a reference to the SF doc.
      const updatedData = db.collection("todoList").doc(id);

      return db.runTransaction(function(transaction) {
        return transaction.get(updatedData).then(function(doc) {
          if (!doc.exists) {
            throw "Document does not exist!";
          }

          const newChecked = !doc.data().checked;
          transaction.update(updatedData, { checked: newChecked });
        });
      });
    },
    removeFireItem(id, data) {
      db
        .collection("todoList")
        .doc(id)
        .delete()
        .then(function() {
          console.log("Document successfully deleted!");
        })
        this.myTodos.splice(this.myTodos.indexOf(data), 1);
    },
  }
};
</script>