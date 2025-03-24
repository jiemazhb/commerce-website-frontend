import React, { useState } from 'react';
import AboutMe from './aboutMe';
import Overview from './overview';
import TechStack from './techStack';

export default function Introduction() {
    // 定义初始样式和悬停样式
    const initialStyle = {
        transition: 'transform 0.3s, box-shadow 0.3s',
        transform: 'scale(1)',
        boxShadow: 'none',
        backgroundColor: '#f9f9f9',
        borderRadius: '8px',
        padding: '20px',
    };

    const hoverStyle = {
        transform: 'scale(1.05)',
        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.2)',
        backgroundColor: '#eef2ff',
    };

    // 使用状态来控制每个卡片的悬停状态
    const [style1, setStyle1] = useState(initialStyle);
    const [style2, setStyle2] = useState(initialStyle);
    const [style3, setStyle3] = useState(initialStyle);

    return (
        <section className="py-8 py-md-11 mb-5 mt-5">
            <div className="row ">
                <div
                    className="col-12 col-md-4"
                    style={style1}
                    onMouseEnter={() => setStyle1({ ...initialStyle, ...hoverStyle })}
                    onMouseLeave={() => setStyle1(initialStyle)}
                >
                    <AboutMe />
                </div>

                <div
                    className="col-12 col-md-4"
                    style={style2}
                    onMouseEnter={() => setStyle2({ ...initialStyle, ...hoverStyle })}
                    onMouseLeave={() => setStyle2(initialStyle)}
                >
                    <Overview />
                </div>

                <div
                    className="col-12 col-md-4"
                    style={style3}
                    onMouseEnter={() => setStyle3({ ...initialStyle, ...hoverStyle })}
                    onMouseLeave={() => setStyle3(initialStyle)}
                >
                    <TechStack />
                </div>
            </div>
        </section>
    );
}


// import React from 'react'
// import AboutMe from './aboutMe'
// import Overview from './overview'
// import TechStack from './techStack'
// export default function Introduction() {
//     return (
//         <>
//             <section className="py-8 py-md-11 mb-5  mt-5">

//                     <div className="row">
//                         <AboutMe />
//                         <Overview/>
//                         <TechStack/>
//                     </div>

//             </section>

//         </>
//     )
// }