const accordions = document.querySelectorAll('.AccordionItem');

for(item of accordions){
    item.addEventListener('click', function(){
        this.classList.toggle('active');
    })
}