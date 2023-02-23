module.exports = function reverse (n) {
    n=String(n);
  let a='';
  for (let i=n.length-1; i>=0; i--){
    a=`${a}${n[i]}`;
    console.log(a);
  }
  return parseInt(a);
}
