// console.log(dados);

function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    console.log(section); // Loga a seção no console para fins de depuração
  
    // Inicializa uma string vazia para armazenar os resultados HTML
    let resultados = "";
  
    // Itera sobre cada dado da lista de dados
    for (let dado of dados) {
      // Constrói o HTML para cada item, incluindo título, descrição e link
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
  
    // Atribui o HTML gerado à seção de resultados
    section.innerHTML = resultados;
  }

