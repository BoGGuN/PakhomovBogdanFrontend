import {defineStore} from 'pinia'
import { list,search,coinfinder,categoryfinder,info } from '../services/api/index.ts';
export const useStore=defineStore('store',{
   state:()=>({
   }),
   actions:{
      lister(){
         list();
      },
      searcher(){
         search();
      },
      coinfinderer(){
         coinfinder();
      },
      categoryfinderer(i:Number){
         categoryfinder(i);
      },
      infer(){
         info();
      }
   },
});