const Card = require('../Module/Card.module');

class CardService {
    async createCard(cardData) {
        try {
            const newCard = new Card(cardData);
            await newCard.save();
            return newCard;
        } catch (error) {
            throw error;
        }
    }

    async getCardById(cardId) {
        try {
            const card = await Card.findById(cardId);
            return card;
        } catch (error) {
            throw error;
        }
    }
  async getallcards(){
    try {
        const result=Card.find();
        return result;
    } catch (error) {
        throw error;
    }
  }
   async deleteall(){
       try{
          const res=Card.deleteMany();
          return res;
       }
       catch(error){
          throw error;
       }
   }

   async createSubtask(subtaskdata){
      try{
           const {id,title}=subtaskdata;

            // console.log(subtaskdata);
           const task= await Card.findOne(id);
            // console.log(task.subtask);
             const ans=json.stringify(subtaskdata.title)
             try{
                task.subtask.push(ans);
                console.log(`subtask is created`);
             }
             catch(err){
                 console.error(err.message);
             }
          
           console.log(`subtask is created`);
           return task;
      }
      catch(error){
        throw error;
     }

   }
}

module.exports = new CardService();
