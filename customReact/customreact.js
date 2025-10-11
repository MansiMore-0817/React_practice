function customRender(reactElement, container) {
    /* const domElement = document.createElement(reactElement.type); // create the element using the type property of reactElement
    // set the attributes of the element using the props property of reactElement
    domElement.innerHTML = reactElement.children; // set the innerHTML of the element using the children property of reactElement
    domElement.setAttribute('href', reactElement.props.href);
    domElement.setAttribute('target', reactElement.props.target);

    container.appendChild(domElement);*/ // append the element to the container

    const domElement = document.createElement(reactElement.type); // create the element using the type property of reactElement
    domElement.innerHTML = reactElement.children; // set the innerHTML of the element using the children property of reactElement
    for(const prop in reactElement.props) {
        if (prop === "children") continue; // skip the children property
        domElement.setAttribute(prop, reactElement.props[prop]); // set the attributes of the element using the props property of reactElement
    }
    container.appendChild(domElement); // append the element to the container
    
}


const reactElement = { 
    type: "a",
    props: {
        href: "https://www.google.com",
        target: "_blank",
    },
    children: "Click me to visit Google"
}

const mainContainer = document.querySelector("#root");


customRender(reactElement, mainContainer); // customRender is a function which will convert reactElement to html element and append it to mainContainer