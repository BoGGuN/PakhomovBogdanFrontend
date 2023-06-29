<template>

   <div class="task_window">
      <div class="task_header">
            <div class="current_time text">
               <div class="time">{{ datebase[b].date }}</div>
               <div class="time">{{ datebase[b].day }}</div>
               <div class="time">{{ datebase[b].month }}</div>
               <div class="time">{{ datebase[b].year }}</div>
            </div>
            <div class="input_window text">
               <input type="text" class="input_time inp text" placeholder="Время" v-model="timer">
               <input type="text" class="input_task inp text" placeholder="Задание" v-model="tasker">
               <button @click="saver()" class="but_save but text">сохранить</button>
            </div>
      </div>
      <div class="task_el" v-for="tasks in datebase[b].tasks"> 
         <div class="el_container">
            <div class="text el_time">{{ tasks.time }}</div>
            <div class="text el_text">{{ tasks.task }}</div>
      </div>
         <button @click="deleter ($event)" class="but text">удалить</button>
      </div>
   </div>

</template>
      
         <script lang="ts" setup>
         import {ref} from 'vue'
         import {datebase,savedate,currentmonth,currentyear,currentdate} from '../utils/utils.ts'
         let b=ref(1);/*начальный индекс, который будет указывать на конкретную отрисовываемую дату*/
         let tasker=ref('');/*v-model в input задачи*/
         let timer=ref('');/*v-model в input время*/
         for (let i=0;i<datebase.value.length;i++) {
            /* Начальное определение конкретного дня и b индекса к нему*/
            if (currentyear.value==datebase.value[i].year&&currentmonth.value==datebase.value[i].month&&currentdate.value==datebase.value[i].date){
               b.value=i;
               break;
            }
         }

         function deleter (event:any) {
            /*Функция удаляет найденную в datebase.value[b.value] задачу tasks[i] (datebase.value[b.value].tasks[i])
            В конце стоит savedate() для сохранения изменений в localStorage*/
            for (let i=0;i<datebase.value[b.value].tasks.length;i++){
               if (event.target.previousElementSibling.firstElementChild.textContent==datebase.value[b.value].tasks[i].time&&event.target.previousElementSibling.lastElementChild.textContent==datebase.value[b.value].tasks[i].task){
                  datebase.value[b.value].tasks.splice(i,1);
                  break;
               }
            }
            savedate();
         }
         function saver (){
            /*Пушит запись в tasks в datebase
            В конце стоит savedate() для сохранения изменений в localStorage*/
            if (timer.value!=''&&tasker.value!=''){
            let newobject={time:timer.value,task:tasker.value};
            datebase.value[b.value].tasks.push(newobject);
            timer.value='';
            tasker.value='';
            }
            savedate();
         }
      </script>
      
      <style scoped>
      .task_window {
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
      justify-content:center;
      align-items:left;
      }
      .task_header {
         display:flex;
         flex-direction:column;
         align-items:left;
         justify-content:center;
         gap:2vw;
      }
      .current_time {
         display:flex;
         flex-direction:row;
         justify-content:left;
         align-items:center;
         gap:2vw;
      }
.text {
   font-family:"Comic Sans MS";
   color:white;
   font-size:2vw;
}
.text::placeholder {
   font-family:"Comic Sans MS";
   color:white;
   font-size:2vw;
}
.input_window {
   display:flex;
   flex-direction:column;
   justify-content:center;
   align-items:left;
   gap:2vw;
}
.inp {
   width:40vw;
}
.input_time {
   width:15vw;
}
.but {
   min-width:20vw;
   height:4vw;
}
.but_save {
   min-width:100%;
}
.task_el {
   display:flex;
   flex-direction:row;
   justify-content:space-between;
   align-items:left;
   gap:5vw;
}
.el_container {
   display:flex;
   width:30vw;
   flex-direction:column;
   justify-content:center;
   align-items:left;
   gap:0.5vw;
}
.el_text,.el_time {
   word-wrap: break-word;
  overflow-wrap: break-word;
}
      </style>  