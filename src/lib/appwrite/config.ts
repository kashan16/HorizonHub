import { Account, Avatars, Client, Databases, Storage } from "appwrite";

export const appWriteConfig = {
    projectId : import.meta.env.VITE_APPWRITE_PROJECT_ID,
    url : import.meta.env.VITE_APPWRITE_URL,
    databaseId : import.meta.env.VITE_APPWRITE_DATABASE_ID,
    storageId : import.meta.env.VITE_APPWRITE_STORAGE_ID,
    userCollectionId : import.meta.env.VITE_APPWRITE_USER_COLLECTION_ID,
    postCollectionId : import.meta.env.VITE_APPWRITE_POST_COLLECTION_ID,
    savesCollectionId : import.meta.env.VITE_APPWRITE_SAVES_COLLECTION_ID,
}

export const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('656c24e47a95bfa91b96');
export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export const avatars = new Avatars(client);