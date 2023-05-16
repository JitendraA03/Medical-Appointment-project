import React from "react";

class About_us extends React.Component{
    render() {
        return(
    <div>
         {/* <!--  ************************* Page Title Starts Here ************************** --> */}
               <div className="page-nav no-margin row">
                   <div className="container">
                       <div className="row">
                           <h2>About Our Homeopathy Clinic</h2>
                           <ul>
                               <li> <a href="#"><i className="fas fa-home"></i> Home</a></li>
                               <li><i className="fas fa-angle-double-right"></i> About Us</li>
                           </ul>
                       </div>
                   </div>
               </div>
       
         {/* <!-- ######## Page  Title End ####### --> */}
         
         {/* <!-- ################# With Medical Starts Here#######################---> */}

    <section className="with-medical">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-md-12 txtr">
                    <h4>Why choos Health Care with <br/>
                     <span>Medical Hospital</span>   
                    </h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer neque libero, pulvinar et elementum quis, facilisis eu ante. Mauris non placerat sapien. Pellentesque tempor arcu non odio scelerisque ullamcorper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam varius eros consequat auctor gravida. Fusce tristique lacus at urna sollicitudin pulvinar. Suspendisse hendrerit ultrices mauris.</p>
                    <p>Ut ultricies lacus a rutrum mollis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed porta dolor quis felis pulvinar dignissim. Etiam nisl ligula, ullamcorper non metus vitae, maximus efficitur mi. Vivamus ut ex ullamcorper, scelerisque lacus nec, commodo dui. Proin massa urna, volutpat vel augue eget, iaculis tristique dui. </p>
                </div>
                <div className="col-lg-6 col-md-12">
                    <img src="assets/images/why.jpg" alt=""/>
                </div>
            </div>
        </div>
    </section>
    
        {/* <!-- ################# Key Features Starts Here#######################---> */}

    <section className="key-features"> 
            <div className="row no-margin">
                <div className="col-md-3 kvxol col-sm-6">
                    <div className="single-key ky-1">
                        <i className="fas fa-hospital-alt"></i>
                        <h5>Newest Technologies</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut erat nec leo lobortis blandit.</p>
                    </div>
                </div>

                <div className="col-md-3 kvxol  col-sm-6">
                    <div className="single-key ky-2">
                        <i className="fas fa-user-md"></i>
                        <h5>Experianced Doctors</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut erat nec leo lobortis blandit.</p>
                    </div>
                </div>

                <div className="col-md-3 kvxol col-sm-6">
                    <div className="single-key ky-1">
                        <i className="fas fa-briefcase-medical"></i>
                        <h5>High Customer Satisfaction</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut erat nec leo lobortis blandit.</p>
                    </div>
                </div>

                <div className="col-md-3 kvxol col-sm-6">
                    <div className="single-key ky-2">
                        <i className="fas fa-capsules"></i>
                        <h5>Pharma Pipeline</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut erat nec leo lobortis blandit.</p>
                    </div>
                </div>

     
               
            </div>
    </section>
    
     {/* <!-- ################# Our Team Starts Here#######################---> */}


    <section className="our-team">
        <div className="container">
            <div className="inner-title">
                <h2>Meet our Team</h2>
                <p>Take a look at our innovative and experiance team</p>
            </div>
            <div className="row team-member">
                <div className="col-md-3 col-sm-6">
                    <div className="user-card">
                        <div className="userar">
                            <img className="teammempic" alt="" src="assets/images/team/team-memb1.jpg"/>
                        </div>
                        <div className="detfs">
                            <p>Mark Frances<i> - MD</i></p>
                            <ul>
                                <li><a href="#"><i className="fab fa-facebook-f fa-lg"></i></a></li>
                                <li><a href="#"><i className="fab fa-twitter fa-lg"></i></a></li>
                                <li><a href="#"><i className="fab fa-google-plus-g fa-lg"></i></a></li>
                                <li><a href="#"><i className="fab fa-github fa-lg"></i></a></li>
                                <li><a href="#"><i className="fab fa-pinterest-p fa-lg"></i></a></li>
                            </ul>
                            <br/>
                            <p >3+ Years of Experiance in PHP with good innovative Ideas</p>

                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6">
                    <div className="user-card">
                        <div className="userar">
                            <img className="teammempic" alt="" src="assets/images/team/team-memb2.jpg"/>
                        </div>
                        <div className="detfs">
                            <p>Mark Frances<i> - MD</i></p>
                            <ul>
                                <li><a href="#"><i className="fab fa-facebook-f fa-lg"></i></a></li>
                                <li><a href="#"><i className="fab fa-twitter fa-lg"></i></a></li>
                                <li><a href="#"><i className="fab fa-google-plus-g fa-lg"></i></a></li>
                                <li><a href="#"><i className="fab fa-github fa-lg"></i></a></li>
                                <li><a href="#"><i className="fab fa-pinterest-p fa-lg"></i></a></li>
                            </ul>
                             <br/>
                            <p >3+ Years of Experiance in PHP with good innovative Ideas</p>

                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6">
                    <div className="user-card">
                        <div className="userar">
                            <img className="teammempic" alt="" src="assets/images/team/team-memb3.jpg"/>
                        </div>
                        <div className="detfs">
                            <p>Mark Frances<i> - MD</i></p>
                            <ul>
                                <li><a href="#"><i className="fab fa-facebook-f fa-lg"></i></a></li>
                                <li><a href="#"><i className="fab fa-twitter fa-lg"></i></a></li>
                                <li><a href="#"><i className="fab fa-google-plus-g fa-lg"></i></a></li>
                                <li><a href="#"><i className="fab fa-github fa-lg"></i></a></li>
                                <li><a href="#"><i className="fab fa-pinterest-p fa-lg"></i></a></li>
                            </ul>
                              <br/>   
                            <p >3+ Years of Experiance in PHP with good innovative Ideas</p>

                        </div>
                    </div>

                </div>
                <div className="col-md-3 col-sm-6">
                    <div className="user-card">
                        <div className="userar">
                            <img className="teammempic" alt="" src="assets/images/team/team-memb4.jpg"/>
                        </div>
                        <div className="detfs">
                            <p>Mark Frances<i> - MD</i></p>
                            <ul>
                                <li><a href="#"><i className="fab fa-facebook-f fa-lg"></i></a></li>
                                <li><a href="#"><i className="fab fa-twitter fa-lg"></i></a></li>
                                <li><a href="#"><i className="fab fa-google-plus-g fa-lg"></i></a></li>
                                <li><a href="#"><i className="fab fa-github fa-lg"></i></a></li>
                                <li><a href="#"><i className="fab fa-pinterest-p fa-lg"></i></a></li>
                            </ul>
                             <br/>   
                            <p >3+ Years of Experiance in PHP with good innovative Ideas</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    </div>
        );
    }
}

export default About_us;