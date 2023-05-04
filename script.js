var addItem = document.getElementsByClassName("buynow");

for(let i = 0; i < addItem.length; i++) {
    addItem[i].addEventListener('click', addToCart)
}

function addToCart(event){
   let btn = event.target
   let btn_parent = btn.parentElement
   let btn_grandparent = btn.parentElement.parentElement
   let itemName = btn_parent.children[1].innerText
   let itemPrice =  btn_parent.children[2].innerText
   let itemImage = btn_grandparent.children[0].src

   let itemContainer = document.createElement('tr')
   itemContainer.innerHTML = `<td><p>Shoe: ${itemName}  ${itemPrice}</p></td>`
   console.log(itemName)
}