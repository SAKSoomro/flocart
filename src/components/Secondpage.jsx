import '../index.css'
import { PersonCircle } from 'react-bootstrap-icons'
import { ChevronDown } from 'react-bootstrap-icons'
import { ChevronRight} from 'react-bootstrap-icons'
import { Search } from 'react-bootstrap-icons'
import useCollapse from 'react-collapsed'
import React, { useState } from 'react';

function Header(){
    return (
        <div className='Header'>
            <i className='search-icon'><Search /></i><input className='searchbar' placeholder='Search for products or brands to import' />
            <div className='w-user'><p>welcome, alex</p><PersonCircle color='#aaa' size={33}/></div>
        </div>
    )
}
 function HeaderFilterBar(){
    return (
        <div className='header-filter-bar second-bar'>
           <p>image</p>
           <p>category</p>
           <p>product</p>
           <p className='space'>price</p>
           <p>margin</p>
           <p>purchases</p>
           <p>revenue</p>
           <p>status</p>
           <p className='space'>actions</p>
        </div>
    )
}


function SellerTools(props){
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
    return(
        <div className=' tools'>
        <h1 className=' tools-header'>{props.header}<span><ChevronDown size={14} /></span></h1>
        </div>
    )
}
function BrandTools(props){
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
    return(
        <div className=' tools'>
        <h1 className=' tools-header'>{props.header}<span><ChevronDown size={14} /></span></h1>
        </div>
    )
}

function SellerToolsTags(props){
    return (
        <div>
        <a href='#' className='tools-tags'><span className='arrow-right'><ChevronRight size={11}/></span>{props.tag}</a>
        <a href='#' className='tools-tags'><span className='arrow-right'><ChevronRight size={11}/></span>{props.tag2}</a>
        </div>
    )
}

function BrandToolsTags(props){
    return (
        <div>
        <a href='#' className='tools-tags'><span className='arrow-right'><ChevronRight size={11}/></span>{props.tag}</a>
        <a href='#' className='tools-tags'><span className='arrow-right'><ChevronRight size={11}/></span>{props.tag2}</a>
        <a href='#' className='tools-tags'><span className='arrow-right'><ChevronRight size={11}/></span>{props.tag3}</a>
        </div>
    )
}

function RenderSellerTools(){
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
return (
    <div className="collapsible">
        <div className="collapse-header" {...getToggleProps()}>
        <SellerTools
            header='Retailer Tools' />
        </div>
        <div {...getCollapseProps()}>
            <div className="collapse-content">
            <SellerToolsTags
                tag='imported products'
                tag2='seller order' />
            </div>
        </div>
    </div>
    )

}

function RenderBrandTools(){
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
return (
    <div className="collapsible">
        <div className="collapse-header" {...getToggleProps()}>
        <BrandTools
            header='Retailer Tools' />
        </div>
        <div {...getCollapseProps()}>
            <div className="collapse-content">
            <BrandToolsTags
                tag='my products'
                tag2='sellers'
                tag3='brand orders' />
            </div>
        </div>
    </div>
    )

}

function Itemdetails(props){
    return (
        <div className='item-report'>
        <img src='https://drive.google.com/uc?export=download&id=1SHcXLw4R4jOgTZnw4Q8CxhkRmJ84hNNS' />
        <p>sports & outdoors</p>
        <p>sunstrip | magnetic</p>
        <p>%49.5</p>
        <p>10%</p>
        <p>3</p>
        <p>$14.9</p>
        <div className='switch-buttons'>
        <label class="switch">
         <input type="checkbox" />
         <span class="slider round"></span>
        </label>
        </div>
        <div className='action-buttons'>
            <button>Edit</button>
            <button>Remove</button>
        </div>
        </div>
    )
}


export function SideModule(){
    return (
        
        <div className='side-module'>
            <div className='logo'>FloCart</div>
            <div className='side-header'><p>MarketPlace</p></div>
            <div className='tools'>
            <RenderSellerTools />
            <RenderBrandTools />
                <p className='settings'>Settings</p>
            </div>
        </div>
    )
}


 export default function Secondpage(){

    return (
        
        <div className='container'>
        <div className='horizontal-content'>
        <div ><SideModule /></div></div>
        <div className='verticle-content'>
        <Header />
        <HeaderFilterBar />
        <Itemdetails />
        <Itemdetails />
        </div>
        </div>
    )

}