console.log('Hello');

let students = Object.create({},{
  name:{
    value: 'Dima'
  },
  age: {
    value: 33
  }
});
Object.defineProperty(students, 'group',{
  value: []
});
console.log(students);

function nUser(n, a, g){
  this.name =n;
  this.age =a;
  this.group = g;
}

let user1 = new nUser('Dima',23,'s44');
let user2 = new nUser('Anna',44,'s44');
let user3 = new nUser('Petya',23,'s44');
let user4 = new nUser('Petya2',33,'s44');
let user5 = new nUser('Petya2',22,'s44');
students.group.push(user1,user2,user3,user4,user5);


for (let i in students.group){
  if (students.group[i].age < 25){
    console.log(students.group[i]);

  }
}


let old = students.group.reduce(function (prev, cur) {
  return prev.age > cur.age ? prev : cur;
});

let young = students.group.reduce(function (prev, cur) {
  return prev.age < cur.age ? prev : cur;
});

old.old = true;
young.yung = true;

console.log(old);
console.log(young);
