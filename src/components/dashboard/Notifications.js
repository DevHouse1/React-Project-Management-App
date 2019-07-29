import React from 'react';

const Notifications = (props) => {
    const { notifications } = props;
    const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' , hour:'2-digit' , minute:'2-digit'};
    return (
        <div className="section">
            <div className="card transparent z-depth-1 project-summary">
                <div className="card-content grey-text text-darken-3">
                    <span className="card-title">  Notifications </span>
                    <ul className="notifications">
                        {notifications && notifications.map(notif => {
                            return (
                                <li key={notif.id}>
                                    <span className="pink-text">{notif.user} :</span>
                                    <span>{notif.content}</span>
                                    <div className="grey-text note-date">
                                        {notif.time.toDate().toLocaleDateString('en-US', options)}
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>

        </div>
    );
}

export default Notifications;