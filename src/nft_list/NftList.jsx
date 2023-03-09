import React from 'react'
import { nfts } from './constant';
import NftCard from './NftCard';

export default function NftList() {
    const nftList = nfts?.map((nft) => 
    <NftCard 
    name={nft.name}
    key={nft.name}
    imageUrl={nft.imageUrl}
    description={nft.description}
    price={nft.price}
    auther={nft.auther}
    role={nft.role} />
  );
  console.log(nftList)
  return (
    <div className="nft-grid">
       {nftList}
    </div>
  )
}
