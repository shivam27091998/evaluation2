// The items should be stored in local storage with key :- “items”
// API :- https://grocery-mock-api.herokuapp.com/items
let count=0;
let addItem=JSON.parse(localStorage.getItem("items")) || [];
const url="https://grocery-mock-api.herokuapp.com/items";
fetch(url)
.then(function(res){
    return res.json();

})
.then(function(res){
    console.log(res.items.data)
    append(res.items.data)
})
.catch(function(err){
    console.log(err);
})

function append(data){
    let container=document.getElementById("items")
    data.map(function(el){
        let div=document.createElement("div");
        div.setAttribute("id","items");

        let img=document.createElement("img");
        img.src=el.image;

        let title=document.createElement("h3");
        title.innerText=el.title;

        let price=document.createElement("h4");

        let btn=document.createElement("button");
        btn.innerText="Add to cart";
        btn.setAttribute("id","add_to_cart");

        btn.addEventListener("click",function(){
            count++;
            addItem.push(el);
            localStorage.setItem("items",JSON.stringify(addItem));
            document.getElementById("item_count").innerText=count;

            
        })

        div.append(img,title,price,btn);
        container.append(div);



    })
}
