import firebase from "firebase"

const config = {
    // Put your configuration here
}

const app = firebase.initializeApp(config)

async function getPosts () {
    const collection = app.firestore().collection("posts")
    const querySnapshots = await collection.get()
    return querySnapshots.docs.map(doc => doc.data())
}

export { getPosts }