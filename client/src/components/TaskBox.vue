<template>

    <div class="task-box" :style="{ backgroundColor: task.color }">
       <div class="task-title">{{ task.title }}</div>
       <div class="task-time">8h00 à 9h00</div> 

    </div>

</template>

<script setup>


    const props = defineProps({
        task:{
            type:Object,
            default: () => ({ id: 0, title:"Tache par défaut" })
        }
    })

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');

.task-box{
    width: 220px;
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    font-family: "Roboto";
    padding: 5px 8px;
}

.task-title{
    overflow-wrap: break-word;
}
.red{
    background-color: red;
}

</style>