const { json } = require('body-parser');
const Card = require('../Module/Card.module');

class CardController {
    async createCard(req, res) {
        try {
            const newCard = new Card(req.body);
            await newCard.save();
            console.log(newCard);
            return  res.status(200).json(newCard);
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
            return  res.status(200).json(card);
        } catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    }
 async getall(req,res){
    try {
        const result=Card.find();
        // console.log(result.body);
       JSON.stringify(result.body)
        return res.status(200).json(result.body);
    } catch (error) {
        throw error;
    }
 }

 async deleteall(req,res){
    try{
        const result=await Card.deleteMany();
        return res.status(200).json({ message: 'Deleted successfully', result});
     }
     catch(error){
        return res.status(500).json({ message: 'Internal server error' });
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
