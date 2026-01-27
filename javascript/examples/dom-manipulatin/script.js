// DOM Manipulation Example

const container = document.querySelector("#container");

    const content = document.createElement("div");
    content.classList.add("content");
    content.textContent = "This is the glorious text-content!";

container.appendChild(content);

    // a <p> with red text that says “Hey I’m red!”
    const redP = document.createElement("p");
    redP.classList.add("red-text");
    redP.style.color= "red";
    redP.textContent ="Hey I'm red!";

container.appendChild(redP);


    // an <h3> with blue text that says “I’m a blue h3!”
    const blueH3 = document.createElement("h3");
    blueH3.classList.add("blue-text");
    blueH3.style.color = "blue"; // adding style directly
    blueH3.textContent ="I'm a blue h3!";

container.appendChild(blueH3);



    // a <div> with a black border and pink background color with the following elements inside of it:
    const innerDiv = document.createElement ("div");
    innerDiv.style.cssText = "border: 1px solid black; background:pink;" ;


    // another <h1> that says “I’m in a div”
    const divH1 = document.createElement("h1");
        divH1.textContent = "I'm in a div" ;

    innerDiv.appendChild(divH1);


    // a <p> that says “ME TOO!”
    const divP = document.createElement("p");
        divP.textContent = "ME TOO!" ;

    innerDiv.appendChild(divP);

container.appendChild(innerDiv);

// Hint for this one: after creating the <div> with createElement, append the <h1> and <p> to it before adding it to the container.