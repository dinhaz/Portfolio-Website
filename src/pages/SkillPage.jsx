import { Container, Row, Col, ProgressBar } from "react-bootstrap";
import { toolsSkill, frameworkSkill, programSkill } from "../data/index";
const SkillPage = () => {
    return (
        <div className="skillpage w-100 min-vh-100">
            <Container>
                <Row>
                    <Col>
                        <h1 className="fw-bold text-center">My Skills</h1>
                        <p className="text-center">Here are all the datas I have worked on or am currently working on</p>
                    </Col>
                </Row>
                <Row className="mb-2">
                    <Col>
                        <h5 className="text-light fw-bold">Tools Skills</h5>
                    </Col>
                </Row>
                <Row className="gap-3 gap-lg-2 ">
                    {toolsSkill.map((data) => {
                        return (
                            <Col key={data.id} className="bg-light py-3 rounded-2">
                                <img src={data.image} alt="data-img" className="w-100 mb-3 " />
                                <div>
                                    <ProgressBar now={data.now} label={`${data.now}%`} />;
                                </div>
                            </Col>
                        );
                    })}
                </Row>
                <Row className="mb-2 mt-5">
                    <Col>
                        <h5 className="text-light fw-bold">Framework Skills</h5>
                    </Col>
                </Row>
                <Row className="gap-3 gap-lg-2 ">
                    {frameworkSkill.map((data) => {
                        return (
                            <Col key={data.id} className="bg-light py-3 rounded-2">
                                <img src={data.image} alt="data-img" className="w-100 mb-3 " />
                                <div>
                                    <ProgressBar now={data.now} label={`${data.now}%`} />;
                                </div>
                            </Col>
                        );
                    })}
                </Row>
                <Row className="mb-2 mt-5">
                    <Col>
                        <h5 className="text-light fw-bold">Program Skills</h5>
                    </Col>
                </Row>
                <Row className="gap-3 gap-lg-2 ">
                    {programSkill.map((data) => {
                        return (
                            <Col key={data.id} className="bg-light py-3 rounded-2">
                                <img src={data.image} alt="data-img" className="w-100 mb-3 " />
                                <div>
                                    <ProgressBar now={data.now} label={`${data.now}%`} />;
                                </div>
                            </Col>
                        );
                    })}
                </Row>
            </Container>
        </div>
    );
};

export default SkillPage;
