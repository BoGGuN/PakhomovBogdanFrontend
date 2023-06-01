<template>

<div class="main">
    <span class="textile"> Криптовалюта — это цифровое средство обмена, 
      которое использует криптографию для обеспечения 
      безопасности и защиты транзакций. Криптовалюты 
      работают на основе технологии блокчейн (распределенный реестр), 
      что делает их децентрализованными и отвечающими 
      требованиям конфиденциальности. Биткоин, созданный в 
      2009 году, стал первой и самой известной криптовалютой. 
      В настоящее время на рынке существует множество различных
      криптовалют, каждая из которых имеет свои уникальные 
      особенности и возможности применения. Криптовалюты могут 
      использоваться для покупки товаров и услуг в онлайн-магазинах, 
      а также для инвестирования. Криптовалюты 
      всё больше привлекают внимание в прессе и общественности, а их 
      популярность растёт с каждым годом. </span>
   <div class="lower">
      <img class="photos one" src="../../assets/stronks.jpg">
      <img class="photos two" src="../../assets/notstronks.jpg">
   </div>
   </div>
         </template>
      
         <script lang="ts" setup>
      
      
      </script>
      
      <style scoped>
   .main {
      display:flex;
      justify-content: center;
      align-items: center;
      background:transparent;
      flex-direction: column;
      padding: 50px;
      width:900px;
      gap:30px;
      border:solid 3px rgb(17, 100, 121);
      border-radius: 65px;
      box-shadow: 0 0 40px rgb(17, 100, 121);
      font-family: "Comic Sans MS";
      color:white;
      font-size:20px;
      cursor:default;
   }
   .textile{
      transition-duration: 0.3s;
      border-radius: 50px;
      padding:10px;
   }
   .textile:hover{
      background: rgb(31, 30, 30);
      box-shadow: 0 0 40px rgb(37, 36, 36);
      scale:1.02;
   }
   .lower {
      display:flex;
      width:100%;
      align-items: center;
      flex-direction: row;
      justify-content: space-between;
   }
   .photos {
      height:200px;
      border-radius: 30px;
      transition-duration: 0.3s;
   }
   .photos:hover {
      scale:1.05;
box-shadow: 0 0 40px rgb(29, 75, 30);
border:solid 1px green;
transform: translateX(30%);
   }
   .two:hover {
      scale:1.05;
box-shadow: 0 0 40px rgb(92, 36, 36);
border:solid 1px red;
transform: translateX(-30%);
   }
      </style>  