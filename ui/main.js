console.log('Loaded!');

var list='';
var nameList = [];
var nameInput = document.GetElementbyId("name");
var submit_btn = document.GetElementbyId("submit_btn");
var ul = document.GetElementbyId("ulNameList");

submit_btn.onclick = function(){
    var nameValue = nameInput.value;
    nameList.push(nameValue);
    
    for(var i=0;i<nameList.length; i++)
    {
        list+="<li>"+nameList[i]+"</li>";
    }
    ul.innerHTML(list);
};


