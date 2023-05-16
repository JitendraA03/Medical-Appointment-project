import React from "react";
import {Helmet} from 'react-helmet';
import './appointment.css';
class Appointment extends React.Component{
    render(){
        return(
    <div className="appointmentClass">
   <Helmet>
                <style>{'body{width: 100%;height:100%;overflow: hidden;background-color:red;background-image: url("./background.jpg"))} '}</style>
            </Helmet>
            <body><h2>Sup bro</h2>
            <p>Hello World.</p>
                
            </body>
   
    </div>
        );
    }
}
export default Appointment;
