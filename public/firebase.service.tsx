import { ref, runTransaction } from "firebase/database";
import { database } from "./firebase";

const votingPath = "voting";

// Define references for the two objects (obj1 and obj2)
const yesValue = ref(database, `${votingPath}/yes/`);
const noValue = ref(database, `${votingPath}/no/`);

export function updateYesVote() {
  
  updateVoteCount(yesValue);
}

export function updateNoVote() {
    
    updateVoteCount(noValue);
}

function updateVoteCount(voteRef: any) {
  runTransaction(voteRef, (currentData) => {
    if (currentData === null) {
      return 1;
    }
    return currentData + 1;
  });
}
