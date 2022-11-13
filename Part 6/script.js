function showSampleData(data) {
  document.getElementById("testing").innerHTML = data;
}

let DataPromise = new Promise(function (myresolve, myreject) {
  let data = 2;

  if (data % 2 === 0) {
    myresolve("Yes, this is a even number");
  } else {
    myreject("No, this is an odd number");
  }
});

DataPromise.then(
  function (value) {
    showSampleData(value);
  },
  function (error) {
    showSampleData(error);
  }
);
