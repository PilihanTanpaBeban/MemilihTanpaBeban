import { getDatabase, ref, onValue } from "firebase/database";

const db = getDatabase();
const starCountRef = ref(db, 'voting/');

onValue(starCountRef, (snapshot) => {
  const data = snapshot.val();
  console.log(data)
});