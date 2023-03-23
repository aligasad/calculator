let screen = document.querySelector('.screen');
let buttons = document.querySelectorAll('.btn');
let clear = document.querySelector('.btn-clear');
let equal = document.querySelector('.btn-equal');

function abc(v){
    screen.value += v;
}

function xyz(p){
    screen.value = eval(screen.value);
}

function clr(){
    screen.value = "";
};

function back(){
    screen.value = screen.value.substr(0,screen.value.length-1)
};
function pow(exp=2){
    screen.value = screen.value**exp;
}
