var myobj={
    i:10,
    b:() => console.log(this.i,this),
    c:function(){
        console.log(this.i,this);
    }
}
myobj.b();
myobj.c();
