<script setup>
import {reactive, ref, onMounted, computed} from 'vue';
import {useFetch} from "@vueuse/core";

const {isFetching, error, data:user} = useFetch('http://localhost:8080/getUsers')

const formattedUser = computed(()=>{
    return JSON.parse(user.value)
})


</script>

<template>
  <main>
    <h1>
    Hello world!
  </h1>
  {{ formattedUser }}
  
  </main>
</template>
