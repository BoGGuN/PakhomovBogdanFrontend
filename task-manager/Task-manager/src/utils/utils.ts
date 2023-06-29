import {ref} from 'vue'
interface Task{time:string,task:string};
interface Data{date:number,day:string,month:string,year:number,tasks:Task[]};
export let datebase=ref<Data[]>([]);/*Основной массив данных даты и задач к этой дате*/ 
export let currentyear=ref(new Date().getFullYear());/* текущий год*/ 
export let currentmonth=ref('Месяц');/*текущий месяц*/ 
export let currentdate=ref(new Date().getDate());/*текущее число/дата*/ 
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

export function savedate () {
   /*
   функция savedate сохраняет datebase в localStorage при двух начальных условиях:
   1 - есть кэш из localStorage и datebase пустой массив, в этом случае в datebase просто сохраняется кэш
   2 - есть полный массив datebase, тогда в localStorage кладётся текущий datebase ,а потом но перезаписывается, 
   чтобы функцию можно было применить на странице page2 с изменением datebase задач
   */ 
   let storedData = localStorage.getItem('datebase');
   if (!datebase.value.length&&storedData) {
      datebase.value=JSON.parse(storedData);
   } else if (datebase.value.length) {
      localStorage.setItem('datebase',JSON.stringify(datebase.value));
      storedData = localStorage.getItem('datebase');
      datebase.value=JSON.parse(storedData);
   }
}
export function calendar (customyear:number) {
   /*
   Функция calendar пушит в массив datebase все дни года currentyear и по каждому дню определяет день недели и т д.
   В начале идёт проверка на то, есть ли уже в datebase дни конкретного года, в массив добавляются сразу все дни года, 
   так что если есть один день конкретного года, то искать дальше не нужно и идёт break.
   Далее если переключатель bool=true, то в объект newdate кладётся вяс инфа о дне, потом объект пушится в datebase, и так далее.
   В начале и в конце стоят функции savedate(), чтобы синхронизировать datebase с localStorage на вводе и выходе
   */ 
   savedate();
   let bool=true;
   for (let i=0;i<datebase.value.length;i++)
   { 
         if (datebase.value[i].year==customyear){
            bool=false;
            break;
         }
   }
   if (bool) {
      for (let month=0;month<12;month++){
         let newmonth='';
         switch (new Date(customyear,month).getMonth()) {
            case 0:               newmonth='Январь';               break;
            case 1:               newmonth='Февраль';               break;
            case 2:               newmonth='Март';               break;
            case 3:               newmonth='Апрель';               break;
            case 4:               newmonth='Май';               break;
            case 5:               newmonth='Июнь';               break;
            case 6:               newmonth='Июль';               break;
            case 7:               newmonth='Август';               break;
            case 8:               newmonth='Сентябрь';               break;
            case 9:               newmonth='Октябрь';               break;
            case 10:               newmonth='Ноябрь';               break;
            case 11:               newmonth='Декабрь';               break;
         }
         for (let day=1;day<32;day++){
            if (day!=new Date (customyear,month,day).getDate())
            {
               break;
            }
            else {
               let newday='';
               switch (new Date(customyear,month,day).getDay()) {
                  case 1:                     newday='Пн';                     break;
                  case 2:                     newday='Вт';                     break;
                  case 3:                     newday='Ср';                     break;
                  case 4:                     newday='Чт';                     break;
                  case 5:                     newday='Пт';                     break;
                  case 6:                     newday='Сб';                     break;
                  case 0:                     newday='Вс';                     break;
               }
               let newdate:Data={
                  date:new Date(customyear,month,day).getDate(),
                  day:newday,
                  month:newmonth,
                  year:customyear,
                  tasks: []
               }
               datebase.value.push(newdate);
            }
         }
      }
   }
savedate();
}
calendar(currentyear.value); /* Datebase принимает начальные значения текущего года*/ 