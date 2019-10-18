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

const biggestFollower = function(a) {
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

const mostPopular = function(b) {
  let list = b;
  let count = 0;
  let arr = [];
  for (let perOne in list) {
    count++;
  }
  for (let perTwo in list) {
    let ind = list[perTwo];
    let flw = ind["follows"];
    for (let num of flw){
      arr.push(num);
    }
  }
  let bigPop = findPop(arr);
  let objPop = list[bigPop];
  return objPop["name"];
}

const findPop = function(arrList) {
  let arrPop = [...new Set(arrList)];
  let newArr = [];
  let mostPop = '';
  let bigNum = 0;
  for (let i = 0; i < arrPop.length; i++) {
    newArr[i] = [ arrPop[i], 0];
  }
  for (let j = 0; j < arrList.length; j++) {
    for (let k = 0; k < newArr.length; k++) {
      if (arrList[j] === newArr[k][0]) {
        newArr[k][1]++;
      }
    }
  }
  for (let m = 0; m < newArr.length; m++) {
    if (newArr[m][1] > bigNum) {
      bigNum = newArr[m][1];
      mostPop = newArr[m][0];
    }
  }
  return mostPop;
};

const printAll = function(c) {
  let list = c;
  for (let person in list) {
    let ind = list[person];
    let flws = ind["follows"];
    
  }
}

//console.log(biggestFollower(data));
//console.log(mostPopular(data));
console.log(printAll(data));