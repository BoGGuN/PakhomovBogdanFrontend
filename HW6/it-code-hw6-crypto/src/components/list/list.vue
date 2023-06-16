<template>

<div class="listwind">
   <div class="headopt">

<categoryinput @click="clickcat()" 
class="opt1" placeholder="Категория"/>

<coininput @click="clickcoiner()" 
class="opt2" placeholder="Название"/>
{{ c }}
   </div>
   <div class="scroll" v-on:scroll="scrolling($event)">
   <div @click="findcat($event)" class="listel" v-for="categ in category">
      {{categ.name}}
   </div>
   <router-link  class="listel" to="info" @click="findcoin($event)" v-for="coinlist in coins">{{coinlist.name}}<img class="photocoin" :src="coinlist.large" alt="ImgNtFnd">
   </router-link>
</div>
</div>

      </template>
      <script lang="ts" setup>
   import categoryinput from './categoryinput.vue'
   import coininput from './coininput.vue'
   import {ref,watch} from 'vue'
   import {d,precoins,precategory,a,b,coins,cachecoins,cachecoins2,category,cachecategory,cachecategory2,categoryname,start} from '../../utils/utils.ts'
   import {useDebounceFn} from '@vueuse/core'

   let c=ref('Выберите опцию');
   coins.value=[];
   category.value=[];
   cachecoins.value=[...precoins.value];
   cachecategory.value=[...precategory.value];
   cachecoins2.value=[...precoins.value];
   cachecategory2.value=[...precategory.value];
   categoryname.value='';

let scroll=0;
a.value='';
b.value='';
   watch(a,inputcat);
   watch(b,useDebounceFn(inputcoiner,1000));//функция useDebounce реализация - поиск или запрос API на сервер с задержкой в 1 секунду
   watch(categoryname,namer);
   
function scrolling (event:any) {
   /*При скролле инициализируется эта функция, программа проверяет насколько скролл опущен 
   и проверяет пустые массивые каталогов и монет, 
   если один пустой, то программа начинает обработку другого массива, сначала в массиве 15 элементов, 
   потом программа смотрит разницу cache-массива и обыкновенного, если она 10 и больше, то прокидывает 10 элементов дальше, если меньше 10, 
   то добавляет последние
   Пахомов Богдан BoGGuN*/
if (event.target.scrollTop/5000>scroll){
   scroll+=0.1;
   if(category.value.length==0){
         if (cachecoins2.value.length-coins.value.length>9){
            let h=0;
               for (let f=0;f<10;f++){
               coins.value.push(cachecoins2.value[coins.value.length+f-h]);
               h++;
            }}
         if (cachecoins2.value.length-coins.value.length<10&&cachecoins2.value.length-coins.value.length>0)
               for (let f=0;f<cachecoins2.value.length-coins.value.length;f++)
               coins.value.push(cachecoins2.value[coins.value.length]);
   }
} else if (coins.value.length==0){
   if (cachecategory2.value.length-category.value.length>9){
            let h=0;
               for (let f=0;f<10;f++){
               category.value.push(cachecategory2.value[category.value.length+f-h]);
               h++;
            }}
         if (cachecategory2.value.length-category.value.length<10&&cachecategory2.value.length-category.value.length>0)
               for (let f=0;f<cachecategory2.value.length-category.value.length;f++)
               category.value.push(cachecategory2.value[category.value.length]);
            }}

function inputcat() {
   scroll=0;
   cachecategory2.value=[...cachecategory.value];
   coins.value=[];
   if (a.value!=''){
   for (let y=0;y<cachecategory2.value.length;y++){
   if (cachecategory2.value[y].name.length<a.value.length){
   cachecategory2.value.splice(y,1);
   y--;
   }
   else for (let g=0;g<a.value.length;g++)
   if (cachecategory2.value[y].name[g].toLowerCase()!=a.value[g].toLowerCase()){
   cachecategory2.value.splice(y,1);
   y--;
   break;
   }}}
   category.value=[...cachecategory2.value.slice(0,15)];
   categoryname.value=a.value;
   document.querySelector('.scroll').scrollTop=0;
}


