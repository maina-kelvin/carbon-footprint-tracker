// Firebase config
const firebaseConfig = {
    apiKey: "AIzaSyBqXfxrQXwOb_Y9Ack-tzTLKoMLkzjpAC4",
    authDomain: "carbon-footprint-tracker-13c4c.firebaseapp.com",
    projectId: "carbon-footprint-tracker-13c4c",
    storageBucket: "carbon-footprint-tracker-13c4c.firebasestorage.app",
    messagingSenderId: "600660909435",
    appId: "1:600660909435:web:675e783ab82fe415efb1de",
    measurementId: "G-XFBPQ4GLX2"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();

  // Form handler
  document.getElementById("dataForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const carbon = parseFloat(document.getElementById("carbon").value);

    try {
      await db.collection("submissions").add({
        name: name,
        carbon: carbon,
        timestamp: new Date()
      });

      document.getElementById("status").textContent = "Data submitted successfully!";
    } catch (error) {
      console.error("Error writing document: ", error);
      document.getElementById("status").textContent = "Failed to submit data.";
    }
  });