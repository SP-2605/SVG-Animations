const text = document.querySelectorAll("#logo path");

for(let i = 0; i<text.length; i++)
{
    console.log(text[i].getTotalLength());
}