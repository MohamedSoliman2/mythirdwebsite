/*$s=[1,3,5];
function sayed(elem){
    return elem+elem;

}
my=$s.map(function(ele,index,arr){
    return ele*ele;
});
console.table(my);*/
/*$s=[1,-2,3,-9,8];
$z=$s.map(function(elem){
    return elem=-1 * elem;
})
console.table( $z);
console.log($z.join(" /"));*/

/*$frien=["ahmed","asd","kl","io","axd"];
$num=[2,5,4,3,8,5,6,8];
$z=$num.filter(function (element){
    return element%2==0;} )
console.table($z);*/
/*s=["ahmed","sayed","ali","amany","ahlamerr"];
$a=s.reduce(function(acc, cur){
return acc.length >cur.length ?acc:cur;
});
console.log($a);

$er=["e","l","z","e","@","r","@","o"];
$q=$er.filter(function(ele)  {
    return ele !="@";
  
}).reduce(function(ele,cur){return ele + cur });
console.log($q);
*/


/*
pro=1;



ignore="elze344riye3err2";
$er=ignore.split("").filter(function(ele) {return !isNaN(ele)}).map(function(ele){
    return pro= ele*pro;
});
$er=$er.pop();
console.log($er);*/
/*zo=[];
z=ignore.split(" ").map(function(el)
{if(typeof (el) ==String){ zo.push(el);}
return zo;})
console.table( z);
console.log(z.join(" "));
el='9';
console.log(typeof (el));*/

/*$z="hosaem";
$a=90;
$asss='{"name":"ahmed","age":26}';
$as=JSON.parse($asss);
console.log(typeof $as);
console.log($as);
$as['name']=$z;
$as['age']=$a;
$xs=JSON.stringify($as);
console.log(typeof $xs);
console.log($xs);*/
/*console.log(1);
console.log(2);
setTimeout(function(){
console.log('kllll');
},3000);
console.log(3);
console.log(4);*/
/*$s="mohamed";
$as=20;
$za="php";
$ad='zefta';
$av=true;
$z='{"name":"ahmed","age":26,"skills":["html","css","js"],"address":{"eg":"cairo","germany":"mionesh","italia":"roma"},"aviloble":"fulse","at":null}';
$a=JSON.parse($z);
$a['name']=$s;
$a['age']=$as;
$a['skills'][3]=$za;
$a['address']['eg']=$ad;
$a['aviloble']=$av;
console.log($a);
$q=JSON.stringify($a);
console.log($q);*/
/*$wer=document.querySelector('#rt');
$wer.onclick=function(){
$req= new XMLHttpRequest();
$req.open("Get","mo.json");
$req.send();
$req.onreadystatechange=function(){
    if(this.readyState==4 && this.status==200){
        $jadate=JSON.parse(this.responseText);
        for(plop in $jadate){
            console.log($jadate['address']);
            $x=document.createElement('p');
            $x.setAttribute('id',$jadate['address']);
            $w=document.createTextNode($jadate['address']);
            $x.appendChild($w);
            $x.style.cssText="color:white;font-size:30px";
            document.body.appendChild($x);
        }
    }
}
}*/
/*$peo=new Promise((resolve, reject) => {
    $arr=['asss','add','lol','lod'];
    if($arr.length==4){
        resolve($arr);
    }else{
        reject('error');
    }
}).then((er) =>
{
er.length=3;
console.log(er)
return er;
}).then((er)=>{
    for(i=0;i<er.length;i++){
if(er[i][0]=="a"){
    $z=[];
    $z.push(er[i]);
}
return $z;
}
}).then((er)=>{
    console.log(er);
})*/
/*$req=new XMLHttpRequest();
console.log($req);*/

/*function ser (er){
$req= new XMLHttpRequest();
$req.open("Get",er);
$req.send();
$req.onreadystatechange=function(){
    if(this.readyState==4 && this.status==200){
        $jadate=JSON.parse(this.responseText);}
    }*/
/*$we=new Promise((resolve, reject) => {
$req=new XMLHttpRequest();
$req.open('Get',er);
$req.send();
/*$we=new Promise((resolve, reject) => {*/
/*$req.onload=function(){
    if($req.status==200 && $req.readyState==4){
        resolve($req.responseText);
    }else{
        reject('url is not ok');
    }
}
})
/*return $we;*/
/*}
ser('mo.json')/*.this((reqa)=>{
    $as=JSON.parse(reqa);
    console.log($as)
    return $as;
}
)*/


/*fetch('mo.json').then((er)=>{
    $z=er.json();
    console.log($z);
    return $z;
}).then((rt)=>{
    console.log(rt['address']);
})*/
/*$as=new Promise((resolve, reject) => {
   $s=[];
    if($s.length>0){
        resolve ('saaaaaa');
    }else{
        reject('noooooooooo');
    }
});
$as.then((value) => {
console.log(value);    
}).catch((err) => {
 console.log(err);   
}).finally((er)=>{console.log('hwllwlee')});*/
/*async function adel(){
    $e=[];
    if($e.length>0){
        return 'saaaaaa';
    }else{
        return'noooooooooo';
    }
};
adel().then((value) => {
    console.log(value);    
    }).catch((err) => {
     console.log(err);   
    }).finally((er)=>{console.log('hwllwlee')});*/
   /* z=new Promise((resolve, reject) => {
        setTimeout(()=>{resolve('hjkl/...jjj')},3000);
    });
    x=new Promise((resolve, reject) => {
        setTimeout(()=>{reject('hjklloop')},2000);
    });
    a=new Promise((resolve, reject) => {
        setTimeout(()=>{resolve('hjkkjjl')},1000);
    });
Promise.race([z,x,a]).then((r)=>{console.log(r)}).catch((w)=>{console.log(w)});*/
/*
fetch('mo.json').then((er)=>{
    $a=er.json();
    return $a;
}).then((e)=>{
    console.log(e['1']);
});*/
$ss=fetch('mo.json').then((er)=>{
    $z=er.json();
    console.log($z);
    return $z;
}).then((rt)=>{
    console.log(rt['1']);
});