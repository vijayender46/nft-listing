import React, { useState } from 'react';

const NftCard = props => {
    const { name, imageUrl, description, price, auther, role } = props;
    const [showPopup, setShowPopup] = useState(false);

  const handleClick = () => {
    setShowPopup(true);
  }

  return (
    <>
    <div className="nft-card" key={name} onClick={handleClick}>
            <span><img src={require('../images/' + imageUrl)} alt={name} /></span>        
            <h3>{name}</h3>
            <p>Price: {price}</p>
    </div>
    {showPopup && (
        <div className="nft_popup_wrap">
            <div className="nft_popup_content">
                <div className='popup_col'>
                    <span className='nft_image'>
                        <img src={require('../images/' + imageUrl)} alt={name} />
                    </span>
                </div>
                <div className='popup_col'>
                    <div className='popup_actionBar'>
                        <button>Save <i><img src={require('../icon/save.png')} alt='Save' /></i></button>
                        <button>Share <i><img src={require('../icon/share.png')} alt='Share' /></i></button>
                        <button className='close' onClick={() => setShowPopup(false)}><i><img src={require('../icon/close.png')} alt='Close' /></i></button>
                    </div>
                    <h2>{name}</h2>
                    <h4><i><img src={require('../icon/token.png')} alt='Ethereum' /></i>{price}
                        <a href="#" target='_blank'>Opensea <i><img src={require('../icon/link.png')} alt='Link' /></i></a>
                    </h4>
                    {description && <p>{description}</p> }
                    {role &&
                        <div className='author'>
                            <span><img src={require('../icon/dp.png')} alt='display profile' /></span>
                            <p><i>{role}</i><strong>{auther}</strong> </p> 
                        </div> 
                    }                  
                </div>
                
                
            </div>
        </div>
      )}
    </>
  )
}

export default NftCard;