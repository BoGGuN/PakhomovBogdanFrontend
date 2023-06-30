import {defineStore} from 'pinia'
import { savedate,calendar,plus,minus,selectmonth,selectdate,setdate,saver,deleter,edit} from '../services/index';
export const useStore=defineStore('store',{
   state:()=>({
   }),
   actions:{
      Store_savedate(){
         savedate();
      },
      Store_calendar(){
         calendar();
      },
      Store_plus(){
         plus();
      },
      Store_minus(){
         minus();
      },
      Store_selectdate(event:any){
         selectdate(event);
      },
      Store_selectmonth(){
         selectmonth();
      },
      Store_setdate(event:any){
         setdate(event);
      },
      Store_saver(b:any){
         saver(b);
      },
      Store_deleter(event:any,b:any){
         deleter(event,b);
      },
      Store_edit(event:any,b:any){
         edit(event,b);
      }
   },
});