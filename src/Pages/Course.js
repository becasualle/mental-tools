import { Container } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { courses } from "../data";


const Course = () => {

    return (
        <div className="py-5">
            {courses.map((course, index) =>
                <Container className="py-4" key={index}>
                    <div class="p-5 mb-4 bg-light rounded-3">
                        <div class="container-fluid py-5 ">
                            <h1 class="display-5 fw-bold">{course.courseTitle}</h1>
                            <p class="col-md-12 fs-4">{course.courseDescription}</p>
                            <Link className="btn btn-primary btn-lg" to={`/course/${course.courseID}`}>Изучить</Link>
                        </div>
                    </div>
                </Container>


            )}
        </div>
    );
}

export default Course;