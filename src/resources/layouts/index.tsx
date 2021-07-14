import React, { FC } from "react";
import AppLayout from "./AppLayout";

const layouts = {
    AppLayout: AppLayout,
};

interface LayoutProps {
    layoutType: "AppLayout";
}

export const Layout: FC<LayoutProps> = ({ children, layoutType }) => {

    let Component = layouts[layoutType] || React.Fragment;
    return <Component>{children}</Component>;

};
