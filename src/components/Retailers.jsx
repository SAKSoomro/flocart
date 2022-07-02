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
import 'react-slideshow-image/dist/styles.css'
import "react-multi-carousel/lib/styles.css";
import sunstrip from '../img/sunstrip.png'


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


function RenderProductCollapse(){
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
return (
    <div className="collapsible">
        <div className="collapse-products" {...getToggleProps()}>
        <CollapseProductsHeader />
        </div>
        <div {...getCollapseProps()}>
            <div className="collapse-products-content">
                <CollapseProductsBody />
                <CollapseProductsBody />
                <CollapseProductsBody />
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

function CollapseProductsHeader(){
    return (
        <div className='collapse-products-header'>
            <div className='cp-arrow'>
                <ChevronDown />
            </div>
            <div className='cp-email'>
                <p>saksoomro@gmail.com</p>
            </div>
            <div className='cp-store'>
                <p>my shopify store</p>
            </div>
            <div className='cp-products'>
                <p>4</p>
            </div>
            <div className='cp-sales'>
                <p>5</p>
            </div>
            <div className='cp-revenue'>
                <p>$873.28</p>
            </div>
            <div className='cp-actions'>
                <a href='#'>Message</a>
                <a href='#'>Rem</a>
            </div>
        </div>
    )
}

function CollapseProductsBody(){
    return (
        <div className='collapse-products-body'>
            <div className='cp-body-products'>
                <img src={sunstrip} />
                <p>Sunstrip</p>
            </div>
            <div className='cp-body-sales'>
                <p>3</p>
            </div>
            <div className='cp-body-revenue'>
                <p>$78.178</p>
            </div>
            <div className='cp-body-actions'>
                <a href='#'>Rem</a>
            </div>
        </div>
    )
}


function CollapseProducts(){
    return (
        <div className='collapse-products'>
           <RenderProductCollapse />
           <RenderProductCollapse />
           <RenderProductCollapse />
           <RenderProductCollapse />
           <RenderProductCollapse />
           <RenderProductCollapse />
        </div>
    )
}

function VerticleContent(){
    return (
        <div className='verticle-content-second'>
            <div className='header-section'>
                <p className='logo'>carro</p>
              </div>
              <div className='header-nav'>
                <p className='header-nav-title'>Your Partners</p>
                <a className='active-nav' href='suppliers'>suppliers</a>
                <a href='retailers'>retailers</a>
              </div>
              <div className='top-header retailers-header'>
                <ul className='list'>
                   <span className='email'><li>email</li></span>
                    <li>shopify.store</li>
                   <span className='products'><li>products</li> </span>
                    <li>sales</li>
                   <span className='revenue' > <li>revenue</li> </span>
                    <li>actions</li>
                </ul>
              </div>
            <div className='retailers-content  '>
           <CollapseProducts />
            </div>
        </div>
    )
}

export default function Retailers(){
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