document.addEventListener("DOMContentLoaded", (event) => {
  
  const app = firebase.app();
  //reference database
  const db = firebase.firestore();
  const productsRef = db.collection('product');
  //const query = productsRef.where('price', '>', 20);
  const query = productsRef.orderBy('price', 'desc')
  .limit(1)
  query.get()
       .then(products => {
         products.forEach(doc => {
           data = doc.data()
           document.write(`${data.name} at $${data.price} <br>`)
         })
       })
  
  
  
  
  
  
  
  
  //reference object in database table posts with id firstpost
 // const myPost = db.collection("post").doc("firstpost");

  // myPost.onSnapshot(doc => {

  //   const data = doc.data();

  //   document.querySelector('#title').innerHTML = data.title


  // })


//Request post from firestore
  // myPost.get()
  // .then(doc => {

  //   const data = doc.data();
  //   document.write(data.title + `<br>`)
  //   console.log(data)
  //   document.write(data.views )

  // })
});
function updatePost(e) {
  const db = firebase.firestore();
  const myPost = db.collection("post").doc("firstpost");
  myPost.update({ title: e.target.value })
}
// //GOOGLE AUTHENTICATION
// function googleLogin() {
//   const provider = new firebase.auth.GoogleAuthProvider();
//   firebase
//     .auth()
//     .signInWithPopup(provider)
//     .then((res) => {
//       const user = res.user;
//       document.write(`Hello ${user.displayName}`);
//       console.log(user);
//     })
//     .catch(console.log);
// }
