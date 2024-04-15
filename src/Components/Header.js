import { flipkart, logo, roundIcon } from '../assets'
import { FaRegUserCircle } from "react-icons/fa";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { AiOutlineShop } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import React, { useState } from 'react';
import { Login } from './Login';
import { Link } from 'react-router-dom';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useSelector } from 'react-redux';
import { Badge, Box } from '@mui/material';
import { IoMdMenu } from "react-icons/io";
import Drawer from '@mui/material/Drawer';
import { FaUser } from "react-icons/fa";
import { SiWindows11 } from "react-icons/si";
import { IoIosKeypad } from "react-icons/io";
import { TbLanguageHiragana } from "react-icons/tb";
import { BiSolidOffer } from "react-icons/bi";
import { IoBagSharp } from "react-icons/io5";
import { BiSolidShoppingBags } from "react-icons/bi";
import { TbTagStarred } from "react-icons/tb";
import { FaShoppingCart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { SiLightning } from "react-icons/si";
import { TiPlusOutline } from "react-icons/ti";





export const Header = () => {

    const [open, setOpen] = useState(false)
    const [drawerOpen, setDrawerOpen] = useState(false)
    const [item, setItem] = useState('')
    const [showList, setShowList] = useState(true)
    const products = useSelector(store => store.products.products)
    const cartItem = useSelector(store => store.cart.cartItem)


    const openDialog = () => {
        setOpen(!open);
        console.log("open", open);
    }

    const [anchorEl, setAnchorEl] = useState(null)
    const [op, setOp] = useState(false);

    const handleClick = (e) => {
        setAnchorEl(e.currentTarget);
        setOp(true)
    };
    const handleClose = () => {
        setAnchorEl(null);
        setOp(false);
    };

    const handleMouseLeave = () => {
        setTimeout(() => {
            setOp(!op)
        }, 2000)
    }

    const toggleDrawer = (newOpen) => () => {
        setDrawerOpen(newOpen);
    };


    const DrawerList = (
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
            <div className='flex items-center gap-2 py-5 px-5 bg-[#047bd5] text-white font-semibold'>
                <FaUser className='text-white text-xl' />
                <h2 className='text-lg'>Welcome!</h2>
                <img src={roundIcon} alt='f' className='h-6 ml-auto rounded-full' />
            </div>
            <div className='flex flex-col gap-4 py-3 px-5 text-gray-700 '>
                <div className='flex items-center gap-3'>
                    <SiLightning className=' text-[12px]'/>
                    <h3 className='text-sm font-semibold'>SuperCoin Zone</h3>
                </div>

                <div className='flex items-center gap-3'>
                    <TiPlusOutline className=' text-[12px]'/>
                    <h3 className='text-sm font-semibold'>Flipkart Plus Zone</h3>
                </div>

                <hr></hr>

                <div className='flex items-center gap-3'>
                    <SiWindows11 className=' text-[.6rem]' />
                    <h3 className='text-sm font-semibold'>All Categories</h3>
                </div>

                <div className='flex items-center gap-3'>
                    <IoIosKeypad className=' text-[12px]' />
                    <h3 className='text-sm font-semibold'>More on Flipkart</h3>
                </div>
                <hr></hr>
                <div className='flex items-center gap-3'>
                    <TbLanguageHiragana className='text-[14px]' />
                    <h3 className='text-sm font-semibold'>Choose Language</h3>
                </div>
                <hr></hr>
                <div className='flex items-center gap-3'>
                    <BiSolidOffer className='text-[13px]' />
                    <h3 className='text-sm font-semibold'>Offer Zone</h3>
                </div>
                <div className='flex items-center gap-3'>
                    <IoBagSharp className='text-[12px]'/>
                    <h3 className='text-sm font-semibold'>Sell on Flipkart</h3>
                </div>
                <hr></hr>
                <div className='flex items-center gap-3'>
                    <BiSolidShoppingBags className='text-[12px]'/>
                    <h3 className='text-sm font-semibold'>My Order</h3>
                </div>
                <div className='flex items-center gap-3'>
                    <TbTagStarred className='text-[12px]'/>
                    <h3 className='text-sm font-semibold'>Coupons</h3>
                </div>
                <div className='flex items-center gap-3'>
                    <FaShoppingCart className='text-[12px]'/>
                    <h3 className='text-sm font-semibold'>My Cart</h3>
                </div>
                <div className='flex items-center gap-3'>
                    <FaHeart className='text-[12px]'/>
                    <h3 className='text-sm font-semibold'>My Wishlist</h3>
                </div>
                <div className='flex items-center gap-3'>
                    <FaUser className='text-[12px]' />
                    <h3 className='text-sm font-semibold'>My Account</h3>
                </div>
                <div className='flex items-center gap-3'>
                    <IoIosNotifications className='text-[15px]'/>
                    <h3 className='text-sm font-semibold'>My Notifications</h3>
                </div>
                <hr></hr>
            </div>
            <div className='flex flex-col gap-3 px-3'>
                <h3>Notification Preferences</h3>
                <h3>Help centre</h3>
                <h3>Legal</h3>
            </div>
        </Box>
    );



    return (
        <>
            <div className=' bg-[#047bd5] md:flex items-center md:justify-between px-2 md:px-[4rem] lg:px-32 py-3 w-full '>
                <div className='hidden md:flex'>
                    <Link to='/'><img src={logo} alt='flipkart' className='h-8 md:h-10' /></Link>
                </div>
                <div className='flex mb-3 md:hidden'>
                    <IoMdMenu className='flex md:hidden text-3xl text-white ml-2 mr-4 cursor-pointer' onClick={toggleDrawer(true)} />
                    <Drawer open={drawerOpen} onClose={toggleDrawer(false)}>
                        {DrawerList}
                    </Drawer>
                    <div className=''>
                        <Link to='/'><img src={logo} alt='flipkart' className='h-8 md:h-10' /></Link>
                    </div>
                    <div className='flex items-center ml-[8rem] gap-2'>
                        <Link to='/profile'><FaRegUserCircle className='flex md:hidden text-[1.6rem] text-white  ' /></Link>
                        <Link to='/cart'><Badge badgeContent={cartItem?.length} color="secondary"><HiOutlineShoppingCart className='flex md:hidden text-[1.7rem] text-white ml-2 ' /></Badge></Link>
                    </div>
                </div>

                <div className='flex pl-1 md:pl-0'>
                    <CiSearch className='text-[1.4rem] md:text-2xl text-gray-500 absolute top-[4rem] left-[1.2rem] md:relative md:top-2 md:left-[2.2rem]  ' /><input type="text" value={item} onChange={(e) => {
                        setItem(e.target.value)
                        setShowList(true)
                    }} placeholder="Search for Products, Brands and More" className='w-full md:w-[25rem] lg:w-[40rem] py-[0.4rem] pl-10 md:pl-12 rounded-md outline-none mr-2' />
                </div>

                {
                    item && showList &&
                    <div className='absolute top-[6.5rem]  md:left-[20.5rem]  md:top-[3.5rem] mr-2 bg-white h-[330px] py-3 px-4 overflow-y-auto no-scrollbar rounded-sm '>
                        <ul>
                            {
                                products.filter(product => product.title.longTitle.toLowerCase().includes(item.toLowerCase())).map((data, i) => (
                                    <Link to={`/product/${data.id}`}><li className='py-2 md:py-1' onClick={() => {
                                        setShowList(!showList)
                                        setItem('')
                                    }}>
                                        {data?.title?.longTitle}
                                    </li>
                                    </Link>
                                ))
                            }
                        </ul>
                    </div>
                }
                <div className='hidden md:flex items-center gap-5 lg:gap-8'>
                    <div className='flex gap-2 items-center cursor-pointer' onClick={openDialog} onMouseOver={handleClick} onMouseOut={handleMouseLeave}><FaRegUserCircle className='text-2xl text-white' /><span className=' text-lg text-white'>Login</span><IoIosArrowDown className='text-white ml-[-3px]' /></div>
                    <Menu
                        id="basic-menu"
                        open={op}
                        onClose={handleClose}
                        anchorEl={anchorEl}
                    >
                        <MenuItem onClick={handleClose} onMouseOver={() => setOp(true)} ><span onClick={openDialog}>Login</span></MenuItem>
                        <MenuItem onClick={handleClose} onMouseOver={() => setOp(true)} >Profile</MenuItem>
                        <MenuItem onClick={handleClose} onMouseOver={() => setOp(true)} >My account</MenuItem>
                        <MenuItem onClick={handleClose} onMouseOver={() => setOp(true)} >Logout</MenuItem>
                    </Menu>

                    <Link to='/cart'>
                        <div className='flex gap-2 items-center cursor-pointer'>
                            <Badge badgeContent={cartItem?.length} color="secondary">
                                <HiOutlineShoppingCart className='text-2xl text-white' />
                            </Badge>
                            <span className='hidden lg:flex text-lg text-white'>Cart</span>
                        </div>
                    </Link>

                    <div className='flex gap-2 items-center cursor-pointer'><AiOutlineShop className='text-2xl text-white font-semibold str' /><span className='hidden lg:flex text-lg text-white'>Become a seller</span></div>
                </div>
            </div>
            <Login open={open} setOpen={setOpen} />

        </>
    )
}
