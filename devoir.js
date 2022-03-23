
var ta1= ["1","2","3"],
    ta2= ["100","2","1","10"];

//function the common elements
function comelem(ta1,ta2){
    for(var i=0; i<ta1.length-1; i++){
       for(var j=0; j<ta2.length-1; j++){
           if(ta1[i]==ta2[j]){
               console.log(ta1[i]+ " est un element en commun ");
           }
       }
    }
}
console.log(comelem(ta1,ta2));

//
const objec = (obj, source) =>
  Object.keys(source).every(key => obj.hasOwnProperty(key) && obj[key] === source[key]);
console.log(objec({ nom:"ASSAM" , prenom: 'Amira', age: 20 }, { nom: "ASSAM", prenom: "Amira" })); 
console.log(objec({ nom:"ASSAM" , prenom: 'Amira' }, { age: 25, nom:"ASSAM" , prenom: 'Amira' }));
console.log(objec({ nom:"ASSAM" , prenom: 'Amira' }, { nom: "ASSAM", prenom: "Amira" })); 
