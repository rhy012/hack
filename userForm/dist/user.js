import { initializeApp} from 'firebase/app'

import { 
    collection,
    getFirestore,
    getDocs,
    addDoc,query,where
    //addDoc is a function used to add new elements to the collection
} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCKlkyK9HWhmT1c3Igz0hDa4UO1HdeVJSM",
    authDomain: "our-project-82599.firebaseapp.com",
    projectId: "our-project-82599",
    storageBucket: "our-project-82599.appspot.com",
    messagingSenderId: "488507765975",
    appId: "1:488507765975:web:137f4b930d0881a3956c92"
  };
 
  //initialize firebase app
  initializeApp(firebaseConfig)

  //init services
  //to make a connection to database
  const db = getFirestore()
  //reference collection
  const colRef= collection(db,'dash')

  //queries

getDocs(colRef)
 .then((snapshot) =>{
    let dash=[]
    snapshot.docs.forEach((doc) =>{
        //this syntax is fixed
        dash.push({ ...doc.data(), id: doc.id})
    })
    console.log(dash)
})
.catch(err => {
    console.log(err.message)
})

//  adding documents


      const addUserForm=document.querySelector('.waste')
    
     addUserForm.addEventListener('submit',(e)=>{
        e.preventDefault()
        //this means that look into the book collection and add this as new document inside it
        //const type= addUserForm.waste.value

        addDoc(colRef,{
            //type:addUserForm.waste.value,
            typ:addUserForm.typep.value,
            nam:addUserForm.weightp.value
            // user:addUserForm.user.value,
            // pass:addUserForm.pass.value,
        }) 
        .then(()=>{
            addUserForm.reset()
            //resetting the form so that new value can be added
        })
        //default is refreshing the page
     })
     console.log('typ')
     console.log('helloooo')
// const asdf=3;

//  const addUserForm = document.querySelector('.add');
//  addUserForm.addEventListener('submit' ,(e)=>{
//     e.preventDefault();

//     addDoc(colref,{
//        name: addUserForm.name.value,
//        pwd:  addUserForm.pwd.value

//     })
//     .then(()=> {
//         addUserForm.reset()
//     })
//  })
