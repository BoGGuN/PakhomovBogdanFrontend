<template>
<div class=date_window>
   <div class="date_header">
      <span class="text">Выбор даты</span>
      <div class="select_year">
      <button @click="useStore().Store_minus()" class="but text butplus">-</button>
      <div class="text">{{currentyear}}</div>
      <button @click="useStore().Store_plus()" class="but text butplus">+</button>
   </div>
      <button @click="useStore().Store_selectmonth()" class="but text">{{currentmonth}}</button>
   </div>
      <div class="date_select">
         <div @click="useStore().Store_selectdate($event)" class="el months text" v-for="months in monthar2"> {{months}}</div>
         <router-link @click="useStore().Store_setdate($event)" to="/tasks" class="el days text" v-for="days in daysar"><div>{{ days.date }}</div><div>{{ days.day }}</div></router-link>
      </div>
</div>

</template>
      
         <script lang="ts" setup>
import {watch} from 'vue'
import {currentyear,currentmonth,daysar,monthar2} from '../utils/utils.ts'
import {useStore} from '../store/store'

watch(currentyear, useStore().Store_calendar);/*При +- изменении currentyear в массив datebase будет добавляться год*/

      </script>
      
      <style scoped>
.date_window {
   width:75vw;
   padding:3vw;
   height:auto;
   background:transparent;
   border:solid 0.5vw rgb(17, 100, 121);
      border-radius: 2vw;
      gap:5.5vw;
      box-shadow: 0 0 5vw rgb(17, 100, 121);
      display:flex;
      flex-direction:column;
}
.text {
   color:white;
   font-size:2vw;
   font-family:"Comic Sans MS";
}
.date_header {
   display:flex;
   flex-direction:row;
   justify-content:right;
   gap:5vw;
}
.select_year {
   gap:1vw;
   display:flex;
   flex-direction:row;
}
.but {
   min-width:7vw;
}
.butplus {
   min-width:2vw;
}
.el:hover{
   cursor:pointer;
}
.date_select {
   display:flex;
   flex-wrap:wrap;
   justify-content:center;
   align-items:center;
   gap:0.7vw;
}
.el {
   display:flex;
   justify-content:center;
   align-items:center;
   padding:0.2vw;
border:0.2vw solid rgb(17, 100, 121);
border-radius:1vw;
      box-shadow: 0 0 1vw rgb(17, 100, 121);
}
.months {
   min-width:20vw;
}
.months:nth-child(-n+2),.months:nth-child(12) {
   border:0.2vw solid rgb(99, 99, 99);
   box-shadow: 0 0 1vw rgb(99, 99, 99);
}
.months:nth-child(3),.months:nth-child(4),.months:nth-child(5) {
   border:0.2vw solid rgb(160, 55, 55);
   box-shadow: 0 0 1vw rgb(160, 56, 56);
}
.months:nth-child(6),.months:nth-child(7),.months:nth-child(8) {
   border:0.2vw solid rgb(0, 82, 0);
   box-shadow: 0 0 1vw rgb(0, 80, 0);
}
.months:nth-child(9),.months:nth-child(10),.months:nth-child(11) {
   border:0.2vw solid rgb(126, 118, 17);
   box-shadow: 0 0 1vw rgb(131, 123, 16);
}
.days {
   text-decoration:none;
   display:flex;
   flex-direction:column;
   justify-content:center;
   align-items:center;
   width:4vw;
}
</style>  