import React from "react";

function OtherInfo() {

    return (
        <div className="exp-content-block">
            <div className="payment-section">
                <div className="checkout-row">
                    <div className="exp-content-title">
                        Other Info
</div>
                </div>
            </div>
            <div className="checkout-row">
                <div className="exp-line">
                    <div className="exp-q-part">T-Shirt Preference</div>
                    <div className="radio-circle-select">
                        <div className="light-radio">
                            <input hb-form-error="" id="candidate_provider_gender_2" name="candidate_provider[gender]" ng-model="gender" required="" type="radio" value="2" className="ng-pristine ng-invalid ng-invalid-required" />
                            <label for="candidate_provider_gender_2">Men's</label>
                        </div>
                    </div>
                    <div className="radio-circle-select">
                        <div className="light-radio">
                            <input hb-form-error="" id="candidate_provider_gender_1" name="candidate_provider[gender]" ng-model="gender" required="" type="radio" value="1" className="ng-pristine ng-invalid ng-invalid-required" />
                            <label for="candidate_provider_gender_1">Women's</label>
                        </div>
                    </div>
                    <div className="exp-select-part select-wrapper">
                        <select hb-form-error="" id="candidate_provider_tshirt_size" name="candidate_provider[tshirt_size]" ng-className="{'black': tshirt_size.length > 0}" ng-model="tshirt_size" required="" className="ng-pristine ng-invalid ng-invalid-required">
                            <option disabled="disabled" selected="selected" value="">Size</option>
                            <option value="1">Small</option>
                            <option value="2">Medium</option>
                            <option value="3">Large</option>
                            <option value="4">XL</option>
                            <option value="5">XXL</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="checkout-row">
                <div className="exp-line">
                    <div className="exp-q-part">How do you plan on commuting to jobs?</div>
                    <div className="exp-q-part-remaining">
                        <div className="radio-circle--half">
                            <div className="light-radio">
                                <input hb-form-error="" id="candidate_provider_transportation_means_my_car" name="candidate_provider[transportation_means]" ng-model="transportation_means" required="" type="radio" value="my_car" className="ng-pristine ng-invalid ng-invalid-required" />
                                <label for="candidate_provider_transportation_means_my_car">My own car</label>
                            </div>
                        </div>
                        <div className="radio-circle--half">
                            <div className="light-radio">
                                <input hb-form-error="" id="candidate_provider_transportation_means_public_transportation" name="candidate_provider[transportation_means]" ng-model="transportation_means" required="" type="radio" value="public_transportation" className="ng-pristine ng-invalid ng-invalid-required" />
                                <label for="candidate_provider_transportation_means_public_transportation">Public transportation</label>
                            </div>
                        </div>
                        <div className="radio-circle--half">
                            <div className="light-radio">
                                <input hb-form-error="" id="candidate_provider_transportation_means_borrow_car" name="candidate_provider[transportation_means]" ng-model="transportation_means" required="" type="radio" value="borrow_car" className="ng-pristine ng-invalid ng-invalid-required" />
                                <label for="candidate_provider_transportation_means_borrow_car">Borrowing a car</label>
                            </div>
                        </div>
                        <div className="radio-circle--half">
                            <div className="light-radio">
                                <input hb-form-error="" id="candidate_provider_transportation_means_other" name="candidate_provider[transportation_means]" ng-model="transportation_means" required="" type="radio" value="other" className="ng-pristine ng-invalid ng-invalid-required" />
                                <label for="candidate_provider_transportation_means_other">Other / not sure yet</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="exp-border"></div>
            </div>


        </div>


    )
}
export default OtherInfo;
