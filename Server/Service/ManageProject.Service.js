const Project = require('../Module/ManageProject.module');

class ProjectService {
    async createProject(ProjectData) {
        try {
            const newProject = new Project(ProjectData);
            await newProject.save();
            return newProject;
        } catch (error) {
            throw error;
        }
    }

    async getProjectById(ProjectId) {
        try {
            const Project = await Project.findById(ProjectId);
            return Project;
        } catch (error) {
            throw error;
        }
    }
  async getallProjects(){
    try {
        const result=Project.find();
        return result;
    } catch (error) {
        throw error;
    }
  }
   async deleteall(){
       try{
          const res=Project.deleteMany();
          return res;
       }
       catch(error){
          throw error;
       }
   }

}

module.exports = new ProjectService();
