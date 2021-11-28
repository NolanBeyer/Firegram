import firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyB9jXkOmG_lLRoEFfeI234s79x4rrMh5nc',
  authDomain: 'firegram-a7301.firebaseapp.com',
  projectId: 'firegram-a7301',
  storageBucket: 'firegram-a7301.appspot.com',
  messagingSenderId: '903781819683',
  appId: '1:903781819683:web:1e5fa6d54581c42dfd1896',
}

firebase.initializeApp(firebaseConfig)

const projectStorage = firebase.storage()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectStorage, projectFirestore, timestamp }
