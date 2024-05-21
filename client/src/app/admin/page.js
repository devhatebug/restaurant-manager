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
            <img src="https://i.gifer.com/Al3B.gif" alt="" />
        </div>
    );
};

export default AdminPage;
