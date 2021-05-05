// firebase utility library, firebase has all of the utility libraries loaded
// when we included the entire dependency when we installed firebase with ya
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
const config = {
    apiKey: "AIzaSyC8uBt9uhbCAljW7gCwqBwtpMD5uGu_9k0",
    authDomain: "crwn-db-29bc4.firebaseapp.com",
    projectId: "crwn-db-29bc4",
    storageBucket: "crwn-db-29bc4.appspot.com",
    messagingSenderId: "855046410320",
    appId: "1:855046410320:web:05ce21c33742dff7b18155",
    measurementId: "G-L11RN1RQDK",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
    // Obtain a document reference.
    const userRef = firestore.doc(`users/${userAuth.uid}`); // go to the user profile by UID
    const snapShot = await userRef.get(); // get the snapshot of the user from console
    // console.log(snapshot.data())
    if (!snapShot.exists) {
        // create user in database if it does not exist
        const { displayName, email } = userAuth;
        const createAt = new Date();
        try {
            // get the data set ,  Enter new data into the document.

            await userRef.set({
                displayName,
                email,
                createAt,
                ...additionalData,
            });
        } catch (error) {
            console.log("error creating user", error.message);
        }
    }
    return userRef;
};

//  Add the items and collections to the database
export const addCollectionsAndDocument = async (
    collectionKey,
    objectsToAdd
) => {
    // Obtain a document reference.
    const collectionRef = firestore.collection(collectionKey);
    // console.log(collectionRef)
    const batch = firestore.batch(); // batch is to group all our calls together into one big request
    objectsToAdd.forEach((obj) => {
        // const newDocRef = collectionRef.doc(obj.title)
        const newDocRef = collectionRef.doc();

        // console.log(newDocRef)
        batch.set(newDocRef, obj);
    }); // loop over the objects to add array using for each method

    return await batch.commit();
};

export const convertCollectionsSnapshotToMap
 = (collections) => {
    const transformedCollection = collections.docs.map((doc) => {
        const { title, items } = doc.data();
        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items,
        };
    });
    // console.log(transformedCollection)
    return transformedCollection.reduce((accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator;
    }, {});
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore(); // Create a new client

// this gives us access to this new Google auth provider class from the authentication library.
// We want to always trigger the Google pop up when ever we use this Google auth provider for authentication and sign in
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
