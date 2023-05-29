function changePage(url) 
{
  window.open(url, "_self");
}

window.onload=function() 
{
    document.getElementById("form").addEventListener("submit", function(event) 
    {
        event.preventDefault();
        setTimeout(function() 
        {
          alert("Formularul a fost trimis cu succes!");
          changePage("file:///D:/FMI/Anul%20I/Semestrul%20II/TW/Proiect/index.html");
        }, 5000);
      });
}
