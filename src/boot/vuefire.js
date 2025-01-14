import { defineBoot } from '#q-app/wrappers'
import { initializeApp } from 'firebase/app'
import { getDatabase } from 'firebase/database'
import { VueFire } from 'vuefire'

const firebaseApp = initializeApp({
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
})

const db = getDatabase(firebaseApp)

export default defineBoot(async ({ app }) => {
  app.use(VueFire, {
    firebaseApp,
  })
})

export { db }
