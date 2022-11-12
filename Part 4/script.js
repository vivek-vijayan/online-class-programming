data = [
  { name: "Vivek", class: 11 },
  { name: "Prisha", class: 10 },
  { name: "User", class: 7 },
];

function getData() {
  let table = document.getElementById("output-table");

  data.forEach((element) => {
    const tr = document.createElement("tr");
    const td1 = document.createElement("td");
    const td2 = document.createElement("td");

    td1.innerHTML = element.name;
    td2.innerHTML = element.class;

    tr.append(td1);
    tr.append(td2);

    table.append(tr);
  });
}
