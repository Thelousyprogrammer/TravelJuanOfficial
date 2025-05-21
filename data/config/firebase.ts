import firebaseAppModule from '@react-native-firebase/app';
import authModule from '@react-native-firebase/auth';
import firestoreModule from '@react-native-firebase/firestore';
import storageModule from '@react-native-firebase/storage';

const app = firebaseAppModule.app();
const auth = authModule();
const firestore = firestoreModule();
const storage = storageModule();

export {
    app,
    auth,
    firestore,
    storage
};

