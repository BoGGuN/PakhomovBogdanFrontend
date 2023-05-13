function clearal () {
for (i=0;i<document.getElementsByClassName('input').length;i++)
document.getElementsByClassName('input')[i].value='';
}

function createal () {
   name1=document.getElementById('name1').value;
   name2=document.getElementById('name2').value;
   name3=document.getElementById('name3').value;
   if ((name1!='')&&(name2!='')&&(name3!=''))
   {
      for (i=0;i<document.getElementsByClassName('input').length;i++)
         document.getElementsByClassName('input')[i].value='';

         b=document.createElement('div');
         b.classList.add('todoel');
         head=document.createElement('div');
         head.classList.add('head');
         spanhead=document.createElement('button');
         spanhead.classList.add('spanhead');
         spanhead.classList.add('cont');
         spanhead.textContent="Изменить";
         close=document.createElement('button');
         close.classList.add('close');
         close.classList.add('cont');
         close.textContent="X";
         head.appendChild(spanhead);
         head.appendChild(close);
         b.appendChild(head);
         bodyname=document.createElement('div');
         bodyname.classList.add('bodyname');
         namespan=document.createElement('span');
         namespan.classList.add('namespan');
         namespan.classList.add('cont');
         namespan.textContent=name1;
         datespan=document.createElement('span');
         datespan.classList.add('datespan');
         datespan.classList.add('cont');
         datespan.textContent=name2;
         bodyname.appendChild(namespan);
         bodyname.appendChild(datespan);
         b.appendChild(bodyname);
         bodytext=document.createElement('span');
         bodytext.classList.add('bodytext');
         bodytext.classList.add('cont');
         bodytext.textContent=name3;
         b.appendChild(bodytext);

         document.getElementById('todolist').appendChild(b);

   }
   else if ((name1=='')||(name2=='')||(name3==''))
   {
      document.getElementById('messageal').textContent='Заполните пустующие поля';
      document.getElementById('message').style.display='flex';
      setTimeout(function() {
         document.getElementById('message').style.display = 'none';
       }, 3000);
   }
}

function removeal () {
   document.querySelectorAll('.todoel').forEach(function(element) 
   {
      element.remove();
    }
    );
   }

   document.addEventListener('click', function(event) {
      if (event.target.matches('.todoel .head .close'))
         event.target.parentNode.parentNode.remove();
    });

    document.addEventListener('click', function(event) {
      if (event.target.matches('.todoel .head .spanhead')) 
      if (event.target.closest('.todoel').querySelector('.spanhead').textContent=='Изменить') {
         input1=event.target.closest('.todoel').querySelector('.namespan').textContent;
         input2=event.target.closest('.todoel').querySelector('.datespan').textContent;
         input3=event.target.closest('.todoel').querySelector('.bodytext').textContent;
         event.target.closest('.todoel').querySelector('.spanhead').textContent='Принять';
         event.target.closest('.todoel').querySelector('.namespan').remove();
         event.target.closest('.todoel').querySelector('.datespan').remove();
         event.target.closest('.todoel').querySelector('.bodytext').remove();
         a1=document.createElement('input');
         a2=document.createElement('input');
         a3=document.createElement('input');
         a1.type="text";
         a1.classList.add('input');
         a1.classList.add('namespan');
         a1.value=input1;
         a2.type="date";
         a2.classList.add('input');
         a2.classList.add('datespan');
         a2.value=input2;
         a3.type="text";
         a3.classList.add('input');
         a3.classList.add('bodytext');
         a3.value=input3;
         event.target.closest('.todoel').querySelector('.bodyname').appendChild(a1);
         event.target.closest('.todoel').querySelector('.bodyname').appendChild(a2);
         event.target.closest('.todoel').appendChild(a3);
      }
      else if (event.target.closest('.todoel').querySelector('.spanhead').textContent=='Принять') {

         input1=event.target.closest('.todoel').querySelector('.namespan').value;
         input2=event.target.closest('.todoel').querySelector('.datespan').value;
         input3=event.target.closest('.todoel').querySelector('.bodytext').value;
         event.target.closest('.todoel').querySelector('.spanhead').textContent='Изменить';
         event.target.closest('.todoel').querySelector('.namespan').remove();
         event.target.closest('.todoel').querySelector('.datespan').remove();
         event.target.closest('.todoel').querySelector('.bodytext').remove();
         a1=document.createElement('span');
         a2=document.createElement('span');
         a3=document.createElement('span');
         a1.classList.add('namespan');
         a1.classList.add('cont');
         a1.textContent=input1;
         a2.classList.add('datespan');
         a2.classList.add('cont');
         a2.textContent=input2;
         a3.classList.add('bodytext');
         a3.classList.add('cont');
         a3.textContent=input3;
         event.target.closest('.todoel').querySelector('.bodyname').appendChild(a1);
         event.target.closest('.todoel').querySelector('.bodyname').appendChild(a2);
         event.target.closest('.todoel').appendChild(a3);

      }
    });

let name1='';
let name2='';
let name3='';
document.getElementById('name1').value='';
document.getElementById('name2').value='';
document.getElementById('name3').value='';
document.querySelector('#create').onclick=createal;
document.querySelector('#clear').onclick=clearal;
document.querySelector('#remove').onclick=removeal;