let arrowDown = document.getElementById('arrowDown')
let category = document.querySelector('.category')
let isOpen = false;
async function getData(){
    await fetch('https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline').then((response) => {
        return response.json()
     }).then((data) => {
        console.log(data)
        data.forEach(products => {
            if(products.price<5){
            document.querySelector('.section-quote').innerHTML+=`
            <span class="quote-items">    
                <p id="name">${products.name}</p>
                <h5>${products.price}$</h5>
                
            </span>`
        }
        })
       work() 
     }) 
}

getData()

function work(){
    $('.section-quote').slick({
    dots:true
});
}


function openStore(){
    if(!isOpen){
     arrowDown.style.transform = "rotate(180deg)"
     category.style.display = 'flex'
     category.style.transition = ".4s"
     isOpen=true
    }else{
        arrowDown.style.transform = "rotate(360deg)"
        category.style.display = "none"
        isOpen=false
    }

}


const aside = document.getElementById("aside");
function openAside() {
   aside.classList.add("active")
   console.log('emaa')
   console.log("document.getElementById(\"aside\").classList.add(\"active\")")
}

function closeAside(){
   aside.classList.remove("active");
   console.log("iy")
}



function toggleCollapse(e){
    if(e.target.classList[e.target.classList.length-1] === "active"){
    e.target.nextElementSibling.style.height=0;
        e.target.classList.remove("active");
    }
    else {
        e.target.classList.add("active");
        e.target.nextElementSibling.style.height = e.target.nextElementSibling.scrollHeight + "px";
        console.dir(e.target.nextElementSibling.scrollHeight);
     }


}