import '../index.css'
import { PersonCircle } from 'react-bootstrap-icons'
import { ChevronDown } from 'react-bootstrap-icons'
import { ChevronRight} from 'react-bootstrap-icons'
import { Search } from 'react-bootstrap-icons'
import useCollapse from 'react-collapsed'
import React, { useState } from 'react';

function Header(){
    return (
        <div className='Header settings-header'>
            <a href='./settings'>account & store setting</a>
            <a href='./payments' className='active'>payment</a>
            <a href='./returns'>returns</a>
            <div className='w-user'><p>welcome, alex</p><PersonCircle color='#aaa' size={33}/></div>
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
function OrdersTools(props){
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
        
        </div>
    )
}

function BrandToolsTags(props){
    return (
        <div>
        <a href='#' className='tools-tags'><span className='arrow-right'><ChevronRight size={11}/></span>{props.tag}</a>
        <a href='#' className='tools-tags'><span className='arrow-right'><ChevronRight size={11}/></span>{props.tag2}</a>
        
        </div>
    )
}

function OrdersToolsTags(props){
    return (
        <div>
        <a href='#' className='tools-tags'><span className='arrow-right'><ChevronRight size={11}/></span>{props.tag}</a>
        <a href='#' className='tools-tags'><span className='arrow-right'><ChevronRight size={11}/></span>{props.tag2}</a>
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
                tag='imported products' />
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
                tag2='sellers' />
            </div>
        </div>
    </div>
    )

}


function RenderOrdersTools(){
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
return (
    <div className="collapsible">
        <div className="collapse-header" {...getToggleProps()}>
        <BrandTools
            header='Order Tools' />
        </div>
        <div {...getCollapseProps()}>
            <div className="collapse-content">
            <BrandToolsTags
                tag='imported products'
                tag2='my products' />
            </div>
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
            <RenderOrdersTools />
            <p className='settings'><a className='settings-active' href='./settings'>Settings</a> </p>
            </div>
        </div>
    )
}

function Form(){
    return(
        <div className='form'>
            <p>order billing</p>
            <p>credit card</p>
            <p>**** **** ****</p>
            <div className='form-buttons'>
                <button>update card</button>
                <button>remove card</button>
            </div>
            <div className='download-links'>
                <a href='#'>download payouts</a>
                <a href='#'>download my payments</a>
            </div>
        </div>
    )
}

 export default function Payments(){

    return (
        
        <div className='container'>
        <div className='horizontal-content'>
        <div ><SideModule /></div></div>
        <div className='verticle-content'>
        <Header />
        <Form />
        </div>
        </div>
    )

}