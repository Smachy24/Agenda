<script setup>
import { reactive, ref, onMounted, computed } from "vue";
import { useFetch } from "@vueuse/core";
import * as dayjs from "dayjs";
import TaskBox from "../components/TaskBox.vue";
import popupAddTask from "../components/popupAddTask.vue";
import popupEditTask from "../components/popupEditTask.vue";

import { db } from "@/firebase";
import {
  collection,
  getDocs,
  query,
  onSnapshot,
  QuerySnapshot,
} from "firebase/firestore";

const allTask = ref([]);

async function getUsers() {
  const query = await getDocs(collection(db, "Users"));
  console.log(query);
  query.forEach((doc) => {
    console.log(doc.id, " => ", doc.data().name);
  });
}

function getTask() {
  const q = query(collection(db, "Task"));
  const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
    let tasks = [];
    QuerySnapshot.forEach((doc) => {
      let task = {
        id: doc.id,
        user_id: doc.data()["user_id"],
        day: dayjs(doc.data()["start_date"].toDate()).format("YYYY-MM-DD"),
        start_date: dayjs(doc.data()["start_date"].toDate()).format("HH:mm"),
        end_date: dayjs(doc.data()["end_date"].toDate()).format("HH:mm"),
        title: doc.data()["title"],
        color: doc.data()["color"],
      };
      tasks.push(task);
    });
    allTask.value = tasks;
  });
}
const popupAddVisible = ref(false);
const popupEditVisible = ref(false);
const taskToEdit = ref({});

function editTask(task) {
  popupEditVisible.value = true;
  taskToEdit.value = task;
}

let clicks = ref(0)
let timer = ref(null)


function testClick(event){
  clicks.value++;
  if(clicks.value ===1){
    timer.value = setTimeout(()=>{
      console.log("click");
      clicks.value = 0
    }, 600);
  }
  else{
    clearTimeout(timer.value);
    console.log("dbclick");
    clicks.value = 0
  }
}

onMounted(() => {
  getTask();
});

// getUsers();
</script>

<template>
  <main>
    <div id="list-task">
      <div v-for="task in allTask" :key="task.id">
        {{ task }}
        <TaskBox :task="task" @click="testClick($event)"></TaskBox>
      </div>
    </div>

    <popupAddTask
      v-bind:popupAddVisible="popupAddVisible"
      @showPopup="popupAddVisible = false"
    ></popupAddTask>

    <popupEditTask
      :popupEditVisible="popupEditVisible"
      :taskToEdit="taskToEdit"
      @showPopup="popupEditVisible = false"
    ></popupEditTask>

    <button @click="popupAddVisible = true">Add Task</button>
  </main>
</template>
