import React from "react";
import WorkExperience from "./WorkExperience.js";
import OtherInfo from "./OtherInfo.js";
import Button from "./ButtonAnd.js";


function PersonalDetails() {

    return (
        <>
            <div className="exp-content-container pad-top2">
                <div className="exp-content-block">
                    <div className="payment-section">
                        <div className="checkout-row">
                            <div className="exp-content-title">
                                Personal Details
                </div>
                        </div>
                    </div>
                    <div className="checkout-row pad-top">
                        <div className="exp-entry" ng-className="{'hide-country-code': false}">
                            <label for="candidate_provider_phone_str">Mobile Phone Number</label>
                            <div className="intl-tel-input">
                                <div className="flag-dropdown ng-scope" country-code="+1"
                                    ng-className="{'phone-error': new_candidate_provider['candidate_provider[phone]'].$invalidated}">
                                    <div tabindex="0" className="selected-flag" title="United States: +1">
                                        <div className="iti-flag us">
                                        </div>
                                        <div className="arrow">
                                        </div>
                                    </div>
                                    <ul className="country-list hide">
                                        <li className="country preferred active" data-dial-code="1" data-country-code="us">
                                            <div className="flag">
                                                <div className="iti-flag us">
                                                </div>
                                            </div>
                                            <span className="country-name">
                                                United States
                                </span>
                                            <span className="dial-code">
                                                +1
                                </span>
                                        </li>
                                        <li className="divider">
                                        </li>
                                        <li className="country" data-dial-code="1" data-country-code="us">
                                            <div className="flag">
                                                <div className="iti-flag us">
                                                </div>
                                            </div>
                                            <span className="country-name">
                                                United States
                                </span>
                                            <span className="dial-code">
                                                +1
                                </span>
                                        </li>
                                    </ul>
                                </div>
                                <input className="intl-phone-input ng-pristine ng-invalid ng-invalid-required"
                                    field-confirmation="candidate_provider[phone_confirmation]" hb-form-error="" intl-tel-input=""
                                    name="candidate_provider[phone]" ng-model="candidate.phone" required="" type="text"
                                    autocomplete="off" placeholder="(201) 555-5555"></input>

                            </div>
                        </div>
                        <div className="exp-entry" ng-className="{'hide-country-code': false}">
                            <label for="candidate_provider_phone_str_confirmation">Confirm Mobile Phone Number</label>
                            <div className="intl-tel-input">
                                <div className="flag-dropdown ng-scope" country-code="+1"
                                    ng-className="{'phone-error': new_candidate_provider['candidate_provider[phone_confirmation]'].$invalidated}">
                                    <div tabindex="0" className="selected-flag" title="United States: +1">
                                        <div className="iti-flag us">
                                        </div>
                                        <div className="arrow">
                                        </div>
                                    </div>
                                    <ul className="country-list hide">
                                        <li className="country preferred active" data-dial-code="1" data-country-code="us">
                                            <div className="flag">
                                                <div className="iti-flag us">
                                                </div>
                                            </div>
                                            <span className="country-name">United States</span>
                                            <span className="dial-code">+1</span>
                                        </li>
                                        <li className="divider">
                                        </li>
                                        <li className="country" data-dial-code="1" data-country-code="us">
                                            <div className="flag">
                                                <div className="iti-flag us">
                                                </div>
                                            </div>
                                            <span className="country-name">United States</span>
                                            <span className="dial-code">+1</span>
                                        </li>
                                    </ul>
                                </div>
                                <input className="intl-phone-input ng-pristine ng-invalid ng-invalid-required"
                                    field-confirmation="candidate_provider[phone]" hb-form-error="" intl-tel-input=""
                                    name="candidate_provider[phone_confirmation]" ng-model="candidate.phone_confirmation"
                                    required="" type="text" autocomplete="off" placeholder="(201) 555-5555"></input>
                            </div>
                        </div>
                        <div className="exp-line">
                            <i className="fa fa-info-circle"></i>
                            <span className="exp-subtext">
                                You must be able to receive text messages at this number to complete the application.
                </span>
                        </div>
                    </div>
                    <div className="exp-border"></div>
                    <div className="checkout-row">
                        <div className="exp-section-header">
                            Mailing Address
            </div>
                    </div>
                    <div className="checkout-row pad-top">
                        <div className="exp-entry">
                            <label for="candidate_provider_address_line_one">Street Address</label>
                            <input hb-form-error="" label="false" name="candidate_provider[address_line_one]"
                                ng-model="candidate.address1" required="" type="text"
                                className="ng-pristine ng-invalid ng-invalid-required"></input>
                        </div>
                        <div className="exp-entry-small">
                            <label for="candidate_provider_address_line_two">Apt # (optional)</label>
                            <input label="false" name="candidate_provider[address_line_two]" ng-model="candidate.address2"
                                type="text" className="ng-pristine ng-valid"></input>
                        </div>
                    </div>
                    <div className="checkout-row">
                        <div className="exp-entry">
                            <label for="candidate_provider_address_city">City</label>
                            <input label="false" name="candidate_provider[address_city]" type="text" value=""></input>
                        </div>
                        <div className="exp-entry-small">
                            <label for="candidate_provider_address_state">State</label>
                            <div className="exp-select select-wrapper state-dropdown">
                                <select hb-form-error="" id="candidate_provider_state" name="candidate_provider[address_state]"
                                    ng-className="black" ng-init="state='CO'" ng-model="state" required=""
                                    className="ng-pristine ng-valid ng-valid-required">
                                    <option disabled="disabled" value="">Select</option>
                                    <option value="AL">Alabama</option>
                                    <option value="AK">Alaska</option>
                                    <option value="AZ">Arizona</option>
                                    <option value="AR">Arkansas</option>
                                    <option value="CA">California</option>
                                    <option selected="selected" value="CO">Colorado</option>
                                    <option value="CT">Connecticut</option>
                                    <option value="DE">Delaware</option>
                                    <option value="DC">District of Columbia</option>
                                    <option value="FL">Florida</option>
                                    <option value="GA">Georgia</option>
                                    <option value="HI">Hawaii</option>
                                    <option value="ID">Idaho</option>
                                    <option value="IL">Illinois</option>
                                    <option value="IN">Indiana</option>
                                    <option value="IA">Iowa</option>
                                    <option value="KS">Kansas</option>
                                    <option value="KY">Kentucky</option>
                                    <option value="LA">Louisiana</option>
                                    <option value="ME">Maine</option>
                                    <option value="MD">Maryland</option>
                                    <option value="MA">Massachusetts</option>
                                    <option value="MI">Michigan</option>
                                    <option value="MN">Minnesota</option>
                                    <option value="MS">Mississippi</option>
                                    <option value="MO">Missouri</option>
                                    <option value="MT">Montana</option>
                                    <option value="NE">Nebraska</option>
                                    <option value="NV">Nevada</option>
                                    <option value="NH">New Hampshire</option>
                                    <option value="NJ">New Jersey</option>
                                    <option value="NM">New Mexico</option>
                                    <option value="NY">New York</option>
                                    <option value="NC">North Carolina</option>
                                    <option value="ND">North Dakota</option>
                                    <option value="OH">Ohio</option>
                                    <option value="OK">Oklahoma</option>
                                    <option value="OR">Oregon</option>
                                    <option value="PA">Pennsylvania</option>
                                    <option value="PR">Puerto Rico</option>
                                    <option value="RI">Rhode Island</option>
                                    <option value="SC">South Carolina</option>
                                    <option value="SD">South Dakota</option>
                                    <option value="TN">Tennessee</option>
                                    <option value="TX">Texas</option>
                                    <option value="UT">Utah</option>
                                    <option value="VT">Vermont</option>
                                    <option value="VA">Virginia</option>
                                    <option value="WA">Washington</option>
                                    <option value="WV">West Virginia</option>
                                    <option value="WI">Wisconsin</option>
                                    <option value="WY">Wyoming</option>
                                </select>
                            </div>
                        </div>
                        <div className="exp-entry-small">
                            <label for="candidate_provider_address_zipcode">ZIP Code</label>
                            <input hb-form-error="" label="false" name="candidate_provider[address_zipcode]"
                                ng-model="candidate.zipcode" required="" type="text" ng-pattern="/^[0-9]{5}$/"
                                className="ng-scope ng-pristine ng-invalid ng-invalid-required ng-valid-pattern"></input>
                        </div>
                        <div className="exp-line">
                            <i className="fa fa-info-circle"></i>
                            <span className="exp-subtext">
                                You must be able to receive packages at this address.
                </span>
                        </div>
                    </div>
                </div>
            </div>


            <div className="exp-content-block">
                <div className="payment-section">
                    <div className="checkout-row">
                        <div className="exp-content-title">
                            Work Experience
            </div>
                    </div>
                </div>
                <div className="checkout-row">
                    <div className="exp-line">
                        <p>
                            What types of jobs would you like to see? (Note: We may show you more!)
            </p>
                        <div className="exp-checklist">
                            <div className="normal-checkbox">
                                <input id="skill_checkbox_appliance_repair" name="skill_checkbox_appliance_repair"
                                    ng-disabled="false" ng-init="skill_appliance_repair = false" ng-model="skill_appliance_repair"
                                    type="checkbox" className="ng-pristine ng-valid"></input>
                                <label for="skill_checkbox_appliance_repair">Appliance Repair</label>
                            </div>
                        </div>
                        <div className="exp-checklist">
                            <div className="normal-checkbox">
                                <input id="skill_checkbox_cleaning" name="skill_checkbox_cleaning" ng-disabled="false"
                                    ng-init="skill_cleaning = false" ng-model="skill_cleaning" type="checkbox"
                                    className="ng-pristine ng-valid"></input>
                                <label for="skill_checkbox_cleaning">Cleaner</label>
                            </div>

                        </div>
                        <div className="exp-checklist">
                            <div className="normal-checkbox">
                                <input id="skill_checkbox_electrician" name="skill_checkbox_electrician" ng-disabled="true"
                                    ng-init="skill_electrician = true" ng-model="skill_electrician" type="checkbox"
                                    className="ng-pristine ng-valid" disabled="disabled"></input>
                                <label for="skill_checkbox_electrician">Electrician</label>
                            </div>
                        </div>
                        <div className="exp-checklist">
                            <div className="normal-checkbox">
                                <input id="skill_checkbox_garage_door_installation" name="skill_checkbox_garage_door_installation"
                                    ng-disabled="false" ng-init="skill_garage_door_installation = false"
                                    ng-model="skill_garage_door_installation" type="checkbox"
                                    className="ng-pristine ng-valid"></input>
                                <label for="skill_checkbox_garage_door_installation">Garage Door Installation</label>
                            </div>
                        </div>
                        <div className="exp-checklist">
                            <div className="normal-checkbox">
                                <input id="skill_checkbox_handyman" name="skill_checkbox_handyman" ng-disabled="true"
                                    ng-init="skill_handyman = true" ng-model="skill_handyman" type="checkbox"
                                    className="ng-pristine ng-valid" disabled="disabled"></input>
                                <label for="skill_checkbox_handyman">Handyman</label>
                            </div>
                        </div>
                        <div className="exp-checklist">
                            <div className="normal-checkbox">
                                <input id="skill_checkbox_home_improvement" name="skill_checkbox_home_improvement"
                                    ng-disabled="false" ng-init="skill_home_improvement = false" ng-model="skill_home_improvement"
                                    type="checkbox" className="ng-pristine ng-valid"></input>
                                <label for="skill_checkbox_home_improvement">Home Improvement</label>
                            </div>
                        </div>
                        <div className="exp-checklist">
                            <div className="normal-checkbox">
                                <input id="skill_checkbox_lawn_care" name="skill_checkbox_lawn_care" ng-disabled="false"
                                    ng-init="skill_lawn_care = false" ng-model="skill_lawn_care" type="checkbox"
                                    className="ng-pristine ng-valid"></input>
                                <label for="skill_checkbox_lawn_care">Lawn Care</label>
                            </div>
                        </div>
                        <div className="exp-checklist">
                            <div className="normal-checkbox">
                                <input id="skill_checkbox_plumbing" name="skill_checkbox_plumbing" ng-disabled="false"
                                    ng-init="skill_plumbing = false" ng-model="skill_plumbing" type="checkbox"
                                    className="ng-pristine ng-valid"></input>
                                <label for="skill_checkbox_plumbing">Plumber</label>
                            </div>

                        </div>
                        <div className="exp-checklist">
                            <div className="normal-checkbox">
                                <input id="skill_checkbox_pool" name="skill_checkbox_pool" ng-disabled="false"
                                    ng-init="skill_pool = false" ng-model="skill_pool" type="checkbox"
                                    className="ng-pristine ng-valid"></input>
                                <label for="skill_checkbox_pool">Pool Services</label>
                            </div>
                        </div>
                        <div className="exp-checklist">
                            <div className="normal-checkbox">
                                <input id="skill_checkbox_smart_home_parent" name="skill_checkbox_smart_home_parent"
                                    ng-disabled="false" ng-init="skill_smart_home_parent = false" ng-model="skill_smart_home_parent"
                                    type="checkbox" className="ng-pristine ng-valid"></input>
                                <label for="skill_checkbox_smart_home_parent">Smart Home</label>
                            </div>
                        </div>
                        <div className="exp-checklist">
                            <div className="normal-checkbox">
                                <input id="skill_checkbox_Technology" name="skill_checkbox_Technology" ng-disabled="false"
                                    ng-init="skill_Technology = false" ng-model="skill_Technology" type="checkbox"
                                    className="ng-pristine ng-valid"></input>
                                <label for="skill_checkbox_Technology">Technology Services</label>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="exp-border"></div>
                <div className="checkout-row">
                    <div className="exp-line">
                        <div className="exp-q-select">
                            How many years of paid experience do you have?
            </div>
                        <div className="exp-select select-wrapper">
                            <select hb-form-error="" id="candidate_provider_years_pro_experience"
                                name="candidate_provider[years_pro_experience]"
                                ng-className="{'black': years_pro_experience.length > 0}" ng-model="years_pro_experience"
                                required="" className="ng-pristine ng-invalid ng-invalid-required">
                                <option disabled="disabled" selected="selected" value="">Select</option>
                                <option value="1">0 - 6 months</option>
                                <option value="2">6 months - 1 year</option>
                                <option value="3">1 year - 3 years</option>
                                <option value="4">3 years - 5 years</option>
                                <option value="5">5+ years</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="exp-border"></div>
                <div className="checkout-row">
                    <div className="exp-line">
                        <p>
                            Where did you receive your handyman training? Check all that apply.
            </p>
                        <div className="exp-checklist">
                            <div>
                                <div className="normal-checkbox">
                                    <input id="candidate_provider_extras_handyman_training_0"
                                        name="candidate_provider_extras[handyman_training][]" type="checkbox" value="0"></input>
                                    <label for="candidate_provider_extras_handyman_training_0">Self-taught</label>
                                </div>
                            </div>
                            <div>
                                <div className="normal-checkbox">
                                    <input id="candidate_provider_extras_handyman_training_1"
                                        name="candidate_provider_extras[handyman_training][]" type="checkbox" value="1"></input>
                                    <label for="candidate_provider_extras_handyman_training_1">Vocational School</label>
                                </div>
                            </div>
                        </div>
                        <div className="exp-checklist">
                            <div>
                                <div className="normal-checkbox">
                                    <input id="candidate_provider_extras_handyman_training_2"
                                        name="candidate_provider_extras[handyman_training][]" type="checkbox" value="2"></input>
                                    <label for="candidate_provider_extras_handyman_training_2">Apprenticeship</label>
                                </div>
                            </div>
                            <div>
                                <div className="normal-checkbox">
                                    <input id="candidate_provider_extras_handyman_training_3"
                                        name="candidate_provider_extras[handyman_training][]" type="checkbox" value="3"></input>
                                    <label for="candidate_provider_extras_handyman_training_3">Other</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="exp-border"></div>
                <div className="checkout-row">
                    <div className="exp-line">
                        <p>
                            What supplies do you have? Check all that apply.
            </p>
                        <div className="exp-checklist-full">
                            <div>
                                <div className="normal-checkbox">
                                    <input id="candidate_provider_extras_handyman_supplies_0"
                                        name="candidate_provider_extras[handyman_supplies][]" type="checkbox" value="0"></input>
                                    <label for="candidate_provider_extras_handyman_supplies_0">Basic tools (drill, wrench, hammer,
                            level, etc.)</label>
                                </div>
                            </div>
                            <div>
                                <div className="normal-checkbox">
                                    <input id="candidate_provider_extras_handyman_supplies_1"
                                        name="candidate_provider_extras[handyman_supplies][]" type="checkbox" value="1"></input>
                                    <label for="candidate_provider_extras_handyman_supplies_1">Power tools (circular/table saw, nail
                            gun, shop vac, etc.)</label>
                                </div>
                            </div>
                            <div>
                                <div className="normal-checkbox">
                                    <input id="candidate_provider_extras_handyman_supplies_2"
                                        name="candidate_provider_extras[handyman_supplies][]" type="checkbox" value="2"></input>
                                    <label for="candidate_provider_extras_handyman_supplies_2">Painting supplies (roller, brush,
                            drop cloth, tape, etc.)</label>
                                </div>
                            </div>
                            <div>
                                <div className="normal-checkbox">
                                    <input id="candidate_provider_extras_handyman_supplies_3"
                                        name="candidate_provider_extras[handyman_supplies][]" type="checkbox" value="3"></input>
                                    <label for="candidate_provider_extras_handyman_supplies_3">Lawn care equipment (mower, leaf
                            blower, string trimmer, hand tools, etc.)</label>
                                </div>
                            </div>
                            <div>
                                <div className="normal-checkbox">
                                    <input id="candidate_provider_extras_handyman_supplies_4"
                                        name="candidate_provider_extras[handyman_supplies][]" type="checkbox" value="4"></input>
                                    <label for="candidate_provider_extras_handyman_supplies_4">Ladder</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="exp-border"></div>
                <div className="checkout-row">
                    <div className="exp-line">
                        <div className="exp-q">
                            Are you legally eligible to work in the U.S.?
            </div>
                        <div className="radio-circle">
                            <div className="light-radio">
                                <input hb-form-error="" id="candidate_provider_has_ssn_true" name="candidate_provider[has_ssn]"
                                    ng-model="has_ssn" required="" type="radio" value="true"
                                    className="ng-pristine ng-invalid ng-invalid-required"></input>
                                <label for="candidate_provider_has_ssn_true">Yes</label>
                            </div>
                        </div>
                        <div className="radio-circle">
                            <div className="light-radio">
                                <input hb-form-error="" id="candidate_provider_has_ssn_false" name="candidate_provider[has_ssn]"
                                    ng-model="has_ssn" required="" type="radio" value="false"
                                    className="ng-pristine ng-invalid ng-invalid-required"></input>
                                <label for="candidate_provider_has_ssn_false">No</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="exp-border"></div>
                <div className="checkout-row">
                    <div className="exp-line">
                        <div className="exp-q-select">
                            How did you hear about Handy? (optional)
            </div>
                        <div className="exp-select select-wrapper">
                            <select id="hear_about_us_source" label="false" name="hear_about_us[source]">
                                <option value="">Select</option>
                                <option value="Craigslist">Craigslist</option>
                                <option value="Kijiji">Kijiji</option>
                                <option value="Gumtree">Gumtree</option>
                                <option value="Care.com">Care.com</option>
                                <option value="HCareers">HCareers</option>
                                <option value="Indeed.com">Indeed.com</option>
                                <option value="Facebook">Facebook</option>
                                <option value="Google">Google</option>
                                <option value="Juju">Juju</option>
                                <option value="Newspaper">Newspaper</option>
                                <option value="Subway">Subway</option>
                                <option value="Friend">Friend</option>
                                <option value="Street Marketing">Street Marketing</option>
                                <option value="SnagAJob">SnagAJob</option>
                                <option value="Simply Hired">Simply Hired</option>
                                <option value="Find the Right Job">Find the Right Job</option>
                                <option value="Heartland Alliance">Heartland Alliance</option>
                                <option value="IDPL">IDPL</option>
                                <option value="Caterer.com">Caterer.com</option>
                                <option value="Upwork">Upwork</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                        <input className="hidden" id="utm_params_c" name="hear_about_us[campaign]" type="input"></input>
                    </div>
                </div>
                <div className="exp-border"></div>
                <div className="checkout-row">
                    <div className="exp-line">
                        <div className="exp-q-select">
                            If you were referred by a Handy professional, enter their referral code. (optional)
            </div>
                        <div className="exp-entry-right" id="referral_name">
                            <label id="referral_code_error" ng-show="referrals_name_invalid" className="ng-hide">This referral code
                    is not valid.</label>
                            <input hb-form-error="" id="candidate_provider_referral" name="candidate_provider[referral]"
                                ng-change="resetReferralValidity(true)" ng-disabled="candidate.original_referral.length"
                                ng-model="candidate.referral" placeholder="Referral code" type="text"
                                className="ng-pristine ng-valid"></input>
                        </div>
                    </div>
                </div>
            </div>
            <WorkExperience />
            <OtherInfo />
            <Button />
        </>

    )
}


export default PersonalDetails;