import { Container, Row, Col } from "react-bootstrap";
import { allProject } from "../data/index";

const ProjectPage = () => {
    // Membalik urutan data dari array
    const reversedProjects = allProject.slice().reverse();

    return (
        <div className="projectpage w-100 min-vh-100">
            <Container>
                <Row>
                    <Col>
                        <h1 className="fw-bold text-center">All Projects</h1>
                        <p className="text-center">Here are all the projects I have worked on or am currently working on</p>
                    </Col>
                </Row>
                <Row className="gap-3 gap-lg-2">
                    {reversedProjects.map((project) => {
                        return (
                            <Col key={project.id} className="bg-light py-3 rounded-top">
                                <img src={project.image} alt="Project-img" className="w-100 mb-3 rounded-top" />
                                <div>
                                    <h6 className="fw-bold">
                                        {project.title} <br />
                                        <span className="fw-bold">{project.pos} </span>
                                    </h6>
                                    <p>{project.year}</p>
                                    <h6 className={project.class}>{project.status}</h6>
                                </div>
                            </Col>
                        );
                    })}
                </Row>
            </Container>
        </div>
    );
};

export default ProjectPage;
