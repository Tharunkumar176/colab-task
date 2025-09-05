import React from "react";
import { Tabs } from "antd";
import Projects from "./Projects";

function Profile() {
    return (
        <Tabs
            defaultActiveKey="1"
            items={[
                {
                    label: "Projects",
                    key: "1",
                    children: <Projects />,
                },
                {
                    label: "General",
                    key: "2",
                    children: "General",
                },
            ]}
        />
    );
}

export default Profile;
