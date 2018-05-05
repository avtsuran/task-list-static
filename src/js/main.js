function show(show, hide){
    document.getElementById(show).style.display = "block";
    document.getElementById(hide).style.display = "none";
}

function invokeDeleteButton(id) {
    if(document.getElementById(id).style.display == "block")
        document.getElementById(id).style.display = "none";
    else
        document.getElementById(id).style.display = "block";
}
