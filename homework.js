var i , v ;
var tab=new Array();
tab[0]=-3,
tab[1]=8,
tab[2]=7,
tab[3]=6,
tab[5]=5,
tab[6]=-4,
tab[7]=3,
tab[8]=2,
tab[9]=1;
var long=tab.length-1;
for(var i=0;i<long ;i++)
{
   if(tab[i]>tab[i+1])
   {
       v=tab[i+1];
       tab[i+1]=tab[i];
       tab[i]=v;
   }
}
for(var i=0;i<long ;i++){
   console.log(tab[i]); 
}
