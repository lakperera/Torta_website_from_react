function Notification(){
    return(
        <div>
        <div className="notification-toast" data-toast>

                <button className="toast-close-btn" data-toast-close>
                <ion-icon name="close-outline"></ion-icon>
                </button>

                <div className="toast-banner">
                <img src="./assets/images/products/cake_notification.jpg" alt="Rose Gold Earrings" width="80" height="70"/>
                </div>

                <div className="toast-detail">

                    <p className="toast-message">
                        Someone in new just bought
                    </p>

                    <p className="toast-title">
                        Blak lovers!
                    </p>

                    <p className="toast-meta">
                        <time datetime="PT2M">2 Minutes</time> ago
                    </p>

                    </div>
        </div>
        </div>
    );
}

export default Notification;