//  Bad practices

const fetchData = (func) => {
  setTimeout(() => {
    func("Done");
  }, 1500);
};

const fetchData2 = () => {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve("Done");
    }, 1500);
  });
  return promise;
};

setTimeout(() => {
  console.log("Hi timer is Done!");
  /*fetchData((text) => {
    console.log(text);
  });*/
  fetchData2().then((t) => console.log(t));
}, 2000);

console.log("Die");

const callMe = async () => {
  console.log("Calling");
  const result = await new Promise((resolve) => {
    setTimeout(() => {
      resolve("Ok now Done!!!");
    }, 5000);
  });
  console.log(result);
};

// Promises Good Practice

callMe();
