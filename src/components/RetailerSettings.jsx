import '../index.css'
import { ChevronDown, ChevronRight, InfoCircle } from 'react-bootstrap-icons'
import useCollapse from 'react-collapsed'
import React, { useState } from 'react';
import icon from '../icons/christmas-stars.png'
import priceTag from '../icons/price-tag.png'
import nodejs from '../icons/node-js.png'
import handshake from '../icons/hand-shake.png'
import chat from '../icons/chat-bubbles-with-ellipsis.png'
import leftarrow from '../icons/left.png'
import bulb from '../icons/bulb.png'
import 'react-slideshow-image/dist/styles.css'
import "react-multi-carousel/lib/styles.css";
import { Footer } from './Suppliers';
import dotsIcon from '../icons/braille.png'
import cardImg from '../img/card.png'
import gearBlack from '../icons/setting-black.png'



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
                <div className='link-item'>
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
                <div className='link-item active'>
                <img className='avatar avatar-link al-b' src={gearBlack} />
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

function RetailerSettingsCard(){
    return (
        <div className='directory-settings-card retailer-settings-card'>
            <div className='ds-card-header'>
                <div className='ds-card-icon'>
                    <img src={dotsIcon} />
                </div>
                
                <div className='ds-card-info'>
                <div className='ds-card-title'>
                    <p>payment to suppliers</p>
                </div>
                <div className='ds-card-des'>
                <p className='gray-color'>This card will pay suppliers their revenue split.</p>
                </div>
                </div>
            </div>
            <div className='ds-card-body'>
            <div className='ds-body-card'>
            <img src={cardImg} />
            </div>
                <div className='ds-card-action update-card-action'>
                    <a href='#'>update card</a>
                </div>
            </div>
        </div>
    )
}


function VerticleContent(){
    return (
        <div className='verticle-content-second'>
            <div className='header-section'>
                <p className='logo'>carro</p>
              </div>
              <div className='setting-page-title'>
              <p>Settings</p>
              </div>
              <div className='settings-header-nav'>
                <ul>
                    <li><a href='profile-settings'>Profile</a></li>
                    <li><a href='supplier-settings'>supplier</a></li>
                    <li><a id='active' href='retailer-settings'>retailer</a></li>
                    <li><a href='#'>subscription & fee</a></li>
                </ul>
              </div>
            <div className='retailer-settings-content  '>
                <RetailerSettingsCard />
            </div>
            <div className='footer-bar'>
                <Footer />
            </div>
        </div>
    )
}

export default function RetailerSettings(){
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