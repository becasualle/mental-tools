import Image from 'react-bootstrap/Image';
import hero from '../../img/hero.png';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <div className="container px-4 py-5">
            <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                <div className="col-10 col-sm-8 col-lg-6">
                    <Image src={hero} fluid alt="Girl sitting with laptop" loading="lazy"></Image>
                </div>
                <div className="col-lg-6">
                    <h1 className="display-5 fw-bold lh-1 mb-3">Тренируй свои гибкие навыки</h1>
                    <p className="lead">SoftSkillz — образовательная онлайн-платформа, которая помогает развивать гибкие навыки с помощью интерактивных упражнений и материалов. </p>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                        <Link className="btn btn-primary btn-lg px-4 me-md-2" to={`/course`}>Попробовать</Link>
                        <Link className="btn btn-outline-secondary btn-lg px-4" to={`/course`}>Узнать больше</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;