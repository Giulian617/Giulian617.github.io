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
    document.querySelector(".r"+0+".c"+3).innerHTML="1";
    document.querySelector(".r"+0+".c"+9).innerHTML="1";
    document.querySelector(".r"+1+".c"+3).innerHTML="2";
    document.querySelector(".r"+1+".c"+9).innerHTML="1";
    document.querySelector(".r"+2+".c"+3).innerHTML="1";
    document.querySelector(".r"+2+".c"+6).innerHTML="1";
    document.querySelector(".r"+2+".c"+7).innerHTML="1";
    document.querySelector(".r"+2+".c"+8).innerHTML="2";
    document.querySelector(".r"+2+".c"+9).innerHTML="1";
    document.querySelector(".r"+3+".c"+3).innerHTML="2";
    document.querySelector(".r"+3+".c"+4).innerHTML="1";
    document.querySelector(".r"+3+".c"+5).innerHTML="1";
    document.querySelector(".r"+3+".c"+6).innerHTML="1";
    change_style(0,3);
    change_style(0,4);
    change_style(0,5);
    change_style(0,6);
    change_style(0,7);
    change_style(0,8);
    change_style(0,9);
    change_style(1,3);
    change_style(1,4);
    change_style(1,5);
    change_style(1,6);
    change_style(1,7);
    change_style(1,8);
    change_style(1,9);
    change_style(2,3);
    change_style(2,4);
    change_style(2,5);
    change_style(2,6);
    change_style(2,7);
    change_style(2,8);
    change_style(2,9);
    change_style(3,3);
    change_style(3,4);
    change_style(3,5);
    change_style(3,6);
}

function add_numbers(row,col,value)
{
    var cell=document.querySelector(".r"+row+".c"+col);
    var new_div=document.createElement("div");
    new_div.style.display="none";
    new_div.innerHTML=value.toString();
    cell.appendChild(new_div);
}

