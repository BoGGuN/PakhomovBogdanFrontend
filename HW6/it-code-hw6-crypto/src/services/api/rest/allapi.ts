import {precategory,precoins,saver,checking,coins,cachecoins,cachecoins2,b,d} from '../../../utils/utils.ts'
export function list(){
fetch('https://api.coingecko.com/api/v3/coins/categories/list')
.then(function (resp){return resp.json()}).then(function (data) {
   precategory.value=data;
   precategory.value.unshift({category_id:'Все', name:'Все'});
}).catch(function er() {alert('Ошибка1')});
}

export function search(){
fetch('https://api.coingecko.com/api/v3/search/')
.then(function (resp){return resp.json()}).then(function (data) {
precoins.value=data.coins;
for (let u=0;u<precoins.value.length;u++)
if (precoins.value[u].large=='missing_large.png')
precoins.value[u].large='https://w7.pngwing.com/pngs/349/105/png-transparent-false-error-missing-absent-x-red-cross-letter-circle-gui.png';
}).catch(function er() {alert('Ошибка2')})
}

export function coinfinder(){
fetch('https://api.coingecko.com/api/v3/search?query='+b.value)
.then(function (resp){return resp.json()}).then(function (data) {
cachecoins.value=data.coins;
   for (let j=0;j<cachecoins.value.length;j++){
   if (cachecoins.value[j].large=='missing_large.png')
   cachecoins.value[j].large='https://w7.pngwing.com/pngs/349/105/png-transparent-false-error-missing-absent-x-red-cross-letter-circle-gui.png';   
}
cachecoins2.value=[...cachecoins.value];
coins.value=[...cachecoins2.value.slice(0,15)];
}).catch(function er() {alert('Ошибка4')});
}

export function categoryfinder(i:any){
fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&category='+precategory.value[i].category_id)
.then(function (resp){return resp.json()}).then(function (data) {
   cachecoins.value=data;
   for (let j=0;j<cachecoins.value.length;j++){
      cachecoins.value[j].large=data[j].image;
   if (cachecoins.value[j].large=='missing_large.png')
   cachecoins.value[j].large='https://w7.pngwing.com/pngs/349/105/png-transparent-false-error-missing-absent-x-red-cross-letter-circle-gui.png';
}
cachecoins2.value=[...cachecoins.value];
coins.value=[...cachecoins2.value.slice(0,15)];
}).catch(function er() {alert('Ошибка3')});
}

export function info(){
fetch('https://api.coingecko.com/api/v3/coins/'+d.value)
   .then(function (resp){return resp.json()}).then(function (data) {
      saver.value=data;
      if (saver.value.image.large=='missing_large.png')
      saver.value.image.large='https://w7.pngwing.com/pngs/349/105/png-transparent-false-error-missing-absent-x-red-cross-letter-circle-gui.png';
         checking(saver.value);
         if(!saver.value.genesis_date)
         saver.value.genesis_date="Неизвестно";
         saver.value.description.en = saver.value.description.en.slice(0, 300);
   }).catch(function er() {alert('Ошибка3')})
}