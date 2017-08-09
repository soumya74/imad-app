
var list='';
var nameList = [];
var nameInput = document.getElementById("name");
var submit_btn = document.getElementById("submit_btn");
var ul = document.getElementById("ulNameList");

submit_btn.onclick = function(){
    var nameValue = nameInput.value;
    //nameList.push(nameValue);
    nameList=["name1", "name2", "name3"];
    
    for(var i=0;i<nameList.length; i++)
    {
        list+="<li>"+nameList[i]+"</li>";
    }
    ul.innerHTML = list;
};


