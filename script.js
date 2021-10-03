let clickCount = 0;

const handleCellClick = (event) => {
    if (event.target && event.target.innerHTML && event.target.innerHTML.length) {
        // already has something
    } else {
        // doesn't have circle or cross already
        (++clickCount)%2 === 0 ? event.target.innerHTML = 'X' : event.target.innerHTML = 'O';
        event.target.classList.add('not-allowed');
    }
}

const createRow = () =>{
    var row=document.createElement("div");
    row.style.cssText='display:flex;flex-direction:row;height:80px;width:240px;justify-content:center;';
    row.setAttribute("class","row");

    var cellOne=document.createElement("div");
    cellOne.style.cssText='display:flex;height:80px;width:80px;justify-content:center;align-items:center;';
    cellOne.setAttribute("class","cell");
    cellOne.onclick = handleCellClick;

    var cellTwo=document.createElement("div");
    cellTwo.style.cssText='display:flex;height:80px;width:80px;justify-content:center;align-items:center;';
    cellTwo.setAttribute("class","cell");
    cellTwo.onclick = handleCellClick;

    var cellThree=document.createElement("div");
    cellThree.style.cssText='display:flex;height:80px;width:80px;justify-content:center;align-items:center;';
    cellThree.setAttribute("class","cell");
    cellThree.onclick = handleCellClick;


    row.appendChild(cellOne);
    row.appendChild(cellTwo);
    row.appendChild(cellThree);

    return {
        row,
        cellOne,
        cellTwo,
        cellThree,
    }
}

    var box=document.createElement("div");
    box.style.cssText='display: flex;flex-direction: column;height: 100%;width: 100%;align-content: center;justify-content: center;align-items: center;';
    box.setAttribute("class","board");

    const firstRow = createRow().row;

    const secondRow = createRow().row;

    const thirdRow = createRow().row;
    
    box.appendChild(firstRow);
    box.appendChild(secondRow);
    box.appendChild(thirdRow);

document.body.appendChild(box);












