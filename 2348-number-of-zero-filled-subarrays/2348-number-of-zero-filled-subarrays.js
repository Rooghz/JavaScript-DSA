var zeroFilledSubarray = function(nums) {
    const sumOfN = n  => (n*n+n)/2
    const res = nums.reduce((a,x,i) => x==0
                          ?[a[0]+1,a[1]]
                          :[0,a[1]+sumOfN(a[0])]
                                
                ,[0,0])
    return res[0] ? res[1] + sumOfN(res[0]) :res[1]
    };