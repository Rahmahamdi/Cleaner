const croix = document.querySelectorAll('.visible-pannel img');
console.log(croix);
const el = document.querySelector(".questions croix");

croix.forEach(element => {
element.addEventListener('click', function(){
console.log(this.src);
if(this.src.includes('cross')){
this.src = '/asset/remove.svg';
}
else if (this.includes('remove')) {
this.src= '/asset/cross.svg'; 
}
})
} )
