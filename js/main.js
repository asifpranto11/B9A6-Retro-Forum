const loadAllPost = async(searchText) =>{
    toggleLoadingSpinner(true);
  const res =await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts?category=${searchText}`);
  
  const data =await res.json();

 

  const allPostContainer =document.getElementById('allpost-container');
  allPostContainer.textContent =''
  const allPostReview =document.getElementById('allPost-review')
  
 
  data.posts.forEach((item) =>{
    //console.log(item)
    const div =document.createElement('div');
    div.innerHTML = `

     <div class=" bg-base-100 lg:w-full shadow-xl flex justify-center mb-44 p-2 lg:p-10">
                <div><img class="w-12" src="${item.image}" alt=""></div>
                <div class="space-y-5">
                    <div class="flex">
                        <p>${item.category}</p>
                        <p>Author:${item.author.name}</p>
                    </div>
                 <div>
                   <h2 class="card-title">${item.title}</h2>
                    <p>${item.description}</p>
                 </div>
                 <div class="flex gap-20">
                    <div class="flex gap-3 items-center">
                        <p><i class="fa-regular fa-message"></i></p>
                            <p>${item.comment_count}</p>
                      </div>
                    <div class="flex gap-3 items-center">
                        <p><i class="fa-regular fa-eye"></i></p>
                            <p>${item.view_count}</p>
                      </div>
                    <div class="flex gap-3 items-center">
                        <p><i class="fa-regular fa-clock"></i></p>
                            <p>${item.posted_time} min</p>
                            </div>
                     <button onclick="handleSelect()" class="btn all-review-btn"> <i class="fa-solid fa-message "></i></button>
                 </div>
                      </div>
                      
                 </div>
                
                </div>
                
              </div>


    `
   allPostContainer.appendChild(div)

   
  

   const divTwo =document.createElement('div')
   divTwo.innerHTML =`

    <div class="space-y-4 space-x-10 mt-44">
                <div class="flex gap-32 ml-10"><h2>Tittle</h2>
                    <h3>Mark as read  <span id="cart-count" class="bg-emerald-400 text-white">(0)</span></h3></div>
                <div class=" bg-base-100 w-96 shadow-xl p-10">
                    <div class="flex gap-10">
                      <h2 class="">10 Kids Unaware of Their <br> Halloween Costume</h2>
                      <div class="flex gap-3 items-center">
                        <p><i class="fa-regular fa-eye"></i></p>
                            <p>1569</p>
                      </div>
                     
                    </div>
                  </div>
            </div>


   `
   
  // allPostReview.appendChild(divTwo)
  
  });
  toggleLoadingSpinner(false);
}


const latestPosts =async ()=>{
   const res =await fetch('https://openapi.programming-hero.com/api/retro-forum/latest-posts');
   const data =await res.json();
   const allLatesTPosts =document.getElementById('latestpost-container')
   data.forEach((item)=>{
    //console.log(item)
    const divThree =document.createElement('div');
    divThree.innerHTML = `
      <div id="latest-posts" class="card bg-base-100 w-96 lg:w-96 md:w-80 shadow-xl">
                <figure>
                  <img
                    src="${item.cover_image}"
                    alt="Shoes" />
                </figure>
                <div class="space-y-6 p-5">
                    <div class="flex gap-4">
                        <p><i class="fa-regular fa-calendar"></i></p>
                        <p>${item.author.posted_date}</p>
                    </div>
                  <h2 class="font-semibold text-lg">${item.title}</h2>
                  <p>${item.description}</p>
                 <div class="flex gap-2">
                    <img class="w-12" src="${item.profile_image}" alt="">
                    <div>
                        <h4>${item.author.name}</h4>
                        <p>${item.author.designation}</p>
                    </div>
                 </div>
                </div>
              </div>

    `
      allLatesTPosts.appendChild(divThree)
   })
}



loadAllPost()

latestPosts()




const toggleLoadingSpinner = (isLoading)=>{
    const loadingSpinner =document.getElementById('loading-spinner')
    if(isLoading){
        loadingSpinner.classList.remove('hidden')
    }
    else{
        loadingSpinner.classList.add('hidden')
    }

}

