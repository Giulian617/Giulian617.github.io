function drawTable(nrows, ncols)
{
    var container=document.getElementById("container");
    var table=document.createElement("table");
    table.id="table";
    for(let i=0; i<nrows; i++)
    {
        var row=document.createElement("tr");
        for(let j=0; j<ncols; j++)
        {
            var cell=document.createElement("td");
            cell.classList.add("r"+i);
            cell.classList.add("c"+j);
            cell.style.border="1px solid gray";
            cell.style.color="gray";
            cell.style.width="30px";
            cell.style.height="30px";
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
    container.appendChild(table);
}

window.onload=function () 
{
    let color=JSON.parse(localStorage.getItem("color3"))||"#000";
    document.getElementsByTagName("html")[0].style.backgroundColor=color;
    drawTable(30,30);

    var button=document.getElementById("change_background_color");
    button.onclick=function()
    {
        var html=document.getElementsByTagName("html")[0];
        var randomColor=Math.floor(Math.random()*16777215).toString(16);
        html.style.backgroundColor="#"+randomColor;
        localStorage.setItem("color3",JSON.stringify("#"+randomColor));
    }


    button=document.getElementById("clear_screen");
    button.onclick=function()
    {
        document.getElementById("table").remove();
        var container=document.getElementById("container");
        var paragraph=document.createElement("p");
        paragraph.textContent="Haha, better right? Reload the page when you calm down so you can try this level again.";
        container.appendChild(paragraph);
    };

    button=document.getElementById("reset");
    button.onclick=function()
    {
        var html=document.getElementsByTagName("html")[0];
        alert("This is the code of the color from the last version of the page: "+getComputedStyle(html).backgroundColor+".");
        html.style.backgroundColor="#000";
        localStorage.setItem("color3",JSON.stringify("#000"));
    };
}