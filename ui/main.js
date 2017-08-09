
var list='';
var nameList = [];
var submit_btn = document.getElementById("submit_btn");
var ul = document.getElementById("ulNameList");

submit_btn.onclick = function(){
    var nameInput = document.getElementById("name");
    var nameValue = nameInput.value;
    nameList.push(nameValue);
    
    for(var i=0;i<nameList.length; i++)
    {
        list+="<li>"+nameList[i]+"</li>";
    }
    ul.innerHTML = list;
};


