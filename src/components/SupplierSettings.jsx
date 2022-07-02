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
import { ProductCard } from './Homepage';
import dotsIcon from '../icons/braille.png'
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
                <div className='link-item '>
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

function DirectorySettingsCard(){
    return (
        <div className='directory-settings-card'>
            <div className='ds-card-header'>
                <div className='ds-card-icon'>
                    <img src={dotsIcon} />
                </div>
                
                <div className='ds-card-info'>
                <div className='ds-card-title'>
                    <p>directory listings</p>
                </div>
                <div className='ds-card-des'>
                <p className='gray-color'>Your brand card shows your best-selling products available to Carro</p>
                </div>
                </div>
            </div>
            <div className='ds-card-body'>
                <div className='ds-card-body-title'>
                    <p>your brand card is visible to all in the directory</p>
                </div>
                <div className='ds-card-body-showcase'>
                    <ProductCard />
                </div>
                <div className='ds-card-action'>
                    <a href='#'>change visibility</a>
                </div>
            </div>
        </div>
    )
}

function PartnershipSettingsCard(){
    return (
        <div className='directory-settings-card'>
            <div className='ds-card-header'>
                <div className='ds-card-icon'>
                    <img src={dotsIcon} />
                </div>
                
                <div className='ds-card-info'>
                <div className='ds-card-title'>
                    <p>revenue split</p>
                </div>
                <div className='ds-card-des'>
                <p className='gray-color'>Set the percentage you share with retailer partners</p>
                </div>
                </div>
            </div>
            <div className='ds-card-body'>
                
            </div>
        </div>
    )
}

function RetailerAccessSettingsCard(){
    return (
        <div className='directory-settings-card'>
            <div className='ds-card-header'>
                <div className='ds-card-icon'>
                    <img src={dotsIcon} />
                </div>
                
                <div className='ds-card-info'>
                <div className='ds-card-title'>
                    <p>Retailer access</p>
                </div>
                <div className='ds-card-des'>
                <p className='gray-color'>Determine retailer's access to your products.</p>
                </div>
                </div>
            </div>
            <p className='ab-card-title'>Can Carro auto-approve retailers to sell your products?</p>
            <div className='ds-card-body'>
                <div className='access-body-cards'>
                    <div className='ab-card'>
                       <div className='ab-card-icon'><InfoCircle color='#aaa' size={'16px'} /></div>
                        <div className='ab-card-text'>
                        <p>Yes!</p>
                        <p>Turn on auto-approve.</p>
                        </div>
                    </div>
                    <div className='ab-card'>
                    <div className='ab-card-icon'><InfoCircle color='#aaa' size={'16px'} /></div>
                        <div className='ab-card-text'>
                        <p>No.</p>
                        <p>I want to approve each partner</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


function BrandSettingsCard(){
    return (
        <div className='directory-settings-card'>
            <div className='ds-card-header'>
                <div className='ds-card-icon'>
                    <img src={dotsIcon} />
                </div>
                
                <div className='ds-card-info'>
                <div className='ds-card-title'>
                    <p>brand categories</p>
                </div>
                <div className='ds-card-des'>
                <p className='gray-color'>brand categories your brand according to your product catalog</p>
                </div>
                </div>
            </div>
            <p className='bc-card-body-title'>Your brand listed in the following categories</p>
            <div className='bc-card-body'>
                
                <p>Outdoor <ChevronRight size={'11px'} /> Cycling <ChevronRight size={'11px'} /> Accessories <ChevronRight size={'11px'} /> hats</p>
                <p>clothing & fashion <ChevronRight size={'11px'} /> mens <ChevronRight size={'11px'} /> Accessories</p>
                <p>clothing & fashion <ChevronRight size={'11px'} /> mens <ChevronRight size={'11px'} /> outerwear</p>
                <p>automotive <ChevronRight size={'11px'} /> exterior Accessories</p>
            </div>
            <p className='last-element'>clothing & fashion <ChevronRight size={'11px'} /> mens <ChevronRight size={'11px'} /> shirts & tops <ChevronRight size={'11px'} /> sweatschirts & hoodies</p>
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
                    <li><a id='active' href='#'>supplier</a></li>
                    <li><a href='retailer-settings'>retailer</a></li>
                    <li><a href='#'>subscription & fee</a></li>
                </ul>
              </div>
            <div className='supplier-settings-content  '>
            <div>
            <DirectorySettingsCard />
            </div>
            <div>
            <BrandSettingsCard />
            </div>
            <div>
            <PartnershipSettingsCard />
            </div>
            <div>
            <RetailerAccessSettingsCard />
            </div>
            </div>
        </div>
    )
}

export default function SupplierSettings(){
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