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

const jasonBooleanGeneric: User<boolean> = {
  firstName: "jason",
  lastName: "xie",
  age: 28,
  miscellaneous: true,
};

const jasonArrayGeneric: User<Array<number>> = {
    firstName: "jason",
    lastName: "xie",
    age: 28,
    miscellaneous: [1,2,3],
  };

console.log(jasonNumberGeneric);

//using or operator in case something does not exist or is undefined
const users: Array<User<number>> | undefined = []; //array of users with number generic, use or operator as it can be undefined if there are no users
const fetchedUser: User<string> | null = null; //fetched user from array, can be null if user does not exist

function numberCount(num:number): Array<number> {
    const result: Array<number> = []
    for (let i=0; i < num; i ++) {
        result.push(i)
    }
    return result
}

console.log(numberCount(5))