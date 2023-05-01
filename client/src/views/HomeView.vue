<script setup>
import {reactive, ref, onMounted, computed} from 'vue';
import {useFetch} from "@vueuse/core";
import TaskBox from '../components/TaskBox.vue'

import {db} from '@/firebase'
import {collection, getDocs, query, onSnapshot, QuerySnapshot} from 'firebase/firestore'

const allTask = ref([]);

async function getUsers(){
  const query = await getDocs(collection(db, "Users"))
  console.log(query)
  query.forEach((doc) =>{
  console.log(doc.id, " => ", doc.data().name)
})
}

async function getTask(){
  
  const q = query(collection(db, "Task"))
  const unsubscribe = onSnapshot(q, (QuerySnapshot)=>{
    let tasks = []
    QuerySnapshot.forEach((doc)=>{
      tasks.push(doc.data())
    })
    allTask.value=tasks
  })

}


//onSnapshot

onMounted(()=>{
  getTask();
})

// getUsers();


</script>

<template>
  <main>
    <h1>
    Hello world!
  </h1>
  <div id="list-task" >
    <div v-for="task in allTask">
      <TaskBox :task=task></TaskBox>
    </div>

  </div>
  
  
  </main>
</template>
