import { DocumentData, addDoc, collection, deleteDoc, doc, orderBy, query } from "firebase/firestore";
import { FirebaseData } from "../typings/db";
import { db } from "./firebase/firebase";


export const sendData = async (input: FirebaseData) => {
    if (input.dataId) {
        const data = {
            time: input.time,
            user: {
                name: input.user.name,
                avatar: input.user.avatar
            },
            text: input.text,
        };

        await addDoc(
            collection(
                db, 'users', input.user.id, input.dataId
            ),
            data
        );
    } else {
        console.log("Error adding doc, no data ID");
    }
};

export const deleteData = async (dataId: string, userId: string) => {
    if (dataId && userId) {
        await deleteDoc(
            doc(
                db,
                'users',
                userId,
                dataId
            )
        );
    } else {
        console.log("Error deleting doc, no data ID or user ID");
    }
}

export const fetchData = async (dataId: string, userId: string) => {
    if (dataId && userId) {
        
    }
}