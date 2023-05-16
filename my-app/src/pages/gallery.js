import React from "react";
class Gallery extends React.Component{
    render(){
        return(
            <div>
          {/* <!--  ************************* Page Title Starts Here ************************** --> */}
               <div className="page-nav no-margin row">
                   <div className="container">
                       <div className="row">
                           <h2>Our Gallery</h2>
                           <ul>
                               <li> <a href="#"><i className="fas fa-home"></i> Home</a></li>
                               <li><i className="fas fa-angle-double-right"></i> Our Gallery</li>
                           </ul>
                       </div>
                   </div>
               </div>
       
         {/* <!-- ######## Page  Title End ####### --> */}
         
      
    {/* <!-- ################# Our Blog Starts Here#######################---> */}

     {/* <!--  ************************* Gallery Starts Here ************************** --> */}
        <div className="gallery">    
           <div className="container">
              <div className="row">
                




            <div className="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter hdpe">
                <img src="assets/images/gallery/gallery_01.jpg" className="img-responsive"/>
            </div>

            <div className="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter sprinkle">
                <img src="assets/images/gallery/gallery_02.jpg" className="img-responsive"/>
            </div>

            <div className="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter hdpe">
                <img src="assets/images/gallery/gallery_03.jpg" className="img-responsive"/>
            </div>

            <div className="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter irrigation">
                <img src="assets/images/gallery/gallery_04.jpg" className="img-responsive"/>
            </div>

            <div className="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter spray">
                <img src="assets/images/gallery/gallery_05.jpg" className="img-responsive"/>
            </div>

          

            <div className="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter spray">
                <img src="assets/images/gallery/gallery_06.jpg" className="img-responsive"/>
            </div>

            <div className="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter irrigation">
                <img src="assets/images/gallery/gallery_06.jpg" className="img-responsive"/>
            </div>

            <div className="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter irrigation">
                <img src="assets/images/gallery/gallery_08.jpg" className="img-responsive"/>
            </div>

            <div className="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter hdpe">
                <img src="assets/images/gallery/gallery_09.jpg" className="img-responsive"/>
            </div>

            <div className="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter spray">
                <img src="assets/images/gallery/gallery_10.jpg" className="img-responsive"/>
            </div>

            <div className="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter sprinkle">
                <img src="assets/images/gallery/gallery_11.jpg" className="img-responsive"/>
            </div>
            <div className="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter sprinkle">
                <img src="assets/images/gallery/gallery_12.jpg" className="img-responsive"/>
            </div>
        </div>
    </div>
       
       
       </div>
        {/* <!-- ######## Gallery End ####### --> */}
            </div>
        );
    }
}

export default Gallery;