//shadowing
//blocked and global scoped
var a = 100;
let b = 100;
{
    var a = 10;//shadowing of variable a (gllobal)
    let b = 20; // blocked scoped
    const c = 30; // blocked scoped
    console.log(a);
    console.log(b);
    console.log(c);
}
console.log(a);    //  value of a will be 10 both a are same.(global)
//console.log(b);
//console.log(c);