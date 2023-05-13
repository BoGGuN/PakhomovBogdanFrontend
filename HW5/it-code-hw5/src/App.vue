<template>
   <div class="wrapper">
<div class="buywindow">
   <div class="head">
      <span class="headlabel text">Выберите категорию</span>
      <div class="drop">
         <input type="text" class="out1 inp" placeholder="Тип товара" v-model="x" v-on:mouseover="ablefilter($event)">
         <div class="filter1 text textb" v-on:mouseleave="disablefilter($event)">
           <span @click="filter($event)" class="fil1">Все</span>
           <span @click="filter($event)" class="fil1">Твёрдый материал</span>
           <span @click="filter($event)" class="fil1">Мягкий материал</span>
      </div>
         <input type="text" class="out2 inp" placeholder="Товар" v-model="y" v-on:mouseover="ablefilter($event)">
         <div class="filter2 text textb" v-on:mouseleave="disablefilter($event)">
           <span @click="filter($event)" class="fil2" v-for="itm in item2">{{ itm.name }}</span>
      </div>
      </div>
   </div>
   <div class="bottom">
      <div class="itemimg" v-bind:style="{ 'background-image': 'url(' + item[r].img + ')' }"></div>
      <div class="itemlabels">
         <Span class="text textb">Товар: {{ item[r].name }}</Span>
         <span class="text textb">Цена: {{ item[r].price }} </span>
         <div class="howm">
            <input type="number" class="out3 inp" placeholder="Количество" v-model="z">
            <div class="buttons">
               <button class="text but" @click="add">+</button>
               <button class="text but" @click="readd">-</button>
            </div>
         </div>
         <div class="howm">
         <span class="text"> Итоговая цена: {{ z*item[r].price }}</span>
         <button class="but text" @click="addt">add</button>
      </div>
      </div>
   </div>
</div>
<div class="addwindow">
   <div class="addhead">
<button class="openclose" @click="closeopen($event)">Открыть/Закрыть корзину</button>
   </div>
   <div class="addbody">
      <div class="bodyhead">
         <span class="text">Название</span>
         <span class="text">Кол-во</span>
         <span class="text">Сумма</span>
      </div>
<div class="el" v-for="itmm in item3">
   <div class="shortimg" v-bind:style="{ 'background-image': 'url(' + itmm.img + ')' }"></div>
   <span class="text">{{ itmm.name }}</span>
   <span class="text">{{ itmm.howmuch }}</span>
   <span class="text">{{ itmm.howmuch*itmm.price }}</span>
</div>
   </div>
   <div class="addbottom">
      <span class="text">Итоговая стоимость:</span>
      <span class="text">{{ summa }}</span>
   </div>
</div>
   </div>
</template>

<script lang="ts" setup>
import {ref,watch} from 'vue';
let r=ref(7);
const x=ref('');
let y=ref('');
let z=ref(0);
let summa=ref(0);
const item = ref([
   {name:'Камень', howmuch:0, price:46, img:'./src/assets/1.png', type:'Твёрдый материал'},
   {name:'Гранит', howmuch:0, price:82, img:'./src/assets/2.png', type:'Твёрдый материал'},
   {name:'Диорит', howmuch:0, price:82, img:'./src/assets/3.png', type:'Твёрдый материал'},
   {name:'Булыжник', howmuch:0, price:14, img:'./src/assets/4.png', type:'Твёрдый материал'},
   {name:'Дубовые доски', howmuch:0, price:57, img:'./src/assets/5.png', type:'Мягкий материал'},
   {name:'Еловые доски', howmuch:0, price:75, img:'./src/assets/6.png', type:'Мягкий материал'},
   {name:'Берёзовые доски', howmuch:0, price:35, img:'./src/assets/7.png', type:'Мягкий материал'},
   {name:'', howmuch:0, price:0, img:'', type:''}
]);
let item2=ref([...item.value]);
item2.value.splice(7,1);
let item3=ref([...item.value]);
item3.value.splice(0,8);
watch (x, drop2);
watch (y,find);
watch(item.value,fnd);
function drop2(){
   item2.value=[...item.value];
   item2.value.splice(7,1);
   for (let i=0;item2.value.length>i;i++) {
   if (x.value=="Все"||x.value=="")
   break;
   else if (item2.value[i].type!=x.value){
      item2.value.splice(i,1);
      i--;
   }}
if ((x.value!=item.value[r.value].type)&&(x.value!='Все')&&(x.value!=''))
y.value='';
} 
function find () {
   for (let k=0;k<item.value.length-1;k++){
   if (y.value==item.value[k].name)
   {
      r.value=k;
      break;
   } else if (y.value!=item.value[k].name) {
      r.value=7;
      x.value='Все';
   }}}

   function fnd (){
   item3=ref([...item.value]);
item3.value.splice(7,1);
   summa.value=0;
   for (let p=0;p<item3.value.length;p++)
   if (item3.value[p].howmuch==0)
   {
      item3.value.splice(p,1);
      p--;
   }
   for (let u=0;u<item3.value.length;u++){
      summa.value+=item3.value[u].howmuch*item3.value[u].price;
   }
}
function add(){
   if (r.value!=7)
      z.value++;
}
function readd()
{
   if ((item.value[r.value].howmuch>0)&&(r.value!=7)&&((item.value[r.value].howmuch+z.value)>0)) 
      z.value--;
}
function addt () {
   
   if (r.value!=7){
   item.value[r.value].howmuch+=z.value;
   z.value=0;
   }
}
function filter (event) {
   if (event.target.closest('div').classList=='filter1 text textb') {
   x.value=event.target.textContent;
   event.target.closest('div').style.display="none";
}
   else if (event.target.closest('div').classList=='filter2 text textb') {
   y.value=event.target.textContent;
   event.target.closest('div').style.display="none";
   }
}

