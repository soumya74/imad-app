
var submit_btn = document.getElementById("submit_btn");
var ul = document.getElementById("ulNameList");
var nameList = [];
submit_btn.onclick = function(){
    var list='';
    
    var nameInput = document.getElementById("name");
    var nameValue = nameInput.value;
    nameList.push(nameValue);
    
    for(var i=0;i<nameList.length; i++)
    {
        list+="<li>"+nameList[i]+"</li>";
    }
    ul.innerHTML = list;
};


