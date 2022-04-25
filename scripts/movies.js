// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page

let id;

let sum = JSON.parse(localStorage.getItem("amount"));

document.querySelector("#wallet").innerText=sum;

function show()
{
    const value = document.querySelector("#search").value;
    const url = `https://www.omdbapi.com/?apikey=c431316b&s=${value}`;

    fetch(url).then(function(res){
        return res.json();
    }).then(function(res){
        append_movie(res.Search);
    });
}


function append_movie(data)
{
    document.querySelector("#movies").innerHTML=null;
    data.map(function(el){
        var div = document.createElement("div");
        div.setAttribute("class","div");
    
        var image = document.createElement("img");
        image.src = el.Poster;
        image.setAttribute("class","image");

        var title = document.createElement("p");
        title.innerText = el.Title;
        title.setAttribute("class","title");

        var button = document.createElement("button");
        button.setAttribute("class","book_now");
        button.innerText="book now";
        button.addEventListener("click",function(){
            goCheckout(el);
        });

        div.append(image,title,button);
        document.querySelector("#movies").append(div);
    })
}


function debounce(show,wait)
{
    if(id)
    {
        clearTimeout(id);
    }

    id = setTimeout(function(){
        show();
    },wait);
}

function goCheckout(el)
{
    window.location.href="checkout.html";
    localStorage.setItem("movie",JSON.stringify(el));
    // window.location.href="checkout.html;"
}
