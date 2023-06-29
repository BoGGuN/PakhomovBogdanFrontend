<template>
   <div class="wrapper">
   <header class="header">
      <router-link to="/" class="linker">
         Дата
      </router-link>
      <router-link to="/tasks" class="linker">
         Список задач
      </router-link>
      <router-link to="/creator" class="linker">
         Создатели
      </router-link>
   </header>
      <router-view class="app" v-slot="{Component}">
         <transition name="slide" mode="out-in">
            <component :is="Component"></component>
         </transition>
      </router-view>
</div>
</template>

<script setup lang="ts">
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
.wrapper {
width:100vw;
height: auto;
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap:4.5vw;
}
.app {
   margin-bottom:10vw;
}
.header {
   width: 100vw;
   min-height:6vw;
   padding:2vw;
   border-bottom: 0.15vw solid rgb(26, 151, 182);
   box-shadow: 0 0 3vw rgb(26, 151, 182);
   display:flex;
   justify-content: center;
   gap:5vw;
   align-items: center;
}
.linker {
   display:flex;
   text-decoration: none;
   font-family: 'Comic Sans MS';
   font-size: 2.7vw;
   cursor: pointer;
   max-width:30vw;
   min-width: 25vw;
   background-color:rgb(10, 168, 168);
   border:0.3vw solid rgb(26, 151, 182);
   border-radius:10vw;
   box-shadow: 0 0 1vw rgb(48, 110, 126);
   align-items: center;
   justify-content: center;
   transition-duration: 0.3s;
}
.linker:hover {
   scale:1.2;
}
</style>
