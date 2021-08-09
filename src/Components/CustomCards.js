import 'bootstrap/dist/css/bootstrap.min.css';

const CustomCards = () => {
    return (
        <div className="container px-4 py-5" id="custom-cards">
            <h2 className="pb-2 border-bottom">Модули платформы</h2>
            <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">

                <div className="col">
                    <div className="card card-cover h-100 overflow-hidden text-white  rounded-5 shadow-lg"
                        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1518231365576-99dafdedcd69?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80')` }}>
                        <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                            <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Интерактивные пошаговые руководства</h2>
                            <ul className="d-flex list-unstyled mt-auto">
                                <li className="me-auto">
                                    <img src="https://github.com/twbs.png" alt="Bootstrap" width="32" height="32"
                                        className="rounded-circle border border-white" />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card card-cover h-100 overflow-hidden text-white rounded-5 shadow-lg"
                        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80')` }}>
                        <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                            <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Интенсивные курсы </h2>
                            <ul className="d-flex list-unstyled mt-auto">
                                <li className="me-auto">
                                    <img src="https://github.com/twbs.png" alt="Bootstrap" width="32" height="32"
                                        className="rounded-circle border border-white" />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card card-cover h-100 overflow-hidden text-white rounded-5 shadow-lg"
                        style={{ backgroundImage: `url('https://images.pexels.com/photos/4101143/pexels-photo-4101143.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')` }}>
                        <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                            <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Тесты для проведения оценки </h2>
                            <ul className="d-flex list-unstyled mt-auto">
                                <li className="me-auto">
                                    <img src="https://github.com/twbs.png" alt="Bootstrap" width="32" height="32"
                                        className="rounded-circle border border-white" />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>



            </div>
        </div>
    );
}

export default CustomCards;