function addNumbers()
{
    ///row 0
    add_numbers(0,0,1);
    add_numbers(0,11,2);
    add_numbers(0,12,1);
    ///row 1
    add_numbers(1,0,1);
    add_numbers(1,1,3);
    add_numbers(1,2,3);
    add_numbers(1,10,2);
    add_numbers(1,12,2);
    add_numbers(1,13,2);
    add_numbers(1,14,2);
    ///row 2
    add_numbers(2,0,1);
    add_numbers(2,1,2);
    add_numbers(2,10,2);
    add_numbers(2,11,1);
    add_numbers(2,12,2);
    ///row 3
    add_numbers(3,1,2);
    add_numbers(3,2,1);
    add_numbers(3,3,2);
    add_numbers(3,4,1);
    add_numbers(3,5,1);
    add_numbers(3,6,1);
    add_numbers(3,8,2);
    add_numbers(3,10,1);
    add_numbers(3,12,1);
    add_numbers(3,13,2);
    add_numbers(3,14,2);
    ///row 4
    add_numbers(4,0,2);
    add_numbers(4,1,3);
    add_numbers(4,2,2);
    add_numbers(4,3,2);
    add_numbers(4,5,1);
    add_numbers(4,6,2);
    add_numbers(4,7,3);
    add_numbers(4,8,4);
    add_numbers(4,9,3);
    add_numbers(4,10,2);
    add_numbers(4,11,2);
    add_numbers(4,12,1);
    add_numbers(4,13,1);
    ///row 5
    add_numbers(5,0,2);
    add_numbers(5,3,2);
    add_numbers(5,4,1);
    add_numbers(5,5,1);
    add_numbers(5,6,1);
    add_numbers(5,9,3);
    add_numbers(5,11,3);
    add_numbers(5,13,2);
    add_numbers(5,14,1);
    ///row 6
    add_numbers(6,1,3);
    add_numbers(6,2,2);
    add_numbers(6,3,1);
    add_numbers(6,6,1);
    add_numbers(6,7,2);
    add_numbers(6,8,3);
    add_numbers(6,9,4);
    add_numbers(6,11,4);
    add_numbers(6,12,3);
    add_numbers(6,13,5);
    ///row 7
    add_numbers(7,0,1);
    add_numbers(7,1,1);
    add_numbers(7,8,1);
    add_numbers(7,10,3);
    add_numbers(7,11,3);
    ///row 8
    add_numbers(8,0,1);
    add_numbers(8,1,1);
    add_numbers(8,4,1);
    add_numbers(8,5,1);
    add_numbers(8,6,1);
    add_numbers(8,8,1);
    add_numbers(8,9,1);
    add_numbers(8,10,2);
    add_numbers(8,12,4);
    ///row 9
    add_numbers(9,1,1);
    add_numbers(9,2,1);
    add_numbers(9,3,1);
    add_numbers(9,4,2);
    add_numbers(9,6,1);
    add_numbers(9,8,1);
    add_numbers(9,9,1);
    add_numbers(9,10,2);
    add_numbers(9,11,1);
    add_numbers(9,12,2);
    add_numbers(9,13,2);
    add_numbers(9,14,2);
    ///row 10
    add_numbers(10,0,1);
    add_numbers(10,1,2);
    add_numbers(10,2,2);
    add_numbers(10,4,2);
    add_numbers(10,5,2);
    add_numbers(10,6,2);
    add_numbers(10,7,1);
    add_numbers(10,8,1);
    add_numbers(10,10,2);
    add_numbers(10,11,2);
    add_numbers(10,12,1);
    add_numbers(10,13,1);
    ///row 11
    add_numbers(11,0,1);
    add_numbers(11,1,3);
    add_numbers(11,3,3);
    add_numbers(11,4,1);
    add_numbers(11,5,1);
    add_numbers(11,7,2);
    add_numbers(11,8,2);
    add_numbers(11,9,3);
    add_numbers(11,11,2);
    add_numbers(11,13,2);
    add_numbers(11,14,1);
    ///row 12
    add_numbers(12,0,2);
    add_numbers(12,3,4);
    add_numbers(12,4,2);
    add_numbers(12,5,2);
    add_numbers(12,6,2);
    add_numbers(12,7,4);
    add_numbers(12,9,4);
    add_numbers(12,10,2);
    add_numbers(12,11,2);
    add_numbers(12,12,3);
    add_numbers(12,14,2);
    ///row 13
    add_numbers(13,0,2);
    add_numbers(13,2,4);
    add_numbers(13,5,1);
    add_numbers(13,6,1);
    add_numbers(13,10,2);
    add_numbers(13,11,1);
    add_numbers(13,12,4);
    add_numbers(13,14,4);
    ///row 14 (finally the last one <3)
    add_numbers(14,0,1);
    add_numbers(14,1,1);
    add_numbers(14,2,2);
    add_numbers(14,3,2);
    add_numbers(14,4,2);
    add_numbers(14,5,1);
    add_numbers(14,6,1);
    add_numbers(14,7,2);
    add_numbers(14,8,4);
    add_numbers(14,10,2);
    add_numbers(14,11,1);
}
function add_bomb_emoji(row,col)
{
    var cell=document.querySelector(".r"+row+".c"+col);
    var new_div=document.createElement("div");
    new_div.style.display="none";
    new_div.innerHTML="💣";
    cell.appendChild(new_div);
}
function addBombs()
{
    ///row 0
    add_bomb_emoji(0,1);
    add_bomb_emoji(0,2);
    add_bomb_emoji(0,10);
    ///row 1
    add_bomb_emoji(1,11);
    ///row 2
    add_bomb_emoji(2,2);
    add_bomb_emoji(2,13);
    add_bomb_emoji(2,14);
    ///row 3
    add_bomb_emoji(3,0);
    add_bomb_emoji(3,7);
    add_bomb_emoji(3,9);
    ///row 4
    add_bomb_emoji(4,4);
    ///row 5
    add_bomb_emoji(5,1);
    add_bomb_emoji(5,2);
    add_bomb_emoji(5,7);
    add_bomb_emoji(5,8);
    add_bomb_emoji(5,10);
    add_bomb_emoji(5,12);
    ///row 6
    add_bomb_emoji(6,0);
    add_bomb_emoji(6,10);
    add_bomb_emoji(6,14);
    ///row 7
    add_bomb_emoji(7,9);
    add_bomb_emoji(7,12);
    add_bomb_emoji(7,13);
    add_bomb_emoji(7,14);
    ///row 8
    add_bomb_emoji(8,11);
    add_bomb_emoji(8,13);
    add_bomb_emoji(8,14);
    ///row 9
    add_bomb_emoji(9,0);
    add_bomb_emoji(9,5);
    ///row 10
    add_bomb_emoji(10,3);
    add_bomb_emoji(10,9);
    ///row 11
    add_bomb_emoji(11,2);
    add_bomb_emoji(11,6);
    add_bomb_emoji(11,10);
    add_bomb_emoji(11,12);
    ///row 12
    add_bomb_emoji(12,1);
    add_bomb_emoji(12,2);
    add_bomb_emoji(12,8);
    add_bomb_emoji(12,13);
    ///row 13
    add_bomb_emoji(13,1);
    add_bomb_emoji(13,3);
    add_bomb_emoji(13,4);
    add_bomb_emoji(13,7);
    add_bomb_emoji(13,8);
    add_bomb_emoji(13,9);
    add_bomb_emoji(13,13);
    ///row 14
    add_bomb_emoji(14,9);
    add_bomb_emoji(14,12);
    add_bomb_emoji(14,13);
    add_bomb_emoji(14,14);
}

window.onload=function () 
{
    let color=JSON.parse(localStorage.getItem("color1"))||"#000";
    document.getElementsByTagName("html")[0].style.backgroundColor=color;
    drawTable(15,15);
    initialState();
    addNumbers();
    addBombs();
    var button=document.getElementById("change_background_color");
    button.onclick=function()
    {
        var html=document.getElementsByTagName("html")[0];
        var randomColor=Math.floor(Math.random()*16777215).toString(16);
        html.style.backgroundColor="#"+randomColor;
        localStorage.setItem("color1",JSON.stringify("#"+randomColor));
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
        localStorage.setItem("color1",JSON.stringify("#000"));
    };
}