let array_triangulos = [];
let aux = 0;
let triangulo = {
    ang_1: 0,
    ang_2: 0,
    ang_3: 0,
    tipo: "",
    indice: aux
}


let passo = 0;
let saida = 0;

const prompt = require("prompt-sync")();

do{
    let resposta = prompt("Resposta: ");

    switch(passo) {
        case 0:
            if(resposta == "add") {
                console.log("\nDigite o primeiro angulo. ");
                triangulo = {
                    ang_1: 0,
                    ang_2: 0,
                    ang_3: 0,
                    tipo: "",
                    indice: aux
                }
                passo = 1;

            } else if(resposta == "ls" && array_triangulos != 0) {
                console.log(array_triangulos);

            } else if(resposta == "ls" && array_triangulos == 0) {
                console.log("\nNão há triângulos cadastrados. \nDigite novamente.\n");

            } else if(resposta == "rm" && array_triangulos != 0) {
                console.log("\nQual triangulo deseja remover? ");
                console.log(array_triangulos);
                passo = 4;
                
            } else if(resposta == "rm" && array_triangulos == 0) {
                console.log("\nNão há triângulos cadastrados. \nDigite novamente.\n");
            } else if(resposta == "q") {
                process.exit();
            }
        break;

        case 1:
            triangulo.ang_1 = Number(resposta);
            console.log("\nEscreva o segundo angulo.");
            passo = 2;

        break;

        case 2:
            triangulo.ang_2 = Number(resposta);
            console.log("\nEscreva o terceiro angulo.");
            passo = 3;
            
        break;

        case 3:
            triangulo.ang_3 = Number(resposta);
            triangulo.indice = aux;

            if((triangulo.ang_1 + triangulo.ang_2 + triangulo.ang_3) == 180 && triangulo.ang_1 != 0 && 
            triangulo.ang_2 != 0 && triangulo.ang_3 !=0
        ) {
                if(triangulo.ang_1 == triangulo.ang_2 && triangulo.ang_1 == triangulo.ang_3 ) {
                    triangulo.tipo = "equilatero";

                } else if(
                    triangulo.ang_1 != triangulo.ang_2 && triangulo.ang_2 == triangulo.ang_3 ||
                    triangulo.ang_1 != triangulo.ang_2 && triangulo.ang_1 == triangulo.ang_3 ||
                    triangulo.ang_1 != triangulo.ang_3 && triangulo.ang_1 == triangulo.ang_2
                ) {
                    triangulo.tipo = "isósceles";
                    
                } else {
                    triangulo.tipo = "escaleno";
                }
                
                array_triangulos.push(triangulo);

                aux++;
                passo = 0;
            } else {
                console.log("\nInseriu algum dos ângulos errados.\nDigite novamente.\nPrimeiro ângulo.\n");
                triangulo = {
                    ang_1: "",
                    ang_2: "",
                    ang_3: "",
                    tipo: ""
                }
                passo = 1;
                
            }
            console.log(triangulo)
            
        break;

        case 4:
            for(let i = 0; i < array_triangulos.length; i++) {
                if(resposta == array_triangulos[i].indice) {
                    array_triangulos.splice(i, 1);

                    for(let j = 0; j < array_triangulos.length; j++) {
                        array_triangulos[j].indice = j;

                    }
                }
            }

            passo = 0;

        break;
    }
}while(!saida)