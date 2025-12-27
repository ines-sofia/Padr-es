function desenhar1() {
    let texto = "";

    for (let linha = 1; linha <= 5; linha++) { // 5 linhas e avança uma a uma

        for (let coluna = 1; coluna <= 5; coluna++) { // 5 colunas
            texto += "*";
        }

        texto += "\n"; // Nova linha após cada linha completa
    }

    document.getElementById("resultado1").textContent = texto;
    document.getElementById("resultado1").style.display = "block";
}

function desenhar2() {
    let texto = "";

    const linhas = 5;
    const colunas = 5;

    for (let linha = 1; linha <= linhas; linha++) {
        for (let coluna = 1; coluna <= colunas; coluna++) {
            if (linha === 1 || linha === linhas || coluna === 1 || coluna === colunas) {
                texto += "*";
            } else {
                texto += " ";
            }
        }
        texto += "\n";
    }

    document.getElementById("resultado2").textContent = texto;
    document.getElementById("resultado2").style.display = "block";
}

function desenhar3() {
    let texto = "";

    for (let linha = 1; linha <= 5; linha++) {

        // espaços à esquerda
        for (let espaco = 1; espaco <= 5 - linha; espaco++) {
            texto += " ";
        }

        // asteriscos
        for (let estrela = 1; estrela <= linha; estrela++) {
            texto += "*";
        }

        texto += "\n";
    }

    document.getElementById("resultado3").textContent = texto;
    document.getElementById("resultado3").style.display = "block";
}

function desenhar4() {
    let texto = "";

    for (let linha = 1; linha <= 5; linha++) {

        for (let coluna = 1; coluna <= linha; coluna++) {
            texto += "*";
        }

        texto += "\n";
    }

    document.getElementById("resultado4").textContent = texto;
    document.getElementById("resultado4").style.display = "block";
}

function desenhar5() {
    let texto = "";

    for (let linha = 5; linha >= 1; linha--) { //começa da linha 5 até a 1

        for (let coluna = 1; coluna <= linha; coluna++) {
            texto += "*";
        }

        texto += "\n";
    }

    document.getElementById("resultado5").textContent = texto;
    document.getElementById("resultado5").style.display = "block";
}

function desenhar6() {
    let texto = "";

    for (let linha = 1; linha <= 6; linha++) {
    let texto = "";
    const linhas = 6;

    for (let linha = 1; linha <= linhas; linha++) {
        for (let coluna = 1; coluna <= linha; coluna++) {
            if (linha === linhas || coluna === 1 || coluna === linha) {
                texto += "*";
            } else {
                texto += " ";
            }
        }
        texto += "\n";
    }
        document.getElementById("resultado6").textContent = texto;
        document.getElementById("resultado6").style.display = "block";
    }
}

function desenhar7() {
    let altura = 5;
    let resultado = "";

    for (let i = 1; i <= altura; i++) {
        let espacos = " ".repeat(altura - i);
        let asteriscos = "*".repeat(2 * i - 1);
        resultado += espacos + asteriscos + "\n";
    }

    document.getElementById("resultado7").textContent = resultado;
    document.getElementById("resultado7").style.display = "block";
}

function desenhar8() {
    let altura = 5;
    let resultado = "";

    for (let i = altura; i >= 1; i--) {
        let espacos = " ".repeat(altura - i);
        let asteriscos = "*".repeat(2 * i - 1);
        resultado += espacos + asteriscos + "\n";
    }

    document.getElementById("resultado8").textContent = resultado;
    document.getElementById("resultado8").style.display = "block";
}

function desenhar9() {
    let altura = 5;
    let resultado = "";

    for (let i = 1; i <= altura; i++) {
        let espacos = " ".repeat(altura - i);

        if (i === 1) {
            resultado += espacos + "*\n";
        } 
        else if (i === altura) {
            resultado += "*".repeat(2 * altura - 1) + "\n";
        } 
        else {
            let meio = " ".repeat(2 * i - 3);
            resultado += espacos + "*" + meio + "*\n";
        }
    }

    document.getElementById("resultado9").textContent = resultado;
    document.getElementById("resultado9").style.display = "block";
}

