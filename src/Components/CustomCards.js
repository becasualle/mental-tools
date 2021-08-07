import 'bootstrap/dist/css/bootstrap.min.css';

const CustomCards = () => {
    return (
        <div className="container px-4 py-5" id="custom-cards">
            {/* <h2 className="pb-2 border-bottom">Custom cards</h2> */}
            <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">

                <div className="col">
                    <div className="card card-cover h-100 overflow-hidden text-white  rounded-5 shadow-lg"
                        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1524863479829-916d8e77f114?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80')` }}>
                        <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                            <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Short title, long jacket</h2>
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
                        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1626823142330-0dec2ddbe3f5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1048&q=80)` }}>
                        <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                            <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Short title, long jacket</h2>
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
                        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1628257228884-90f11c4e78a8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80')` }}>
                        <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                            <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Short title, long jacket</h2>
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