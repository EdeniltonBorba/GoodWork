import React from 'react';

const CardPhoto = {
    marginTop: -100,
    marginLeft: 15,
    position: "relative",
};

export function UserProfile() {

    return (

        <div className="ember-view">
            <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" className="hidden" data-elementtiming="true" alt=""></img>
            <section className="pv-top-card artdeco-card ember-view">
                <div tabindex="0" class="profile-background-image ember-view">
                    <div className="profile-background-image__image-container">
                        <img className="profile-background-image__image relative full-width full-height" alt="Background Image" src="https://media-exp1.licdn.com/dms/image/C5616AQEqfoe9Kflu6g/profile-displaybackgroundimage-shrink_200_800/0?e=1588809600&amp;v=beta&amp;t=rt61dyly1_EDXzjRDdcxFk9_nQHFY4-AMbnW4zSXF5A"></img>
                    </div>
                </div>
            </section>

            <div className="ph5 pb5">
                <div className="display-flex">
                    <div className="pv-top-card--photo" style={CardPhoto} >
                        <div className="pv-top-card__photo-wrapper ml0">
                            <div className="pv-top-card__edit-photo profile-photo-edit ember-view">
                                <img width="128" src="https://media-exp1.licdn.com/dms/image/C5603AQEUdIdRc930yA/profile-displayphoto-shrink_200_200/0?e=1588809600&amp;v=beta&amp;t=bDmNrZkNFhaRZTh4U6rQ4w0TzCMbrSYWvJbH9eLwvNg" height="128" alt="Edit photo" id="ember3064" className="profile-photo-edit__preview ember-view">
                                </img>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default UserProfile;