class interactiveListView{
    constructor(){
        let $ = document.getElementById.bind(document);
        this.listContainer = $('list-container');
        this.newItemInput = $('newItemInput');
        this.addItemBtn = $('addItemBtn');
        this.targetElement = null;
        
    }

    addListOfItems(handlerAddItem){
        this.addItemBtn.addEventListener('click', (event)=>{
            const text = this.newItemInput.value.trim();
            if(text){
                handlerAddItem(text);
            }
            this.clearInput();
            this.newItemInput.focus();
        });
    }

    clearInput(){
        this.newItemInput.value = "";
    }

    displayItem(item){
        this.listContainer.innerHTML = "";
        item.forEach((item)=>{
            
            const chagingBox = document.createElement("input");
            chagingBox.type = "checkbox";
            chagingBox.setAttribute("class", "checkboxItem col-1");

            const listItem = document.createElement("label");
            listItem.setAttribute("class", "unfinished col-11");
            listItem.textContent = item;

            this.listContainer.appendChild(chagingBox);
            this.listContainer.appendChild(listItem);
           
        })
    }

    checkedItem(){
        this.listContainer.addEventListener("change", (event)=>{
            const checkboxItem = event.target;
            if(checkboxItem.classList.contains("checkboxItem")){
                const listItem = checkboxItem.nextElementSibling;
                if(checkboxItem.checked){
                    listItem.classList.remove("unfinished");
                    listItem.classList.add("concluded");
                }else{
                    listItem.classList.remove("concluded");
                    listItem.classList.add("unfinished");
                }
            }
        });
    }
}