function desenhar10() {
    let texto = "";
    const n = 9; // número máximo de asteriscos na linha do meio (os valores das outras linhas baseiam-se neste)
    const meio = Math.floor(n / 2) + 1; 

    // parte superior (cresce)
    for (let linha = 1; linha <= meio; linha++) {
        // espaços
        for (let espaco = 1; espaco <= meio - linha; espaco++) {
            texto += " ";
        }
        // asteriscos
        for (let estrela = 1; estrela <= 2 * linha - 1; estrela++) {
            texto += "*";
        }
        texto += "\n";
    }

    // parte inferior (decresce)
    for (let linha = meio - 1; linha >= 1; linha--) {
        // espaços
        for (let espaco = 1; espaco <= meio - linha; espaco++) {
            texto += " ";
        }
        // asteriscos
        for (let estrela = 1; estrela <= 2 * linha - 1; estrela++) {
            texto += "*";
        }
        texto += "\n";
    }

    document.getElementById("resultado10").textContent = texto;
    document.getElementById("resultado10").style.display = "block";
}

function desenhar11() {
    let texto = "";
    const n = 9; // número máximo de asteriscos na linha do meio
    const meio = Math.floor(n / 2) + 1;

    // parte superior (cresce)
    for (let linha = 1; linha <= meio; linha++) {
        for (let espaco = 1; espaco <= meio - linha; espaco++) {
            texto += " ";
        }

        for (let coluna = 1; coluna <= 2 * linha - 1; coluna++) {
            if (coluna === 1 || coluna === 2 * linha - 1) {
                texto += "*";
            } else {
                texto += " ";
            }
        }
        texto += "\n";
    }

    // parte inferior (decresce)
    for (let linha = meio - 1; linha >= 1; linha--) {
        for (let espaco = 1; espaco <= meio - linha; espaco++) {
            texto += " ";
        }

        for (let coluna = 1; coluna <= 2 * linha - 1; coluna++) {
            if (coluna === 1 || coluna === 2 * linha - 1) {
                texto += "*";
            } else {
                texto += " ";
            }
        }
        texto += "\n";
    }

    document.getElementById("resultado11").textContent = texto;
    document.getElementById("resultado11").style.display = "block";
}

function desenhar12() {
    let texto = "";
    const n = 9; // largura máxima da ampulheta
    const meio = Math.floor(n / 2) + 1;

    // parte superior (decresce)
    for (let linha = 0; linha < meio; linha++) {
        // espaços à esquerda
        for (let espaco = 0; espaco < linha; espaco++) {
            texto += " ";
        }
        // asteriscos
        for (let estrela = 0; estrela < n - 2 * linha; estrela++) {
            texto += "*";
        }
        texto += "\n";
    }

    // parte inferior (cresce)
    for (let linha = meio - 2; linha >= 0; linha--) {
        // espaços à esquerda
        for (let espaco = 0; espaco < linha; espaco++) {
            texto += " ";
        }
        // asteriscos
        for (let estrela = 0; estrela < n - 2 * linha; estrela++) {
            texto += "*";
        }
        texto += "\n";
    }

    document.getElementById("resultado12").textContent = texto;
    document.getElementById("resultado12").style.display = "block";
}

function desenhar13() {
    let texto = "";
    const n = 9; // altura do diamante
    const meio = Math.floor(n / 2) + 1;

    // parte superior (cresce)
    for (let linha = 1; linha <= meio; linha++) {
        for (let estrela = 1; estrela <= linha; estrela++) {
            texto += "*";
        }
        texto += "\n";
    }

    // parte inferior (decresce)
    for (let linha = meio - 1; linha >= 1; linha--) {
        for (let estrela = 1; estrela <= linha; estrela++) {
            texto += "*";
        }
        texto += "\n";
    }

    document.getElementById("resultado13").textContent = texto;
    document.getElementById("resultado13").style.display = "block";
}

function desenhar14() {
    let texto = "";
    const n = 9; // altura do diamante
    const meio = Math.floor(n / 2) + 1;

    // parte superior (cresce)
    for (let linha = 1; linha <= meio; linha++) {
        // espaços à esquerda
        for (let espaco = 1; espaco <= meio - linha; espaco++) {
            texto += " ";
        }
        // asteriscos
        for (let estrela = 1; estrela <= linha; estrela++) {
            texto += "*";
        }
        texto += "\n";
    }

    // parte inferior (decresce)
    for (let linha = meio - 1; linha >= 1; linha--) {
        // espaços à esquerda
        for (let espaco = 1; espaco <= meio - linha; espaco++) {
            texto += " ";
        }
        // asteriscos
        for (let estrela = 1; estrela <= linha; estrela++) {
            texto += "*";
        }
        texto += "\n";
    }

    document.getElementById("resultado14").textContent = texto;
    document.getElementById("resultado14").style.display = "block";
}

