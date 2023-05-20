import React  from 'react'
import '../css/shopDetail.css'
import Nav from '../components/nav'
import { useLocation } from 'react-router-dom';


function ShopDetail() {
  let { state } = useLocation();
  let detail = state.shop.member;

  const handleClose = (e,i) => {
    if(e.time_open === 'closed') {
      return (<div key={i}><p>{e.day} : closed </p></div>)
    } else {
      return (<div key={i}><p>
        {e.day} : {e.time_open} AM - {e.time_close} PM
      </p></div>)
    }
  }
  return (
    <div className='shopDetail'>
      <Nav/>
      <div className='button-container'>
        <a href='/'><button className='back'> &lt; BACK </button></a>
      </div>
      <div className='big-container'>
        <div className='small-container'>
          <div className='des-container'>
            <div className='large-photo'>
              <img className='large_photo' src={detail.profile_image_url} alt="shop_name"></img>
            </div>
            <div className='description-area'>
              <div className='nameAndrating'>
                <div className='shop_name'><p>{detail.name}</p></div>
                <div className='shop_rate'><li>{detail.rating.$numberDecimal}</li></div>
              </div>
              <div className='addressAndtime'>
                <div className='address'>
                  <div className='d1'><p>Address:</p></div>
                  <div className='d2'><p>{detail.address}</p></div>
                  </div>
                <div className='openTime'>
                  <div className='d1'><p>Opening Hour : </p></div>
                  <div className='d2'>
                    {detail.operation_time.map((member, i) => (
                      handleClose(member,i)
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='image-container'>
            <div className='image-des'>
              <p>Images</p>
            </div>
            <div className='photo-box'>
              <div className='img-sample'>
                <img src={detail.images[0]} alt="sample1"></img>
              </div>
              <div className='img-sample'>
                <img src={detail.images[1]} alt="sample2"></img>
              </div>
              <div className='img-sample'>
                <img src={detail.images[2]} alt="sample3"></img>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default ShopDetail