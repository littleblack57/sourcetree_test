var scissors = 1
var stone = 2
var paper = 3
var com
var user_choice
var user_num

function startgame2() {
    alert("666")
}

function startgame() {
    user_choice = document.getElementById("psp_choice").psp
    for (i = 0; i < user_choice.length; i++) {

        if (user_choice[i].checked) {
            user_num = user_choice[i].value

        }else{
            
        }

    }
    alert(user_num)

}

function startgame1() {
    user_choice = document.getElementById("psp_choice")
    for (i = 0; i <= user_choice.psp.length; i++) {
        if (user_choice.psp.value != undefined) {
            if (user_choice.psp.checked) {
                user_num = user_choice.psp.value
            }
        }
    }
    alert(user_num)
    if (user_num == "scissors") {
        user_num = 1
    } if (user_num == "stone") {
        user_num = 2
    } else {
        user_num = 3
    } {

    }

    if (user == com) {
        alert("平手")
    } else if ((user - com) < 0) {
        if ((user - com == -2)) {
            alert("恭喜!!你贏了!! 電腦出：" + com)
        } else {
            alert("可惜!!你輸了!!電腦出：" + com)
        }

    } else {
        if ((user - com) == 1) {
            alert("恭喜!!你贏了!!電腦出：" + com)
        } else {
            alert("可惜!!你輸了!!電腦出：" + com)
        }

    }
}

