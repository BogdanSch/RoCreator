const allLinks = document.querySelectorAll("button.unfinished");

allLinks.forEach(
    (element, key) =>{
        element.addEventListener("click", (e) =>{
            console.log(element);
            element.innerHTML = 'Not available';
            element.style.cssText = 'background-color: rgb(255, 0, 0); border-radius: 10px;'
        });
    }
);

$(document).ready(function(){
    $('.header__burger').click(function(event){
        $('.header__burger, .header__list').toggleClass('active');
        $('body').toggleClass('lock');
    });
});

