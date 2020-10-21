const myFunc1 = (valueString) => {
  console.log("myFunc1");
  return (valueString += "-myFunc1");
};
const myFunc2 = (valueString) => {
  console.log("myFunc2");
  return (valueString += "-myFunc2");
};
const myFunc3 = (valueString) => {
  console.log("myFunc3");
  return (valueString += "-myFunc3");
};
const myFunc4 = (valueString) => {
  console.log("myFunc4");
  return (valueString += "-myFunc4");
};

const double = (n) => n * 2;
const increment = (n) => n + 1;

// 'START=>' |> myFunc1 |> myFunc2 |> myFunc3 |> myFunc4;
5 |> double |> double |> increment |> double; // 42
