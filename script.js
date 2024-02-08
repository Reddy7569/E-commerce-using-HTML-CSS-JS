const menuEl = document.getElementById("menu");
const closeEl = document.getElementById("closed");
const navEl = document.getElementById("nav")

menuEl.addEventListener('click',function(){
    navEl.classList.add('selected')
})
closeEl.addEventListener('click',function(){
    navEl.classList.remove('selected')
})

const imgEl = document.getElementById('mainImg')
const smImgEl = document.getElementsByClassName('small_img')
smImgEl[0].onclick = function(){
    imgEl.src = smImgEl[0].src
}
smImgEl[1].onclick = function(){
    imgEl.src = smImgEl[1].src
}
smImgEl[2].onclick = function(){
    imgEl.src = smImgEl[2].src
}
smImgEl[3].onclick = function(){
    imgEl.src = smImgEl[3].src
}
