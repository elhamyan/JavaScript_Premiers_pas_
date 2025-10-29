// liste de competances
let codes =["C1","C2","C3","C1","C2","C3","C1","C3"];
//la competances a cherche
let code ="C1";
//compteur de la competances
let count =0;
// for pour calculer le nomber de fois de C1
for (let index = 0; index < codes.length; index++) {
    if(codes[index]===code){

       count++; 
    }

}  
console.log(code+ " " +count);   
