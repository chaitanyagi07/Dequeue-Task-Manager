const Project = require('../Module/ManageProject.module');


class ProjectController {
    async createProject(req, res) {
        try {
            const newProject = new Project(req.body);
            await newProject.save();
            return newProject;
        } catch (error) {
            throw error;
        }
    }

    async getProjectById(req, res) {
        try {
            const Project = await Project.findById(req.params.ProjectId);
            return Project;
        } catch (error) {
            throw error;
        }
    }
 async getall(req,res){
    try {
        const result=Project.find();
        return result;
    } catch (error) {
        throw error;
    }
 }

 async deleteall(req,res){
    try{
        const res=Project.deleteMany();
        return res;
     }
     catch(error){
        throw error;
     }
 }

}

module.exports = new ProjectController();
