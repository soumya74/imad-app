console.log('Loaded!');

var list='';
var nameList = [];
console.log('Loaded 01!');
var nameInput = document.GetElementbyId("name");
var submit_btn = document.GetElementbyId("submit_btn");
var ul = document.GetElementbyId("ulNameList");

console.log('Loaded 01!');
submit_btn.onclick = function(){
    var nameValue = nameInput.value;
    //nameList.push(nameValue);
    nameList=["name1", "name2", "name3"];
    
    for(var i=0;i<nameList.length; i++)
    {
        list+="<li>"+nameList[i]+"</li>";
    }
    ul.innerHTML(list);
};


