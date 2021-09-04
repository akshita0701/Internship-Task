var a = 1
highlight_row();

function add() {
    var name = document.getElementById('name').value;
    var fname = document.getElementById('fname').value;
    var mno = document.getElementById('mno').value;
    var acc = document.getElementById('accs').value;



    if ((name != '') && (fname != '') && (mno != '') && (acc != '')) {
        var table = document.getElementById('table');
        var row = table.insertRow(-1);
        var cell0 = row.insertCell(0);
        var cell1 = row.insertCell(1);
        var cell2 = row.insertCell(2);
        var cell3 = row.insertCell(3);
        var cell4 = row.insertCell(4);

        cell0.innerHTML = name;
        cell1.innerHTML = fname;
        cell2.innerHTML = mno;
        cell3.innerHTML = acc;
        cell4.innerHTML = '<button id="btn" onclick="deletee(this)">Delete</button>'

        document.getElementById('name').value = '';
        document.getElementById('fname').value = '';
        document.getElementById('mno').value = '';
        document.getElementById('acc').value = '';

    } else {
        alert('Enter the Correct Entries.!!')
    }
}


function deletee(y) {
    var i = y.parentNode.parentNode.rowIndex;
    document.getElementById('table').deleteRow(i);

}

function selectText() {
    var table = document.getElementById('table');
    for (var i = 0; i < table.rows.length; i++) {
        table.rows[i].onclick = function() {
            if (!this.hilite) {
                this.origColor = this.style.backgroundColor;
                this.origColo = this.style.color;
                this.style.backgroundColor = 'red';
                this.style.color = 'white';
                this.hilite = true;
            } else {
                this.style.backgroundColor = this.origColor;
                this.style.color = this.origColo;
                this.hilite = false;
            }
        }
    }
}