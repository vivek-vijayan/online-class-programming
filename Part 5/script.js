function generate_element() {
  var input_data = document.getElementById("total-element").value;
  var output_div_tag = document.getElementById("output");

  let array_list = [];

  for (let i = 0; i < input_data; i++) {
    let random_number = Math.ceil(Math.random() * input_data);
    array_list.push(random_number);
  }

  // Creating a div elements for random number

  output_div_tag.innerHTML = "";
  array_list.forEach((element) => {
    const div = document.createElement("div");
    div.innerHTML = element;
    div.classList.add("box");
    div.style.height = element * 20.5 + "px";
    output_div_tag.append(div);
  });

  var i = 0;
  var j = 0;

  //for (var i = 0; i < array_list.length; i++) {
  // Last i elements are already in place
  //  for (var j = 0; j < array_list.length - i - 1; j++) {
  // Checking if the item at present iteration
  // is greater than the next iteration

}
