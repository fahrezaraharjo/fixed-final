import React from 'react'
import './Details.css'
import CardDetail from "../../components/CardDetails/CardDetail"
import StarIcon from "@mui/icons-material/Star";


function Details(
    src, 
    title,
    description,
    ) {
    return (
        <div className='detailsPage'>
            <div className='detail_left'>
                <CardDetail
                    src="https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720"
                    title="Online Experiences"
                    description="Unique activities we can do together, led by a world of hosts."
                />
            </div>
            <div className='searchResult_info'>
                <div className='searchResult_infoTop'>
                    <p>Private room in center of London</p>
                    <h3>Stay at this spacious Edwardian House</h3>
                    <p>____</p>
                    <p>1 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine</p>
                </div>
                <div className='searchResult_infoBottom'>
                    <div className='searchResult_stars'>
                        <StarIcon className="searchResult_star" />
                        <p>
                            <strong>4.73</strong>
                        </p>
                    </div>
                    <div className='searchResult_price'>
                        <h2>£30 / night</h2>
                        <p>£117 total</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Details