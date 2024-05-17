import React from "react";
import clsx from "clsx";
import style from './admin.module.css';
import FormLoginAdmin from "@/components/formLoginAdmin"

const adminPage = () => {
    return (
        <div className={clsx(style.adminPage)}>
            <FormLoginAdmin />
        </div>
    )
}

export default adminPage;