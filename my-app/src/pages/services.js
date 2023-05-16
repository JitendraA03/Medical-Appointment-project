import React from "react";
class Services extends React.Component{
    render(){
        return(
            <div>
                 {/* <!--  ************************* Page Title Starts Here ************************** --> */}
               <div className="page-nav no-margin row">
                   <div className="container">
                       <div className="row">
                           <h2>Our Services</h2>
                           <ul>
                               <li> <a href="#"><i className="fas fa-home"></i> Home</a></li>
                               <li><i className="fas fa-angle-double-right"></i> Our Services</li>
                           </ul>
                       </div>
                   </div>
               </div>
       
         {/* <!-- ######## Page  Title End ####### --> */}
         
      
    <section className="key-features ky2 department">
        <div className="container">
            <div className="inner-title">

                <h2>Our Key Features</h2>
                <p>Take a look at some of our key features</p>
            </div>

            <div className="row">
                <div className="col-md-4 col-sm-6">
                    <div className="single-key">
                        <i className="fas fa-heartbeat"></i>
                        <h5>Cardiology</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut erat nec leo lobortis blandit.</p>
                    </div>
                </div>

                <div className="col-md-4 col-sm-6">
                    <div className="single-key">
                        <i className="fas fa-ribbon"></i>
                        <h5>Orthopaedic</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut erat nec leo lobortis blandit.</p>
                    </div>
                </div>

                <div className="col-md-4 col-sm-6">
                    <div className="single-key">
                       <i className="fab fa-monero"></i>
                        <h5>Neurologist</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut erat nec leo lobortis blandit.</p>
                    </div>
                </div>

                <div className="col-md-4 col-sm-6">
                    <div className="single-key">
                        <i className="fas fa-capsules"></i>
                        <h5>Pharma Pipeline</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut erat nec leo lobortis blandit.</p>
                    </div>
                </div>

                <div className="col-md-4 col-sm-6">
                    <div className="single-key">
                        <i className="fas fa-prescription-bottle-alt"></i>
                        <h5>Pharma Team</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut erat nec leo lobortis blandit.</p>
                    </div>
                </div>



                <div className="col-md-4 col-sm-6">
                    <div className="single-key">
                        <i className="far fa-thumbs-up"></i>
                        <h5>High Quality treatments</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut erat nec leo lobortis blandit.</p>
                    </div>
                </div>
            </div>






        </div>

    </section>
            </div>
        );
    }
}
export default Services;