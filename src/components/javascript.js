
let soma= 0;

function select_list_1(food) {
    let i= document.querySelector(".list-product-1 .select");
    if (i!==null){
        i.classList.remove("select");
    } else {
        soma= soma +1;
    }
    food.classList.toggle("select");

    if (soma == 3 ) {
        let j = document.querySelector(".finish");
        j.classList.add("finish-request");
    }
}


function select_list_2(drink) {
    let i= document.querySelector(".list-product-2 .select");
    if (i!==null){
        i.classList.remove("select");
    } else {
        soma= soma +1;
    }
    drink.classList.toggle("select");

    if (soma == 3 ) {
        let j = document.querySelector(".finish");
        j.classList.add("finish-request");
    }
}

function select_list_3(dessert) {
    let i= document.querySelector(".list-product-3 .select");
    if (i!==null){
        i.classList.remove("select");
    } else {
        soma= soma +1;
    }
    dessert.classList.toggle("select");

    if (soma == 3 ) {
        let j = document.querySelector(".finish");
        j.classList.add("finish-request");
    }
}

function finish_request () {
    let solicitacion = document.querySelector(".finish-request");
    if (solicitacion !== null){
        let nav = document.querySelector(".tela");
        nav.classList.add("show");
    }
}

function close_1(){
    let cancel = document.querySelector(".show");
    cancel.classList.remove("show");
}