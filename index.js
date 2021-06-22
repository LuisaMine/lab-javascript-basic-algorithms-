
// Iteration 1: Names and Input
 
//1.1
   let hacker1= "Miranda";

//1.2
console.log(`The driver's name is: ${hacker1}`);
 
//1.3
   let hacker2= "Luisa";

//1.4
console.log(`The navigator's name is: ${hacker2}`);

// Iteration 2: Conditionals
   
if (hacker1.length > hacker2.length) {
    console.log(`The driver "${hacker1}" has the longest name and it has ${hacker1.length} characters.`);
}
else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator "${hacker2}" has the longest name and it has ${hacker2.length} characters!.`);
}

else {
    console.log(`Wow, you both have equally long names, ${hacker1.length, hacker2.length} characters!.`);
}

// Iteration 3: Loops
// 3.1

let driversname = "";
for (let i = 0; i < hacker1.length; i ++){
    driversname += `${hacker1.toUpperCase().charAt(i) + " "}`
    }
    
console.log(driversname);

// 3.2

const invertirWord = hacker1 => {
    let reverseWord = "";
    for (let i = hacker1.length - 1; i >= 0; i--) {
        reverseWord += hacker1[i];
    }
    return reverseWord;
}

console.log("Invertida: %s", invertirWord(hacker1));

// 3.3

hacker1 = hacker1.toLocaleLowerCase();
hacker2 = hacker2.toLocaleLowerCase();

if (hacker1.localeCompare(hacker2) === -1) {
    console.log("The driver's name goes first");

}else if (hacker1.localeCompare(hacker2) === +1) {
    console.log("Yo, the navigator goes first definnitely");  

}else {
    console.log("What?! You both have the same name?");
}



// BONUS

// Bonus 1:

const paragraphs = `
What is Lorem Ipsum?
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

Why do we use it?
It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).


Where does it come from?
Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

`;

console.log(`Paragraphs is a string and its length is ${paragraphs.length}.`);


let word = "et";
let sentence = "${paragraphs}";

if(sentence.includes(word)){
    console.log("Truthy")
}

else {
    console.log("Falsy")
}

// Bonus 2:
 
   // 1.Obtener palabra en reversa


   const palindromo = cadena => {
    let reversePalindromo = "";
    for (let i = cadena.length - 1; i >= 0; i--) {
        reversePalindromo += cadena[i];
    }
    return reversePalindromo;
}
//2. Pasarla a minúscula y sin espacios

 let cadena = "Anita lava la tina" ;
 cadena = cadena.replace(/\s+/g,'').toLowerCase();
 convertido = palindromo(cadena).replace(/\s+/g,'').toLowerCase();
 
//3. Comparar
  if (convertido === cadena) {
      console.log ("Son iguales");
  }else {
      console.log("no son iguales");
     
    }
