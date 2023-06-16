<template>
<div class="infowind">
   <div class="elementer">
      <img class="ph" :src="saver.image.large" alt="ImgNtFnd">
      <span class="rigth namehead sp">{{ saver.name }}</span>
   </div>
   <div class="elementer">
      <span  class="left sp">ID: {{ saver.id }}</span>
      <span  class="rigth sp">Дата создания: {{ saver.genesis_date }}</span>
   </div>
   <div class="elementer">
      <span  class="left cent sp">Текущая цена: {{ saver.market_data.current_price.usd }}$ / {{ saver.market_data.current_price.rub }}Р</span>
   </div>
   <div class="elementer">
      <span  class="left sp">Последние 24 часа: {{ saver.market_data.price_change_percentage_24h }}%</span>
      <span class="rigth sp">Последние 7 дней: {{ saver.market_data.price_change_percentage_7d }}%</span>
   </div>
   <div class="elementer">
      <span class="left sp"> Последние 30 дней: {{ saver.market_data.price_change_percentage_30d }}%</span>
      <span class="rigth sp">Последние 200 дней: {{ saver.market_data.price_change_percentage_200d }}%</span>
   </div>
   <div class="elementer">
      <span class="left cent sp">Последний год: {{ saver.market_data.price_change_percentage_1y }}%</span></div>
   <div class="elementer">
      <span class="disc discer sp">Описание</span>
   </div>
      <div class="elementer">
         <span class="disc sp">{{ saver.description.en }}</span>
      </div>
</div>   

      </template>
      <script lang="ts" setup>
      import {saver,start} from '../../utils/utils.ts'
      start('infer',0)
   </script>
   <style scoped>
.infowind {
   display:flex;
      justify-content: space-between;
      align-items: space-between;
      flex-direction: column;
      background:transparent;
      padding: 30px;
      gap:30px;
      width: 700px;
      border:solid 3px rgb(17, 100, 121);
      border-radius: 150px;
      box-shadow: 0 0 40px rgb(17, 100, 121);
      font-family: "Comic Sans MS";
      color:white;
      font-size:25px;
      cursor:default;
}
.ph {
   height:150px;
   border-radius: 1000px;
   box-shadow: 0 0 40px rgb(17, 100, 121);
   transition: 0.5s;
}
.ph:hover {
   scale:1.4;
   rotate: 360deg;
   transform: translateX(20%);
}
.elementer{
   background:transparent;
display: flex;
justify-content: space-around;
align-items: center;
flex-direction: row;
}
.sp{
   transition:0.3s;
   background:transparent;
   border:solid 1px rgb(17, 100, 121);
   border-radius: 50px;
   text-align: center;
}
.namehead{
   font-size: 45px;
   border:0;
}
.sp:hover {
background:rgb(14, 54, 65);
scale:1.35;
box-shadow: 0 0 40px rgb(17, 100, 121);
}
.disc {
   font-size:13px;
   text-align: center;
   border-radius: 200px;
   width: 850px;
   border:0;
}
.disc:hover {
   scale:1.05;
   transform: translateY(-10%);
   box-shadow: 0 0 100px rgb(17, 100, 121);
}
.left:hover {
   transform: translateX(10%);
}
.rigth:hover {
   transform: translateX(-10%);
}
.cent:hover {
transform: translateX(0);
}

   </style>  