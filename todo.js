var add = document.getElementById('add');
var removeall = document.getElementById('removeAll');
var list = document.getElementById('list');
var receipt = document.getElementById('order_recpt');

//remove all 
removeall.onclick = function () {
    list.innerHTML = '';
};

//adding a new list element 
add.onclick = function (){
    addlis(list);
//    document.getElementById('userinput').value = '';
}

function addlis(targetUl) {
    var inputText = document.getElementById('userinput').value;
    var inputQuan = document.getElementById('userNo').value;
    var li = document.createElement('li');
    var textNode = document.createTextNode(inputText + ' - ' + inputQuan);
    var removerButton = document.createElement('button');
    
    if(inputText !== '' && inputQuan !==''){
        removerButton.className = 'btn btn-xs btn-danger';
        removerButton.innerHTML = '&times;';
        removerButton.setAttribute('onclick', 'removeMe(this)')
        
        li.appendChild(textNode);
        li.appendChild(removerButton);
        targetUl.appendChild(li);
    }
    else{
        alert("Please enter a ITEM");
    }
    
}  

function removeMe(item) {
    var p = item.parentElement;
    p.parentElement.removeChild(p);
}

