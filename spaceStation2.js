function flatlandSpaceStations(n, c) {
    let maxys = [];
    for (let i = 0; i < n; i++) {
        let difference = Math.abs(c[0] - i);   
        let otherDiff = c[1] ? Math.abs(c[1] - i) : difference + 1; 

        if (difference == otherDiff || difference > otherDiff) c.shift();
        
        maxys.push(Math.min(difference, otherDiff));

        console.log(difference, otherDiff, c);
    }
    // return Math.max(...maxys);
    // console.log(maxys);
};

// flatlandSpaceStations(5, [0, 4]);            // -> 0, 1, 2, 1, 0.....2
// flatlandSpaceStations(10, [0, 5, 8]);           // -> 2 
// console.log(flatlandSpaceStations(6, [0, 1, 2, 3, 4, 5]));   // -> 0 

flatlandSpaceStations(10, [0, 5, 8]);