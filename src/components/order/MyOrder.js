import React, { useEffect, useState } from 'react'
import CIcon from '@coreui/icons-react'
import { cilDelete } from '@coreui/icons'
import { useDispatch, useSelector } from 'react-redux'
function MyOrder() {

    const [orders, setOrders] = useState([])
    const getData = async (paramUrl, paramOptions = {}) => {
        const response = await fetch(paramUrl, paramOptions)
        const responseData = await response.json()
        return responseData
    }
    useEffect(() => {
        getData(`https://goodmamabackend.herokuapp.com/orders`)
            .then((data) => {
                setOrders(data.data)
                console.log(data);
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])
    const onDeleteClick = ({ _id }) => {
        console.log(_id);
    }
    return (
        <div className='container'>
            {
                orders.map(order => (
                    <div className='order p-1 border shadow mt-3'>
                        <div className='row'>
                            <div className='col-12 col-md-6 col-lg-2'>
                                <img src='' />
                            </div>
                            <div className='col-12 col-md-6 col-lg-8'>
                                <h5>{order.customerInfo && order.customerInfo.email}</h5>
                                <p>{order.customerInfo && order.customerInfo.phone}</p>
                                <p>1</p>
                            </div>
                            <div className='col-12 col-md-6 col-lg-2'>
                                <p className='text-end'>150.000</p>
                            </div>
                        </div>
                        <div className='row border-top p-1'>
                            <div className='col-12 col-md-6'>
                                <button className='btn btn-outline-info me-2 w-25'>Đánh giá</button>
                                <button className='btn btn-outline-danger w-25'>Chi tiết</button>
                            </div>
                            <div className='col-12 col-md-6'>
                                <p className='text-end'>150.000</p>
                            </div>
                        </div>
                    </div>
                ))
            }



        </div>
    )
}

export default MyOrder;