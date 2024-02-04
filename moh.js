fetch('mo.json').then((er)=>{
    $z=er.json();
    console.log($z);
    return $z;
});
