<script setup >
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
library.add(faAngleRight)
library.add(faAngleLeft)
</script>

<template>
    <header>
        <font-awesome-icon icon="fa-angle-left" class="previous-week"/>
        <div class="month">Juin</div>
        <font-awesome-icon icon="fa-angle-right" class="next-week"/>
    </header>
    
    <section class="agenda-container">

        <div class="agenda-days-outer-box">

            <div class="agenda-days-inner-box">
                <div class="day-box" id="monday-box">
                    <div class="day-name" id="monday-name">Lundi</div>
                    <div class="day-number" id="monday-number">12</div>
                </div>
                <div class="day-box" id="tuesday-box">
                    <div class="day-name" id="tuesday-name">Mardi</div>
                    <div class="day-number" id="tuesday-number">13</div>
                </div>
                <div class="day-box" id="wednesday-box">
                    <div class="day-name" id="wednesday-name">Mercredi</div>
                    <div class="day-number" id="wednesday-number">14</div>
                </div>
                <div class="day-box" id="thrusday-box">
                    <div class="day-name" id="thrusday-name">Jeudi</div>
                    <div class="day-number" id="thrusday-number">15</div>
                </div>
                <div class="day-box" id="friday-box">
                    <div class="day-name" id="friday-name">Vendredi</div>
                    <div class="day-number" id="friday-number">16</div>
                </div>
                <div class="day-box" id="saturday-box">
                    <div class="day-name" id="saturday-name">Samedi</div>
                    <div class="day-number" id="saturday-number">17</div>
                </div>
                <div class="day-box" id="sunday-box">
                    <div class="day-name" id="sunday-name">Dimanche</div>
                    <div class="day-number" id="monday-number">18</div>
                </div>
            </div>

        </div>

        <div class="agenda-box">

            <aside class = "agenda-hours"></aside>

            <div class = "agenda-day">
                <div class="agenda-day-column" id="monday-column"></div>
                <div class="agenda-day-column" id="tuesday-column"></div>
                <div class="agenda-day-column" id="wednesday-column"></div>
                <div class="agenda-day-column" id="thursday-column"></div>
                <div class="agenda-day-column" id="friday-column"></div>
                <div class="agenda-day-column" id="saturday-column"></div>
                <div class="agenda-day-column" id="sunday-column"></div>
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

header{
    display: flex;
    align-items: center;
    column-gap: 3px;
}

.previous-week{
    margin-left: 5px;
}
.next-week, .previous-week{
    
    font-size: 32px;
    padding: 10px;
    cursor: pointer;
    color:silver;
    border-radius: 50%;
}

.next-week:hover, .previous-week:hover{
    box-shadow: inset -20px -40px 40px 30px rgba(59, 58, 58, 0.1);
}

.month{
    font-size: 24px;
}

/* ----------------------------------------- */

.agenda-container{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 80vw;
    height: 80vh;
    margin-left: 20px;
}

/* ------------------------------------- */

.agenda-days-outer-box{
    height: 10%;
    width: 100%;   
}

.agenda-days-inner-box{
    height: 100%;
    margin-left: 46px;
    display: flex;
    
}

.day-box{
    width: 100%;
    border:1px solid silver;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.day-name{
    font-size: 18px;
}

.day-number{
    font-size: 18px;
}

/* -------------------------- */

.agenda-box{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    
    }

.agenda-hours{
    height: 100%;
    width: 48px;
    border:1px solid silver;
}

.agenda-day{
    width: 100%;
    display: flex;
    border:1px solid silver;
}

.agenda-day-column{
    width: 100%;
    border:1px solid silver;
   
}

</style>