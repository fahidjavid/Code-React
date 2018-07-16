import Rebase from 're-base';
import firebase from 'firebase';

 const firebaseApp = firebase.initializeApp({
     apiKey: "AIzaSyAuVTDdGU0LoGEmGqfy4R6TOe6RX3vhfIU",
     authDomain: "catch-of-the-day-fahid-jaivd.firebaseapp.com",
     databaseURL: "https://catch-of-the-day-fahid-jaivd.firebaseio.com",
 });

const base = Rebase.createClass(firebase.database());

// this is a named export
export {firebaseApp};

// this is a default export
export default base;