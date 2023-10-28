import { getDatabase, ref, onValue } from "firebase/database";

export const readFirebaseData = (reference: any) => {
    onValue(reference, (snapshot) => {
      const data = snapshot.val();
      console.log("Data:", data);
      // Handle the data from the reference here
    });
  };