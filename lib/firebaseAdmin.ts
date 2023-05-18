import admin from 'firebase-admin';
import { ServiceAccount, getApps } from 'firebase-admin/app';
import serviceAccount from '../serviceAccountKey.json';

if (!getApps().length) {
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount as string | ServiceAccount),
    });
};

const adminDb = admin.firestore();

export { adminDb };