//Navegação por Tab

const tabMenu = document.querySelectorAll(".js-tabmenu li");
const tabContent = document.querySelectorAll('.js-tabcontent section');


// verificação com IF para fins de manter a modificação no CSS
//Caso o browser não suporte javascript ou seja antigo
if( tabMenu.length && tabContent.length){
  tabContent[0].classList.add("ativo");
  //Loop para remover a class "ativo" do item que esta sendo clicado
  function activeTab (index){
    tabContent.forEach((section)=>{
      section.classList.remove("ativo");
    });
    tabContent[index].classList.add("ativo");
  }
  // Evento com loop que será ativado ao clicar
  tabMenu.forEach((itemMenu, index)=>{
    itemMenu.addEventListener("click", ()=>{
      activeTab(index);
    });
  });
};