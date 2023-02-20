function legoBlocks(n, m) {
    // Calc posible combinations for one row with lenght m and blick with lenghts 1, 2, 3 and 4 
    // m=1 => 1 (1)
    // m=2 => 2 (1+1, 2)
    // m=3 => 4 (1+1+1, 1+2, 2+1, 3)
    // m=4 => 8 (1+1+1+1, 1+1+2, 1+2+1, 2+1+1, 2+2, 1+3, 3+1, 4))
    // m=5 => 15 (1+1+1+1+1, 1+1+1+2, 1+1+2+1, 1+2+1+1, 2+1+1+1, 1+1+3, 1+3+1, 3+1+1, 2+2+1, 2+1+2, 1+2+2, 2+3, 3+2, 4+1, 1+4)
    // m=6 => 29 (1+1+1+1+1+1, 1+1+1+1+2, 1+1+1+2+1, 1+1+2+1+1, 1+2+1+1+1, 2+1+1+1+1, 1+1+1+3, 1+1+3+1, 1+3+1+1, 3+1+1+1, 1+1+2+2, 1+2+1+2, 2+1+1+2, 2+1+2+1, 2+2+1+1, 1+2+2+1, 2+2+2, 1+1+4, 1+4+1, 4+1+1, 3+2+1, 3+1+2,2+3+1,  2+1+3, 1+3+2, 1+2+3, 2+4, 4+2, 3+3)
    const singleCombo = [1, 2, 4, 8];
    const mod = 1000000007;
    // Calc posible combinations for one row with lenght m and blick with lenghts 1, 2, 3 and 4
    for (let i = 4; i < m; i++) {
        singleCombo.push((singleCombo[i - 1] + singleCombo[i - 2] + singleCombo[i - 3] + singleCombo[i - 4]) % mod);
    }

    const totalCombo = singleCombo.map((c) => c ** n % mod);

    console.log("singleCombo", singleCombo);
    console.log("totalCombo", totalCombo);

    let validCombo = [1];

    for (let i = 1; i < m; i++) {
        let invalidCombo = 0;
        for (let j = 0; j < i; j++) {
            invalidCombo += (totalCombo[j] * validCombo[validCombo.length -1 - j]);
        }
        validCombo.push((totalCombo[i] - invalidCombo) % mod);
        console.log("validCombo", validCombo)
        console.log("invalidCombo", invalidCombo, "totalCombo", totalCombo[i]);
    }
    
    return validCombo[validCombo.length - 1];
}
// console.log("2x2 =>",legoBlocks(2, 2));
// console.log("3x2 =>",legoBlocks(3, 2));
// console.log("2x3 =>",legoBlocks(2, 3));
// console.log("3x3 =>",legoBlocks(3, 3));
// console.log("4x4 =>",legoBlocks(4, 4));
// console.log("1X1 =>",legoBlocks(1, 1));
// console.log("1X2 =>",legoBlocks(1, 2));
// console.log("1X3 =>",legoBlocks(1, 3));
// console.log("1X4 =>",legoBlocks(1, 4));
// console.log("1X5 =>",legoBlocks(1, 5));
// console.log("2X5 =>",legoBlocks(2, 5));
// console.log("4X8 =>",legoBlocks(4, 8));
console.log("4X9 =>",legoBlocks(4, 9));

// 2X2
// 2 2
// 2 1+1
// 1+1 2

// 3x2
// 2 2 2
// 2 2 1+1
// 2 1+1 2
// 2 1+1 1+1
// 1+1 2 2
// 1+1 1+1 2
// 1+1 2 1+1
// invalid 1+1 1+1 1+1

// 2x3
// 3 3
// 3 1+2
// 3 2+1
// 3 1+1+1
// 1+2 3
// 1+2 2+1
// 2+1 3
// 2+1 1+2
// 1+1+1 3
// invalid 1+1+1 1+1+1
// invalid 1+1+1 2+1
// invalid 1+1+1 1+2
// invalid 2+1 1+1+1
// invalid 2+1 2+1
// invalid 1+2 1+2
// invalid 1+2 1+1+1

// 3x3
// 1+1+1 3 1+1+1
// 1+1+1 3 1+2
// 1+1+1 3 2+1
// 1+1+1 3 3 
// 1+2 3 1+1+1
// 1+2 3 1+2
// 1+2 3 2+1
// 1+2 3 3
// 2+1 3 1+1+1
// 2+1 3 1+2
// 2+1 3 2+1
// 2+1 3 3
// 3 3 1+1+1
// 3 3 1+2
// 3 3 2+1
// 3 3 3
// 3 1+1+1 3
// 3 1+2 3
// 3 2+1 3

// 4x2
// 4 4
// 4 3+1
// 4 1+3
// 4 2+2
// 4 2+1+1
// 4 1+2+1
// 4 1+1+2
// 4 1+1+1+1
// 3+1 4
// 3+1 1+3
// 3+1 2+2
// 3+1 1+1+2
// 1+3 4
// 1+3 3+1
// 1+3 2+2
// 1+3 2+1+1
// 2+2 4
// 2+2 3+1
// 2+2 1+3
// 2+2 1+2+1
// 2+1+1 4
// 2+1+1 1+3
// 1+2+1 4
// 1+2+1 2+2
// 1+1+2 4
// 1+1+2 3+1
// 1+1+1+1 4