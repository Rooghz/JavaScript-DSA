/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumDeviation = function(nums) {
    let result=Infinity;
    for(let i=0;i<nums.length;i++){
        if(nums[i]%2!=0)nums[i]*=2;
    }


    let s=new Set(nums);
    let arr=Array.from(s).sort((a,b)=>b-a);

    while(arr[0]%2==0){
        let tmp=arr.shift()/2;
        let InsIdx=arr.findIndex(r=>r<tmp);
        if(InsIdx==-1){
            arr.push(tmp);
        }else{
            arr.splice(InsIdx, 0, tmp);
        }
        result=Math.min(arr[0]-arr.at(-1),result)
    }

    return result;
};