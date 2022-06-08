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

// document.body.addEventListener('click', (e) => {
//     const subList = document.querySelector('.header__lower__list');
//     subList.style.cssText = 'display: none;';
// });

// const buttonSubList = document.querySelector('.sub-games') 

// buttonSubList.addEventListener('click', (e) => {
//     const subList = document.querySelector('.header__lower__list');
//     subList.style.cssText = 'display: block;';
// });
