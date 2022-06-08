function sum(){
let a = +document.getElementById('a').value;
let b = +document.getElementById('b').value;
let c = +document.getElementById('c').value;
if (a === 0) {
  if (b === 0) {
    if (c === 0) { document.getElementById('result').innerHTML = "phương trình vô số nghiệm"}
    else { document.getElementById('result').innerHTML = "phương trình vô nghiệm"}}
  else { document.getElementById('result').innerHTML = "phương trình có nghiệm duy nhất là:" +(-c/b)}
} else {
  let delta = Math.pow(b,2) - (4*a*c);
  if (delta > 0) {
    let x1 = (-b+Math.sqrt(delta))/(2*a);
    let x2 = (-b-Math.sqrt(delta))/(2*a);
    document.getElementById('result').innerHTML="nghiệm thứ nhất x1=" + x1 + "nghiệm thứ hai x2=" + x2}
  else if (delta === 0){
    let x = -b/(2*a);
    document.getElementById('result').innerHTML="phương trình có nghiệm kép x1= x2=" +x}
  else {
    document.getElementById('result').innerHTML="phương trình vô nghiệm"}
}
}
