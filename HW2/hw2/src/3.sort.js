const sort = (a) => {
   if ((typeof a) != 'string') {
      throw new Error (INVALID_ARGUMENT);
   }
   wordar=a.split(' ');
   for (i=wordar.length-1;i>0;i--)
   for (j=i-1;j>=0;j--)
   {
      if (wordar[j].length>wordar[i].length)
      {
         el=wordar[i];
         wordar[i]=wordar[j];
         wordar[j]=el;
      }
   }
for (i=0;i<wordar.length;i++)
for (j=0;j<wordar[i].length-1;j++)
for (k=j+1;k<wordar[i].length;k++)
{
   if (wordar[i].charCodeAt(j)>wordar[i].charCodeAt(k))
   {//замена данного значения на максимальное по UTF, замена местами символы строки с индексом k на j
      wordar[i]=wordar[i].substring(0,j) + wordar[i][k] + wordar[i].substring(j+1,k)+wordar[i][j]+wordar[i].substring(k+1, wordar[i].length);
   }
}
wordar=wordar.join(' ');
   console.log(wordar);
}
sort('afika a zg vsh 987612tw345 grint gruzil 2ofmtea');
sort('hello world');