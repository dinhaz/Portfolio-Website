import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

import ProfileImage from "../assets/img/profile.png";
import { mySkills, myIntro, newProject, dataSwiper } from "../data/index";
import FaqComponent from "../components/FaqComponent";

const HomePage = () => {
    let navigate = useNavigate();

    return (
        <div className="homepage">
            <header className="w-100 min-vh-100 d-flex align-items-center py-5 overflow-hidden position-relative">
                <Container>
                    <Row className="header-box align-items-center d-block d-md-flex">
                        {/* mode desktop */}
                        <Col lg="6" className="text-center order-first order-lg-last position-absolute d-none d-lg-block">
                            <img src={ProfileImage} alt="hero-img" className="animate__animated animate__fadeInUp" />
                        </Col>

                        {/* mode mobile */}
                        <Col lg="6" className="text-center order-first order-lg-last d-block d-lg-none">
                            <img src={ProfileImage} alt="hero-img" />
                        </Col>

                        <Col lg="6" className="text-light text-center text-lg-start mt-5 mt-lg-0 ">
                            <h1 className="fs-5 mb-4 animate__animated animate__fadeInLeft animate__delay-1s">
                                Hi! I'm, <br />
                                <span className="fw-bold fs-1 ">David Dinhaz</span> <br />
                                {mySkills.map((profile) => {
                                    return (
                                        <span className={profile.class} key={profile.id}>
                                            {profile.text}
                                        </span>
                                    );
                                })}
                            </h1>
                            <p className="mb-4 animate__animated animate__fadeInRight animate__delay-1s">{myIntro}</p>
                            <button onClick={() => navigate("/project")} className="btn btn-warning rounded-1 btn-lg me-2 fw-bold animate__animated animate__fadeInUp animate__delay-1s">
                                View Project
                            </button>
                            <button className="btn btn-outline-warning rounded-1 btn-lg fw-bold animate__animated animate__fadeInUp animate__delay-1s">Hire Me</button>
                        </Col>
                    </Row>
                </Container>
            </header>
            <div className="project w-100 min-vh-100">
                <Container>
                    <Row>
                        <Col>
                            <h1 className="fw-bold text-center">My Project</h1>
                            <p className="text-center lead">Here is a project I'm working on</p>
                        </Col>
                    </Row>
                    <Row className="gap-3 gap-lg-2">
                        {newProject.map((project) => {
                            return (
                                <Col key={project.id} className="bg-light py-3 rounded-top" data-aos="fade-up" data-aos-duration="1000" data-aos-delay={project.delay}>
                                    <img src={project.image} alt="newProject-img" className="w-100 mb-3 rounded-top" />
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

                    <Row>
                        <Col className="text-center p-5">
                            <button className="btn btn-lg rounded-5" onClick={() => navigate("/project")} data-aos="fade-up" data-aos-duration="500">
                                View All Projects
                                <i className="fa-solid fa-chevron-right ms-3"></i>
                            </button>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="certif w-100 min-vh-100">
                <Container>
                    <Row>
                        <Col>
                            <h1 className="fw-bold text-center">My Certificate</h1>
                            <p className="text-center lead">Here is my certificate of my project</p>
                        </Col>
                    </Row>
                    <Row>
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={10}
                            pagination={{
                                clickable: true,
                            }}
                            breakpoints={{
                                640: {
                                    slidesPerView: 1,
                                    spaceBetween: 20,
                                },
                                768: {
                                    slidesPerView: 2,
                                    spaceBetween: 40,
                                },
                                1024: {
                                    slidesPerView: 2,
                                    spaceBetween: 50,
                                },
                                1200: {
                                    slidesPerView: 3,
                                    spaceBetween: 50,
                                },
                            }}
                            modules={[Pagination]}
                            className="mySwiper"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                        >
                            {dataSwiper.map((data) => {
                                return (
                                    <SwiperSlide key={data.id} className="shadow-lg rounded-2">
                                        <img src={data.image} alt="certificate-img" />
                                        <div className="card-info d-flex px-2 py-3 gap-3">
                                            <img src={data.organizer} alt="organizer-logo" />
                                            <h6 className="fw-bold">
                                                {data.title} <br /> <p className="mt-1 fw-light">{data.year}</p>
                                            </h6>
                                        </div>
                                    </SwiperSlide>
                                );
                            })}
                            ;
                        </Swiper>
                    </Row>
                </Container>
            </div>
            <div className="contact w-100 min-vh-100">
                <Container>
                    <Row>
                        <Col>
                            <h1 className="fw-bold text-center">My Contact</h1>
                            <p className="text-center lead">Here is my contact for job and intership</p>
                        </Col>
                    </Row>
                    <Row className="d-block d-lg-flex">
                        <Col>
                            <div className="map-responsive">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.549921251092!2d112.79540437424897!3d-7.291937171672699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fb910277a2ad%3A0x92cc620eb5969f22!2sKontrakan%20Nikita!5e0!3m2!1sid!2sid!4v1690930556990!5m2!1sid!2sid"
                                    width="1200"
                                    height="450"
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                        </Col>
                        <Col className="contact-info mt-3 mt-lg-0">
                            <Col className="d-flex p-3 align-items-center mb-2 rounded-2">
                                <i className="fa-solid fa-envelope-open-text me-2 fs-3"></i>
                                <p className="my-auto">daviddinhaz16@gmail.com</p>
                            </Col>

                            <Col className=" d-flex p-3 align-items-center mb-2 rounded-2">
                                <i className="fa-solid fa-mobile-screen-button me-2 fs-3"></i>
                                <p className="my-auto">+62 899 9401 367</p>
                            </Col>

                            <Col className=" d-flex p-3 align-items-center mb-2 rounded-2">
                                <i className="fa-brands fa-whatsapp me-2 fs-3"></i>
                                <p className="my-auto">wa.me/628999401367</p>
                            </Col>

                            <Col className=" d-flex p-3 align-items-center rounded-2">
                                <i className="fa-solid fa-map-pin me-2 fs-3"></i>
                                <p className="my-auto">Jl.Keputih Makam Islam Blok B No.29, Keputih, Sukolilo, Surabaya</p>
                            </Col>
                        </Col>
                    </Row>
                </Container>
            </div>
            {/* FAQ COMPONENT */}
            <FaqComponent />
            {/* FAQ COMPONENT */}
        </div>
    );
};

export default HomePage;
