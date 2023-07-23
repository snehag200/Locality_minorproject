import React from 'react'
import ShopData from './shopData'

const placeholder = 'https://cwdaust.com.au/wpress/wp-content/uploads/2015/04/placeholder-store.png';

const {index} = 

const BrowseShop = () => {

  return (
    <div>
      <header>
        <div className='container py-5'>
          <h1>Browse Shops near You</h1>
        </div>
      </header>
      <div className='container'>
        <div className='row'>
        {
          ShopData.map(shop => (
            <div className='col-md-3'>
              <div className='card'>
                <img src={shop.image ? shop.image : placeholder} alt="" />
                <div className='card-body'>
                  <h4>{shop.title}</h4>
                  <button className='btn btn-primary'>Order Now</button>
                </div>
              </div>
            </div>
          ))
        }
        </div>
      </div>
    </div>
  )
}

export default BrowseShop