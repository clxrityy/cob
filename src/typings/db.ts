import admin from 'firebase-admin';


export interface FirebaseData {
    user: {
        id: string;
        name: string;
        avatar: string;
    };
    time: admin.firestore.Timestamp;
    text: string;
    dataId: string;
}
