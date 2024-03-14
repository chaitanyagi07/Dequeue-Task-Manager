const { json } = require('body-parser');
const User=require('../Module/User.module')
const jwt = require('jsonwebtoken');


class UserService{
    async createUser(Userdata) {
        try {
            const {email} = Userdata;
            const existingUser = await User.findOne({email});
            if (existingUser) {
              return res.status(400).json({ message: 'User already exists' });
            }        
            const newUser = new User(Userdata);
            await newUser.save();
            return newUser;
        } catch (error) {
            throw error;
        }
    }

  async login(Userdata){
      try{
           
           const {email,password}=Userdata;
           const user=await User.findOne({email});

           if (!user) {
            return { message: 'User not found' };
        }

        const isValidPassword = await user.isValidPassword(password);

        if (!isValidPassword) {
            return { message: 'Invalid email or password!' };
        }
           const token = jwt.sign({ userId: User._id }, 'secret', { expiresIn: '1h' });
           return token;
      }
      catch(error){
            console.error(error);
          return ({ message: 'Internal server error' });
      }
  }
   
   async getall(){
      try{
          const result=await User.find();
          return result;
      }
      catch(error){
        console.error(error);
        return ({ message: 'Internal server error' });
      }

   }
      async deleteall(){
       try{
          const res=User.deleteMany();
          return res;
       }
       catch(error){
          throw error;
       }
   }

//     async getProjectById(ProjectId) {
//         try {
//             const Project = await Project.findById(ProjectId);
//             return Project;
//         } catch (error) {
//             throw error;
//         }
//     }
//   async getallProjects(){
//     try {
//         const result=Project.find();
//         return result;
//     } catch (error) {
//         throw error;
//     }
//   }
//    async deleteall(){
//        try{
//           const res=Project.deleteMany();
//           return res;
//        }
//        catch(error){
//           throw error;
//        }
//    }
}

module.exports=new UserService();