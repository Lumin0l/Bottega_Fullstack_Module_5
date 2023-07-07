/* 
Funtion that works with this portotype: prettyPrice = (grossPrice, extension). So when you introduce 2 numbers, like: prettyPrice = (4.22, 95) it reeturns 4.95
*/

const prettyPrice = (grossPrice, extension) => {
    if (Number.isInteger(extension)) {
        extension = extension * 0.01;
    }
    return Math.floor(grossPrice) + extension;
}
