function notAvailable(){
    const links = document.querySelectorAll("a.unfinished");
    links.forEach(
        (element, key) =>{
            element.outerHTML = 'Not available';
        }
    )
}

const allLinks = document.querySelectorAll("a.unfinished");

allLinks.forEach(
    (element, key) =>{
        element.addEventListener("onClick", (e) =>{
            notAvailable();
        });
    }
)