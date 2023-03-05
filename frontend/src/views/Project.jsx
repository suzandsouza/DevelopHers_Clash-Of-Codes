import DeleteProjects from "../components/DeleteProject"
import ProjectBackers from "../components/ProjectBackers"
import ProjectDetails from "../components/ProjectDetails"
import UpdateProjects from "../components/UpdateProject"
const Project = () => {
  return (
    <>
        <ProjectDetails/>
        
        <ProjectBackers />
        <UpdateProjects />
        <DeleteProjects />
    </>
  )
}

export default Project