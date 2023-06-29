<template>

   <div class="about">
         <img class="photo" src="../assets/myphoto.jpg">
      <div class="right">
         <span class="text el">Creator: Kira Kirsto</span>
         <span class="text el">Telegram: Kira Kristo @BoGGuNLooK</span>
         <span class="text el">GitHub: BoGGuN</span>
      </div>
   </div>
         </template>
      
         <script lang="ts" setup>
      
      
      </script>
      
      <style scoped>
   .about {
      display:flex;
      padding: 2.5vw;
      justify-content: center;
      align-items: center;
   background:transparent;
      flex-direction: row;
      border:solid 0.3vw rgb(17, 100, 121);
      border-radius: 2vw;
      gap:2.5vw;
      box-shadow: 0 0 5vw rgb(17, 100, 121);
   }
   .el {
      transition-duration: 0.3s;
   }
   .el:hover {
   box-shadow: 0 0 2vw rgb(17, 100, 121);
   border-radius: 1.5vw;
   background-color: rgb(13, 41, 48);
   scale:1.15;
   cursor: default;
   }
   .photo:hover {
      box-shadow: 0 0 1.5vw rgb(121, 17, 31);
      scale:1.15;
   }
   .photo {
      height: 28vw;
      border-radius: 1.5vw;
      transition-duration: 0.3s;
   }
   .right {
      display:flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap:2vw;
   }
   .text {
      display:flex;
      align-items: center;
      width: 100%;
      height: 5vw;
      color:white;
      font-size:2.8vw;
      font-family: 'Comic Sans MS';
   }
      </style>  