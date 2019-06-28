import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { firebase, database as default};

// firebase.database().ref().set({
//   name: 'Speed Wind',
//   age: '22',
//   isAlive: 'true',
//   stress: 'high',
//   location: {
//     city: 'Philadelphia',
//     country: ' US'
//   },
//   job: {
//     title: 'IceCream Truck Man',
//     company: 'Ritas'
//   }
// }).then(()=> {console.log('Data is Saved')}).catch( (error) => {console.log('Failed', error)});

// firebase.database().ref('age').set(28);

// firebase.database().ref('attributes').set({
//   height: '6ft',
//   weight: '150'
// }).then(()=> {console.log('attributes changed')}).catch( (e)=> {console.log(e)});

// firebase.database().ref('isAlive').remove().
// then(()=> {console.log('removed data')}).catch((e)=> {console.log(e)});

// firebase.database().ref().update({
//   stress: 'still high',
//   'job/title': 'Yakuza',
//   'job/company': 'Black Tigers'
// });

// firebase.database().ref().once('value')
// .then((snapshot)=> {const val = snapshot.val(); console.log(val)})
// .catch((e)=> {console.log(e)})

// firebase.database().ref().on('value', (snapshot)=> {console.log(snapshot.val())});

// setTimeout( ()=> {
//   firebase.database().ref('age').set(30);
// }, 3500);

// const notes = [{
//   id: '12',
//   title: 'first note',
//   body: 'this is my note'
// },{
//   id: '34',
//   title: 'second note',
//   body: 'loolol'
// }];

// firebase.database().ref('notes').set(notes);
// firebase.database().ref().remove();

// const firebaseNote = {
//   notes: {
//     uniqueId: {
//       title: 'first note',
//     body: 'this is my note'
//     },
//     uniqueIdentifier: {
//       title: 'second note',
//     body: 'loolol'
//     }
//   }
// };

// firebase.database().ref('notes').push({
//   title: 'To do',
//   body: 'clean deesk'
// });

// firebase.database().ref('notes/-LiUs0kkd1gsGH0lg7Jq').update({body:'dont clean'});
// firebase.database().ref('expenses').push({
//   description: 'rent',
//   note: 'month rent',
//   amount: 100000,
//   createdAt: 123123123
// });

// firebase.database().ref('expenses').push({
//   description: 'phone',
//   note: 'monthly phone bill',
//   amount: 20000,
//   createdAt: 123123123
// });
// firebase.database().ref('expenses')
// .once('value')
// .then((snapshot)=> {
//   const expenses = [];
//   snapshot.forEach((childSnapShot) => {
//     expenses.push({
//       id: childSnapShot.key,
//       ...childSnapShot.val()
//     })
//   });console.log(expenses)
// });

// firebase.database().ref('expenses').on('value', (snapshot)=> {
//   const expenses = [];
//   snapshot.forEach((childSnapShot) => {
//     expenses.push({
//       id: childSnapShot.key,
//       ...childSnapShot.val()
//     })
//   });console.log(expenses)
// });

// // child_removed

// firebase.database().ref('expenses').on('child_removed', (snapshot)=> {
//   console.log(snapshot.key, snapshot.val());
// });

// //child_changed
// firebase.database().ref('expenses').on('child_changed', (snapshot)=> {
//   console.log(snapshot.key, snapshot.val());
// })

// // child_added
// firebase.database().ref('expenses').on('child_added', (snapshot)=> {
//   console.log(snapshot.key, snapshot.val());
// })