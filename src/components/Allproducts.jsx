import '../index.css'
import { ChevronDown } from 'react-bootstrap-icons'
import useCollapse from 'react-collapsed'
import React, { useState } from 'react';
import icon from '../icons/christmas-stars.png'
import priceTag from '../icons/price-tag.png'
import nodejs from '../icons/node-js.png'
import handshake from '../icons/hand-shake.png'
import chat from '../icons/chat-bubbles-with-ellipsis.png'
import gear from '../icons/gear.png'
import leftarrow from '../icons/left.png'
import bulb from '../icons/bulb.png'
import exLink from '../icons/external-link.png'
import verified from '../icons/verified.png'
import 'react-slideshow-image/dist/styles.css'
import "react-multi-carousel/lib/styles.css";
import product1 from '../icons/product1.png'


function RenderCollapse(){
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
return (
    <div className="collapsible">
        <div className="collapse-header" {...getToggleProps()}>
        <div className='top-logo-link'>
        <div className='link-item-collapse liup'>
                <img className='avatar' src={icon} />
                <a href='#'>brand<br />partnerships</a>
                <span className='arrow-right'><ChevronDown color='white' size={18}/></span>
                </div>
        </div>
        </div>
        <div {...getCollapseProps()}>
            <div className="collapse-content">
                <div className='nav-page-link'>
                <div className='link-item active'>
                <img className='avatar avatar-link' src={priceTag} />
                <a href='/'>Directory</a>
                </div>

                <div className='link-item'>
                <img className='avatar avatar-link lidown' src={handshake} />
                <a href='suppliers'>Partners</a>
                </div>

                <div className='link-item'>
                <img className='avatar avatar-link' src={chat} />
                <a href='#'>Requests</a>
                </div>

                <div className='link-item li'>
                <img className='avatar avatar-link' src={nodejs} />
                <a href='#'>bundles</a>
                </div>

            </div>
            </div>
        </div>
    </div>
    )

}

function Sidemodule(){
    return (
        <div className='side-module'>
            <RenderCollapse />
            <div className='bottom-links'>
            <div className='link-item'>
                <img className='avatar avatar-link al-b' src={bulb} />
                <a href='#'>Send Feedback</a>
                </div>
                <div className='link-item'>
                <img className='avatar avatar-link al-b' src={gear} />
                <a href='profile-settings'>Settings</a>
                </div>
                <div className='link-item li'>
                <img className='avatar avatar-link al-b' src={leftarrow} />
                <a href='#'>Hide</a>
                </div>
            </div>
        </div>
    )
}

function ProductCard(props){

    return (
        <div className='product-card-second'>
            <div className='card-image-second'>
                <img src={product1} />
                <div className='product-title-second'>
                    BlendJet 2
                </div>
                <div className='product-price-second'>
                  <span>
                    <p>Retail</p>
                    <p>$49.95-$87.65</p>
                  </span>
                  <span className='earn-span'>
                    <p>Earn</p>
                    <p>$25.65-$48.21</p>
                  </span>
                </div>
                <div className='button-bottom'>
                    <a href='#' className='view-products'>View product</a>
                </div>
            </div>
        </div>
    )
}

function Allbranditems(){
    return (
        <div className='all-brand-products'>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </div>
    )
}

function VerticleContent(){
    return (
        <div className='verticle-content-second'>
            <div className='header-section'>
                <p className='logo'>carro</p>
              </div>
              <div className='top-header'>
              <span className='logo-section'>
              <p className='secondary-logo'>Blendjet</p>
              <img src={verified} />
              </span>
              <div className='request-link'>
              <a href='#' >Request access to products</a>
              </div>
              <div className='exlink'>
              <a href='#'>shop.blendjet.com</a>
                <img src={exLink} />
              </div>
              </div>
              <div className='page-title'>
                <p className='earnings'>earn 15%</p>
                <p className='content-title'>
                    All products(A-Z)
                </p>
              </div>
            <div className='all-brands-content  '>
            <Allbranditems />
            </div>
        </div>
    )
}

export default function AllProducts(){
    return (
        <div className='container'>
            <div className='horizontal-content'>
                <Sidemodule />
            </div>
            <div className='verticle-content'>
            <VerticleContent />
            </div>
        </div>
    )
}