
//Armazenar e Exibir o nome da empresa
const nomeDaEmpresa = "Omma"
console.log(nomeDaEmpresa)
console.log("--------------")

//Array para lista de receitas e objeto
let receitas = [
    {
        id: 01,
        titulo: "Risoto de Abóbora",
        dificuldade: "moderada",
        ingredientes: ["Abóbora", "Cebola média", "Alho", "Arroz Arboóreo", "Queijo Parmesão", "Pimenta"],
        instrucoesDePreparo: ["Leve ao fogo três xícaras (chá) de água. Quando iniciar fervura, dissolva os tabletes de caldo e mantenha-os em fogo baixo, enquanto prepara o risoto."],
        vegana: false,
        link: "https://www.youtube.com/watch?v=Y_5DLsgE5xU"

    },

    {
        id: 02,
        titulo: "Bolo de Banana",
        dificuldade: "simples",
        ingredientes: ["Banana", "Fermento", "Leite", "Ovos", "Farinha"],
        instrucoesDePreparo: ["Bata no liquidificador os ovos, o açúcar, o óleo e o leite.Bata no liquidificador os ovos, o açúcar, o óleo e o leite.Adicione por último o fermento e bata na velocidade mínima do liquidificador."],
        vegana: false,
        link: "https://www.youtube.com/watch?v=Y_5DLsgE5xU",
    },


]

//Funçao para cadastro de receitas, utilizando o push
function cadastrarReceita(receitas, id, titulo, dificuldade, ingredientes, instrucoesDePreparo, vegana) {

    const novaReceita = {

        id: id,
        titulo: titulo,
        dificuldade: dificuldade,
        ingredientes: ingredientes,
        instrucoesDePreparo: instrucoesDePreparo,
        vegana: vegana,

    }

    receitas.push(novaReceita)

}

//Funcao para exibir as receitas no console
function exibirReceitas(receitas) {
    receitas.forEach(receita => {
        console.log("TODAS AS RECEITAS")
        console.log("Titulo da Receita: " + receita.titulo)
        console.log("Ingredientes da Receita: " + receita.ingredientes.join(", ")) // O Comando Join uni os elementos de um array em uma só linha
        console.log("Vegana?: " + (receita.vegana ? "Sim" : "Não")) // Operador ternário que avalia a propriedade vegana do objeto receita
        console.log("--------------")

    });
}

//Deletando uma receita por id
function deletarReceita(receitas, id) {
    const index = receitas.findIndex(receita => receita.id === id)

    if (index === -1) {
        console.log("Receita não enconntrada!")
    }

    receitas.splice(index, 1)
    console.log("Receita Deletada com sucesso!")

}


//exibindo receitas atualizadas
exibirReceitas(receitas)
console.log("**********************************************************")

//cadastrando uma nova receita - 03 - Tabuele
cadastrarReceita(receitas, 03, "Tabule", "Simples", ["Trigulho", "Tomate", "Limão", "Hortelã", "Sal"], "Numa tigela coloque a cebola, o tomate, a salsinha e a hortelã picados. Tempere com o caldo de limão, o azeite, sal a gosto e misture bem. Acrescente o trigo hidratado e misture delicadamente com uma colher – o trigo é o último a entrar na salada para não ficar encharcado. Prove e ajuste o sal. Sirva a seguir com folhas de alface a gosto.", true)
console.log("**********************************************************")
//exibindo receitas atualizadas
exibirReceitas(receitas)
console.log("**********************************************************")
//deletando a receita 02 - Bolo de Banana
deletarReceita(receitas, 2)
console.log("**********************************************************")
//exibindo receitas atualizadas
exibirReceitas(receitas)
console.log("**********************************************************")
//exibindo receitas atualizadas
console.log(receitas)




