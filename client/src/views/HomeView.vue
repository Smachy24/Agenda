<script setup>
import {reactive, ref, onMounted, computed} from 'vue';
import {useFetch} from "@vueuse/core";
import * as dayjs from 'dayjs'
import TaskBox from '../components/TaskBox.vue'
import popupAddTask from '../components/popupAddTask.vue';


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
      let task = {
        id:doc.id,
        user_id:doc.data()["user_id"],
        start_date: dayjs(doc.data()["start_date"].toDate()).format("HH:mm"),
        end_date:dayjs(doc.data()["end_date"].toDate()).format("HH:mm"),
        title:doc.data()["title"],
        color:doc.data()["color"]

      }
      tasks.push(task)
    })
    allTask.value=tasks
  })

}


//onSnapshot

const popupVisible = ref(false)

onMounted(()=>{
  getTask();
})

// getUsers();


</script>

<template>
  <main> 
  <div id="list-task" >
    <div v-for="task in allTask">
      <TaskBox :task=task></TaskBox>
    </div>

  </div>

  <popupAddTask v-bind:popupVisible="popupVisible" @showPopup="popupVisible=false"></popupAddTask>

  <button @click="popupVisible=true">Add Task</button>
  
  </main>
</template>
