
var submit_btn = document.getElementById("submit_btn");
var ul = document.getElementById("ulNameList");
var nameList = [];

submit_btn.onclick = function(){
    var list='';
    var request = new XMLHttpRequest();

    request.onreadystatechange() = function(){
      if(request.readyState===XMLHttp.DONE)
      {
          if(request.status===200)
          {
              var names = request.responseText;
              names= JSON.parsify(names);
              for(var i=0;i<names.length; i++)
              {
                  list+="<li>"+nameList[i]+"</li>";
              }
              ul.innerHTML = list;
          }
      }
    }
    
    var nameInput = document.getElementById("name");
    var nameValue = nameInput.value;
    request.open('GET','http://soumya74.imad.hasura-app.io/submit-name?name=' + nameValue);
    request.send(null);
};


