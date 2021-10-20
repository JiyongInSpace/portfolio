import { getDatabase, ref, set, onValue, off } from "firebase/database";

class MessageRepository {
    constructor(){
        this.db = getDatabase();
    }
    syncMessages(onUpdate){
        const messageRef = ref(this.db, "message");
        onValue(messageRef, (message) => {
            const data = message.val();
            data && onUpdate(data);
        });
        return () => off(messageRef);
    }
    saveMessage(message){
        set(ref(this.db, "message"), message);
    }
}

export default MessageRepository;