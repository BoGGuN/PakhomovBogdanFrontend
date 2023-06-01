<template>

   <div class="about">
         <img class="photo" src="../../assets/myphoto.jpg">
      <div class="right">
         <span class="text el">Выполнил: Пахомов Богдан</span>
         <span class="text el">Telegram: Кира Кристо @BoGGuNLooK</span>
         <span class="text el">GitHub: BoGGuN</span>
      </div>
   </div>
         </template>
      
         <script lang="ts" setup>
      
      
      </script>
      
      <style scoped>
   .about {
      display:flex;
      padding: 50px;
      justify-content: center;
      align-items: center;
   background:transparent;
      flex-direction: row;
      border:solid 3px rgb(17, 100, 121);
      border-radius: 35px;
      gap:30px;
      box-shadow: 0 0 40px rgb(17, 100, 121);
   }
   .el {
      transition-duration: 0.3s;
   }
   .el:hover {
   box-shadow: 0 0 40px rgb(17, 100, 121);
   border-radius: 20px;
   background-color: rgb(13, 41, 48);
   scale:1.15;
   cursor: default;
   }
   .photo:hover {
      box-shadow: 0 0 40px rgb(121, 17, 31);
      scale:1.15;
   }
   .photo {
      height: 500px;
      border-radius: 20px;
      transition-duration: 0.3s;
   }
   .right {
      display:flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap:50px;
   }
   .text {
      display:flex;
      align-items: center;
      width: 100%;
      height: 75px;
      color:white;
      font-size:45px;
      font-family: 'Comic Sans MS';
   }
      </style>  