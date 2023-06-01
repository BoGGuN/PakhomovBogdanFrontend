<template>
      <input class="inp" type="text" v-model="a">
         </template>
         <script lang="ts" setup>
         import {a} from '../../utils/utils.ts'
      </script>
      <style scoped>
.inp {
align-items: center;
width:500px;
padding:5px;
padding-left:20px;
border: groove 2px green;
border-radius: 20px;
      box-shadow: 0 0 10px rgb(0, 155, 0);
      font-family: "Comic Sans MS";
      color:white;
      font-size:20px;
      transition: 0.5s;
}
.inp:focus {
   box-shadow: 0 0 20px rgb(95, 95, 95);
}
.inp:hover {
   cursor:pointer;
}
      </style>  