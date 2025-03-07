import {AlertCircle, Bell, Home, UserPlus} from "react-feather";
import React from "react";

function Notifications() {
    return (
        <li className="nav-item dropdown">
            <a className="nav-icon dropdown-toggle" href="#" id="alertsDropdown" data-bs-toggle="dropdown">
                <div className="position-relative">
                    <Bell className="align-middle" />
                    <span className="indicator">4</span>
                </div>
            </a>
            <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end py-0" aria-labelledby="alertsDropdown">
                <div className="dropdown-menu-header">
                    4 New Notifications
                </div>
                <div className="list-group">
                    <a href="#" className="list-group-item">
                        <div className="row g-0 align-items-center">
                            <div className="col-2">
                                <AlertCircle className="text-danger" />
                            </div>
                            <div className="col-10">
                                <div className="text-dark">Update completed</div>
                                <div className="text-muted small mt-1">Restart server 12 to complete the update.</div>
                                <div className="text-muted small mt-1">30m ago</div>
                            </div>
                        </div>
                    </a>
                    <a href="#" className="list-group-item">
                        <div className="row g-0 align-items-center">
                            <div className="col-2">
                                <Bell className="text-warning" />
                            </div>
                            <div className="col-10">
                                <div className="text-dark">Lorem ipsum</div>
                                <div className="text-muted small mt-1">Aliquam ex eros, imperdiet vulputate hendrerit et.</div>
                                <div className="text-muted small mt-1">2h ago</div>
                            </div>
                        </div>
                    </a>
                    <a href="#" className="list-group-item">
                        <div className="row g-0 align-items-center">
                            <div className="col-2">
                                <Home className="text-primary" />
                            </div>
                            <div className="col-10">
                                <div className="text-dark">Login from 192.186.1.8</div>
                                <div className="text-muted small mt-1">5h ago</div>
                            </div>
                        </div>
                    </a>
                    <a href="#" className="list-group-item">
                        <div className="row g-0 align-items-center">
                            <div className="col-2">
                                <UserPlus className="text-success" />
                            </div>
                            <div className="col-10">
                                <div className="text-dark">New connection</div>
                                <div className="text-muted small mt-1">Christina accepted your request.</div>
                                <div className="text-muted small mt-1">14h ago</div>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="dropdown-menu-footer">
                    <a href="#" className="text-muted">Show all notifications</a>
                </div>
            </div>
        </li>
    );
}

export default Notifications;