function ablefilter (event) {
   event.target.nextElementSibling.closest('div').style.display='flex';
}
function disablefilter (event) {
   event.target.style.display='none';
}
function closeopen (event) {console.log(event.currentTarget.parentNode.nextElementSibling);
   if (event.currentTarget.parentNode.nextElementSibling.style.display=='none')
   event.currentTarget.parentNode.nextElementSibling.style.display='flex';
   else event.currentTarget.parentNode.nextElementSibling.style.display='none';
}

</script>
<style lang="scss" scoped>
.wrapper {
   color:white;
   padding:100px;
   display: flex;
   width:100%;
   height:100%;
   flex-direction: row;
   justify-content: center;
   align-items: center;
}
.buywindow {
   display: flex;
   width: 600px;
   height:700px;
   border: 5px solid rgb(73, 73, 73);
   border-left:7px solid white;
   border-top:7px solid white;
   border-radius: 50px;
   flex-direction: column;
   align-items: center;
}
.head {
   width: 600px;
   padding:20px;
   height:200px;
   display:flex;
   flex-direction: column;
   justify-content: center;

   background-color: rgb(198,198,198);
   border-radius: 50px 50px 0 0px;
   justify-content: space-between;
}
.text {
   font-family: 'Comic Sans MS';
   font-size: 25px;
   font-weight: bold;
   color:rgb(77, 77, 77);
}
.headlabel {
   padding:5px;
   width: 300px;
   background-color: rgb(197, 197, 197);
   border-right:2px solid white;
   border-bottom:2px solid white;
   border-top:2px solid black;
   border-left:2px solid black;
}
.bottom {
   margin-top: 300px;
   width: 600px;
   padding:30px;
   height:350px;
   display:flex;
   flex-direction: column;
   justify-content: center;
   background-color: rgb(198,198,198);
   border-radius: 0 0 50px 50px;
   flex-direction: row;
   justify-content: space-between;
   align-items:center;
}
.drop {
   display:flex;
   justify-content: space-between;
}
.inp {
   width: 250px;
   font-size: 20px;
   background-color: rgb(199, 199, 199);
   border-right: 3px solid white;
   border-bottom: 3px solid white;
   font-family: 'Comic Sans MS';
   font-size: 25px;
   font-weight: bold;
   color:rgb(77, 77, 77);
}
.itemimg {
   width:150px;
   height:150px;
   background-size: 150px;
   background-position: center;
   border-right: 3px solid white;
   border-bottom: 3px solid white;
   border-left: 3px solid black;
   border-top: 3px solid black;
}
.itemlabels {
   display:flex;
   padding:5px;
   width:350px;
   height:150px;
   border-right: 3px solid white;
   border-bottom: 3px solid white;
   border-left: 3px solid black;
   border-top: 3px solid black;
   justify-content: space-between;
   align-items: left;
   flex-direction: column;
}

.howm {
   display:flex;
   justify-content: space-between;
   flex-direction: row;
   align-items: center;
}
.buttons {
   width: 80px;
}
.but {
   width: 40px;
   background-color: rgb(88, 88, 88);
   border-right: 3px solid white;
   border-bottom: 3px solid white;
   font-family: 'Comic Sans MS';
   font-size: 20px;
   font-weight: bold;
   color:rgb(255, 255, 255);
}
.but:active {
   background-color: rgb(75, 57, 57);
}
.filter1 {
   display:none;
   position: absolute;
   margin-top:35px;
   width:250px;
   height:auto;
   background-color: rgb(214, 214, 214);
   border-right: 3px solid white;
   border-bottom: 3px solid white;
   border-left: 3px solid black;
   border-top: 2px solid black;
   flex-direction: column;
   justify-items: center;
   align-items: left;
}
.fil1{
   cursor:pointer;
   border:1px solid black;
}
.filter2 {
   display:none;
   position: absolute;
   margin-top:35px;
   margin-left:310px;
   width:250px;
   height:auto;
   background-color: rgb(214, 214, 214);
   border-right: 3px solid white;
   border-bottom: 3px solid white;
   border-left: 3px solid black;
   border-top: 2px solid black;
   flex-direction: column;
   justify-items: center;
   align-items: left;
}
.fil2{
   cursor:pointer;
   border:1px solid black;
}
.addwindow {
   display:flex;
   position: absolute;
   width:500px;
   top:20px;
   gap:10px;
   right:20px;
   padding:10px;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   background-color: rgb(190, 190, 190);
   border-right: 3px solid white;
   border-bottom: 3px solid white;
   border-left: 3px solid black;
   border-top: 2px solid black;
}
.addhead {
   display: flex;
   justify-content: center;
}
.openclose {
   width: 300px;
   background-color: rgb(88, 88, 88);
   border-right: 3px solid white;
   border-bottom: 3px solid white;
   font-family: 'Comic Sans MS';
   font-size: 20px;
   font-weight: bold;
   color:rgb(255, 255, 255);
}
.openclose:active {
   background-color: rgb(75, 57, 57);
}
.addbody {
   display:none;
   width:450px;
   gap:10px;
   justify-content: center;
   flex-direction: column;
   align-items: left;
}
.bodyhead {
   display:flex;
   flex-direction: row;
   justify-content: space-between;
   border-bottom:3px solid black;
}
.addbottom {
   display:flex;
   width:450px;
   justify-content: space-between;
   flex-direction: row;
   align-items: left;
   border-top:3px solid black;
}
.el {
display:flex;
width:450px;
flex-direction: row;
justify-content: space-between;
}
.shortimg {
   height:35px;
   width:35px;
   background-size:35px;
}
</style>