
let re = /^([aeiou]).*\1$/i;
return re;



function main() {
    const re = regexVar();
    const s = readLine();

    console.log(re.test(s));
}