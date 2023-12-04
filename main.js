//variables
var form = document.getElementById('add-frm');
var ntitle = document.getElementById('n-title');
var nbody = document.getElementById('n-body');

//Events
form.addEventListener('submit', addNote);
//Functions

// Add Note
function addNote(e) {
    e.preventDefault();
    
    // validate input
    if(ntitle.value == '' || nbody.value == ''){
        alert("Please fill all fields!");
    }else{
        // Create a new note record

        // New tr
        var tr = document.createElement('tr');
        tr.className = 'item';

        // New td for title and body
        var td1 = document.createElement('td');
        td1.appendChild(document.createTextNode(ntitle.value));
        var span = document.createElement('span');
        span.className = 'note-body';
        span.appendChild(document.createTextNode(nbody.value));
        td1.appendChild(span);

        console.log(td1);
    }
}