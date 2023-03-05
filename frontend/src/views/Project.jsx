import ProjectBackers from "../components/ProjectBackers"
import ProjectDetails from "../components/ProjectDetails"
import UpdateProjects from "../components/UpdateProject"
import BorrowMoney from "../components/BorrowMoney"
const Project = () => {
  return (
    <>
        <ProjectDetails/>
        
        <ProjectBackers />
        <UpdateProjects />
        <BorrowMoney />
    </>
  )
}

export default Project