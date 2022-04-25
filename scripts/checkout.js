// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time
let sum = JSON.parse(localStorage.getItem("amount"));
// console.log(sum)

document.querySelector("#wallet").innerText=sum;

let movie = JSON.parse(localStorage.getItem("movie"));
// console.log(movie)
details(movie);

function details(movie)
{
    var title = document.createElement("h2");
    title.innerText = movie.Title;
    var image = document.createElement("img");
    image.src = movie.Poster;
    image.setAttribute("class","image");
    document.querySelector("#movie").append(title,image)
}


document.querySelector("#confirm").addEventListener("click",balance);
function balance()
{
    let sum = JSON.parse(localStorage.getItem("amount"));
    var sum1=sum;
    var seats = document.querySelector("#number_of_seats").value;
    var amount = seats*100;
    var final = sum - amount;
    // console.log(final,sum,amount)
    sum1=final;
    sum=final;
    console.log(sum1);
    if(final<0)
    {
        alert("Insufficient Balance!");
    }
    else
    {
        alert("Booking successful!");
        document.querySelector("#wallet").innerText=final;
        localStorage.setItem("amount",JSON.stringify(final));
    }
}