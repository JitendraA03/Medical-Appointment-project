import React from "react";

class Home extends React.Component{
    render() {
        return (
     <div>   
<div className="slider-detail">

<div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
    <ol className="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    </ol>
    <div className="carousel-inner">
        <div className="carousel-item ">
            <img className="d-block w-100" src="assets/images/slider/slider_1.jpg" alt="First slide"/>
            <div className="carousel-caption fvgb d-none d-md-block">
                <h5 className="animated bounceInDown">Doctor's Clinic Appointment </h5>
                <p className="animated bounceInLeft">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam justo neque,  <br/>
                aliquet sit amet elementum vel, vehicula eget eros. Vivamus arcu metus, mattis <br/>
                 sed sagittis at, sagittis quis neque. Praesent.</p>
                 
                 <div className="row vbh">
                     
                     <div className="btn btn-info animated bounceInUp"> Book an Appointment </div>
                 </div>
            </div>
        </div>
        
        <div className="carousel-item active">
            <img className="d-block w-100" src="./assets/images/slider/slider_3.jpg" alt="Third slide"/>
             <div className="carousel-caption vdg-cur d-none d-md-block">
                <h5 className="animated bounceInDown">Doctor's Clinic Appointment</h5>
                <p className="animated bounceInLeft">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam justo neque,  <br/>
                aliquet sit amet elementum vel, vehicula eget eros. Vivamus arcu metus, mattis <br/>
                 sed sagittis at, sagittis quis neque. Praesent.</p>
                 
                 <div className="row vbh">
                     
                      <a href="hospital_online_appointment/index.html"><button className="btn btn-info animated bounceInUp">Book an Appointment</button></a> 
                 </div>
            </div>
        </div>
        
    </div>
    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
    </a>
    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
    </a>
</div>


</div>

{/* <!-- ################# Key Features Starts Here#######################---> */}

<section className="key-features"> 
    <div className="row no-margin">
        <div className="col-lg-3 kvxol col-md-6">
            <div className="single-key ky-1">
                <i className="fas fa-hospital-alt"></i>
                <h5>Newest Technologies</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut erat nec leo lobortis blandit.</p>
            </div>
        </div>

        <div className="col-lg-3 kvxol  col-md-6">
            <div className="single-key ky-2">
                <i className="fas fa-user-md"></i>
                <h5>Experianced Doctors</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut erat nec leo lobortis blandit.</p>
            </div>
        </div>

        <div className="col-lg-3 kvxol col-md-6">
            <div className="single-key ky-1">
                <i className="fas fa-briefcase-medical"></i>
                <h5>High Customer Satisfaction</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut erat nec leo lobortis blandit.</p>
            </div>
        </div>

        <div className="col-lg-3 kvxol col-md-6">
            <div className="single-key ky-2">
                <i className="fas fa-capsules"></i>
                <h5>Pharma Pipeline</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut erat nec leo lobortis blandit.</p>
            </div>
        </div>


       
    </div>
</section>

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
            <img src="./assets/images/why.jpg" alt=""/>
        </div>
    </div>
</div>
</section>


{/* <!-- ################# Our Departments Starts Here#######################---> */}


<section className="key-features department">
<div className="container">
    <div className="inner-title">

        <h2>Our Key Features</h2>
        <p>Take a look at some of our key features</p>
    </div>

    <div className="row">
        <div className="col-lg-4 col-md-6">
            <div className="single-key">
                <i className="fas fa-heartbeat"></i>
                <h5>Cardiology</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut erat nec leo lobortis blandit.</p>
            </div>
        </div>

        <div className="col-lg-4 col-md-6">
            <div className="single-key">
                <i className="fas fa-ribbon"></i>
                <h5>Orthopaedic</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut erat nec leo lobortis blandit.</p>
            </div>
        </div>

        <div className="col-lg-4 col-md-6">
            <div className="single-key">
               <i className="fab fa-monero"></i>
                <h5>Neurologist</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut erat nec leo lobortis blandit.</p>
            </div>
        </div>

        <div className="col-lg-4 col-md-6">
            <div className="single-key">
                <i className="fas fa-capsules"></i>
                <h5>Pharma Pipeline</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut erat nec leo lobortis blandit.</p>
            </div>
        </div>

        <div className="col-lg-4 col-md-6">
            <div className="single-key">
                <i className="fas fa-prescription-bottle-alt"></i>
                <h5>Pharma Team</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut erat nec leo lobortis blandit.</p>
            </div>
        </div>



        <div className="col-lg-4 col-md-6">
            <div className="single-key">
                <i className="far fa-thumbs-up"></i>
                <h5>High Quality treatments</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut erat nec leo lobortis blandit.</p>
            </div>
        </div>
    </div>






</div>

</section>


{/* <!-- ################# Our Blog Starts Here#######################---> */}

<section className="our-blog">
     <div className="container">
         <div className="row session-title">
            <h2> Our Blog </h2>
            <p>Take a look at what people say about US </p>
        </div>
        <div className="blog-row row">
            <div className="col-lg-4 col-md-6">
                <div className="single-blog">
                    <figure>
                        <img src="./assets/images/blog/blog_01.jpg" alt=""/>
                    </figure>
                    <div className="blog-detail">
                        <small>By Admin | August 10 2018</small>
                        <h4>Methods of Recuirtments</h4>
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam justo neque, aliquet sit amet elementum vel, vehicula eget eros. Vivamus arcu metus, mattis sed sagittis at, sagittis quis neque. Praesent.</p>
                        <div className="link">
                            <a href="">Read more </a><i className="fas fa-long-arrow-alt-right"></i>
                        </div>
                    </div>
                    
                    
                </div>
            </div>
            <div className="col-lg-4 col-md-6">
                <div className="single-blog">
                    <figure>
                        <img src="./assets/images/blog/blog_02.jpg" alt=""/>
                    </figure>
                    <div className="blog-detail">
                        <small>By Admin | August 10 2018</small>
                        <h4>Methods of Recuirtments</h4>
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam justo neque, aliquet sit amet elementum vel, vehicula eget eros. Vivamus arcu metus, mattis sed sagittis at, sagittis quis neque. Praesent.</p>
                        <div className="link">
                            <a href="">Read more </a><i className="fas fa-long-arrow-alt-right"></i>
                        </div>
                    </div>
                    
                    
                </div>
            </div>
            <div className="col-lg-4 col-md-6">
                <div className="single-blog">
                    <figure>
                        <img src="assets/images/blog/blog_03.jpg" alt=""/>
                    </figure>
                    <div className="blog-detail">
                        <small>By Admin | August 10 2018</small>
                        <h4>Methods of Recuirtments</h4>
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam justo neque, aliquet sit amet elementum vel, vehicula eget eros. Vivamus arcu metus, mattis sed sagittis at, sagittis quis neque. Praesent.</p>
                        <div className="link">
                            <a href="">Read more </a><i className="fas fa-long-arrow-alt-right"></i>
                        </div>
                    </div>
                    
                    
                </div>
            </div>
        </div>
     </div>
 </section>
</div>);
    }
}

export default Home;