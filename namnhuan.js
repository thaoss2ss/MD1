let year = parseInt(prompt("Nhập số năm"));
let isLeapYear = false;

let chiacho4 = year % 4 === 0;
if (chiacho4) {
  let chiacho100 = year % 100 === 0;
  if (chiacho100) {
    let chiacho400 = year % 400 === 0;
    if (chiacho400) {
      isLeapYear = true;
    }
  } else {
    isLeapYear = true;
  }
}

if (isLeapYear) {
  alert(year + " Là Năm Nhuận");
} else {
  alert(year + " Không là Năm Nhuận");
}
