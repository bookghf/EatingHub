import React from 'react'
import '../css/card.css'

const Card = ({data}) => {

    return (
        <div className='card'>
            <div className='card-container'>
                <div className='description-container'>
                    <div className='shop-photo'>
                        <img className='shop-photo' alt={data.name} src={data.profile_image_url}></img>
                    </div>
                    <div className='description'>
                        <div className='shop-name'>
                            <p>{data.name}</p>
                        </div>
                        <div className='time-rate'>
                            <div className='time'>
                                <div className='time-description'>{data.operation_time[0].time_open} -</div>
                                <div className='time-description'>{data.operation_time[0].time_close}</div>
                            </div>
                            <div className='rating'>Rating : {data.rating.$numberDecimal}</div>
                        </div>
                    </div>
                </div>
                <div className='photosSample-container'>
                    <div className='photos-sample'>
                        <img className='photo-sample' src={data.images[0]} alt='sample1'></img>
                        <img className='photo-sample' src={data.images[1]} alt='sample2'></img>
                        <img className='photo-sample' src={data.images[2]} alt='sample3'></img>
                    </div>
                </div>
            </div>
        </div>
    ) 
}

export default Card