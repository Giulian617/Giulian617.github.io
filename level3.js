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
            cell.style.textAlign="center";
            cell.style.border="1px solid gray";
            cell.style.color="dimgray";
            cell.style.backgroundColor="dimgray";
            cell.style.width="30px";
            cell.style.height="30px";
            cell.style.fontWeight="bold";
            var new_div=document.createElement("div");
            new_div.style.display="none";
            cell.appendChild(new_div);
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
    container.appendChild(table);
}

function change_style(row,col)
{
    var cell=document.querySelector(".r"+row+".c"+col);
    cell.style.color="blue";
    cell.style.backgroundColor="#F8F8FF";
    if(cell.innerHTML=="2")
        cell.style.color="green";
    else if(cell.innerHTML=="3")
        cell.style.color="red";
    else if(cell.innerHTML=="4")
        cell.style.color="darkblue";
    else if(cell.innerHTML=="5")
        cell.style.color="darkred";
}

function initialState()
{
}

function add_numbers(row,col,value)
{
    var cell=document.querySelector(".r"+row+".c"+col);
    var div=cell.firstChild;
    div.innerHTML=value.toString();
    cell.appendChild(div);
}

function addNumbers(){}
function add_bomb_emoji(row,col)
{
    var cell=document.querySelector(".r"+row+".c"+col);
    var div=cell.firstChild;
    div.innerHTML="💣";
    cell.appendChild(div);
}
function addBombs(){}

function change_pixel(event)
{
    var pos=event.target.classList;
    var row=pos[0].substring(1);
    var col=pos[1].substring(1);
    var div=event.target.firstChild;
    div.style.display="";
    event.target.style.backgroundColor="#F8F8FF";
    div.style.color="blue";
    if(div.innerHTML=="2")
        div.style.color="green";
    else if(div.innerHTML=="3")
        div.style.color="red";
    else if(div.innerHTML=="4")
        div.style.color="darkblue";
    else if(div.innerHTML=="5")
        div.style.color="darkred";
}

window.onload=function () 
{
    let color=JSON.parse(localStorage.getItem("color3"))||"#000";
    document.getElementsByTagName("html")[0].style.backgroundColor=color;
    drawTable(30,30);
    //initialState();
    //addNumbers();
    //addBombs();

    var table=document.getElementById("table");
    table.onclick=change_pixel;
    table.addEventListener("contextmenu",(event) => {
        if(event.target!=event.currentTarget)
        {
            event.preventDefault();
            event.stopPropagation();
            var cell=event.target;
            if(cell.innerHTML=="🚩")
            {
                cell.innerHTML="";
                cell.style.backgroundColor="dimgray";
            }
            else if(cell.style.backgroundColor=="dimgray")
            {
                cell.innerHTML="🚩";
                cell.style.backgroundColor="#F8F8FF";
            }
        }
    });

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