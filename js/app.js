
document.addEventListener("DOMContentLoaded",(e)=>{ //function main
    const element = document.querySelector(".container-faq .active");
    const elt = document.querySelectorAll(".questions");


    let section = element.children[1].querySelector("p");
    let sectionHeight = section.offsetHeight +20;

    element.children[1].style.height=sectionHeight +"px";
    for (let el of elt) {
        el.addEventListener("click", function(){
            const active = document.querySelector(".container-faq .active");
            active.classList.remove("active");
            active.children[1].style.height=0;
            this.classList.add("active");
            let section = this.children[1].querySelector("p");
            let sectionHeight = section.offsetHeight +20;
        
            this.children[1].style.height=sectionHeight +"px";
            
        })
    
    }
















})
