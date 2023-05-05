<script setup>


</script>


<template>
    <section class ="popup-add-task-container">
        <div class="popup-add-task">

            <div class="task-title"></div>

            <div class="task-day"></div>

            <div class="task-start-hour"></div>

            <div class="task-end-hour"></div>

            <button>Submit</button>

        </div>
    </section>
</template>

<style>

.popup-add-task-container{
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.438);
    /* display: none; */
    justify-content: center;
    align-items: center;
}

.popup-add-task{
    background-color: aqua;
    height: 50%;
    width: 50%;
}

</style>