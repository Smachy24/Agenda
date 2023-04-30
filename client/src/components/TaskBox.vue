<template>

    <div class="task-box" :style="{ backgroundColor: color }">
       <div class="task-title">Titre</div>
       <div class="task-time">8h00 à 9h00</div>
    </div>

</template>

<script>
    export default{
        name:"TaskBox",
        props:{
            color:{
                type:String,
                default:"white"
            }
        }
    }
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