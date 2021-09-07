const ham = document.querySelector(".ham")
const drop = document.querySelector(".drop")

ham.onclick = ()=>{
    drop.classList.toggle("drip")
}
drop.onclick = ()=>{
    drop.classList.remove("drip")
}