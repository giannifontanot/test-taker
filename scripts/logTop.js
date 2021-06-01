
let gsContent = "";

function log(sContent) {
    gsContent += sContent + "</br>";
}

// Create log window
let divLog = document.createElement('div');
divLog.style = "overflow: auto; position:relative; color:green; background-color: black; border: 1px solid blue;display:inline-block; width:100%; height: 200px; font-size:24pt;";
divLog.id = 'divLog';
divLog.innerHTML = "this is a test";