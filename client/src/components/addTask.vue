<script setup>


</script>


<template>
    <section class ="popup-add-task-container">
        <div class="popup-add-task">
            
            <div class="popup-task-header">
                <p class="popup-task-header-text">Ajouter une tâche</p>
            </div>
            

            <div class="popup-task-title">
                <p class="popup-task-title-text">Titre</p>
                <input  class="popup-task-title-input" type="text" placeholder="Ajouter un titre">
            </div>

            <div class="popup-task-day">
                <p >Date</p>
                <input type="date">
            </div>

            <div class="popup-task-time">
                <div class="popup-task-start-hour">
                    <p>Début</p>
                    <input type="time">
                </div>

                <div class="popup-task-end-hour">
                    <p>Fin</p>
                    <input type="time">
                </div>
            </div>
            

            <button>Valider</button>

        </div>
    </section>
</template>

<style>

.popup-add-task-container{
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.438);
    justify-content: center;
    align-items: center;
}

.popup-add-task{
    display: flex;
    flex-direction: column;
    background-color: aqua;
    height: 50%;
    width: 50%;
    row-gap: 20px;
}

.popup-task-header{
    display: flex;
    justify-content: center;
}

.popup-task-header-text{
    font-size: 24px;
    font-weight: 500;
}

.popup-task-title, .popup-task-day {
    /* border: 3px solid red; */
    display: flex;
    flex-direction: column;
    margin: 0 20px;
}

.popup-task-title-text{
    
}
.popup-task-title-input{

}

.popup-task-time{
    display: flex;
    justify-content: space-evenly;
}

.popup-task-start-hour, .popup-task-end-hour{
    /* border: 2px solid red; */
    display: flex;
    margin: 0 20px;
}



@media (max-width: 700px) {
  /* Styles à appliquer lorsque la largeur de l'écran est inférieure à 600px */
  .popup-task-start-hour {
    flex-direction: column;
  }
  .popup-task-end-hour {
    flex-direction: column;
  }
}

@media (max-width: 400px) {
  /* Styles à appliquer lorsque la largeur de l'écran est inférieure à 600px */
  .popup-task-time {
    flex-direction: column;
  }

}

</style>