import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { connect } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';

class NotificationComponent extends Component{
    constructor(props){
        super(props);
    }

    generateNotification(notification){
        switch (notification.type.toUpperCase()) {
            case "SUCCESS":
                return toast.success(notification.message);
            case "INFO":
                return toast.info(notification.message);
            case "ERROR":
                return toast.error(notification.message);
            case "WARNING":
                return toast.warning(notification.message);
            deafult:
                return null
        }
    }

    componentWillReceiveProps(newNotifications){
        Object.keys(newNotifications.notifications).map((notificationId) => {
            this.generateNotification(newNotifications.notifications[notificationId]);
        });
    }

    render(){
        return(
            <ToastContainer position={toast.POSITION.TOP_CENTER}/>
        )
    }
    
}


const mapStateToProps = ({ notifications }) => {
    return {
        notifications
    }
}

export default connect(mapStateToProps)(NotificationComponent);