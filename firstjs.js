
function print20things() {
    var p = document.getElementById("insert_here")
    var div = document.createElement("div")
    div.id = "puthere"
    p.insertAdjacentElement("afterend", div)

    for (i = 1; i <= 2; i++) {
        var p = document.createElement("p")
        var br = document.createElement("br")
        var text = document.createTextNode("This number is " + i)
        p.appendChild(text)
        p.id = "manythings"
        br.id = "br"
        div.appendChild(p)
        p.appendChild(br)
    }
}

function clear20things() {



    for (i = 1; i <= 20; i++) {

        var p = document.getElementById("manythings")
        var br = document.getElementById("br")
        p.remove()
        br.remove()
    }

}


function misslist() {

    var childlist = document.getElementById("top").childNodes
    var childlist_len = document.getElementById("top").childElementCount
    for (i = 1; i < childlist_len * 2; i += 2) {
        childlist[i].style.display = 'none'
    }

}

function showlist() {

    var childlist = document.getElementById("top").childNodes
    var childlist_len = document.getElementById("top").childElementCount
    for (i = 1; i < childlist_len * 2; i += 2) {
        childlist[i].style.display = ''
    }
    

}

