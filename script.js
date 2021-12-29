//XMLHttp Request to get all data in console
var myData = new XMLHttpRequest();
myData.open(
  "GET",
  "https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json",
  true
);
myData.send();

// creating table element
var table = document.createElement("table");
document.body.append(table);
table.style.marginLeft="50px";
table.style.padding="50px";

var tr = document.createElement("tr");
table.append(tr);

var th1 = document.createElement("th");
th1.innerHTML = "Id";

var th2 = document.createElement("th");
th2.innerHTML = "Name";

var th3 = document.createElement("th");
th3.innerHTML = "Email";

tr.append(th1, th2, th3);

var data = [];
myData.onload = function () {
  data = JSON.parse(myData.response);
  console.log(data.length);
  renderPageData(1);
};

const renderPageData = (pageNo) => {
  const start = (pageNo - 1) * 10,
    end = start + 10; // 1 --->  start 0, end 10, 2 ---> start 10, end 20, 3 ---> start 20, end 30
  const pageData = data.slice(start, end);
  table.innerHTML = "";
  table.append(tr);
  pageData.forEach((userObj) => {
    const userRow = document.createElement("tr");
    var tdId = document.createElement("td");
    tdId.innerHTML = userObj.id;
    var tdName = document.createElement("td");
    tdName.innerHTML = userObj.name;
    var tdEmail = document.createElement("td");
    tdEmail.innerHTML = userObj.email;
    userRow.append(tdId, tdName, tdEmail);
    table.appendChild(userRow);
  });
};

//creating button element


var div = document.createElement("div");
document.body.append(div);
div.style.marginTop="50px";
div.style.marginLeft="150px";



//var btn = document.createElement("button");
//btn.innerText = "<<Previous";

var btn1 = document.createElement("button");
btn1.innerHTML = "1";
btn1.addEventListener("click", () => {
  renderPageData(1);
});

var btn2 = document.createElement("button");
btn2.innerHTML = "2";
btn2.addEventListener("click", () => {
  renderPageData(2);
});

var btn3 = document.createElement("button");
btn3.innerHTML = "3";
btn3.addEventListener("click", () => {
  renderPageData(3);
});

var btn4 = document.createElement("button");
btn4.innerHTML = "4";
btn4.addEventListener("click", () => {
  renderPageData(4);
});

var btn5 = document.createElement("button");
btn5.innerHTML = "5";
btn5.addEventListener("click", () => {
  renderPageData(5);
});

var btn6 = document.createElement("button");
btn6.innerHTML = "6";
btn6.addEventListener("click", () => {
  renderPageData(6);
});

var btn7 = document.createElement("button");
btn7.innerHTML = "7";
btn7.addEventListener("click", () => {
  renderPageData(7);
});

var btn8 = document.createElement("button");
btn8.innerHTML = "8";
btn8.addEventListener("click", () => {
  renderPageData(8);
});

var btn9 = document.createElement("button");
btn9.innerHTML = "9";
btn9.addEventListener("click", () => {
  renderPageData(9);
});

var btn10 = document.createElement("button");
btn10.innerHTML = "10";
btn10.addEventListener("click", () => {
  renderPageData(10);
});

//var btn11 = document.createElement("button");
//btn11.innerText = "Next>>";

div.append( btn1,btn2, btn3,btn4,btn5,btn6,btn7, btn8, btn9,btn10);
 