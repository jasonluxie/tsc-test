interface User<Generic> {
  firstName: string;
  lastName: string;
  age: number;
  miscellaneous: Generic;
}

const jasonNumberGeneric: User<number> = {
  firstName: "jason",
  lastName: "xie",
  age: 28,
  miscellaneous: 5,
};

const jasonStringGeneric: User<string> = {
  firstName: "jason",
  lastName: "xie",
  age: 28,
  miscellaneous: "hello world",
};

const jasonArrayGeneric: User<boolean> = {
  firstName: "jason",
  lastName: "xie",
  age: 28,
  miscellaneous: true,
};

console.log(jasonNumberGeneric);
