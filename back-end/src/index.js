import { initializeApp} from 'firebase/app'

import { 
    collection,
    getFirestore,
    getDocs,
    addDoc
} from 'firebase/firestore'

import {
    getAuth,
    createUserWithEmailAndPassword,
    signOut  
} from 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyBOlkomsG8cz0ir9X1U9ZScZhpY4znj-Gs",
    authDomain: "fb-proj-6f8da.firebaseapp.com",
    projectId: "fb-proj-6f8da",
    storageBucket: "fb-proj-6f8da.appspot.com",
    messagingSenderId: "141834789654",
    appId: "1:141834789654:web:2037582c3ef5777cc36637"
  };

  initializeApp(firebaseConfig)

  const db = getFirestore()
  const auth=getAuth()

  const colref= collection(db,'userinfo')

getDocs(colref)
.then((snapshot) =>{
    let userinfo=[]
    snapshot.docs.forEach((doc) =>{
        userinfo.push({ ...doc.data(), id: doc.id})
    })
    console.log(userinfo)
})
.catch(err => {
    console.log(err.message)
})


//  const addUserInfo = document.querySelector('.signup');
//  addUserInfo.addEventListener('submit' ,(e)=>{
//     e.preventDefault();

//     addDoc(colref,{
//        name: addUserInfo.name.value,
//        email: addUserInfo.email.value,
//        pwd:  addUserInfo.pwd.value

//     })
//     .then(()=> {
//         addUserInfo.reset()
//     })

//  })


 const signupForm =document.querySelector('.signup')
 signupForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    const email=signupForm.email.value
    const pwd=signupForm.pwd.value
    createUserWithEmailAndPassword(auth, email,pwd)
    .then((cred) => {
        console.log('usercreated',cred.user)
        signupForm.reset()

    })
    .catch((err) =>{
      console.log(err.message)
 })
 })


 const logoutbutton=document.querySelector('.logout')
 logoutbutton.addEventListener('click',()=>{
    signOut(auth)
    .then(()=>{
        console.log('the user signed out')
    })
    .catch((err)=>{
        console.log(err.message) 
    })
 })