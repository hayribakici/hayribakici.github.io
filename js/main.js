var canvas = document.getElementById("canvas");

function init() {
    // making elements draggable
    for (var pawn of document.getElementsByClassName("pawn")) {
        dragElement(pawn);
    }
    drawBoard();
    fillTable();
}

function drawBoard() {
    //Box width
    var bw = 545;
    //Box height
    var bh = 545;
    //Padding
    var p = 10;

    var context = canvas.getContext("2d");
    for (var x = 0; x <= bw; x += 170) {
        context.moveTo(0.5 + x + p, p);
        context.lineTo(0.5 + x + p, bh + p);
    }

    for (var x = 0; x <= bh; x += 170) {
        context.moveTo(p, 0.5 + x + p);
        context.lineTo(bw + p, 0.5 + x + p);
    }
    context.strokeStyle = "black";
    context.stroke();
}

function fillTable() {
    var colors = ['r', 'y', 'b', 'o'];
    var table = document.querySelector('table');
    for (let i = 0; i < 20; i++) {
        let row = table.insertRow();
        for (let j = 0; j < 4; j++) {
            let cell = row.insertCell();
            let div = document.createElement("div");
            div.className = "circle" + " " + colors[j];
            div.onclick = function(e) {
                if (div.childElementCount == 0) {
                    let p = document.createElement("p");
                    p.innerText = "X";
                    p.className = "cross";
                    div.appendChild(p);
                } else {
                    div.removeChild(div.firstChild);
                }
            }
            cell.appendChild(div);
        }
    }
}
// 

function dragElement(elmnt) {
    var pos1 = 0,
        pos2 = 0,
        pos3 = 0,
        pos4 = 0;
    elmnt.onmousedown = dragMouseDown;

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;
    }
}