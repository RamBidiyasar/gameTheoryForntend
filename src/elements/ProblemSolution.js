import React from 'react';
import digital from '../assets/digital-journey.jpg'
import shapley from '../assets/logo.png';
import details from '../assets/details.png'

function ProblemSolution() {
    return (
        <div>
            <br/>
            <h1 className="title">Conversion Intelligence - Marketing attribution platform</h1>
            <div className="image">
                <img src={digital} alt="Logo"/>
                <p>Digital journey of user</p>
            </div>
            <h1>The problem with marketing attribution </h1>
            <p>Popular marketing attribution models have their pros and cons, and choosing the best model is down to
                individual business needs. However, one drawback the popular models have in common is that they are
                rules based, and the user has to decide up front how they want the credit for sales conversions to be
                divided between channels. Popular models include:</p>

            <ul>
                <li>Linear: credits an equal share of the payoff between all touch-points</li>
                <li>Time-decay: credits a decreasing percentage of payoff the further away in time a touch-point is from
                    the date of conversion
                </li>
                <li> Positional: credits 40% to the first and last touches, and the remaining 20% is evenly distributed
                    to the touches in between
                </li>
            </ul>
            <br/>
            Chief Marketing Officers use the results from the chosen model to measure ROI and make more informed
            decisions on where to invest marketing resources in the future. Accurate results are important, but these
            heuristic solutions are inflexible and unable to distinguish between the true low and high impact
            touch-points, resulting in an inaccurate division of credit.
            <p>Luckily, there are more sophisticated, data-driven approaches that address these limitations. Data-driven
                attribution is a custom solution that is able to capture the intricacies of buyer journeys by modelling
                how channels, and more importantly how different combinations of channels, interact with buyers to
                influence a desired sales outcome. A data-driven model provides the most accurate view of which channels
                are performing the best, driving better marketing accountability and efficiency.
            </p>
            <h1>Game theory and the Shapley value</h1>
            <p>
                Essentially, the Shapley value is a measure of a player’s average marginal contribution to each
                coalition. Taking into consideration that players can join coalitions at different points in time
                (order), and have varying degrees of influence (worth).
            </p>
            <p>In the context of marketing analytics, campaign channels are the players of the game, and the various
                ways in which the channels interact with accounts throughout the buyer journey form the coalitions.
                Cooperative game theory and the Shapley value provide a stable way to measure channel influence and
                fairly divide the credit for sales conversions between the channels, based on their individual
                contribution to the total payoff.</p>

            <div className="image">
                <img src={shapley} alt="Logo"/>
                <p>Shapley value</p>
            </div>

            <br/>

            <div className="image">
                <img src={details} alt="Logo"/>
            </div>
            ￼

            {/*<h1>Conversion ratio example</h1>*/}
            {/*<p>*/}
            {/*    Let’s walk through an example using channel conversion ratios. Say that your company converted 100*/}
            {/*    opportunities at the end of a fiscal quarter. During that period, the marketing department advertised to*/}
            {/*    the associated accounts using three channels:*/}
            {/*    <p>N = Email,Sms, Whatsapp</p>*/}
            {/*    All 100 accounts were touched by one or more of the channels throughout their buyer journeys. In other*/}
            {/*    words, the channels worked together by forming coalitions to increase the likelihood of opportunity*/}
            {/*    conversion.*/}
            {/*    The table below lists all possible channel coalitions and their conversion ratios:*/}
            {/*</p>*/}


            {/*/!*table*!/*/}

            {/*The worth of each coalition is determined by the characteristic function. In this example, the worth is*/}
            {/*represented as the sum of the conversion ratio of each channel in a coalition.*/}
            {/*<ul>*/}
            {/*    <li>Coalition S5 = Email+Whatsapp</li>*/}
            {/*    <li> v(S5) = Email (S1) + Whatsapp (S3) + Email+Whatsapp (S5)</li>*/}
            {/*    <li>v(S5) = 0.18 + 0.08 + 0.26</li>*/}
            {/*    <li>v(S5) = 0.52</li>*/}
            {/*</ul>*/}

            {/*<h1>Problem Statement:</h1>*/}
            {/*<p>Inaccurate attribution of digital marketing channels leads to:</p>*/}
            {/*<ul>*/}
            {/*    <li>Misinformed decision-making</li>*/}
            {/*    <li>Hindering campaign optimization and ROI</li>*/}
            {/*    <li>Subpar customer experience by carpet bombing all the channels</li>*/}
            {/*</ul>*/}
            {/*<kh1>Solve:</kh1>*/}
            {/*<p>Leveraging Shapley Value algorithm to determine the appropriate attribution in a multi-channel world</p>*/}
            {/*<ul>*/}
            {/*    <li>*/}
            {/*        It treats each touch-point as a player in a cooperative game*/}
            {/*    </li>*/}
            {/*    <li>*/}
            {/*        We are calculating marginal contribution to conversions across all possible combinations by*/}
            {/*        assigning credit to each channel*/}
            {/*    </li>*/}
            {/*    <li>*/}
            {/*        This provides actionable insights for optimal allocation of resources & optimizes campaign*/}
            {/*        performance*/}
            {/*    </li>*/}
            {/*</ul>*/}
            {/*<h1>Business Objective</h1>*/}
            {/*<p>Our objective is to empower businesses with data-driven decision-making, enabling them to achieve higher*/}
            {/*    ROI by allocating resources efficiently across digital marketing channels, ultimately enhancing customer*/}
            {/*    acquisition and retention strategies without diluting customer experience</p>*/}
        </div>

    );
}

export default ProblemSolution;
