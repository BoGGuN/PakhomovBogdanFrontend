const removeAnagrams = (a) => {
   if (!Array.isArray(a)) 
   {
      throw new Error (INVALID_ARGUMENT);
   }
   for (i=0;i<a.length;i++)
   if ((typeof a[i])!='string') 
   {
      throw new Error(INVALID_ELEMENT_IN_ARRAY);
   }
   b=a;
   for (i=b.length-1;i>0;i--)
   {
      c=0;
   for (k=i-1;k>=0;k--) //  вне зависимости от порядка букв, анаграммы будут упорядочены одинаково
   if (b[i].split('').sort().join('')==b[k].split('').sort().join('')) //разбиение элементов на символы, упорядочивание по UTF, и складываение обратно (сравнение)
   {
      c++;
      b.splice(k,1);
      i--;
   }
   if (c>0)
   {
      b.splice(i,1);
   }
}
console.log(a);
}
removeAnagrams(['cat','trem','act', 'arc','term','temr']);