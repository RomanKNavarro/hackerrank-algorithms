function flatlandSpaceStations(n, c) {
    let currMax = n;
    let maxys = [];
    for (let i = 0; i < n; i++) {
        let city1 = Math.abs(c[0] - i);   
        let city2 = c[1] ? Math.abs(c[1] - i) : city1 + 1;  // callback ensures this is greater than city1

        // if (city2 < city1) c.shift(); 
        if (c[1] && i == c[1]) c.shift(); 
        
        maxys.push(Math.min(city1, city2));

        // let leastUnits = Math.min(city1, city2);
        // if (leastUnits < currMax) currMax = leastUnits;

        // console.log(city1, city2, c, i);
        // console.log(leastUnits);
    }
    // return Math.max(...maxys);
    // return currMax;
    return maxys;
};

// flatlandSpaceStations(5, [0, 4]);            // -> 0, 1, 2, 1, 0.....2

console.log(flatlandSpaceStations(11, [0, 5, 8]));           // -> 2 
// console.log(flatlandSpaceStations(11, [0, 5, 8]));           // -> 2
// console.log(flatlandSpaceStations(6, [0, 1, 2, 3, 4, 5]));   // -> 0 
// console.log(flatlandSpaceStations(6, [0, 1, 2, 3, 4, 5]));   // -> 0 
// console.log(flatlandSpaceStations(9, [2, 5]));               // -> 3 

// console.log(flatlandSpaceStations(99992, [90467, 18058, 99109, 48463])); // -> 21002

// flatlandSpaceStations(99992, [90467, 18058, 99109, 48463]); // -> 21002