import React from 'react';
import Navbar from './navbar'; // 导入导航栏组件
import { Outlet } from 'react-router-dom';
import Footer from './footer'

import { ProductProvider } from './productContext';


function MainLayout() {
    return (
        <>
            <Navbar />

                <ProductProvider>
                <div className="container-md">
                    <div className='row'>
                        <Outlet /> {/* 这个 Outlet 将渲染匹配的子路由组件 */}
                    </div>

                    {/* footer */}
                    <div className='row'>
                        <Footer />
                    </div>
                </div>
                </ProductProvider>

        </>
    );
}

export default MainLayout;
