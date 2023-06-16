import {ref} from 'vue';
import {useStore} from '../store/store.ts'

export const d=ref('bitcoin');
interface Precoins{id:string,name:string,large:string};
interface Precategory{ category_id: string, name: string };
export const precoins = ref<Precoins[]>([])
export const precategory = ref<Precategory[]>([])
export const a=ref('');
export const b=ref('');
export let saver=ref();
export let coins=ref();
export let category=ref();
export let cachecoins=ref([...precoins.value]);
export let cachecategory=ref([...precategory.value]);
export let cachecoins2=ref([...precoins.value]);
export let cachecategory2=ref([...precategory.value]);
export let categoryname=ref('');
saver=ref({
   image: {large: 'https://w7.pngwing.com/pngs/349/105/png-transparent-false-error-missing-absent-x-red-cross-letter-circle-gui.png'},
   name: 'Неизвестно',
   id: 'Неизвестно',
   description:{en:'Неизвестно'},
   genesis_date: 'Неизвестно',
   market_data: {
     current_price: {usd: 'Неизвестно', rub: 'Неизвестно'},
     price_change_percentage_24h: 'Неизвестно',
     price_change_percentage_7d: 'Неизвестно',
     price_change_percentage_30d: 'Неизвестно',
     price_change_percentage_200d: 'Неизвестно',
     price_change_percentage_1y: 'Неизвестно'
   }
 });
 export function checking(el:any) {
   for (let prop in el) {
     if (typeof el[prop] === 'object') {
       checking(el[prop]);
     } else if (!el[prop]) {
       el[prop] = 'Неизвестно';
     }}}

     export async function start(starter: string, i: number) {
      const store = useStore();
      if (starter === 'default') {
        store.lister()
        store.searcher()
      }
      if (starter === 'categoryfinderer') {
        store.categoryfinderer(i)
      }
      if (starter === 'coinfinderer') {
        store.coinfinderer()
      }
      if (starter === 'infer') {
        store.infer()
      }
    }