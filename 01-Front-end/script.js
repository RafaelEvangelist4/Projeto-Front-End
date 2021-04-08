//Navegação por Tab
function initTabNav(){// function para isolar essa parte do código
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
}
initTabNav();

function initAccordion(){//Isolando esse bloco de código
  const accordionList = document.querySelectorAll(".js-accordion dt");
  const activeClass = "ativo";

  if(accordionList.length){
    accordionList[0].classList.add(activeClass);
    accordionList[0].nextElementSibling.classList.add(activeClass);

    function activeAccordion(){
    this.classList.toggle(activeClass);
    this.nextElementSibling.classList.toggle(activeClass);
    }
    accordionList.forEach((item)=>{
      item.addEventListener("click", activeAccordion);
    });
  }
}
initAccordion();

  const linksInternos = document.querySelectorAll(".js-menu a[href^='#']");

  function scrollToSection(event){
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);
    const topo = section.offsetTop;

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

linksInternos.forEach ((links)=>{
  links.addEventListener("click", scrollToSection);
});
function InitAnimaScroll (){
const sections = document.querySelectorAll(".js-scroll");
if(sections.length){
const windowMetade = window.innerHeight * 0.6;

function animaScroll (){
  sections.forEach((section)=>{
    const sectionTop = section.getBoundingClientRect().top;
    const seVisivel = (sectionTop - windowMetade) <0;
    if(seVisivel){
      section.classList.add("ativo");
    };
  });
};
animaScroll();

window.addEventListener("scroll", animaScroll);
};
};
InitAnimaScroll();