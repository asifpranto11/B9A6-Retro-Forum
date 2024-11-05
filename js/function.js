const allReviewBtn =document.getElementsByClassName('all-review-btn')


   let count =0;
function handleSelect(){
    //console.log('rew')
    count =count+1;
    const cartCount =document.getElementById('cart-count')
    setInnerText("cart-count",count)
    const cartReview = document.getElementById('cart-review')
    const tittleName = cartReview.childNodes[1].innerText;
    const totalView = cartReview.childNodes[3].childNodes[3].innerText;
    
    const selectedContainer =document.getElementById('selected-container')
    const divFour =document.createElement('div')
    divFour.innerHTML =`
     <div id="cart-review" class="flex gap-10">
                            <h2 class="">I cant load Dynamic</h2>
                            <div class="flex gap-3 items-center">
                              <p><i class="fa-regular fa-eye"></i></p>
                                 <p>sorry</p>
                            </div>
                           
                          </div>
    `
    selectedContainer.appendChild(divFour)
}

   
   



//const li =document.createElement('li')
//const h2= document.createElement('h2');
//h2.innerText =tittleName;
//const p =document.createElement('p');
//p.innerText =totalView;
//li.appendChild(h2)
//li.appendChild(p)
//selectedContainer.appendChild(li)





loadAllPost()

handleSelect()
function setInnerText(id,value){
    document.getElementById(id).innerText =value;
}

const handleBySearch =() =>{
    
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    if(searchText){
        loadAllPost(searchText)
    }
    else{
        alert("Please enter a valid category name")
    }
    
    
   
}




