const CardService = require('../Service/Card.Service');
const cardService = require('../Service/Card.Service');

class CardController {
    async createCard(req, res) {
        try {
            const newCard = await cardService.createCard(req.body);
            res.status(201).json(newCard);
        } catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    }

    async getCardById(req, res) {
        try {
            const card = await cardService.getCardById(req.params.id);
             console.log(req.params.id);
            if (!card) {
                return res.status(404).json({ error: 'Card not found' });
            }
            res.status(200).json(card);
        } catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    }
 async getall(req,res){
     try{
          const cards=await cardService.getallcards();
          if(!cards){
            return res.status(404).json({ error: 'Card not found' });
          }
          res.status(200).json(cards);
     } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
 }

 async deleteall(req,res){
      try{
          const res=await CardService.deleteall();
          if(!res){
            return res.status(404).json({ error: 'No Card found' });
          }
          res.status(200).json(res);
      }
      catch(error){
        res.status(500).json({ error: 'Internal server error' });
      }
 }
 async createSubtask(req,res){
     try{
        //   console.log(req.params.id);
           const subtask={
               title:req.body.title,
                id:req.params.id
           }
          const res=await CardService.createSubtask(subtask);
          if(!res){
            return res.status(404).json({ error: 'No Card found' });
          }
          res.status(201).json(res);
     }
     catch(error){
        res.status(500).json({ error: 'Internal server error' });

     }
 }
}

module.exports = new CardController();
