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
            <a href='/settings' className='active'>account & store setting</a>
            <a href='/payments'>payment</a>
            <a href='#'>returns</a>
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
            <p className='settings'><a className='settings-active' href='/settings'>Settings</a> </p>
            </div>
        </div>
    )
}

function FormOne(){
    return(
        <div className='form-one'>
            <p className='form header'>account details</p>
            <div className='account-info'>
                <p>Dropt Account</p>
                <p>Email</p>
                <p>graftsteven@gmail.com</p>
            </div>
            <div className='form-input'>
                <label>reset password</label>
                <input type='text' placeholder='current password' />
                <label>new password</label>
                <input type='password' placeholder='new password' />
                <label>confirm password</label>
                <input type='password' placeholder='confirm password' />
            </div>
            <button className='button-save'>save</button>
        </div>
    )
}

function FormTwo(){
    return(
        <div className='form-two'>
            <p className='form header'>store details</p>
            <div className='form-input'>
                <label>store name</label>
                <input type='text' placeholder='RingStrips' />
            </div>
            <div>
                <p>store Email</p>
                <p>admin@snostrip.com</p>
            </div>
            <div className='form-input'>
                <label>seconday store email</label>
                <input type='email' placeholder='johndoe@gmail.com' />
                <label>contact phone</label>
                <input type='text' placeholder='111 156 6588' />
                <label>secondary phone</label>
                <input type='text' placeholder='000 0000 000' />
            </div>
            <div className='dd-category'>
               <label>store category</label>
                <input type='text' placeholder='sports & outdoors' />
            </div>
            <div className='form-bottom-text'>
                <div className='autosync'><p>auto sync</p>
                <div className='switch-buttons'>
                <label class="switch">
                 <input type="checkbox" />
                 <span class="slider round"></span>
                </label>
                </div></div>
                <div className='bottom-terms'>
                    <p>Products</p>
                    <p>Only inventory, pricing and other data will be synced</p>
                    <p>This is one-way synochronization. Changes in shopify will be updated on Dropt but not vice-versa</p>
                </div>
            </div>
            <button className='button-save'>save</button>
        </div>
    )
}

 export default function Settings(){

    return (
        
        <div className='container'>
        <div className='horizontal-content'>
        <div ><SideModule /></div></div>
        <div className='verticle-content'>
        <Header />
        <div className='form-content'>
        <FormOne />
        <FormTwo />
        </div>
        </div>
        </div>
    )

}