const UserService=require('../Service/User.Service');


class UserController{
      async createUser(req,res){
        try {
            const newUser = await UserService.createUser(req.body);
            res.status(201).json(newUser);
        } catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
      }
      async login(req,res){
         try{
             const result=await UserService.login(req.body);
             res.status(201).json(result);
        }
         catch(error){
            res.status(500).json({ error: 'Internal server error' });
         }
      }
      async getall(req,res){
          try{
             const result=await UserService.getall();
             res.status(201).json(result);
          }
          catch(error){
            res.status(500).json({ error: 'Internal server error' });
          }
      }
    async deleteall(req,res){
        try{
            const result=await UserService.deleteall();
            res.status(201).json(result);
         }
         catch(error){
           res.status(500).json({ error: 'Internal server error' });
         }
    }
}
module.exports=new UserController();