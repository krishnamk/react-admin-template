
import React from "react";
import * as Icons from "react-feather";

const NotificationIcon = Icons['Bell'];
const toPascalCase = (str) => {
    return str
        .replace(/-([a-z])/g, (match, letter) => letter.toUpperCase()) // Convert kebab-case to camelCase
        .replace(/^./, (match) => match.toUpperCase()); // Capitalize first letter
};
function Notifications(props) {
    return (
        <li className="nav-item dropdown">
            <a className="nav-icon dropdown-toggle" href="#" id="alertsDropdown" data-bs-toggle="dropdown">
                <div className="position-relative">
                    <NotificationIcon className="align-middle" />
                    <span className="indicator">{props.Notifications.length}</span>
                </div>
            </a>
            <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end py-0" aria-labelledby="alertsDropdown" >
                <div className="dropdown-menu-header">
                    { props.Notifications.length?props.Notifications.length:'No'} New Notifications
                </div>
                <div className="list-group" style={{ visibility: props.Notifications.length ? "visible" : "hidden" }}>
                    {
                        props.Notifications.map((notification, index) => {
                            const IconComponent = Icons[toPascalCase(notification.icon)];
                            return (
                                <a href="#" className="list-group-item" key={index}>
                                    <div className="row g-0 align-items-center">
                                        <div className="col-2">
                                            {IconComponent ? <IconComponent className="text-danger" /> : null}
                                        </div>
                                        <div className="col-10">
                                            <div className="text-dark">{notification.heading}</div>
                                            <div className="text-muted small mt-1">{notification.description}</div>
                                            <div className="text-muted small mt-1">{notification.time}</div>
                                        </div>
                                    </div>
                                </a>
                            )
                        })
                    }
                </div>
                <div className="dropdown-menu-footer" style={{ visibility: props.Notifications.length ? "visible" : "hidden" }}>
                    <a href="allnotifications" className="text-muted">Show all notifications</a>
                </div>
            </div>
        </li>
    );
}

export default Notifications;