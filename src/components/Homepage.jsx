import '../index.css'
import items from '../items'
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
        <div className='header-filter-bar'>
            <div class="dropdown">
             <p class="dropbtn">brands <span className='dd-arrow'/><ChevronDown size={11} className='dropdown-handler' /></p>
            <div class="dropdown-content">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
        </div>
        </div>
        <div class="dropdown">
             <p class="dropbtn">lead <span className='dd-arrow'/><ChevronDown size={11} className='dropdown-handler' /></p>
            <div class="dropdown-content">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
        </div>
        </div>
        <div class="dropdown">
             <p class="dropbtn">price <span className='dd-arrow'/><ChevronDown size={11} className='dropdown-handler' /></p>
            <div class="dropdown-content">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
        </div>
        </div>
        </div>
    )
}


function Tools(props){
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
    return(
        <div className=' tools'>
        <h1 className=' tools-header'>{props.header}<span><ChevronDown size={14} /></span></h1>
        </div>
    )
}

function ToolsTags(props){
    return (
        <div>
        <a href='#' className='tools-tags'><span className='arrow-right'><ChevronRight size={11}/></span>{props.tag}</a>
        <a href='#' className='tools-tags'><span className='arrow-right'><ChevronRight size={11}/></span>{props.tag2}</a>
        </div>
    )
}

function RenderCollapse(){
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
return (
    <div className="collapsible">
        <div className="collapse-header" {...getToggleProps()}>
        <Tools
            header='Retailer Tools' />
        </div>
        <div {...getCollapseProps()}>
            <div className="collapse-content">
            <ToolsTags
                tag='imported products'
                tag2='local products' />
            </div>
        </div>
    </div>
    )

}


function SideModule(){
    return (
        
        <div className='side-module'>
            <div className='logo'>FloCart</div>
            <div className='side-header'><p>MarketPlace</p></div>
            <div className='tools'>
            <RenderCollapse />
            <RenderCollapse />
            <RenderCollapse />
                <p className='settings'>Settings</p>
            </div>
        </div>
    )
}




function Item(props){
    return (
        <div className='item'>
        <img className='items-image' src={props.img} />
        <div className='item-details'>
        <div className='details-top'>
            <p className='item-title'>{props.title}</p>
            <p className='item-type'>{props.type}</p>
        </div>
        <div className='details-bottom'>
            <div className='text'>
            <p>MSRP</p>
            <p className='item-price'>${props.price}</p>
            </div>
            <button className='import-button'>Import</button>
        </div>    
        </div>
        </div>
    )
}

function Products(){
    return (
        <div className='products'>
        <Item 
            img={items[0].imgURL}
            title={items[0].title}
            type={items[0].type}
            price={items[0].price}
        />
         <Item 
            img={items[0].imgURL}
            title={items[0].title}
            type={items[0].type}
            price={items[0].price}
        />
         <Item 
            img={items[0].imgURL}
            title={items[0].title}
            type={items[0].type}
            price={items[0].price}
        />
         <Item 
            img={items[0].imgURL}
            title={items[0].title}
            type={items[0].type}
            price={items[0].price}
        />
         <Item 
            img={items[0].imgURL}
            title={items[0].title}
            type={items[0].type}
            price={items[0].price}
        />
         <Item 
            img={items[0].imgURL}
            title={items[0].title}
            type={items[0].type}
            price={items[0].price}
        />
        <Item 
            img={items[0].imgURL}
            title={items[0].title}
            type={items[0].type}
            price={items[0].price}
        />
        <Item 
            img={items[0].imgURL}
            title={items[0].title}
            type={items[0].type}
            price={items[0].price}
        />
        </div>
    )
}


export default function Homepage(){

    return (
        
        <div className='container'>
        <div className='horizontal-content'>
        <div ><SideModule /></div></div>
        <div className='verticle-content'>
        <Header />
        <HeaderFilterBar />
        <Products />
        </div>
        </div>
    )

}