import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    submit: {
        color: "white",
        backgroundColor: "#3f51b5",

    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },


}));

const getPrice = {
    display: "grid",
    margin: "5px 0 5px 0 ",
};


export function CardAppointmen() {
    const classes = useStyles();

    return (
        <div>
            <form className="quote-form">
                <div className="grid-container">
                    <div className="grid-x grid-padding-x">
                        <h3>Handyman Service</h3>
                        <div className="cell">
                            <div className="cell small-12" style={getPrice}>
                                <input type="text"
                                    className="placeholder" placeholder="ZIP Code" value="" name="zip"
                                    autocomplete="postal-code">
                                </input>
                            </div>

                            <h4>Tell us about the job</h4>
                            <div>
                                <div className="quote-form__questions"></div>
                                <div className="cell small-12" style={getPrice}><textarea className="placeholder" cols="40" rows="5"
                                    placeholder="Please describe the job in detail. (required)"></textarea></div>
                                <div>
                                    <h5>How many hours would you like to book?</h5>
                                    <div className="cell small-12" style={getPrice}><select>
                                        <option value="2">2 hours</option>
                                        <option value="2.5">2.5 hours</option>
                                        <option value="3">3 hours</option>
                                        <option value="3.5">3.5 hours</option>
                                        <option value="4">4 hours</option>
                                        <option value="4.5">4.5 hours</option>
                                        <option value="5">5 hours</option>
                                        <option value="5.5">5.5 hours</option>
                                        <option value="6">6 hours </option>
                                        <option value="6.5">6.5 hours</option>
                                        <option value="7">7 hours</option>
                                        <option value="7.5">7.5 hours</option>
                                        <option value="8">8 hours</option>
                                        <option value="8.5">8.5 hours</option>
                                        <option value="9">9 hours</option>
                                        <option value="9.5">9.5 hours</option>
                                        <option value="10">10 hours</option>
                                    </select></div>
                                </div>
                                <h5>When would you like us to come?</h5>
                                <div className="cell small-12">
                                    <div>
                                        <div className="show-for-medium" style={getPrice}><input type="text" required="" className="start-date "></input></div>
                                        <div className="caret-small-only show-for-small-only" style={getPrice}><select name="dateStart"
                                            className="form-input show-for-small-only" style={getPrice}>
                                            <option value="03/01/2020">Sun Mar 01</option>
                                            <option value="03/02/2020">Mon Mar 02</option>
                                            <option value="03/03/2020">Tue Mar 03</option>
                                            <option value="03/04/2020">Wed Mar 04</option>
                                            <option value="03/05/2020">Thu Mar 05</option>
                                            <option value="03/06/2020">Fri Mar 06</option>
                                            <option value="03/07/2020">Sat Mar 07</option>
                                            <option value="03/08/2020">Sun Mar 08</option>
                                            <option value="03/09/2020">Mon Mar 09</option>
                                            <option value="03/10/2020">Tue Mar 10</option>
                                            <option value="03/11/2020">Wed Mar 11</option>
                                            <option value="03/12/2020">Thu Mar 12</option>
                                            <option value="03/13/2020">Fri Mar 13</option>
                                            <option value="03/14/2020">Sat Mar 14</option>
                                            <option value="03/15/2020">Sun Mar 15</option>
                                            <option value="03/16/2020">Mon Mar 16</option>
                                            <option value="03/17/2020">Tue Mar 17</option>
                                            <option value="03/18/2020">Wed Mar 18</option>
                                            <option value="03/19/2020">Thu Mar 19</option>
                                            <option value="03/20/2020">Fri Mar 20</option>
                                            <option value="03/21/2020">Sat Mar 21</option>
                                            <option value="03/22/2020">Sun Mar 22</option>
                                            <option value="03/23/2020">Mon Mar 23</option>
                                            <option value="03/24/2020">Tue Mar 24</option>
                                            <option value="03/25/2020">Wed Mar 25</option>
                                            <option value="03/26/2020">Thu Mar 26</option>
                                            <option value="03/27/2020">Fri Mar 27</option>
                                            <option value="03/28/2020">Sat Mar 28</option>
                                            <option value="03/29/2020">Sun Mar 29</option>
                                            <option value="03/30/2020">Mon Mar 30</option>
                                            <option value="03/31/2020">Tue Mar 31</option>
                                            <option value="04/01/2020">Wed Apr 01</option>
                                            <option value="04/02/2020">Thu Apr 02</option>
                                            <option value="04/03/2020">Fri Apr 03</option>
                                            <option value="04/04/2020">Sat Apr 04</option>
                                            <option value="04/05/2020">Sun Apr 05</option>
                                            <option value="04/06/2020">Mon Apr 06</option>
                                            <option value="04/07/2020">Tue Apr 07</option>
                                            <option value="04/08/2020">Wed Apr 08</option>
                                            <option value="04/09/2020">Thu Apr 09</option>
                                            <option value="04/10/2020">Fri Apr 10</option>
                                            <option value="04/11/2020">Sat Apr 11</option>
                                            <option value="04/12/2020">Sun Apr 12</option>
                                            <option value="04/13/2020">Mon Apr 13</option>
                                            <option value="04/14/2020">Tue Apr 14</option>
                                        </select></div>
                                    </div>
                                </div>
                                <div className="cell small-12" style={getPrice}><select className="" name="quote_start_time">
                                    <option value="07:00">7:00 AM</option>
                                    <option value="07:30">7:30 AM</option>
                                    <option value="08:00">8:00 AM</option>
                                    <option value="08:30">8:30 AM</option>
                                    <option value="09:00">9:00 AM</option>
                                    <option value="09:30">9:30 AM</option>
                                    <option value="10:00">10:00 AM</option>
                                    <option value="10:30">10:30 AM</option>
                                    <option value="11:00">11:00 AM</option>
                                    <option value="11:30">11:30 AM</option>
                                    <option value="12:00">12:00 PM</option>
                                    <option value="12:30">12:30 PM</option>
                                    <option value="13:00">1:00 PM</option>
                                    <option value="13:30">1:30 PM</option>
                                    <option value="14:00">2:00 PM</option>
                                    <option value="14:30">2:30 PM</option>
                                    <option value="15:00">3:00 PM</option>
                                    <option value="15:30">3:30 PM</option>
                                    <option value="16:00">4:00 PM</option>
                                    <option value="16:30">4:30 PM</option>
                                    <option value="17:00">5:00 PM</option>
                                    <option value="17:30">5:30 PM</option>
                                    <option value="18:00">6:00 PM</option>
                                    <option value="18:30">6:30 PM</option>
                                    <option value="19:00">7:00 PM</option>
                                    <option value="19:30">7:30 PM</option>
                                    <option value="20:00">8:00 PM</option>
                                    <option value="20:30">8:30 PM</option>
                                    <option value="21:00">9:00 PM</option>
                                </select></div>
                                <div className="cell small-12" style={getPrice}><input type="email" className="placeholder" placeholder="Email Address"
                                    pattern="^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$" value="" name="email"
                                    autocomplete="email">
                                </input>
                                </div>
                                <div className="cell small-12" style={getPrice}><input type="tel" className="placeholder"
                                    placeholder="Phone Number (Optional)"
                                    pattern="^(1?)(-| ?)(\()?([0-9]{3})(\)|-| |\)-|\) )?([0-9]{3})(-| )?([0-9]{4}|[0-9]{4})$"
                                    name="phone" autocomplete="phone">
                                </input>
                                </div>
                            </div>
                            <div className="cell small-12 quote-form__button" style={getPrice}><button className={classes.submit} type="submit"
                                data-mixpanel-event="quote_request_submitted" data-mixpanel-trigger="click"
                                data-mixpanel-event-context="booking_funnel"
                                data-mixpanel-service-name="other_handyman_service" data-mixpanel-zipcode="">Get a
                            Price</button></div>
                        </div>
                    </div>
                </div>


                <p className="grid-container quote-form-description">By signing and clicking Get a Price, you affirm you have read
            and agree to the <a href="#" target="_blank">GoodWork Terms</a>, and you agree and authorize GoodWork and its
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        affiliates, and their networks of service professionals, to deliver marketing calls or texts using automated
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        technology to the number you provided above regarding your project and other home services offers. Consent
            is not a condition of purchase.</p>




            </form >
        </div >


    )
};

export default CardAppointmen;