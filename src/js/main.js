function changeDisplayForTwoElements(show, hide){
    document.getElementById(show).style.display = "block";
    document.getElementById(hide).style.display = "none";
}

function showOrHideElement(id) {
    if(document.getElementById(id).style.display == "block")
        document.getElementById(id).style.display = "none";
    else
        document.getElementById(id).style.display = "block";
}

function deleteBoard(id) {
    document.getElementById("modal").style.display = "block";
    document.getElementById("delete-board-by-id").href = "/delete-board?id=" + id;
}

function taskListHead(show, hide, form, name){
    document.getElementById(show).style.display = "block";
    document.getElementById(hide).style.display = "none";
    document.getElementById(form).style.display = "none";
    document.getElementById(name).style.display = "block";
}