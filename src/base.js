import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDOummTE_qQWuKLyIlYbaV9ko59cxiyo8w",
  authDomain: "chatbox-d5945.firebaseapp.com",
  databaseURL: "https://chatbox-d5945.firebaseio.com",
})

const base = Rebase.createClass(firebase.database())

export { firebaseApp }

export default base
