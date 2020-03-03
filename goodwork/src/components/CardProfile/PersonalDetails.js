import React from "react";


function PersonalDetails() {

    return (
        <div class="exp-content-container pad-top2">
            <div class="exp-content-block">
                <div class="payment-section">
                    <div class="checkout-row">
                        <div class="exp-content-title">
                            Personal Details
                        </div>
                    </div>
                </div>
                <div class="checkout-row pad-top">
                    <div class="exp-entry" ng-class="{'hide-country-code': false}">
                        <label for="candidate_provider_phone_str">Mobile Phone Number</label>
                        <div class="intl-tel-input">
                            <div class="flag-dropdown ng-scope" country-code="+1" ng-class="{'phone-error': new_candidate_provider['candidate_provider[phone]'].$invalidated}">
                                <div tabindex="0" class="selected-flag" title="United States: +1">
                                    <div class="iti-flag us">
                                    </div>
                                    <div class="arrow">
                                    </div>
                                </div>
                                <ul class="country-list hide" style="">
                                    <li class="country preferred active" data-dial-code="1" data-country-code="us">
                                        <div class="flag">
                                            <div class="iti-flag us">
                                            </div>
                                        </div>
                                        <span class="country-name">
                                            United States
                                                    </span>
                                        <span class="dial-code">
                                            +1
                                                        </span>
                                    </li>
                                    <li class="divider">
                                    </li>
                                    <li class="country" data-dial-code="1" data-country-code="us">
                                        <div class="flag"><div class="iti-flag us">
                                        </div>
                                        </div>
                                        <span class="country-name">
                                            United States
                                                                        </span>
                                        <span class="dial-code">
                                            +1
                                                                            </span>
                                    </li>
                                </ul>
                            </div>
                            <input class="intl-phone-input ng-pristine ng-invalid ng-invalid-required" field-confirmation="candidate_provider[phone_confirmation]" hb-form-error="" intl-tel-input="" name="candidate_provider[phone]" ng-model="candidate.phone" required="" type="text" autocomplete="off" placeholder="(201) 555-5555"></input>

                        </div>
                    </div>
                    <div class="exp-entry" ng-class="{'hide-country-code': false}">
                        <label for="candidate_provider_phone_str_confirmation">Confirm Mobile Phone Number</label>
                        <div class="intl-tel-input"><div class="flag-dropdown ng-scope" country-code="+1" ng-class="{'phone-error': new_candidate_provider['candidate_provider[phone_confirmation]'].$invalidated}"><div tabindex="0" class="selected-flag" title="United States: +1"><div class="iti-flag us"></div><div class="arrow"></div></div><ul class="country-list hide" style=""><li class="country preferred active" data-dial-code="1" data-country-code="us"><div class="flag"><div class="iti-flag us"></div></div><span class="country-name">United States</span><span class="dial-code">+1</span></li><li class="divider"></li><li class="country" data-dial-code="1" data-country-code="us"><div class="flag"><div class="iti-flag us"></div></div><span class="country-name">United States</span><span class="dial-code">+1</span></li></ul></div><input class="intl-phone-input ng-pristine ng-invalid ng-invalid-required" field-confirmation="candidate_provider[phone]" hb-form-error="" intl-tel-input="" name="candidate_provider[phone_confirmation]" ng-model="candidate.phone_confirmation" required="" type="text" autocomplete="off" placeholder="(201) 555-5555"></div>
                        </div>
                        <div class="exp-line">
                            <i class="fa fa-info-circle"></i>
                            <span class="exp-subtext">
                                You must be able to receive text messages at this number to complete the application.
                            </span>
                        </div>
                    </div>
                    <div class="exp-border"></div>
                    <div class="checkout-row">
                        <div class="exp-section-header">
                            Mailing Address
                        </div>
                    </div>
                    <div class="checkout-row pad-top">
                        <div class="exp-entry">
                            <label for="candidate_provider_address_line_one">Street Address</label>
                            <input hb-form-error="" label="false" name="candidate_provider[address_line_one]" ng-model="candidate.address1" required="" type="text" class="ng-pristine ng-invalid ng-invalid-required"></input>
                        </div>
                        <div class="exp-entry-small">
                            <label for="candidate_provider_address_line_two">Apt # (optional)</label>
                            <input label="false" name="candidate_provider[address_line_two]" ng-model="candidate.address2" type="text" class="ng-pristine ng-valid"></input>
                        </div>
                    </div>
                    <div class="checkout-row">
                        <div class="exp-entry">
                            <label for="candidate_provider_address_city">City</label>
                            <input label="false" name="candidate_provider[address_city]" type="text" value=""></input>
                        </div>
                        <div class="exp-entry-small">
                            <label for="candidate_provider_address_state">State</label>
                            <div class="exp-select select-wrapper state-dropdown">
                                <select hb-form-error="" id="candidate_provider_state" name="candidate_provider[address_state]" ng-class="black" ng-init="state='CO'" ng-model="state" required="" class="ng-pristine ng-valid ng-valid-required">
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
                        <div class="exp-entry-small">
                            <label for="candidate_provider_address_zipcode">ZIP Code</label>
                            <input hb-form-error="" label="false" name="candidate_provider[address_zipcode]" ng-model="candidate.zipcode" required="" type="text" ng-pattern="/^[0-9]{5}$/" class="ng-scope ng-pristine ng-invalid ng-invalid-required ng-valid-pattern"></input>
                        </div>
                        <div class="exp-line">
                            <i class="fa fa-info-circle"></i>
                            <span class="exp-subtext">
                                You must be able to receive packages at this address.
                                </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PersonalDetails;