function desenhar15() {
    let texto = "";

    // linha 1
    texto += " ***   ***\n";

    // linha 2
    texto += "***** *****\n";

    // linha 3 
    texto += "***********\n";

    // linhas do triângulo invertido
    let largura = 9; // começa a decrescer de 9 asteriscos (linha 4)
    let espacos = 1;

    while (largura > 0) {
        texto += " ".repeat(espacos) + "*".repeat(largura) + "\n";
        largura -= 2;
        espacos++;
    }

    document.getElementById("resultado15").textContent = texto;
    document.getElementById("resultado15").style.display = "block";
}

//---------------ÁRVORE DE NATAL ----------------

const arvorespawn = document.getElementById("arvorespawn");
const linhas = 20;
const bolas = ["red", "blue", "yellow"];
const troncoAltura = 4; 
const troncoLargura = 7;

let arvoreSpan = []; 
let intervaloAlternado = null;
let intervaloPisca = null;

// cria árvore simétrica
function criarArvore() {
    arvorespawn.innerHTML = "";
    arvoreSpan = [];

    for (let i = 1; i <= linhas; i++) {
        const linhaDiv = document.createElement("div");
        linhaDiv.style.textAlign = "center";

        for (let j = 1; j <= i * 2 - 1; j++) {
            const span = document.createElement("span");
            span.style.color = "green"; // inicial tudo verde
            span.textContent = "*";
            linhaDiv.appendChild(span);
            arvoreSpan.push(span);
        }

        arvorespawn.appendChild(linhaDiv);
    }

    // tronco
    for (let t = 0; t < troncoAltura; t++) {
        const linhaTronco = document.createElement("div");
        linhaTronco.style.textAlign = "center";

        for (let j = 0; j < troncoLargura; j++) {
            const span = document.createElement("span");
            span.style.color = "brown";
            span.textContent = "*";
            linhaTronco.appendChild(span);
        }

        arvorespawn.appendChild(linhaTronco);
    }
}

// modo desligado: tudo verde
function desligarArvore() {
    clearInterval(intervaloAlternado);
    clearInterval(intervaloPisca);
    clearInterval(intervaloLuzes)
    arvoreSpan.forEach(span => span.style.color = "green");
}

// modo ligado: cores fixas aleatórias
function ligarArvore() {
    clearInterval(intervaloAlternado);
    clearInterval(intervaloPisca);

    arvoreSpan.forEach(span => {
        if (Math.random() < 0.1) {
            span.style.color = bolas[Math.floor(Math.random() * bolas.length)];
        } else {
            span.style.color = "green";
        }
    });
}

// modo alternado: cada bola muda de cor ao longo do tempo
function mudarAlternado() {
    clearInterval(intervaloAlternado);
    clearInterval(intervaloPisca);

    intervaloPisca = setInterval(() => {
        arvoreSpan.forEach(span => {
            if (Math.random() < 0.1) {
                span.style.color = bolas[Math.floor(Math.random() * bolas.length)];
            } else {
                span.style.color = "green";
            }
        });
    }, 1000);
}

let intervaloLuzes = null;

function mudarPisca() {
    clearInterval(intervaloLuzes); // limpa qualquer intervalo anterior

    // Inicializa: todos verdes
    arvoreSpan.forEach(span => {
        span.dataset.bola = Math.random() < 0.1 ? "true" : "false"; // 10% de chance de ser bola
        span.style.color = "green";
    });

    let aceso = false;

    intervaloLuzes = setInterval(() => {
        aceso = !aceso; // alterna entre aceso e apagado

        arvoreSpan.forEach(span => {
            if (span.dataset.bola === "true") {
                span.style.color = aceso ? bolas[Math.floor(Math.random() * bolas.length)] : "green";
            } else {
                span.style.color = "green"; // asteriscos normais permanecem verdes
            }
        });
    }, 800); // muda a cada 0.8 segundos
}

// gerar árvore automaticamente ao carregar a página (se quiseres só por botão, remove esta linha)
document.addEventListener("DOMContentLoaded", () => {
    criarArvore();
});

