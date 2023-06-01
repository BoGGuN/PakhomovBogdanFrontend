<template>

<div class="listwind">
   <div class="headopt">

<categoryinput @click="cat()" 
class="opt1" placeholder="Категория"/>

<coininput @click="coiner()" 
class="opt2" placeholder="Название"/>
{{ c }}
   </div>
   <div @click="findcat($event)" class="listel" v-for="categ in category">
      {{categ.name}}
   </div>
   <router-link  class="listel" to="info" @click="findcoin($event)" v-for="coinlist in coins">{{coinlist.name}}<img class="photocoin" :src="coinlist.large" alt="ImgNtFnd">
   </router-link>
</div>

      </template>
      <script lang="ts" setup>
   import categoryinput from './categoryinput.vue'
   import coininput from './coininput.vue'
   import {ref,watch} from 'vue'
   import {d,precoins,precategory,a,b} from '../../utils/utils.ts'
   let c=ref('Выберите опцию');
   let coins=ref();
   let category=ref();
   let cachecoins=[...precoins];
   cachecoins.splice(600);

a.value='';
b.value='';
   watch(a,findcat2);
   watch(b,coiner2);

   function cat() {
      c.value='Выбор категории';
      coins.value=[];
      category.value=precategory;
      b.value='';
   }

   function coiner() {
c.value='Выбор криптовалюты';
category.value=[];
coins.value=[...cachecoins];
coins.value.splice(600);
}

   function findcat (event) {
a.value=event.target.textContent;
}

function findcoin(event) {
   for (let k=0;k<precoins.length;k++){
   if ((precoins[k].name)==event.target.textContent)
   {
      d.value=precoins[k].id;
      break;
   }}}

function findcat2() {
   b.value='';
   if (a.value=='') 
   c.value='Выбор криптовалюты';
   else 
   c.value='Выбор криптовалюты в категории '+a.value;
category.value=[];
for (let i=0;i<precategory.length;i++){
   if (precategory[i].name=='Все') {
      cachecoins=[...precoins];
      cachecoins.splice(600);
      coins.value=[...cachecoins];
   }
   else if (precategory[i].name.toLowerCase()==a.value.toLowerCase())
{
   fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&category='+precategory[i].category_id)
.then(function (resp){return resp.json()}).then(function (data) {
   cachecoins=data;
   cachecoins.splice(600);
   for (let j=0;j<cachecoins.length;j++){
      cachecoins[j].large=data[j].image;
   if (cachecoins[j].large=='missing_large.png')
   cachecoins[i].large='https://w7.pngwing.com/pngs/349/105/png-transparent-false-error-missing-absent-x-red-cross-letter-circle-gui.png';
coins.value=[...cachecoins];
}
}).catch(function er() {alert('Ошибка3');
c.value='Выбор криптовалюты';})
   break;
}}
}


function coiner2() {
   coins.value=[...cachecoins];
   if (b.value!=''){
   for (let y=0;y<coins.value.length;y++){
   if (coins.value[y].name.length<b.value.length){
   coins.value.splice(y,1);
   y--;
   }
   else for (let g=0;g<b.value.length;g++)
   if (coins.value[y].name[g].toLowerCase()!=b.value[g].toLowerCase()){
   coins.value.splice(y,1);
   y--;
   break;
   }}}
}


   
   </script>
   
   <style scoped>
.listwind {
   display:flex;
      justify-content: space-between;
      align-items: center;
      background:transparent;
      flex-direction: column;
      padding: 50px;
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
   scale:1.25;
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