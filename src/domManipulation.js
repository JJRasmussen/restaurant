const addElement = (type, setClass, setId, appendElementTo, textInElement) => {
    let target = document.querySelector(appendElementTo);
    
    let newElement = document.createElement(type);
    newElement.setAttribute("class", setClass);
    newElement.setAttribute("id", setId);

    target.appendChild(newElement);

    let addText = document.querySelector("#" + setId)
    addText.textContent = textInElement;
};

export {addElement};

// domManip.addElement("div", "headline", "tavernName", "#content", "textInElement");