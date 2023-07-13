function createwind() {//функция создаёт окно ввода (форму) по кнопке с сайта
   if (!document.querySelector('.created_wind')) {
      b=document.createElement('div');//переменная b=div, которая будет принимать элементы формы
      b.classList.add('created_wind');
      input1=document.createElement('input');
      input1.type='text';
      input1.classList.add('inp');
      input1.placeholder='Имя';
      input2=document.createElement('input');
      input2.type='text';
      input2.classList.add('inp');
      input2.placeholder='Фамилия';
      input3=document.createElement('input');
      input3.type='text';
      input3.classList.add('inp');
      input3.placeholder='Отчество';
      input4=document.createElement('input');
      input4.type='text';
      input4.classList.add('inp');
      input4.placeholder='Ник';
      b.appendChild(input1);//присоединяем элементы к переменной b
      b.appendChild(input2);
      b.appendChild(input3);
      b.appendChild(input4);
      button=document.createElement('button');
      button.classList.add('created_but');
      button.addEventListener('click', save);
      button.textContent='Сохранить';
      b.appendChild(button);
      document.querySelector('.wrapper').appendChild(b);//Вводим на страничку
   }
}
function save(){//функция переводит информацию из формы на страницу сайта по кнопке с формы
   count=0;
for (i=0;i<4;i++) {
if (document.querySelectorAll('.inp')[i].value=='')
   count++;
}
if (count!=0)
alert('Заполните все поля!');
else {
inpvalue1=document.querySelectorAll('.inp')[0].value;//берутся значения из формы и кладутся в переменные
inpvalue2=document.querySelectorAll('.inp')[1].value;
inpvalue3=document.querySelectorAll('.inp')[2].value;
inpvalue4=document.querySelectorAll('.inp')[3].value;
a=document.createElement('div');
a.classList.add('created_info');
span1=document.createElement('span');
span1.classList.add('text');
span1.textContent='Имя: '+inpvalue1;
span2=document.createElement('span');
span2.classList.add('text');
span2.textContent='Фамилия: '+inpvalue2;
span3=document.createElement('span');
span3.classList.add('text');
span3.textContent='Отчество: '+inpvalue3;
span4=document.createElement('span');
span4.classList.add('text');
span4.textContent='Ник: '+inpvalue4;
a.appendChild(span1);
a.appendChild(span2);
a.appendChild(span3);
a.appendChild(span4);
if (document.querySelector('.created_info')) {
   document.querySelector('.created_info').remove();//если до этого уже было окно с информацией, то оно удаляется
}
document.querySelector('.created_wind').remove(); //удаляется форма
document.querySelector('.wrapper').appendChild(a);//вводится информация
}
}