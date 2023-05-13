const sum = (...n) => {
   sum1=0;
   if (n.length<2) 
   {
      throw new Error (INVALID_ARGUMENTS_COUNT);
   }
   for (i=0;i<n.length;i++)
   {
      if ((typeof n[i]) != "number")
      {
         throw new Error (INVALID_ARGUMENT);
      }
      sum1+=n[i];
   }
   console.log(sum1);
 }
 sum(1,2,3,4,5,6,7,8,9,10);