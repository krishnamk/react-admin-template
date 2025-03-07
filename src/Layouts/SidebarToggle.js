import React, { useState, useEffect } from "react";

const SidebarToggle = () => {
    const [isSidebarEnabled, setSidebarEnabled] = useState(false);
    const [isCollapsed, setCollapsed] = useState(false);

    const handleSidebarToggle = () => {
        setSidebarEnabled((prev) => !prev);

        if (window.innerWidth >= 992) {
            setCollapsed((prev) => !prev);
        } else {
            setCollapsed(false);
        }
    };

    useEffect(() => {
        // Update body classes based on state
        if (isSidebarEnabled) {
            document.body.classList.add("sidebar-enable");
        } else {
            document.body.classList.remove("sidebar-enable");
        }

        if (isCollapsed) {
            document.body.classList.add("vertical-collapsed");
        } else {
            document.body.classList.remove("vertical-collapsed");
        }
    }, [isSidebarEnabled, isCollapsed]);

    return (
        <button  className="btn btn-sm px-3 font-size-16 header-item waves-effect"   onClick={handleSidebarToggle}>
            <i className="fa fa-fw fa-bars"></i>
        </button>
    );
};

export default SidebarToggle;
