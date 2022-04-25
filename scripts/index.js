// Store the wallet amount to your local storage with key "amount"

let sum;
if(JSON.parse(localStorage.getItem("amount")==null))
{
    sum=0;
}
else
{
    sum=JSON.parse(localStorage.getItem("amount"));
}

document.querySelector("#wallet").innerText=sum;

document.querySelector("#add_to_wallet").addEventListener("click",addToWallet);

function addToWallet()
{
    var amount = document.querySelector("#amount").value;
    sum=sum+Number(amount);

    localStorage.setItem("amount",JSON.stringify(sum));
    document.querySelector("#wallet").innerText=sum;
}




