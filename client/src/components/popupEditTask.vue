<script setup>

import { defineEmits,computed, ref, onMounted} from 'vue';
import {db} from '@/firebase'
import {doc, deleteDoc , updateDoc} from 'firebase/firestore'

const props = defineProps({
    popupEditVisible:Boolean,
    taskToEdit:Object
})

const emit = defineEmits(["showPopup"])


const id = ref()
const title = ref()
const day = ref()
const startDate = ref()
const endDate = ref()
const color = ref()


async function editTask(){
    const docRef = doc(db, "Task", id.value);

    await updateDoc(docRef, {
        title: title.value,
        start_date:new Date(day.value +" " + startDate.value),
        end_date: new Date(day.value +" " + endDate.value),
        color: color.value
    })
}

async function deleteTask(){
    console.log(id.value);
    await deleteDoc(doc(db, "Task", id.value))
    emit('showPopup')
}

onMounted(()=>{
    title.value = props.taskToEdit.title
    day.value = props.taskToEdit.day
    startDate.value = props.taskToEdit.start_date
    endDate.value = props.taskToEdit.end_date
    color.value = props.taskToEdit.color
    id.value = props.taskToEdit.id
})

</script>


<template>
    <section class ="popup-add-task-container">
        <div class="popup-add-task">
            
            <h2 class="popup-task-header-text">Modifier une tâche</h2>
            <p class = "icon-close" @click="emit('showPopup')">&#x2715</p>
           
            <div class="popup-task-title">
                <input class="popup-task-title-input" type="text" required  v-model="title">
                <span></span>
                <label>Titre</label>
            </div>

            <div class="popup-task-day">
                
                <input type="date" class="popup-task-day-input" max="9999-12-31" required v-model="day">
                <span></span>
                <label>Date</label>
               
            </div>

            <div class="popup-task-time">
                <div class="popup-task-start-hour" >
                    <label>Début</label>
                    <input type="time"  v-model="startDate">
                    
                </div>

                <div class="popup-task-end-hour">
                    <label>Fin</label>
                    <input type="time"  v-model="endDate">
                </div>
            </div>

            <div class="popup-task-color">
                <label>Couleur</label>
                <input type="color"  v-model="color">
            </div>
            
            <div class="popup-task-buttons">
                <!-- :disabled="!isPopupValid" -->
                <input class ="popup-task-edit-button" type="submit" value="Modifier"  @click="editTask" >
                <input class ="popup-task-remove-button" type="submit" value="Supprimer" @click="deleteTask">
            </div>
            

        </div>
    </section>
</template>




<style>

*{
    margin: 0;
    padding: 0;
    font-family: "Roboto";
}

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
    position: absolute;
    flex-direction: column;
    background-color: white;
    max-height: 50%;
    min-width: 25%;
    max-width: 70%;
    row-gap: 10px;
    border-radius: 10px;
    padding: 0 2.5vw;
    box-sizing: border-box;
}

.popup-task-header-text{
    text-align: center;
    padding: 1vw 0;
    border-bottom: 1px solid silver;
    font-size: 1.7em;
}
.icon-close{
    position:absolute;
    top: 0;
    right: 0;
    font-size: 24px;
    font-weight: 500;
    color:silver;
    padding: 0;
    margin: 8px;
    cursor: pointer;
}

/* -------------------------------- */

.popup-task-title, .popup-task-day {
    position: relative;
    border-bottom: 2px solid silver;
    margin: 1vw 0;
}

.popup-task-title-input, .popup-task-day-input{
    width: 100%;
    padding: 0 5px;
    height: 40px;
    font-size: 16px;
    border: none;
    background: none;
    outline: none;
}

.popup-task-title label, .popup-task-day label{
    position: absolute;
    top: 50%;
    left: 5px;
    color: silver;
    transform: translateY(-50%);
    font-size: 16px;
    pointer-events: none;
    transition: .5s;
}

.popup-task-title span::before, .popup-task-day span::before{
    content: '';
    position: absolute;
    top: 40px;
    left: 0;
    width: 0%;
    height: 2px;
    background: #2691d9;
    transition: .5s;
}

.popup-task-title-input:focus ~ label,
.popup-task-day-input:focus ~ label,
.popup-task-title-input:valid ~ label,
.popup-task-day-input:valid ~ label
{
    top: -5px;
    color: #2691d9;
}

.popup-task-title-input:focus ~ span::before, 
.popup-task-day-input:focus ~ span::before,
.popup-task-title-input:valid ~ span::before, 
.popup-task-day-input:valid ~ span::before{
    width: 100%;
}


input[type=date]:required:invalid::-webkit-datetime-edit {
    color: transparent;
}
input[type=date]:focus::-webkit-datetime-edit {
    color: black !important;
}

/* ----------------------------------------------- */

.popup-task-time{
    display: flex;
    justify-content: space-between;
}

.popup-task-start-hour, .popup-task-end-hour{
    display: flex;
    border-bottom: 1px solid silver;
    align-items: center;
}

.popup-task-start-hour label, .popup-task-end-hour label{
    color: #adadad;
    height: 40px;
    font-size: 16px;
    padding: 7px;
}

.popup-task-start-hour input, .popup-task-end-hour input{
    width: 100%;
    padding: 0 5px;
    height: 40px;
    font-size: 16px;
    border: none;
    background: none;
    outline: none;
    text-align: center;
}

/* -------------------------- */

.popup-task-color{
    display: flex;
    align-items: center;
    margin-top: 1vh;
}

.popup-task-color input{
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background-color: transparent;
    width: 30px;
    height: 30px;
    border: none;
    cursor: pointer;
}
.popup-task-color input::-webkit-color-swatch {
    border-radius: 50%;

}
.popup-task-color input::-moz-color-swatch {
    border-radius: 50%;

}

.popup-task-color label{
    color: #adadad;
    height: 40px;
    font-size: 16px;
    padding: 7px;
}

/* -------------------------- */

.popup-task-buttons{
    display: flex;
    column-gap: 10px;
}


.popup-task-edit-button{
    width: 100%;
    height: 50px;
    border: 2px solid;
    background: #2691d9;
    border-radius: 25px;
    font-size: 18px;
    color: #e9f4fb;
    font-weight: 700;
    cursor: pointer;
    outline: none;
    margin:2vh 0;
}

.popup-task-edit-button:hover{
    border-color: #2691d9;
    transition: .5s;
}

.popup-task-remove-button{
    width: 100%;
    height: 50px;
    border: 2px solid;
    background: red;
    border-radius: 25px;
    font-size: 18px;
    color: #e9f4fb;
    font-weight: 700;
    cursor: pointer;
    outline: none;
    margin:2vh 0;
}

.popup-task-remove-button:hover{
    border-color: red;
    transition: .5s;
}
/* ----------------- */

@media (max-width: 700px) {
 .popup-task-start-hour {
    flex-direction: column;
  }
  .popup-task-end-hour {
    flex-direction: column;
  }
  .popup-add-task{
    width:60%;
  }
  
}

@media (max-width: 400px) {

  .popup-task-time {
    flex-direction: column;
  }

  .popup-add-task{
    max-height: 70%;
    width: 80%;
  }
  .popup-task-start-hour input, .popup-task-end-hour input{
    text-align: left;
  }
  .popup-task-header-text{
    font-size: 1.3em;
  }
}



</style>