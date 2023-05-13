const patchArrays = () => {
   Array.prototype.count=function(){
      return this.length;
   }

   Array.prototype.insert=function(index,value) {
      if ((typeof index)!='number') 
      throw new Error (INVALID_ARGUMENT);
      if (index<0) {
         this.unshift(value);
      } else if (index>=this.length) 
      {
         this.push(value);
      }
          else
      this.splice(index,0,value);
      return this;
   }

   Array.prototype.remove = function(value) {
      index = this.indexOf(value);
      if (typeof index!='number') 
      throw new Error (INVALID_ARGUMENT);
      if (index !== -1) 
        this.splice(index, 1);
      return this;
    }
   }

   patchArrays();

   const a = [1, 2, 3];
   console.log([1, 2, 3].count());
   console.log([].count());
   const arr = [];
   console.log(arr.insert(10, 1));
   console.log(arr.insert(1, 'name'));
   console.log(arr.insert(1, null));
   console.log(arr.insert(0, null));
   console.log(arr.remove(2));
   console.log(arr.remove(1));
   console.log(arr.remove('name'));
   console.log(arr.remove(null));
   console.log(arr.remove(null).insert(5,'2'));