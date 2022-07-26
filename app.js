const arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
const Arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
let cnt = 0;

function increment() {
    cnt++;
    console.log(cnt);
    release()
    change_table(2);
    change_table(10);
    //change_table(16);
}

function decrement() {
    if (cnt > 0) {
        cnt--;
        console.log(cnt);
        release();
        change_table(2);
        change_table(10);
        //change_table(16);
    }
} 

function make_table(base, id) {
    var table = document.getElementById(id);
    for (var i = 0; i < 10-base; i++) {
        var tr = document.createElement('tr');
        var td = document.createElement('td');
        td.innerHTML = '　';
        td.colSpan = 8;
        tr.appendChild(td);
        table.appendChild(tr);
    }
    for (var i = 0; i < base; i++) {
        var tr = document.createElement('tr');
        for (var j = 0; j < 8; j++) {
            var td = document.createElement('td');
            td.setAttribute('id', String(base) + '_' + String(8-j-1) + '_' + arr[base-i-1]);
            td.innerHTML = Arr[base-i-1];
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
}


function change_table(base) {
    let conv = Array.from(cnt.toString(base));
    for (var i = 0; i < conv.length; i++) {
        check(String(base) + '_' + String(conv.length-i-1) + '_' + conv[i]);
    }
}

function check(id) {
    document.getElementById(id).style.backgroundColor = '#3f3f3f';
    document.getElementById(id).style.color = '#ffffff';
}

function un_check(id) {
    document.getElementById(id).style.backgroundColor = '#ffffff';
    document.getElementById(id).style.color = '#3f3f3f';
}

function release() {
    for (var i = 0; i < 2; i++) {
        for (var j = 0; j < 8; j++) {
            un_check('2_' + String(j) + '_' + arr[i]);
        }
    }
    for (var i = 0; i < 10; i++) {
        for (var j = 0; j < 8; j++) {
            un_check('10_' + String(j) + '_' + arr[i]);
        }
    }
    /*
    for (var i = 0; i < 16; i++) {
        for (var j = 0; j < 8; j++) {
            un_check('16_' + String(j) + '_' + arr[i]);
        }
    }
    */
}

make_table(2, 'table2');
make_table(10, 'table10');
//make_table(16, 'table16');

check('2_0_0');
check('10_0_0');
//check('16_0_0');