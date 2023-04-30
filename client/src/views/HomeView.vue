<script setup>
import {reactive, ref, onMounted, computed} from 'vue';
import {useFetch} from "@vueuse/core";
import TaskBox from '../components/TaskBox.vue'

import {db} from '@/firebase'
import {collection, getDocs} from 'firebase/firestore'

async function getUsers(){
  const query = await getDocs(collection(db, "Users"))
  console.log(query)
  query.forEach((doc) =>{
  console.log(doc.id, " => ", doc.data().name)
})
}

getUsers();
</script>

<template>
  <main>
    <h1>
    Hello world!
  </h1>

  <TaskBox></TaskBox>
  
  </main>
</template>
