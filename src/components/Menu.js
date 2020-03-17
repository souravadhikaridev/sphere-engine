import React from 'react'
import '../assets/css/ide.css'
import logo from '../assets/image/logo.png'

const Menu = () => {
    return (
        <React.Fragment>
            <div className="container-fluid p-2" style={{ height: "45px", backgroundColor: "#3C3C3C" }}>
                <div className="row">
                    <div className="col-4">
                        <a href="#">
                            <img src={logo} height="30" width="170" alt="" />
                            <span className="badge badge-primary ml-2">Beta</span>
                        </a>
                    </div>
                    <div className="col-3 border-right">
                        <span data-toggle="tooltip" data-placement="bottom" title="Build the project">
                            <button className="btn btn-transparent btn-sm text-light">
                                <i className="fa fa-gear mr-1" id="faIdeMenu"></i>
                                Build
                            </button>
                        </span>
                        <span data-toggle="tooltip" data-placement="bottom" title="Launch the website">
                            <button className="btn btn-transparent btn-sm text-light" id="btnMenu">
                                <i className="fa fa-play mr-1" id="faIdeMenu"></i>
                                Run
                            </button>
                        </span>
                        <span data-toggle="tooltip" data-placement="bottom" title="Run the tests">
                            <button className="btn btn-transparent btn-sm text-light" id="btnMenu">
                                <i className="fa fa-list mr-1" id="faIdeMenu"></i>
                                Test
                            </button>
                        </span>
                        <span data-toggle="tooltip" data-placement="bottom" title="(beta) verify the project as a solution to a programming challenge (programming problem)">
                            <button className="btn btn-transparent btn-sm text-light" id="btnMenu">
                                <i className="fa fa-check-circle mr-1" id="faIdeMenu"></i>
                                Verify
                            </button>
                        </span>
                        <span data-toggle="tooltip" data-placement="bottom" title="Show the internal browser">
                            <button className="btn btn-transparent btn-sm text-light" id="btnMenu">
                                Show browser
                            </button>
                        </span>
                    </div>
                    <div className="col-5">
                        <button className="btn btn-transparent btn-sm text-light mr-2" id="btnMenu">
                            Edit project
                            </button>
                        <button className="btn btn-outline-primary btn-sm text-primary mr-2">
                            <i className="fa fa-envelope mr-1"></i>
                            Sign up for a newsletter
                            </button><button className="btn btn-outline-danger btn-sm text-danger">
                            <i className="fa fa-bar-chart mr-1"></i>
                            Take thesurvey for 3 months free access
                            </button>
                    </div>
                </div>
            </div>
            <div className="container-fluid" style={{ height: "30px", backgroundColor: "#252525" }}>
                <div className="row">
                    <div className="col-2 mt-1 d-flex justify-content-end" id="secondMenu">
                    <span data-toggle="tooltip" data-placement="bottom" title="Refresh">
                        <i className="fa fa-refresh text-light mr-3"></i>
                    </span>
                    <span data-toggle="tooltip" data-placement="bottom" title="Save file">
                        <i className="fa fa-save text-light mr-3"></i>
                    </span>
                    <span data-toggle="tooltip" data-placement="bottom" title="Save all files">
                        <i className="fa fa-save text-light mr-3"> All</i>
                    </span>
                    <span data-toggle="tooltip" data-placement="bottom" title="Key bindings">
                        <i className="fa fa-keyboard-o text-light"></i>
                    </span>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Menu
