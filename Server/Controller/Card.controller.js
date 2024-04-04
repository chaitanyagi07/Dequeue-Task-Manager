const Card = require('../Module/Card.module');

class CardController {
    async createCard(req, res) {
        try {
            const newCard = new Card(req.body);
            await newCard.save();
            return newCard;
        } catch (error) {
            throw error;
        }
    }

    async getCardById(req, res) {
        try {
            const card = await Card.findById(req.params.id);
            //  console.log(req.params.id);
            if (!card) {
                return res.status(404).json({ error: 'Card not found' });
            }
            return card;
        } catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    }
 async getall(req,res){
    try {
        const result=Card.find();
        return result;
    } catch (error) {
        throw error;
    }
 }

 async deleteall(req,res){
    try{
        const res=Card.deleteMany();
        return res;
     }
     catch(error){
        throw error;
     }
 }

 async createSubtask(req,res){
    try{
        const subtask={
            title:req.body.title,
             id:req.params.id
        }
        const {id,title}=subtask;
         // console.log(subtaskdata);
        const task= await Card.findOne(id);
         // console.log(task.subtask);
          const ans=json.stringify(subtask.title)
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
  async deleteCardbyId(req,res){
    try{
        const res= await Card.findByIdAndDelete(id);
        return res;
   }
   catch(err){
        console.error(err.message)
   }
 }
}

module.exports = new CardController();
