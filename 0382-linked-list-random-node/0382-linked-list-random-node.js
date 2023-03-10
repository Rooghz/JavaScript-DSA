const getAllData = (list) => { // linkedlist -> array
    let res = [];
    let current = list;
    while (current) {
        res.push(current.val);
        current = current.next;
    }
    return res;
};

function Solution(head) {
    let a = getAllData(head), n = a.length;
    return { getRandom }
    function getRandom() {
        let i = randN(n);
        return a[i - 1];
    }
    function randN(n) { // generate random value in range [1...N]
        return parseInt(Math.random() * n) + 1;
    }
}