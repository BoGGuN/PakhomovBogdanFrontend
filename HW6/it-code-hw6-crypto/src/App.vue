<template>
  <div class="wrapper">
   <div class="header">
      <div class="headtop blo"> 
         <span class="text head">Сайт информации о криптовалюте</span>
      </div>
  <div class="headbottom">
   <router-link to="/" class="linker">
   <div class="option blo">
      <span class="text bottom">Главная</span>
   </div>
</router-link>
<router-link to="/list" class="linker">
   <div class="option blo">
      <span class="text bottom">Список криптовалют</span>
   </div>
</router-link>
<router-link to="/info" class="linker">
   <div class="option blo">
      <span class="text bottom">Информационное окно</span>
   </div>
</router-link>
   <router-link to="/creator" class="linker">
   <div class="option blo">
      <span class="text bottom">Создатели</span>
   </div>
</router-link>
  </div>
   </div>


  <router-view v-slot="{Component}">
   <transition name="slide" mode="out-in">
<component :is="Component"></component>
  </transition>
</router-view>

  </div>

</template>

<script lang="ts" setup>

</script>

<style scoped>
.slide-enter-from {
   opacity: 0;
  transform: translateX(30%);
}

.slide-enter-active {
  transition: all 0.15s ease;
}
.slide-leave {
  opacity: 1;
  transform: translateX(0%);
}
.slide-leave-to {
   opacity: 0;
  transform: translateX(-30%);
}
.slide-leave-active {
   transition: all 0.15s ease;
  transform: translateX(-30%);
}

.linker {
   text-decoration: none;
}
.wrapper {
   display:flex;
   width: 100vw;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   gap:100px;
}
.header {
   display: flex;
   background-color: rgb(53, 53, 53);
   width: 100vw;
flex-direction: column;
justify-content: center;
align-items: center;
height: 115px;
gap:20px;
border-bottom: inset 2px rgb(17, 100, 121);
border-radius: 0 0  10px 10px;
box-shadow: 0 0 40px rgb(17, 100, 121);
}
.headtop {
   display:flex;
   background-color: rgb(29, 123, 211);
justify-content: center;
align-items: center;
}
.headbottom {
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: row;
   gap:50px;
   background-color: rgb(53, 53, 53);
}

.blo {
   display: flex;
   background-color: rgb(75, 99, 121);
   width:325px;
   justify-content: center;
   align-items: center;
   height: 30px;
border: ridge 2px rgb(17, 100, 121);
border-radius: 5px;
cursor:default;
}
.option {
   transition-duration: 0.3s;
}
.option:hover {
   background-color: rgb(69, 115, 158);
   cursor:pointer;
   border: groove 4px rgb(26, 151, 182);
   border-radius: 5px;
   box-shadow: 0 0 10px rgb(26, 151, 182);
   scale:1.07;
}
.headtop {
   width: 600px;
   height:40px;
}

.text {
   background: transparent;
  justify-content: center;
   color:rgb(255, 255, 255);
   font-size: 17px;
   font-family: 'Comic Sans MS' ;
}
.head {
   font-size: 25px;
}
</style>
