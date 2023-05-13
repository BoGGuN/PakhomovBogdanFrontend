const intersection = (a,b) => {
   if (b == 'none') 
   throw new Error (INVALID_ARGUMENTS_COUNT);
   if ((!Array.isArray(a)) || (!Array.isArray(b)))
   throw new Error (INVALID_ARGUMENT);
   let g=[];
   for (i=0;i<a.length;i++)
   {
      if (!((typeof a[i])=='number')) 
   {
      throw new Error (INVALID_ELEMENT_IN_ARRAY);
 }
      for (k=0;k<b.length;k++)
      {
         if (!((typeof b[k])=='number')) 
         {
            throw new Error (INVALID_ELEMENT_IN_ARRAY);
       }
            if (a[i]==b[k])
            g.push(a[i]);
      }
   }
   console.log(g);
}
intersection([1,2,3,4],[3,4,5,1]);