
 let course = "JavaScript is not cool"
 console.log(course.trim());
 console.log(course.toLocaleLowerCase());
 console.log(course.toUpperCase());
console.log(course.indexOf(""));
console.log(course.lastIndexOf("o"));
console.log(course.slice(0, 11 ));
console.log(course.replace("not", "manyak" ));
console.log(course.charAt(99 ));
const a = [1, 2, 3];
const b = [4, 5, 6];
const d = [7, 8, 9];
const c = a.concat(b, d )
console.log(c);
const numbers = [ [1, 2],[3, 4] ]
console.log(numbers.concat(5));


let text = "asdfghjklşiçömnbvcxzwertyuıopğü"
console.log(text.length);
console.log(text[8]);
for(i=0;i<text.length;i+=1){
    console.log(text[i]);
}
// let text = "hb
console.log(text.length);
for(i=0;i<text.length;i){
    console.log(text[i]);
}
for(i=text.length;i>=0;i--){
    
        console.log(text[i]);
    }
    let text = "WERTYUIOPĞÜİŞLKJMNÖÇHBGVFCDXSZAASDFGHHJ";
    console.log(text[text.length-6]);

    let text1 = text.slice(5, 22)
    console.log(text1);
    let text2= text.slice(5)
    console.log(text2);
    console.log(text.slice(-15, -6));
    let string = " ben bugun cok cok cok cok cok  deliyim"
    console.log(string.replace("deliyim", "veliyim"));
    console.log(string.replaceAll("cok", "az"));

    let bigletters = string.toUpperCase()
    console.log(bigletters);
    console.log(string);
    let txt1 = "ali" ;
    let txt2 = "mehmet";
    let txt3 = txt1.concat(txt2)
    console.log(txt3);

    let string2 = "       merhaba cmlttn        "
    console.log(string2.length);
    console.log(string2.trim().length);
    console.log(string2.trimEnd().length);
    console.log(string2.trimStart().length);

    let ifade = "benim adim cdo"
    let array = ifade.split("")
    console.log(array);
    let array2 = ifade.split(" ")
    console.log(array2);
    let array3 = ifade.split("im")
    console.log(array3);

    let i= 0

    while (i<=ifade.length){
if(ifade[i]==="e"){
    console.log(`${i}. index = ${ifade[i]}`);
}
i++
    }





