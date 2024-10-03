import flamelink from "flamelink/app";
import "flamelink/cf/content"; // Ensure you load the Cloud Firestore (cf) service
import { firebaseApp, db } from "./firebaseConfig";

const flamelinkApp = flamelink({
  firebaseApp, // Firebase app initialization
  db, // Firestore database
  dbType: "cf", // Cloud Firestore
  env: "production", // Make sure this matches your environment setting in Flamelink
  locale: "en-US", // Locale settings based on your Flamelink configuration
});

export default flamelinkApp;
