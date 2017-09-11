var scissors = 1
var stone = 2
var paper = 3
var com
var user_choice
var user_num

function startgame2() {
    com = Math.floor(Math.random()*3+1)
    alert(com)
}

function startgame1() {
    user_choice = document.getElementById("psp_choice").psp
    for (i = 0; i < user_choice.length; i++) {

        if (user_choice[i].checked) {
            user_num = user_choice[i].value

        }else{
            
        }

    }
    alert(user_num)

}

function startgame() {
    user_choice = document.getElementById("psp_choice").psp
    com = Math.floor(Math.random()*3+1)
    for (i = 0; i < user_choice.length; i++) {
        
            if (user_choice[i].checked) {
                user_num = user_choice[i].value
            }else{

            }
            
    }
    
    
    if (user_num == "scissors") {
        user_num = 1
    }else if (user_num == "stone") {
        user_num = 2
    } else {
        user_num = 3
    } 



    if (user_num == com) {
        alert("平手")
    } else if ((user_num - com) < 0) {
        if ((user_num - com == -2)) {
            alert("恭喜!!你贏了!! 電腦出：" + com)
        } else {
            alert("可惜!!你輸了!!電腦出：" + com)
        }

    } else {
        if ((user_num - com) == 1) {
            alert("恭喜!!你贏了!!電腦出：" + com)
        } else {
            alert("可惜!!你輸了!!電腦出：" + com)
        }

    }
}

