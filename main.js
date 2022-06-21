menuListArray = ["Pizza Vegetariana",//adicionar mais itens
"Pizza de Calabresa", "Pizza Frango com Catupiry", "Pizza Italiana Original", "Pizza de Abacaxi" ];

function getMenu(){
var htmldata;
//Completar o código
}

function addItem(){
var htmldata;
var imgtags='<img id="im1" src="images/pizzaImg.png"/>'
var item=document.getElementById("addItem").value;
menuListArray.sort()
htmldata=""
for(var i=0;i<menuListArray.length;i++){
    htmldata=htmldata+imgtags+ menuListArray[i]+'<br>';
}
document.getElementById("displayMenu").innerHTML = htmldata;
//Completar o código

}

function addTop(){
var item=document.getElementById("addItem").value;
menuListArray.push(item);
addItem();
}