import {MessageSquare} from "react-feather";
import React from "react";

function Messages() {
    return (
        <li className="nav-item dropdown">
            <a className="nav-icon dropdown-toggle" href="#" id="messagesDropdown" data-bs-toggle="dropdown">
                <div className="position-relative">
                    <MessageSquare className="align-middle" />
                </div>
            </a>
            <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end py-0" aria-labelledby="messagesDropdown">
                <div className="dropdown-menu-header">
                    <div className="position-relative">
                        4 New Messages
                    </div>
                </div>
                <div className="list-group">
                    <a href="#" className="list-group-item">
                        <div className="row g-0 align-items-center">
                            <div className="col-2">
                                <img src="img/avatars/avatar-5.jpg" className="avatar img-fluid rounded-circle" alt="Vanessa Tucker"/>
                            </div>
                            <div className="col-10 ps-2">
                                <div className="text-dark">Vanessa Tucker</div>
                                <div className="text-muted small mt-1">Nam pretium turpis et arcu. Duis arcu tortor.</div>
                                <div className="text-muted small mt-1">15m ago</div>
                            </div>
                        </div>
                    </a>
                    <a href="#" className="list-group-item">
                        <div className="row g-0 align-items-center">
                            <div className="col-2">
                                <img src="img/avatars/avatar-2.jpg" className="avatar img-fluid rounded-circle" alt="William Harris"/>
                            </div>
                            <div className="col-10 ps-2">
                                <div className="text-dark">William Harris</div>
                                <div className="text-muted small mt-1">Curabitur ligula sapien euismod vitae.</div>
                                <div className="text-muted small mt-1">2h ago</div>
                            </div>
                        </div>
                    </a>
                    <a href="#" className="list-group-item">
                        <div className="row g-0 align-items-center">
                            <div className="col-2">
                                <img src="img/avatars/avatar-4.jpg" className="avatar img-fluid rounded-circle" alt="Christina Mason"/>
                            </div>
                            <div className="col-10 ps-2">
                                <div className="text-dark">Christina Mason</div>
                                <div className="text-muted small mt-1">Pellentesque auctor neque nec urna.</div>
                                <div className="text-muted small mt-1">4h ago</div>
                            </div>
                        </div>
                    </a>
                    <a href="#" className="list-group-item">
                        <div className="row g-0 align-items-center">
                            <div className="col-2">
                                <img src="img/avatars/avatar-3.jpg" className="avatar img-fluid rounded-circle" alt="Sharon Lessman"/>
                            </div>
                            <div className="col-10 ps-2">
                                <div className="text-dark">Sharon Lessman</div>
                                <div className="text-muted small mt-1">Aenean tellus metus, bibendum sed, posuere ac, mattis non.</div>
                                <div className="text-muted small mt-1">5h ago</div>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="dropdown-menu-footer">
                    <a href="#" className="text-muted">Show all messages</a>
                </div>
            </div>
        </li>
    )
}

export default Messages;