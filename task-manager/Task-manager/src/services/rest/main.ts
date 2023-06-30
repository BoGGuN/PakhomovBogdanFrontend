import {datebase,Data,currentyear,currentmonth,currentdate,monthar,daysar,monthar2,timer,tasker} from '../../utils/utils'
import {useStore} from '../../store/store'
export function savedate () {
   /*
   функция savedate сохраняет datebase? в localStorage при двух начальных условиях:
   1 - есть кэш из localStorage и datebase пустой массив, в этом случае в datebase просто сохраняется кэш
   2 - есть полный массив, тогда в localStorage кладётся текущий datebase ,а потом но перезаписывается, 
   чтобы функцию можно было применить на странице page2 с изменением datebase задач
   */ 
  /*база данных*/
   let storedData = localStorage.getItem('datebase');
   if (!datebase.value.length&&storedData) {
      datebase.value=JSON.parse(storedData);
   } else if (datebase.value.length) {
      localStorage.setItem('datebase',JSON.stringify(datebase.value));
      storedData = localStorage.getItem('datebase');
      datebase.value=JSON.parse(storedData);
   }
   /* текущий год*/
   storedData = localStorage.getItem('currentyear');
   if (!currentyear.value&&storedData) {
      currentyear.value=JSON.parse(storedData);
   } else if (currentyear.value) {
      localStorage.setItem('currentyear',JSON.stringify(currentyear.value));
      storedData = localStorage.getItem('currentyear');
      currentyear.value=JSON.parse(storedData);
   } 
   /* текущий месяц*/
   storedData = localStorage.getItem('currentmonth');
   if (!currentmonth.value&&storedData) {
      currentmonth.value=JSON.parse(storedData);
   } else if (currentmonth.value) {
      localStorage.setItem('currentmonth',JSON.stringify(currentmonth.value));
      storedData = localStorage.getItem('currentmonth');
      currentmonth.value=JSON.parse(storedData);
   }/*текущая дата*/
   storedData = localStorage.getItem('currentdate');
   if (!currentdate.value&&storedData) {
      currentdate.value=JSON.parse(storedData);
   } else if (currentdate.value) {
      localStorage.setItem('currentdate',JSON.stringify(currentdate.value));
      storedData = localStorage.getItem('currentdate');
      currentdate.value=JSON.parse(storedData);
   }
}
export function calendar () {
   /*
   Функция calendar пушит в массив datebase все дни года currentyear и по каждому дню определяет день недели и т д.
   В начале идёт проверка на то, есть ли уже в datebase дни конкретного года, в массив добавляются сразу все дни года, 
   так что если есть один день конкретного года, то искать дальше не нужно и идёт break.
   Далее если переключатель bool=true, то в объект newdate кладётся вяс инфа о дне, потом объект пушится в datebase, и так далее.
   В начале и в конце стоят функции savedate(), чтобы синхронизировать datebase с localStorage на вводе и выходе
   */ 
   useStore().Store_savedate();
   let bool=true;
   for (let i=0;i<datebase.value.length;i++)
   { 
         if (datebase.value[i].year==currentyear.value){
            bool=false;
            break;
         }
   }
   if (bool) {
      for (let month=0;month<12;month++){
         let newmonth='';
         switch (new Date(currentyear.value,month).getMonth()) {
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
            if (day!=new Date (currentyear.value,month,day).getDate())
            {
               break;
            }
            else {
               let newday='';
               switch (new Date(currentyear.value,month,day).getDay()) {
                  case 1:                     newday='Пн';                     break;
                  case 2:                     newday='Вт';                     break;
                  case 3:                     newday='Ср';                     break;
                  case 4:                     newday='Чт';                     break;
                  case 5:                     newday='Пт';                     break;
                  case 6:                     newday='Сб';                     break;
                  case 0:                     newday='Вс';                     break;
               }
               let newdate:Data={
                  date:new Date(currentyear.value,month,day).getDate(),
                  day:newday,
                  month:newmonth,
                  year:currentyear.value,
                  tasks: []
               }
               datebase.value.push(newdate);
            }
         }
      }
   }
   useStore().Store_savedate();
}
export function selectdate(event:any) {
   /*При выборе даты отрисовывается массив daysar, происходит поиск дат по currentyear и currentmonth, которые идут в datebase по порядку и пушатся в daysar*/
   monthar2.value=[];
   currentmonth.value=event.target.textContent;
   if (currentmonth.value!='Месяц'){
      for (let i=0;i<datebase.value.length;i++){
         if ((datebase.value[i].year==currentyear.value)&&(datebase.value[i].month==currentmonth.value)) {
            daysar.value.push(datebase.value[i]);
         }
      }
   }
   useStore().Store_savedate();
}
export function selectmonth(){
   /*При выборе месяца отрисовывается массив monthar2*/
daysar.value=[];
monthar2.value=[...monthar];
}
export function plus() {
   /*Увеличивает currentyear на 1*/
   if (currentyear.value<2060){
   currentyear.value++;
   currentmonth.value="Месяц";
   daysar.value=[];
   monthar2.value=[...monthar];
   }
}
export function minus() {
   /*Уменьшает currentyear на 1*/
   if (currentyear.value>1970){
   currentyear.value--;
   currentmonth.value="Месяц";
   daysar.value=[];
   monthar2.value=[...monthar];
   }
}
export function setdate(event: any) {
   /*Функция берет из элемента дату в currentdate, при нажатии на router-link есть вариант нажать на 3 элемента:
   div с датой, div с Днем недели и div со всеми двумя дочерними элементами.
   В каждом из трёх вариантом нужно получить дату:
   1-й - если нажатие по дате, то textcontent можно обратить в number,
   2-й - если нажатие на целый div с двумя дочерними, то идет проверка на то, что первый дочерний элемент обращается в number
   3-й - если нажатие по дню недели, то проверка на то, что предыдущий соседний элемент обращается в number
   */
   if (Number(event.target.textContent)) {
     currentdate.value = Number(event.target.textContent);
   } else if (event.target.firstElementChild && Number(event.target.firstElementChild.textContent)) {
     currentdate.value = Number(event.target.firstElementChild.textContent);
   } else if (event.target.previousElementSibling && Number(event.target.previousElementSibling.textContent)) {
     currentdate.value = Number(event.target.previousElementSibling.textContent);
   }
   useStore().Store_savedate();
}
export function saver (b:any){
   /*Пушит записи tasks в datebase
   В конце стоит savedate() для сохранения изменений в localStorage*/
   if (timer.value!=''&&tasker.value!=''){
   let newobject={time:timer.value,task:tasker.value};
   datebase.value[b].tasks.push(newobject);
   timer.value='';
   tasker.value='';
   }
   useStore().Store_savedate();
}
export function deleter (event:any,b:any) {
   /*Функция удаляет найденную в datebase.value[b.value] задачу tasks[i] (datebase.value[b.value].tasks[i])
   В конце стоит savedate() для сохранения изменений в localStorage*/

   for (let i=0;i<datebase.value[b].tasks.length;i++){
      if (event.target.parentNode.previousElementSibling.firstElementChild.textContent==datebase.value[b].tasks[i].time&&event.target.parentNode.previousElementSibling.lastElementChild.textContent==datebase.value[b].tasks[i].task){
         datebase.value[b].tasks.splice(i,1);
         break;
      }
   }
   useStore().Store_savedate();
}
export function edit (event:any,b:any) {
   /*При нажатии на кнопку в page2 при редактировании отрисовываются 2 инпута, скрываются 2 div'а со значениями tasks, 
   инпуты принимают значения времени и задания через DOM навигацию, потом при нажатии на сохранить 
   в datebase заменяются значения задания и времени*/
   if (event.target.textContent=='редактировать') {
      event.target.textContent='сохранить';
      event.target.parentNode.previousElementSibling.firstElementChild.style.display='none';
      event.target.parentNode.previousElementSibling.children[1].style.display='inline-block';
      event.target.parentNode.previousElementSibling.children[2].style.display='inline-block';
      event.target.parentNode.previousElementSibling.lastElementChild.style.display='none';
      event.target.parentNode.previousElementSibling.children[1].value=event.target.parentNode.previousElementSibling.firstElementChild.textContent;
      event.target.parentNode.previousElementSibling.children[2].value= event.target.parentNode.previousElementSibling.lastElementChild.textContent;
   } else if (event.target.textContent=='сохранить'&&event.target.parentNode.previousElementSibling.children[1].value!=''&&event.target.parentNode.previousElementSibling.children[2].value!='') {
      event.target.textContent='редактировать';
      event.target.parentNode.previousElementSibling.firstElementChild.style.display='block';
      event.target.parentNode.previousElementSibling.children[1].style.display='none';
      event.target.parentNode.previousElementSibling.children[2].style.display='none';
      event.target.parentNode.previousElementSibling.lastElementChild.style.display='block';
      for (let i=0;i<datebase.value[b].tasks.length;i++) {
         if (event.target.parentNode.previousElementSibling.firstElementChild.textContent==datebase.value[b].tasks[i].time&&event.target.parentNode.previousElementSibling.lastElementChild.textContent==datebase.value[b].tasks[i].task){
            datebase.value[b].tasks[i].time=event.target.parentNode.previousElementSibling.children[1].value;
            datebase.value[b].tasks[i].task=event.target.parentNode.previousElementSibling.children[2].value;
            break;
         }
      }
   }
   useStore().Store_savedate();
}