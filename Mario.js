/* Build a pyramid of mario using hashes.

Pyramid must be right directed.

User should prompt height.

*/

 let height = parseInt(prompt('Height of pyramid'));

const buildPyramid = (n) => {
    for(let i = n; i > 0; i--){
        console.log(" ".repeat(i) + "#".repeat(n-i));
        console.log("\n");
    }
}

buildPyramid(height);


