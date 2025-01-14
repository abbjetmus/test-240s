import { defineBoot } from '#q-app/wrappers'
import { initializeApp } from 'firebase/app'
import { getDatabase } from 'firebase/database'
import { VueFire } from 'vuefire'

const firebaseApp = initializeApp({
  apiKey: "AIzaSyAK8AJmJPmUrHjPvKl486i99SE_Wfk0R_4",
  authDomain: "temp-projekt-220s.firebaseapp.com",
  databaseURL: "https://temp-projekt-220s-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "temp-projekt-220s",
  storageBucket: "temp-projekt-220s.firebasestorage.app",
  messagingSenderId: "401787728103",
  appId: "1:401787728103:web:3f9f7614f1dae5d1c13242"
})

const db = getDatabase(firebaseApp)

export default defineBoot(async ({ app }) => {
  app.use(VueFire, {
    firebaseApp,
  })
})

export { db }
