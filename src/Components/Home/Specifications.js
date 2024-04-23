import React from 'react'

export const Specifications = ({ specifications }) => {
    return (
        <div>
            <table border={1}>
                <tbody >
                    <tr className='border-t-[1px] border-b-[1px]  border-gray-200 py-3'>
                        <td colSpan={2} className='text-2xl font-semibold py-4'>Specifications</td>
                    </tr>
                    <tr>
                        <td className=' text-gray-500 font-semibold text-sm mr-7 align-baseline py-4'>Sales Package</td>
                        <td className='text-[14px] pl-5 py-4  font-medium'>{specifications.SalesPackage}</td>
                    </tr>
                    <tr>
                        <td className=' text-gray-500 font-semibold text-sm mr-7 align-baseline py-4'>Model Number</td>
                        <td className='text-[14px] pl-5 py-4  font-medium'>{specifications.ModelNumber}</td>
                    </tr>
                    <tr>
                        <td className=' text-gray-500 font-semibold text-sm mr-7 align-baseline py-4'>Color</td>
                        <td className='text-[14px] pl-5 py-4  font-medium'>{specifications.color}</td>
                    </tr>
                    <tr>
                        <td className=' text-gray-500 font-semibold text-sm mr-7 align-baseline py-4'>Battery</td>
                        <td className='text-[14px] pl-5 py-4  font-medium'>{specifications.battery}</td>
                    </tr>
                    <tr>
                        <td className=' text-gray-500 font-semibold text-sm mr-7 align-baseline py-4'>MS Office</td>
                        <td className='text-[14px] pl-5 py-4  font-medium'>{specifications.msoffice}</td>
                    </tr>
                    <tr>
                        <td className=' text-gray-500 font-semibold text-sm mr-7 align-baseline py-4'>Processor Brand</td>
                        <td className='text-[14px] pl-5 py-4  font-medium'>{specifications.processorBrand}</td>
                    </tr>
                    <tr>
                        <td className=' text-gray-500 font-semibold text-sm mr-7 align-baseline py-4'>Processor Name</td>
                        <td className='text-[14px] pl-5 py-4  font-medium'>{specifications.processorName}</td>
                    </tr>
                    <tr>
                        <td className=' text-gray-500 font-semibold text-sm mr-7 align-baseline py-4'>SSD</td>
                        <td className='text-[14px] pl-5 py-4  font-medium'>{specifications.ssd}</td>
                    </tr>
                    <tr>
                        <td className=' text-gray-500 font-semibold text-sm mr-7 align-baseline py-4'>SSD Capacity</td>
                        <td className='text-[14px] pl-5 py-4  font-medium'>{specifications.ssdCapacity}</td>
                    </tr>
                    <tr>
                        <td className=' text-gray-500 font-semibold text-sm mr-7 align-baseline py-4'>RAM</td>
                        <td className='text-[14px] pl-5 py-4  font-medium'>{specifications.ram}</td>
                    </tr>
                    <tr>
                        <td className=' text-gray-500 font-semibold text-sm mr-7 align-baseline py-4'>RAM Type</td>
                        <td className='text-[14px] pl-5 py-4  font-medium'>{specifications.ramtype}</td>
                    </tr>
                    <tr>
                        <td className=' text-gray-500 font-semibold text-sm mr-7 align-baseline py-4'>Processor Variant</td>
                        <td className='text-[14px] pl-5 py-4  font-medium'>{specifications.processorVariant}</td>
                    </tr>
                    <tr>
                        <td className=' text-gray-500 font-semibold text-sm mr-7 align-baseline py-4'>Clock Speed</td>
                        <td className='text-[14px] pl-5 py-4  font-medium'>{specifications.clockSpeed}</td>
                    </tr>
                    <tr>
                        <td className=' text-gray-500 font-semibold text-sm mr-7 align-baseline py-4'>Expendable Memory</td>
                        <td className='text-[14px] pl-5 py-4  font-medium'>{specifications.expendableMemory}</td>
                    </tr>
                    <tr>
                        <td className=' text-gray-500 font-semibold text-sm mr-7 align-baseline py-4'>Graphic Processor</td>
                        <td className='text-[14px] pl-5 py-4  font-medium'>{specifications.graphicProcessor}</td>
                    </tr>
                    <tr>
                        <td className=' text-gray-500 font-semibold text-sm mr-7 align-baseline py-4'>Expendable SSD</td>
                        <td className='text-[14px] pl-5 py-4  font-medium'>{specifications.expendableSSD}</td>
                    </tr>
                    <tr>
                        <td className=' text-gray-500 font-semibold text-sm mr-7 align-baseline py-4'>Operating System</td>
                        <td className='text-[14px] pl-5 py-4  font-medium'>{specifications.operatinSystem}</td>
                    </tr>
                    <tr>
                        <td className=' text-gray-500 font-semibold text-sm mr-7 align-baseline py-4'>Screen Type</td>
                        <td className='text-[14px] pl-5 py-4  font-medium'>{specifications.screenType}</td>
                    </tr>
                    <tr>
                        <td className=' text-gray-500 font-semibold text-sm mr-7 align-baseline py-4'>Warranty</td>
                        <td className='text-[14px] pl-5 py-4  font-medium'>{specifications.warranty}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
