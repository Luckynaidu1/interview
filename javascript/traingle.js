let n=5;
string="";
var i,j;
for(i=0; i<n; i++){
    for (j=0; i<n;i=j++){
        string += "*";
    }
    string +="\n";
}
console.log(string);