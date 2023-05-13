//Tuzkov Dmytro B22
"use strict";
let student = {
  name: 'Dima',
  surname: 'Tuzkov',
  group: {
    name: 'B22',
    room: 'Someroom'
  },
  friends: [{
    name: 'Anna',
    surname: 'Tuzkova',
    group: {
      name: 'B22',
      room: 'Someroom'
    },
    friends: []
  }, {
    name: 'Anton',
    surname: 'Levenec',
    group: {
      name: 'A22',
      room: 'Someroom'
    },
    friends: []
  }, {
    name: 'Artem',
    surname: 'Levenec',
    group: {
      name: 'A22',
      room: 'Someroom'
    },
    friends: []
  }, {
    name: 'Sergey',
    surname: 'Hohlov',
    group: {
      name: 'B22',
      room: 'Someroom'
    },
    friends: []
  } , {
    name: 'Nastya',
    surname: 'Tkachuk',
    group: {
      name: 'A22',
      room: 'Someroom'
    },
    friends: []
  }],
  addFriend: function (friend, surname) {
    this.friends.push({name: friend, surname: surname, friends: []});
  },
  findFriend: function(namefriend){
    return this.friends.filter(elem =>
    elem.name == namefriend ? console.log(`${elem.name} is ${elem.name == namefriend}`) : elem);
  },
  deleteFriend: function(namefriend){
    return this.friends.filter((elem, ind) =>
    elem.name == namefriend ? this.friends.splice(ind,1) : elem);
  },
  editFriend: function(namefriend, property, value){
    return this.friends.map((elem, ind) =>
    elem.name == namefriend ? elem[property] = value : elem
  );
  },
  commonFriends: function(namefriend){
    let hisfriends = [];
    this.friends.map(elem => elem.friends.map(item =>
    item.name == namefriend ? hisfriends.push(elem.name) : item))
    return console.log(` ${namefriend} has friends: ${hisfriends}`);
  },
  myGroup: function(namefriend){
    let mygroupfriends = [];
    let a = this.friends;
      a.filter(elem => {
    elem.name == namefriend ? a.map(item =>
    item.group.name == elem.group.name ? mygroupfriends.push(item.name) : item) : elem;
    }
  );
  return console.log(`${namefriend} classmates: ${mygroupfriends}`);

  }
};
student.friends[0].friends.push({
  name: 'Vova',
  group: {
    name: 'B22',
    room: 'Someroom'}},{name: 'Taras'});
student.friends[1].friends.push({name: 'Vova'},{name: 'Kolya'});
student.friends[2].friends.push({name: 'Kolya'},{name: 'Taras'});
student.friends[3].friends.push({name: 'Oleg'},{name: 'Vova'});
student.friends[4].friends.push({name: 'Egor'},{name: 'Sasha'});






//student.addFriend('Kirill', 'Duboisky');
student.findFriend('Anna');
//student.deleteFriend('Anton');
student.editFriend('Artem', 'surname', 'Nelevenec');
student.commonFriends('Kolya');
student.myGroup('Anton');





console.log(student);













// student.addFriends('Dmytro');
//
//
// // student.friends.sort((a,b) => a.name-b.name);
// //
// // student.friends.map(elem => console.log(elem.name));
//console.log(student);
