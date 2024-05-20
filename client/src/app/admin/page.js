'use client';
import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import style from './admin.module.css';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import SiderBarAdminPage from '@/components/siderbarAdminPage';

const AdminPage = () => {
    const router = useRouter();
    useEffect(() => {
        const token = Cookies.get('token');
        if(!token) {
            router.push('/admin/login')
        }
    }, [router])
    return (
        <div className={clsx(style.adminPage)}>
            <div className={clsx(style.siderBar)}>
                <SiderBarAdminPage />
            </div>
            <div className={clsx(style.mainContainer)}></div>
        </div>
    );
};

export default AdminPage;
