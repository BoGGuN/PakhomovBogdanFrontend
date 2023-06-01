import {ref} from 'vue';
export const d=ref('bitcoin');
export let precoins:{id:string,name:string,large:string}[]=[];
export let precategory:{ category_id: string, name: string }[]=[];
export const a=ref('');
export const b=ref('');
export let saver=ref();
fetch('https://api.coingecko.com/api/v3/coins/categories/list')
.then(function (resp){return resp.json()}).then(function (data) {
   precategory=data;
   precategory.unshift({category_id:'Все', name:'Все'});
}).catch(function er() {alert('Ошибка1')});
fetch('https://api.coingecko.com/api/v3/search/')
.then(function (resp){return resp.json()}).then(function (data) {
precoins=data.coins;
for (let u=0;u<precoins.length;u++)
if (precoins[u].large=='missing_large.png')
precoins[u].large='https://w7.pngwing.com/pngs/349/105/png-transparent-false-error-missing-absent-x-red-cross-letter-circle-gui.png';
}).catch(function er() {alert('Ошибка2')})

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