import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function Home() {
  return (
    <div>
      {/* 轮播图 */}
      <div className="row">
        <div className="col">
          <div id="carouselExampleAutoplaying" className="carousel slide carousel-fade" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="/image/1.jpg" className="d-block w-100 " alt="..." style={{ height: '300px', objectFit: 'fill' }} />
              </div>
              <div className="carousel-item">
                <img src="/image/2.jpg" className="d-block w-100" alt="..." style={{ height: '300px', objectFit: 'fill' }} />
              </div>
              <div className="carousel-item">
                <img src="/image/3.jpg" className="d-block w-100" alt="..." style={{ height: '300px', objectFit: 'fill' }} />
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
      {/* second row */}
      <div className="row ">
        <h2>
        coming soon....
        </h2>

      </div>
    </div>

  )
}
