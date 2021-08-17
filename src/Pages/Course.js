import { Container } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { courses } from "../data";

// for each course in data.js we create jumobtorn 
const Course = () => {

    return (
        <div className="py-5">
            {courses.map((course, index) =>
                <Container className="py-4" key={index}>
                    <div className="p-sm-3 p-lg-5 mb-4 bg-light rounded-3" id="course-jumbo">
                        <div className="container-fluid py-5 ">
                            <h1 className="display-5 fw-bold">{course.courseTitle}</h1>
                            <p className="col-md-12 fs-5">{course.courseDescription}</p>
                            {/* using url params */}
                            <Link className="btn btn-primary btn-lg" to={`/course/${course.courseID}`}>Изучить</Link>
                        </div>
                    </div>
                </Container>


            )}
        </div>
    );
}

export default Course;