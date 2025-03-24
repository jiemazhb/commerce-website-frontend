import React from 'react'

export default function TechStack() {
    return (
        <>
            <div className="aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">


                <div className="icon text-primary mb-3">
                    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><path d="M0 0h24v24H0z"></path><path d="M17.272 8.685a1 1 0 111.456-1.37l4 4.25a1 1 0 010 1.37l-4 4.25a1 1 0 01-1.456-1.37l3.355-3.565-3.355-3.565zm-10.544 0L3.373 12.25l3.355 3.565a1 1 0 01-1.456 1.37l-4-4.25a1 1 0 010-1.37l4-4.25a1 1 0 011.456 1.37z" fill="#335EEA"></path><rect fill="#335EEA" opacity=".3" transform="rotate(15 12 12)" x="11" y="4" width="2" height="16" rx="1"></rect></g></svg>            </div>


                <h5>
                    Tech Stack & Implementation
                </h5>


                <p className="text-body-secondary mt-3 mb-6 mb-md-0">
                Built with Java, Spring Boot, Docker, and MySQL to handle high concurrency efficiently. The architecture demonstrates the practical application of modern microservices.
                </p>

            </div>
        </>
    )
}