function inputcoiner() {
   scroll=0;
   if (categoryname.value.toLowerCase()!='все'&&categoryname.value!=''){
      cachecoins2.value=[...cachecoins.value];
   for (let y=0;y<cachecoins2.value.length;y++){
   if (cachecoins2.value[y].name.length<b.value.length){
   cachecoins2.value.splice(y,1);
   y--;
   }
   else for (let g=0;g<b.value.length;g++)
   if (cachecoins2.value[y].name[g].toLowerCase()!=b.value[g].toLowerCase()){
   cachecoins2.value.splice(y,1);
   y--;
   break;
   }}
   coins.value=[...cachecoins2.value.slice(0,15)];
}
   else 
   start('coinfinderer',0);
document.querySelector('.scroll').scrollTop=0;
}

function clickcat() {
   scroll=0;
   c.value='Выбор категории';
      coins.value=[];
      cachecategory2.value=[...cachecategory.value];
      category.value=[...cachecategory2.value.slice(0,15)];
      document.querySelector('.scroll').scrollTop=0;
   }

   function clickcoiner() {
      scroll=0;
c.value='Выбор криптовалюты';
category.value=[];
if (a.value.toLowerCase()=='все'||a.value.toLowerCase()=='')
cachecoins.value=[...precoins.value];
cachecoins2.value=[...cachecoins.value];
coins.value=[...cachecoins2.value.slice(0,15)];
document.querySelector('.scroll').scrollTop=0;
}


function findcat (event:any) {
a.value=event.target.textContent;
}

function findcoin(event:any) {
   for (let k=0;k<precoins.value.length;k++){
   if (precoins.value[k].name.toLowerCase()==event.target.textContent.toLowerCase())
   {
      d.value=precoins.value[k].id;
      break;
   }}}
   
function namer(){
if (categoryname.value.toLowerCase()=='все') {
      cachecoins.value=[...precoins.value];
      cachecoins2.value=[...cachecoins.value];
      coins.value=[...cachecoins2.value.slice(0,15)];
      category.value=[];
      }
for (let i=1;i<precategory.value.length;i++)
    if (precategory.value[i].name.toLowerCase()==categoryname.value.toLowerCase()){
      start('categoryfinderer',i);
   category.value=[];
   break;}
   }

   </script>
   
   <style scoped>
   .scroll{
      display:flex;
      background: transparent;
      max-height:400px;
      width:800px;
      overflow-y: auto;
      overflow-x: hidden;
      scrollbar-width: none;
      align-items: center;
      flex-direction: column;
      padding-top:50px;
      padding-bottom: 50px;
   }
   .scroll::-webkit-scrollbar {
  width: 0;
  height: 0;
}
.listwind {
   display:flex;
      justify-content: center;
      align-items: center;
      background:transparent;
      flex-direction: column;
      padding-top:50px;
      padding-bottom:50px;
      width:700px;
      gap:30px;
      border:solid 3px rgb(17, 100, 121);
      border-radius: 50px;
      box-shadow: 0 0 40px rgb(17, 100, 121);
      font-family: "Comic Sans MS";
      color:white;
      font-size:20px;
      cursor:default;
}
   .headopt {
      display:flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap:40px;
      padding-bottom: 50px;
      border-bottom:solid 3px rgb(17, 100, 121);
   }
   .listel {
      background: transparent;
      width: 550px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size:40px;
      border-bottom: solid 3px rgb(17, 100, 121);
      transition:0.2s;
      text-decoration: none;
      padding-inline:10px;
   }
   .listel:last-child {
     border-bottom: 0;
   }
   .listel:hover {
   scale:1.3;
   cursor:pointer;
   box-shadow: 0 0 40px rgb(42, 65, 71);
   background-color: rgb(29, 40, 43);
   border-radius: 20px;
   color:rgb(190, 255, 199);
   }
.photocoin {
   height:40px;
   border-radius: 10px;
}
   </style>  