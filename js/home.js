var projectlistobject = [
    {
        name: 'Javascript one'
    },
    {
        name: 'Javascript two'
    }
];

showprojects('projectlist_1');

function showprojects(listid) {

    projectlistobject.forEach(function (value, index) {
        console.log(value);
        var template = '<div class="project-card">' + value.name +
            '<ul>' +
            '<li>task one</li>' +
            '<li>task two</li>' +
            '</ul>' +
            '</div>';
        if(listid){
            document.getElementById(listid).innerHTML += template;
        }
    else{
        document.getElementById('projectlist').innerHTML += template;
    }
    });
}

function togglemenu() {
    var togglevariable = document.getElementsByClassName('menu')[0];
    // togglevariable.style.display='none';

    if (togglevariable.style.display == 'none') {
        togglevariable.style.display = '';
    } else {
        togglevariable.style.display = 'none'
    }
}

function removecard() {
    document.getElementById('projectlist').innerHTML = '';
}

var idname=1;
function addboard(id){
    idname++;
    var listid='projectlist_'+idname;
    console.log(listid);

    var templateblock='<section class="board-block">'+
    '<div>' +id.value+ '<button onclick="removecard('+listid+')">Remove card</button></div>'+
    '<div class="project-block" id='+listid+'>'+
    '</div>'+
'</section>';

document.getElementById('boardlist').innerHTML+=templateblock;
showprojects(listid);
document.getElementById('menulist').innerHTML+='<li onclick="loadmenu('+listid+')">'+ id.value +'</li>';
}

function loadmenu(element){
    console.log(element.id);
}
