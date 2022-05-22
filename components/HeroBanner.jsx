import React from 'react'
import Link from 'next/link'
import { urlFor } from '../lib/client'

const HeroBanner = ({heroBanner}) => {
    return (
        <div className='hero-banner-container'>
            <div>
                <p className='beats-solo'>{heroBanner.desc}</p>
                <h3>{heroBanner.midText}</h3>
                <h3>{heroBanner.largeText1}</h3>
                <img src={urlFor(heroBanner.image)} alt="headphones" className='hero-banner-image' />
            </div>
            <div>
                <Link href={`/products/${heroBanner.product}`}>
                    <button type='button'>{heroBanner.buttonText}</button>
                </Link>
                <div className='desc'>
                    <h5>DESCRIPTION</h5>
                    <p>Description</p>
                </div>
            </div>
        </div>
    )
}

export default HeroBanner
