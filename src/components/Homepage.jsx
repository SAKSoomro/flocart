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
               <i id='btn'> <a href='#'>Hide</a></i>
                </div>
            </div>
        </div>
    )
}

function Subsidebar(){
    return (
        <div className='sub-sidebar'>
        <p className='sub-sidebar-title'>browse by category</p>
        <a href='#'>arts & crafts</a>
        <a href='#'>automotive</a>
        <a href='#'>babby</a>
        <a href='#'>beauty & body</a>
        <a href='#'>clothing & fashion</a>
        <a href='#'>collections</a>
        <a href='#'>electronics</a>
        <a href='#'>fitness equipment</a>
        <a href='#'>food & beverages</a>
        <a href='#'>health & wellness</a>
        <a href='#'>home & garden</a>
        </div>
    )
}

export function CarditemComponent(){

    const responsive = {


        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
          
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    return (
     
        <Carousel
        responsive={responsive}>
        <div className="product-img"><img src={product1} /></div>
        <div className="product-img"><img src={product3} /></div>
        <div className="product-img"><img src={product4} /></div>
        <div className="product-img"><img src={product3} /></div>
        </Carousel>
        
    )
}

export function ProductCard(){


    return (
        <div className='product-card'>
        <div className='card-header'>
            <p className='card-title'>Blendjet</p>
            <div className='verified'>
            <img className='verified' src={verified} />
            </div>     
            <div className='ex-link'>
            <img className='ex-link' src={exLink} />
            </div>
            </div>
            <CarditemComponent />
        <div className='card-bottom'>
            <p>earn 15%</p>
            <a href='allproducts'>view all products</a>
        </div>
        </div>
    )
}

function SubContent(){
    return (
        <div className='sub-content'>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </div>
    )
}

function VerticleContent(){
    return (
        <div className='verticle-content'>
            <div className='header-section'>
                <p className='logo'>carro</p>
                <p className='logo-des'>Sell more, together.</p>
                <div className='searchbar-bg'>
                <div className='searchbar'>
            <i className='search-icon'><Search color='blue' /></i><input className='searchbar' placeholder='Find a brand...' />
                </div>
                </div>
            </div>
            <div className='sub-container'>
                <div className='sub-sidebar'>
                    <Subsidebar />
                </div>
                <div className='sub-content'>
                    <SubContent />
                </div>
            </div>
        </div>
    )
}

export default function Homepage(){
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