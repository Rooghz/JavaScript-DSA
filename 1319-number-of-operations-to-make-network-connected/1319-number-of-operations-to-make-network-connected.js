class unionFind {
    constructor(n){
        this.parent = new Array(n).fill(0).map((_,i)=>i);
    }
    union(a,b){
        const a_rep = this.find(a);
        const b_rep = this.find(b);
		this.parent[b_rep]=a_rep;
    }
    
    find(a){
        if (a === this.parent[a])
            return a;
        this.parent[a] = this.find(this.parent[a]);
        return this.parent[a];
    }
}

var makeConnected = function(n, connections) {
    const m = connections.length;
    if (m <n-1 )
            return -1;
    const UF = new unionFind(n);
    let noOfComponents = n;
    for ( let [s,d] of connections){
        const s_rep = UF.find(s);
        const d_rep = UF.find(d);
        if (s_rep!=d_rep){
            UF.union(s,d);
            noOfComponents-- ;
        }   
    }
    
    return noOfComponents -1;
};