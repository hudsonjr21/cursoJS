let a = 7;
let b = 94;
console.log("A: " + a);
console.log("B: " + b);

// trocar valores da variavel a e b. a = 94 e b = 7.

//.. Forma de troca simples.
//let temp = a;
//a = b;
//b = temp;

//.. Forma de troca 2.
[a, b] = [b, a]

console.log("O valor de A agora é: " + a 
    + ", e o de B é: " + b + ".");