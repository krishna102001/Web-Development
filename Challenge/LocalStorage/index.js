// alert("hello")
const submitBtn=document.getElementById("submit");

submitBtn.addEventListener("click",function(){
    const id = new Date().getTime().toString();
    const storeText=document.getElementById("store");
    add(id,storeText.value)
    clear();
    // add(storeText);
    display();
})
function add(id,store){
    window.localStorage.setItem(id,store);
}
function clear(){
    const storeText=document.getElementById("store");
    storeText.value="";
}