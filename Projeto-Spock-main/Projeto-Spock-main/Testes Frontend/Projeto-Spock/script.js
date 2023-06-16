const imagemPerfil = document.querySelector("#imagem-perfil");
const tituloPerfil = document.querySelector("#titulo-perfil");
const nomePerfil = document.querySelector("#nome-perfil");
const descricaoPerfil = document.querySelector("#descricao-perfil");


window.addEventListener("DOMContentLoaded", () => {
    fetchData();
    fetchData();
  });

  function fetchData() {
    fetch("https://api.github.com/users/AnaluzSantos")
      .then((response) => response.json())
      .then((data) => {
        imagemPerfil.setAttribute("src", data.avatar_url);
        tituloPerfil.innerHTML = data.company;
        nomePerfil.innerHTML = data.name;
        descricaoPerfil.innerHTML = data.bio;
      });
    }
    