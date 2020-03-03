import React from 'react';
import CardElement from "./CardElement"



export default function RecipeReviewCard({ profis }) {

    return (
        <React.Fragment>
            {profis.length ? profis.map(profi => {
                return <CardElement profi={profi} />
            }) : "Please select a category"}
        </React.Fragment>

    );
}
