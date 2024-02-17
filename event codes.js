let container = document.querySelector(".container")
console.log(container)
document.addEventListener("keypress", (key) => {
    let eventKey, eventCode, event_keycode;

    console.log(key.key + "  "+key.code + "  "+key.keyCode)
    
    eventCode = key.code
    event_keycode = key.keyCode;
    eventKey = key.key == " "?"Space":key.key;

    /*
    they get detected automaticall but not in your case 
    else if (key.code == "Tab")
        eventKey = "Tab";
    else if(key.which == 8)
        eventKey = "BackSpace"; 
    else if(key.which == 17)
        eventKey = "Control"; 
    else if(key.which == 16)
        eventKey = "Shift";  
    */


    container.innerHTML = `<div class="key newKey">
    <span>eventKey</span>
    <span class="heading ">${eventKey}</span>
    </div>
    
    <div class="key newKey">
    <span>event_keyCode</span>
    <span class="heading">${event_keycode}</span>
    </div>

    <div class="key newKey">
    <span>eventCode</span>
    <span class="heading">${eventCode}</span>
    </div>
`
})