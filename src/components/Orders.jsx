import '../index.css'
import { ChevronDown, PersonCircle } from 'react-bootstrap-icons'
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


function OrdersCard(){
    return (
        <div className='orders-card'>
        <div className='order-no'>
            <p>00001</p>
        </div>
        <div className='order-date'>
            <p>2022-06-30</p>
        </div>
        <div className='source-shop'>
            <p>mystore.shopify.com</p>
        </div>
        <div className='customer-name'>
            <p>john doe</p>
        </div>
        <div className='total'>
            <p>$98.53</p>
        </div>
        <div className='quantity'>
            <p>2</p>
        </div>
        <div className='status'>
            <p>failure</p>
        </div>
        <div className='actions-btn'>
            <a href='#'>View</a>
        </div>
        </div>
    )
}

function VerticleContent(){
    return (
        <div className='verticle-content-second'>
            <div className='top-header-orders'>
            <div className='searchbar-orders'>
                <input type='text' placeholder='Search for products by title or SKU' />
            </div>
            <div className='user-welcome'>
                <p>welcome,alex</p>
                <img src={PersonCircle} />
            </div>
            </div>
            <div className='top-nav-header'>
                <ul>
                    <li>order</li>
                    <li>order date</li>
                    <li>source shop</li>
                    <li>customer name</li>
                    <li>total</li>
                    <li>quantity</li>
                    <li>status</li>
                    <li>actions</li>
                </ul>
            </div>
            <div className='orders-content'>
           <OrdersCard />
           <OrdersCard />
           <OrdersCard />
           <OrdersCard />
            </div>
        </div>
    )
}

export default function Orders(){
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