import React from 'react';
import { Link } from "react-router-dom";
import './CardProfile.css';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PersonIcon from '@material-ui/icons/Person';

const CardPhoto = {
    marginTop: -100,
    marginLeft: 15,
    position: "relative",
    borderStyle: "solid",
    borderColor: "aliceblue",

};


export function UserProfile() {

    return (
        <>
            <div className="ember-view">
                <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" className="hidden" data-elementtiming="true" alt=""></img>
                <section className="pv-top-card artdeco-card ember-view">
                    <div tabindex="0" ClassName="profile-background-image ember-view">
                        <div className="profile-background-image__image-container">
                            <img className="profile-background relative full-width full-height" alt="Background" src="https://media-exp1.licdn.com/dms/image/C5616AQEqfoe9Kflu6g/profile-displaybackgroundimage-shrink_200_800/0?e=1588809600&amp;v=beta&amp;t=rt61dyly1_EDXzjRDdcxFk9_nQHFY4-AMbnW4zSXF5A"></img>
                        </div>
                    </div>
                </section>

                <div className="ph5 pb5">
                    <div className="display-flex">
                        <div className="pv-top-card--photo">
                            <div className="pv-top-card__photo-wrapper ml0">
                                <div className="pv-top-card__edit-photo profile-photo-edit ember-view">
                                    <img width="128" style={CardPhoto} src="https://media-exp1.licdn.com/dms/image/C5603AQEUdIdRc930yA/profile-displayphoto-shrink_200_200/0?e=1588809600&amp;v=beta&amp;t=bDmNrZkNFhaRZTh4U6rQ4w0TzCMbrSYWvJbH9eLwvNg" height="128" alt="Edit" id="ember3064" className="profile-edit__preview ember-view">
                                    </img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="DetailsProfile">
                <PersonIcon /><span>Edenilton Borba</span>
                <br />
                <MailOutlineIcon /><span>edeniltonborba.adm@gmail.com</span>
            </div>
            <div>
                <Link to="/"><button className="ButtonOut">Sign Out</button></Link>
            </div>
        </>
    )
}

export default UserProfile;