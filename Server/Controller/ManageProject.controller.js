const ProjectService = require('../Service/ManageProject.Service');


class ProjectController {
    async createProject(req, res) {
        try {
            const newProject = await ProjectService.createProject(req.body);
            res.status(201).json(newProject);
        } catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    }

    async getProjectById(req, res) {
        try {
            const Project = await ProjectService.getProjectById(req.params.ProjectId);
            if (!Project) {
                return res.status(404).json({ error: 'Project not found' });
            }
            res.status(200).json(Project);
        } catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    }
 async getall(req,res){
     try{
          const Projects=await ProjectService.getallProjects();
          if(!Projects){
            return res.status(404).json({ error: 'Project not found' });
          }
          res.status(200).json(Projects);
     } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
 }

 async deleteall(req,res){
      try{
          const res=await ProjectService.deleteall();
          if(!res){
            return res.status(404).json({ error: 'No Project found' });
          }
          res.status(200).json(res);
      }
      catch(error){
        res.status(500).json({ error: 'Internal server error' });
      }
 }

}

module.exports = new ProjectController();
