// console.log(dados);

function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    //console.log(section); // Loga a seção no console para fins de depuração
    
    let campoPesquisa = document.getElementById("campo-pesquisa").value
    //console.log(campo)
   
    if(campoPesquisa =="" || campoPesquisa == null || campoPesquisa == " "){
      section.innerHTML = "<p>nada foi encontrado..</p>";
      return; 
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados HTML
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tag = "";

    // Itera sobre cada dado da lista de dados
    for (let dado of dados) {
      // Constrói o HTML para cada item, incluindo título, descrição e link
      titulo = dado.titulo.toLocaleLowerCase();
      descricao = dado.descricao.toLocaleLowerCase();
      tag = dado.tag.toLocaleLowerCase();
      //verifica se o titulo incluido no campoPesquisa
     if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tag.includes(campoPesquisa)){
      // se sim cria im novo elemento
      resultados += `
      <div class="item-resultado">
        <h2><a href="#" target="_blank">${dado.titulo}</a></h2>
          <p class="descricao-meta">
          ${dado.descricao}
          </p>
      <a href="${dado.link}" target="_blank"> Mais informações sobre aqui </a>
      </div>
        `;
   }
    
    }
    if(!resultados){
      resultados = "<p>nada foi encontrado..</p>";
    }
  
    // Atribui o HTML gerado à seção de resultados
    section.innerHTML = resultados;
  }

