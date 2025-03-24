import React from 'react'

export default function Footer() {
  return (
    <>
     <footer className="bg-light mt-5">
    <div className="container pb-1 pb-lg-7">
      <div className="row content-space-t-2">
        <div className="col-lg-3 mb-7 mb-lg-0">

          <div className="mb-5">
            <a className="navbar-brand" href="./index.html" aria-label="Space">
              {/* <img className="navbar-brand-logo" src="" alt="Image Description"/> */}
            </a>
          </div>



          <ul className="list-unstyled list-py-1">
            <li><a className="link-sm link-secondary" href="#"><i className="bi-geo-alt-fill me-1"></i> 000 Lambert Ave, Los Angeles</a></li>
            <li><a className="link-sm link-secondary" href="tel:1-062-109-9222"><i className="bi-telephone-inbound-fill me-1"></i> +1 (000) 000-0000</a></li>
          </ul>


        </div>


        <div className="col-sm mb-7 mb-sm-0">
          <h5 className="mb-3">Company</h5>


          <ul className="list-unstyled list-py-1 mb-0">
            <li><a className="link-sm link-secondary" href="#">About</a></li>
            <li><a className="link-sm link-secondary" href="#">Careers</a></li>
            <li><a className="link-sm link-secondary" href="#">Blog</a></li>
            <li><a className="link-sm link-secondary" href="#">Customers <i className="bi-box-arrow-up-right small ms-1"></i></a></li>
            <li><a className="link-sm link-secondary" href="#">Hire us</a></li>
          </ul>

        </div>


        <div className="col-sm mb-7 mb-sm-0">
          <h5 className="mb-3">Features</h5>


          <ul className="list-unstyled list-py-1 mb-0">
            <li><a className="link-sm link-secondary" href="#">Press <i className="bi-box-arrow-up-right small ms-1"></i></a></li>
            <li><a className="link-sm link-secondary" href="#">Release Notes</a></li>
            <li><a className="link-sm link-secondary" href="#">Integrations</a></li>
            <li><a className="link-sm link-secondary" href="#">Pricing</a></li>
          </ul>

        </div>


        <div className="col-sm mb-7 mb-sm-0">
          <h5 className="mb-3">Documentation</h5>


          <ul className="list-unstyled list-py-1 mb-0">
            <li><a className="link-sm link-secondary" href="#">Support</a></li>
            <li><a className="link-sm link-secondary" href="#">Docs</a></li>
            <li><a className="link-sm link-secondary" href="#">Status</a></li>
            <li><a className="link-sm link-secondary" href="#">API Reference</a></li>
            <li><a className="link-sm link-secondary" href="#">Tech Requirements</a></li>
          </ul>

        </div>


        <div className="col-sm">
          <h5 className="mb-3">Resources</h5>


          <ul className="list-unstyled list-py-1 mb-5">
            <li><a className="link-sm link-secondary" href="#"><i className="bi-question-circle-fill me-1"></i> Help</a></li>
            <li><a className="link-sm link-secondary" href="#"><i className="bi-person-circle me-1"></i> Your Account</a></li>
          </ul>

        </div>

      </div>


      <div className="border-top my-7 mt-3 mb-3"></div>

      <div className="w-md-85 text-lg-center mx-lg-auto">
        <p className="text-muted small">© Front. 2021 Htmlstream. All rights reserved.</p>
        <p className="text-muted small">When you visit or interact with our sites, services or tools, we or our authorised service providers may use cookies for storing information to help provide you with a better, faster and safer experience and for marketing purposes.</p>
      </div>

    </div>
  </footer>   
    </>
  )
}
