const data = {
  f01: {
    name: "Alice",
    age: 15,
    follows: ["f02", "f03", "f04"]
  },
  f02: {
    name: "Bob",
    age: 20,
    follows: ["f05", "f06"]
  },
  f03: {
    name: "Charlie",
    age: 35,
    follows: ["f01", "f04", "f06"]
  },
  f04: {
    name: "Debbie",
    age: 40,
    follows: ["f01", "f02", "f03", "f05", "f06"]
  },
  f05: {
    name: "Elizabeth",
    age: 45,
    follows: ["f04"]
  },
  f06: {
    name: "Finn",
    age: 25,
    follows: ["f05"]
  }
};

const biggestFollower = function(a) {  // function to find person who follows the most people
  let list = a;
  let bigFlw = [];
  let main = '';
  for (let person in list) {
    let ind = list[person];
    let flw = ind["follows"];
    if (flw.length > bigFlw.length) {
      bigFlw = flw;
      main = ind["name"];
    }
  }
  return main;
};

const mostPopular = function(b) { // return the person most popular
  let list = b;
  let count = 0;
  let arr = [];
  for (let perOne in list) {  // counts how long the object is
    count++;
  }
  for (let perTwo in list) {  // builds an array with all the follows
    let ind = list[perTwo];
    let flw = ind["follows"];
    for (let num of flw){
      arr.push(num);
    }
  }
  let bigPop = findPop(arr);  // sends in the array and gets back the f# to get the name of the popular person
  let objPop = list[bigPop];
  return objPop["name"];
}

const findPop = function(arrList) {
  let arrPop = [...new Set(arrList)];  //creates a new array without repeated elements
  let newArr = [];
  let mostPop = '';
  let bigNum = 0;
  for (let i = 0; i < arrPop.length; i++) {  // creates an array in an array, a clone of the arrPop with added 0 for counting
    newArr[i] = [ arrPop[i], 0];
  }
  for (let j = 0; j < arrList.length; j++) {  // look for elements and counts the repeated ones
    for (let k = 0; k < newArr.length; k++) {
      if (arrList[j] === newArr[k][0]) {
        newArr[k][1]++;
      }
    }
  }
  for (let m = 0; m < newArr.length; m++) { // looks for the element with longest count
    if (newArr[m][1] > bigNum) {
      bigNum = newArr[m][1];
      mostPop = newArr[m][0];
    }
  }
  return mostPop;  //returns the string that represents the person
};

const printAll = function(c) { //prints all the people, who they follow and their followers
  let list = c;
  let objPpl = {};
  for (let person in list) {
    let ind = list[person];
    let flws = ind["follows"];
    let nms = ind["name"]; 
    objPpl[nms] = buildPop(person, flws, list);
  }
  return objPpl;
}

const buildPop = function(name, arr, d){ //builds the object that contains follows and followers for a person
  let pop = {};
  let fll = buildFll( arr, d);
  pop["follows"] = fll;
  let fllwers = buildFllw(name, d);
  pop["followers"] = fllwers;
  return pop;
}

const buildFll = function(arr,d) { // build array of follows
  let names = [];
  let list = d;
  for ( let person in list) {
    if (arr.includes(person)) {
      let ind = list[person];
      let nm = ind["name"];
      names.push(nm);
    }
  }
  return names;
}

const buildFllw = function(name, d) { // build array of followers
  let names = [];
  let list = d;
  for (let person in list) {
    let ind = list[person];
    let nm = ind["name"];
    let flw = ind["follows"];
    if (flw.includes(name)) {
      names.push(nm);
    }
  }
  return names;
}

//console.log(biggestFollower(data));
//console.log(mostPopular(data));
console.log(printAll(data));
//console.log(data[1]);