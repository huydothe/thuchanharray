let x = 0;
let array = Array();
function addelement(){
    array[x]=document.getElementById('text').value;
    x++;
    document.getElementById('result').value="";
}
function displayelement(){
    let e="";
    for (let i=0; i<=array.length; i++){
        e += 'Element ' + i + ' = ' + array[i] + '<br>';
    }document.getElementById('result').innerHTML=e;
}