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
import { Search } from 'react-bootstrap-icons';
import exLink from '../icons/external-link.png'
import verified from '../icons/verified.png'
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import product1 from '../icons/product1.png'
import product3 from '../icons/product3.png'
import product4 from '../icons/product4.png'


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

                <div className='link-item active'>
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
                <a href='suppliers'>Settings</a>
                </div>
                <div className='link-item li'>
                <img className='avatar avatar-link al-b' src={leftarrow} />
                <a href='#'>Hide</a>
                </div>
            </div>
        </div>
    )
}

function ProductCatalog(props){

    return (
        <div className='product-catalog'>
            <div className='product-catalog-img'>
                <img src={product1} />
                </div>
                <div className='product-catalog-info'>
                <div className='product-catalog-title'>
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
                <div className='button-bottom partners-bb'>
                    <a href='#' className='view-products'>View product</a>
                </div>
                <div className='purchases'>
                    <p>Purchases:</p>
                    <p>4</p>
                </div>
                <div className='revenue'>
                    <p>Your Revenue:</p>
                    <p>$177.69</p>
                </div>
                <div className='push-button'>
                    <div>Pushed to store</div>
                    <div className='switch-buttons'>
                    <label class="switch">
                    <input type="checkbox" />
                    <span class="slider round"></span>
                    </label>
                    </div>
                </div>
                <div className='remove-product'>
                    <a href='#' >Remove Product</a>
                </div>
                </div>
            </div>
    )
}

function Allbranditems(){
    return (
        <div className='product-catalog-items'>
            <ProductCatalog />
            <ProductCatalog />
            <ProductCatalog />
            <ProductCatalog />
        </div>
    )
}

export function Footer(){
    return (
        <div className='footer'>
        <p>terms & conditions | additional terms for brands | privacy policy | cookie policy | contact us</p>
        <p className='powered-by'>powered by <span className='copyright-brand'>vyrl</span>2022</p>
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
                <a className='active-nav' href='#'>suppliers</a>
                <a href='retailers'>retailers</a>
              </div>
              <div className='top-header partners'>
              <span className='logo-section partners-logo'>
              <p className='secondary-logo partners-sec-logo'>Blendjet</p>
              <img src={verified} />
              </span>
              <div className='exlink'>
              <a href='#'>shop.blendjet.com</a>
                <img src={exLink} />
              </div>
              </div>
              <div className='page-title'>
                <p className='earnings'>earn 15%</p>
              </div>
            <div className='suppliers-content  '>
            <Allbranditems />
            </div>
            <div className='footer-bar'>
                <Footer />
            </div>
        </div>
    )
}

export default function Suppliers(){
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