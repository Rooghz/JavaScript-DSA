var addBinary = function(a, b) {
  let ans="";
  let carry=0;
  while(a || b || carry){
    let sum = +a.slice(-1) + +b.slice(-1)+carry;

    if(sum>1){
      ans=sum%2+ans;
      carry=1;
    }else{
      ans=sum+ans;
      carry=0;
    }
    
    a=a.slice(0,-1);
    b=b.slice(0,-1);
  }

 return ans;
};