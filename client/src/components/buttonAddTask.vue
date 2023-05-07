<script setup>

    import { ref, defineEmits } from "vue"

    const popupVisible = ref(false)
    const emit = defineEmits(["showPopup"])

    function showPopup(){
        emit("showPopup")
    }

</script>


<template>

    <button @click="showPopup()">Add Task</button>

</template>