import { TextField } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import { loginImage } from '../Constant/data';
import { useState } from 'react';
import  axios  from 'axios'
import {useNavigate} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import { getUserDetails } from '../redux/User';




export const Login = ({ open, setOpen }) => {

    const [openRegisterTogle, setOpenRegisterTogle] = useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [mobileNumber, setMobileNumber] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const dispatch = useDispatch()


    const handleDialog = () => {
        setOpen(false)
    }

    const openRegister = () => {
        setOpenRegisterTogle(!openRegisterTogle)
    }

    const formSubmission = async() =>{
        if(openRegisterTogle){
            // register api
            const data = {
                name,
                email,
                mobileNumber,
                password
            }
            // console.log(data);
            const result = await axios.post(`${process.env.REACT_APP_BASE_URL}/register`,data)
            console.log(result.data);
            if(result.data.auth){
                localStorage.clear()
                localStorage.setItem('auth',result.data.auth)
                localStorage.setItem('name',result.data.result.name)
                setName('')
                setEmail('')
                setMobileNumber('')
                setPassword('')
                dispatch(getUserDetails(result.data.result))
                setOpen(false)
                navigate('/')
            }else{
                console.log("user exist!")
            }
        }else{
            // login api
        }
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
                        {
                            openRegisterTogle ? <div className='pt-[-20px] flex flex-col gap-3'>
                                    <TextField id="standard-basic" type='text' value={name} onChange={(e)=>setName(e.target.value)} label="Enter Full Name" variant="standard" className='w-96 mx-auto ' />
                                    <TextField id="standard-basic" type='email' value={email} onChange={(e)=>setEmail(e.target.value)} label="Enter Email" variant="standard" className='w-96 mx-auto ' />
                                    <TextField id="standard-basic" type='number' value={mobileNumber} onChange={(e)=>setMobileNumber(e.target.value)} label="Enter Mobile number" variant="standard" className='w-96 mx-auto ' />
                                    <TextField id="standard-basic" type='text' value={password} onChange={(e)=>setPassword(e.target.value)} label="Enter Password" variant="standard" className='w-96 mx-auto ' />
                                </div>:
                        <TextField id="standard-basic" label="Enter Email/ Mobile number" variant="standard" className='w-96 mx-auto ' />

                        }
                        <p className='mt-7 text-[12px]'>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</p>
                        <button className='mt-7 w-96 bg-orange-600 py-3 text-white font-semibold' onClick={formSubmission}>{ openRegisterTogle ? "CONTINUE" : "Request OTP"}</button>
                        { openRegisterTogle && <button className='mt-7 w-96 shadow-[0_2px_4px_0_rgba(0,0,0,0.25)] py-3 text-[#047bd5] font-semibold' onClick={openRegister}>Existing User? Log in</button>}
                        { !openRegisterTogle && <p className=' mt-[15rem] text-sm text-[#047bd5] font-semibold cursor-pointer text-center' onClick={openRegister}>New to Flipkart? Create an account</p> }
                    </div>
                </div>
            </Dialog>
        </div>
    )
}
