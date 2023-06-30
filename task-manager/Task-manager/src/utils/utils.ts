import {ref} from 'vue'
interface Task{time:string,task:string};
export interface Data{date:number,day:string,month:string,year:number,tasks:Task[]};
export let datebase=ref<Data[]>([]);/*Основной массив данных даты и задач к этой дате*/
export let currentyear=ref(new Date().getFullYear());/* текущий год*/
let storedData = localStorage.getItem('currentyear'); 
console.log(!!storedData);
if (storedData) {
      /*проверка есть ли эта переменная в localStorage*/ 
   currentyear.value=JSON.parse(storedData);
} else {
   localStorage.setItem('currentyear',JSON.stringify(currentyear.value));
   storedData = localStorage.getItem('currentyear');
   currentyear.value=JSON.parse(storedData);
}
export let currentmonth=ref('Месяц');/*текущий месяц*/ 
switch (new Date().getMonth()) {
   /*определяем текущий месяц*/ 
   case 0:      currentmonth.value='Январь';      break;
   case 1:      currentmonth.value='Февраль';      break;
   case 2:      currentmonth.value='Март';      break;
   case 3:      currentmonth.value='Апрель';      break;
   case 4:      currentmonth.value='Май';      break;
   case 5:      currentmonth.value='Июнь';      break;
   case 6:      currentmonth.value='Июль';      break;
   case 7:      currentmonth.value='Август';      break;
   case 8:      currentmonth.value='Сентябрь';      break;
   case 9:      currentmonth.value='Октябрь';      break;
   case 10:      currentmonth.value='Ноябрь';      break;
   case 11:      currentmonth.value='Декабрь';      break;
}
storedData = localStorage.getItem('currentmonth'); 
console.log(!!storedData);
if (storedData) {
      /*проверка есть ли эта переменная в localStorage*/ 
   currentmonth.value=JSON.parse(storedData);
} else {
   localStorage.setItem('currentmonth',JSON.stringify(currentmonth.value));
   storedData = localStorage.getItem('currentmonth');
   currentmonth.value=JSON.parse(storedData);
}
export let currentdate=ref(new Date().getDate());/*текущее число/дата*/ 
storedData = localStorage.getItem('currentdate'); 
console.log(!!storedData);
if (storedData) {
   /*проверка есть ли эта переменная в localStorage*/ 
   currentdate.value=JSON.parse(storedData);
} else {
   localStorage.setItem('currentdate',JSON.stringify(currentdate.value));
   storedData = localStorage.getItem('currentdate');
   currentdate.value=JSON.parse(storedData);
}
export let monthar=['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'];  /*Черновой массив для monthar2*/
interface Daysar {date:number,day:string};
export let daysar=ref<Daysar[]>([]); /*Массив дней, который будет отрисовываться при выборе даты*/
export let monthar2=ref<String[]>([]); /*Массив, который будет отрисовываться при выборе месяца*/
export let tasker=ref('');/*v-model в input задачи page2*/
export let timer=ref('');/*v-model в input время page2*/