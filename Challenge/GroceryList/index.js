const alert=document.querySelector('.alerts');
const form=document.querySelector('.grocery-form');
const list=document.querySelector('.grocery-list');
const clearBtn=document.querySelector('.clear-btn');
const grocery=document.getElementById('grocerys');
const submitBtn=document.querySelector('.btn');
const container=document.querySelector('.grocery-container');
let editElement;
let editFlag=false;
let editID="";
function displayAlert(value,text){
    alert.classList.add(value);
    alert.innerHTML=text;
    setTimeout(function(){
     alert.classList.remove(value);   
    },2000);
}
clearBtn.addEventListener('click',clearItems);
form.addEventListener('submit',function(e){
    e.preventDefault();
    // console.log(e);
    let value=grocery.value;
    const id =new Date().getTime().toString();
    console.log(id);
    if(value !== "" && !editFlag){
        const element=document.createElement("article");
        const attr=document.createAttribute("data-id");
        attr.value=id;
        element.setAttributeNode(attr);
        element.classList.add('grocery-item');
        element.innerHTML= `<p class="title">${value}</p>
        <div class="btn-container">
            <button type="button" class="edit-btn">
                <i class="fas fa-edit"></i>
            </button>
            <button type="button" class="delete-btn">
                <i class="fas fa-trash"></i>
            </button>
        </div>`;
        const deleteBtn=element.querySelector('.delete-btn');
        deleteBtn.addEventListener("click",deleteItem);
        const editBtn=element.querySelector('.edit-btn');
        editBtn.addEventListener("click",editItem);
        list.appendChild(element);
        displayAlert('success','item added to the list');
        container.classList.add('show-container');
        setDefault();
    }
    else if(value !=="" && editFlag){
        editElement.innerHTML=value;
        displayAlert("success","item Changed");
        setDefault();
    }
    else{
        displayAlert('danger','please enter the value');
    }
})
function deleteItem(e){
    const element=e.currentTarget.parentElement.parentElement;
    const id =element.dataset.id;
    console.log(element);
    console.log(id);
    list.removeChild(element);
    if(list.children.length===0){
        container.classList.remove('show-container');
    }
    displayAlert("danger",'item removed');
    setDefault();
}
function editItem(e){
    // console.log('edited');
    const element=e.currentTarget.parentElement.parentElement;
    console.log(element);
    editElement = e.currentTarget.parentElement.previousElementSibling;
    console.log(editElement);
    grocery.value=editElement.innerHTML;
    editFlag=true;
    editID=element.dataset.id;
    submitBtn.textContent="edit";
}
function  clearItems(){
    const item=document.querySelectorAll(".grocery-item");
    if(item.length>0){
        item.forEach(function(items){
            list.removeChild(items);
        })
    }
    container.classList.remove("show-container");
    displayAlert("success","empty list");
    setDefault();
}
function setDefault(){
    editFlag=false;
    grocery.value="";
    editID="";
    submitBtn.textContent='submit';
}
