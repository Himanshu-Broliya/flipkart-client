import { TextField } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import { loginImage } from '../Constant/data';
import { useState } from 'react';

export const Login = ({ open, setOpen }) => {


   

    const [openRegisterTogle, setOpenRegisterTogle] = useState(false)

    const handleDialog = () => {
        setOpen(false)
    }

    const openRegister = () => {
        setOpenRegisterTogle(!openRegisterTogle)
    }
    return (
        <div >
            <Dialog open={open} onClose={handleDialog} PaperProps={{ sx: { maxWidth: 'unset' } }}>
                <div className='flex h-[530px] w-[820px]'>
                    <div className='bg-[#047bd5] w-[335px]'>
                        <h1 className='text-[1.76rem] text-white font-semibold pl-7 pt-12'>{openRegisterTogle ? "Looks like you're new here!" : "Login"}</h1>
                        <p className='mt-5 text-gray-300 text-lg px-7 '>{openRegisterTogle ? "Sign up with your mobile number to get started" : "Get access to your Orders, Wishlist and Recommendations"}</p>
                        <img src={loginImage} alt='login image' className='absolute top-[21rem] left-[3.4rem]' />
                    </div>
                    <div className=' pt-16 pl-8 flex flex-col'>
                        <TextField id="standard-basic" label="Enter Email/ Mobile number" variant="standard" className='w-96 mx-auto ' />
                        <p className='mt-7 text-[12px]'>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</p>
                        <button className='mt-7 w-96 bg-orange-600 py-3 text-white font-semibold'>{ openRegisterTogle ? "CONTINUE" : "Request OTP"}</button>
                        { openRegisterTogle && <button className='mt-7 w-96 shadow-[0_2px_4px_0_rgba(0,0,0,0.25)] py-3 text-[#047bd5] font-semibold' onClick={openRegister}>Existing User? Log in</button>}
                        { !openRegisterTogle && <p className=' mt-[15rem] text-sm text-[#047bd5] font-semibold cursor-pointer text-center' onClick={openRegister}>New to Flipkart? Create an account</p> }
                    </div>
                </div>
            </Dialog>
        </div>
    )
}
