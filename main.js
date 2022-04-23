const inputElement = document.getElementById("input-text");
const listElements = document.getElementById("list-elements"); 



inputElement.addEventListener("keydown", function(e){
    if (e.key === "Enter") {
        if(inputElement.value !=""){
            AddElementList(inputElement.value)
            inputElement.value = "";
        }
    }
})


const AddElementList = (data) =>{
    const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(data))
    li.style.borderColor = randomColor
    listElements.appendChild(li)
}