let Name =[];

function addName(){
    let arr = [];
    let inp = document.getElementById('naMe').value;
    
    if(inp == ''){
        alert('Please Fill out your name')
    }else{
        Name.push(arr);
        Name.sort();
        document.getElementById('textBox').innerHTML += inp +'<br>';
        document.getElementById('naMe').value = '';
    }
};


function searchName(){
    debugger;
    setTimeout(function(){
    let x = [];
    let y = document.getElementById('sName').value;

    Name.forEach((item) => {
        if(item.indexOf((y) !=-1)){
        x.push(item);
        }
    });
    document.getElementById('demo').innerHTML = x;
},0);

}