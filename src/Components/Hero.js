import { Row, Col, Button } from 'react-bootstrap';
import heroImage from './powerfull.png';


const Hero = () => {
    return (
        <div className="container col-xxl-8 px-4 py-5">
            <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                <div className="col-10 col-sm-8 col-lg-6">
                    <img src={heroImage} class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700"
                        height="500" loading="lazy" />
                </div>
                <div className="col-lg-6">
                    <h1 className="display-5 fw-bold lh-1 mb-3">Тренируй свои гибкие навыки</h1>
                    <p className="lead">SoftSkills — образовательная онлайн-платформа, которая помогает развивать гибкие навыки с помощью интерактивных упражнений и материалов. </p>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                        <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Попробовать</button>
                        <button type="button" className="btn btn-outline-secondary btn-lg px-4">Узнать больше</button>
                    </div>
                </div>
            </div>
        </div>



        // <Row classNameName="justify-content-between align-items-start">
        //     <Col md={6} lg={5} classNameName="text-center text-md-start align-self-center px-5">
        //         <h1>
        //             <div classNameName="display-4">Тренируй</div>
        //             <div classNameName="display-5 text-muted">свои гибкие навыки</div>
        //         </h1>
        //         <p classNameName="lead my-4 text-muted">
        //             SoftSkills — образовательная онлайн-платформа с интерактивными упражнениями и материалами, которые помогают развивать гибкие навыки
        //         </p>
        //         <a href="#pricing" classNameName="btn btn-secondary btn-large">Получить доступ</a>
        //     </Col>
        //     <Col md={6} lg={7} classNameName="d-none d-md-flex px-0 justify-content-end">
        //         <span classNameName="tt " data-bs-placement="bottom" title="Net Ninja Book Cover">

        //             <img classNameName="img-fluid " src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80" alt="ebook cover" />
        //         </span>
        //     </Col>
        // </Row>

    );
}

export default Hero;