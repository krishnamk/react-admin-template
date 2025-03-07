import {MessageSquare} from "react-feather";
import React from "react";

function Messages(props) {
    return (
        <li className="nav-item dropdown">
            <a className="nav-icon dropdown-toggle" href="#" id="messagesDropdown" data-bs-toggle="dropdown">
                <div className="position-relative">
                    <MessageSquare className="align-middle" />
                    <span className="indicator">{props.Messages.length}</span>
                </div>
            </a>
            <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end py-0" aria-labelledby="messagesDropdown">
                <div className="dropdown-menu-header">
                    <div className="position-relative">
                        {props.Messages.length?props.Messages.length:'No'} New Messages
                    </div>
                </div>
                <div className="list-group">
                    {
                        props.Messages.map((message, index) => (
                            <a href="#" className="list-group-item" key={index}>
                                <div className="row g-0 align-items-center">
                                    <div className="col-2">
                                        <img src={message.image} className="avatar img-fluid rounded-circle" alt={message.username}/>
                                    </div>
                                    <div className="col-10 ps-2">
                                        <div className="text-dark">{message.username}</div>
                                        <div className="text-muted small mt-1">{message.message}</div>
                                        <div className="text-muted small mt-1">{message.time}</div>
                                    </div>
                                </div>
                            </a>
                        ))
                    }
                </div>
                <div className="dropdown-menu-footer" style={{ visibility: props.Messages.length?"visible":"hidden" }}>
                    <a href="allmessages" className="text-muted">Show all messages</a>
                </div>
            </div>
        </li>
    )
}

export default Messages;