// SOLICTA O NÚMERO TOTAL DE ALUNOS
let numeroEstudantes = parseInt(prompt("Digite o número total de estudantes na turma:"));

// VARIÁVEIS PARA ARMAZENAR AS NOTAS
let somaNotas = 0;
let maiorNota = Number.MIN_SAFE_INTEGER;
let menorNota = Number.MAX_SAFE_INTEGER;

// COLETA AS NOTAS
let contador = 1;
while (contador <= numeroEstudantes) {
    const nota = parseFloat(prompt("Digite a nota do aluno " + contador + ":"));
    
    // ATUALIZA A SOMA DAS NOTAS
    somaNotas += nota;
    
    // VERIFICA A MAIOR E A MENOR NOTA OBTIDA
    if (nota > maiorNota) {
        maiorNota = nota;
    }
    if (nota < menorNota) {
        menorNota = nota;
    }
    
    contador++;
}

// CALCULA A MÉDIA DA TURMA
let mediaTurma = somaNotas / numeroEstudantes;

// EXIBE OS RESULTADOS
console.log("Média da turma: " + mediaTurma.toFixed(2));
console.log("Maior nota: " + maiorNota);
console.log("Menor nota: " + menorNota);
