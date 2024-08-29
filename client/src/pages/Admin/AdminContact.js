
import React from 'react';
import axios from 'axios';
import { Form, Input, message } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { ShowLoading, HideLoading } from '../../redux/rootSlice';

function AdminContact() {
    const dispatch = useDispatch();
    const { portfolioData } = useSelector((state) => state.root);

    const onFinish = async (values) => {
        try {
            dispatch(ShowLoading(true));
            const response = await axios.post("/api/portfolio/update-Contact", {
                ...values,
                _id: portfolioData.contacts._id,
            });
            dispatch(HideLoading());
            if (response.data.success) {
                message.success(response.data.message);
            } else {
                message.error(response.data.message);
            }
        } catch (error) {
            dispatch(HideLoading());
            message.error(error.message);
        }
    };

    return (
        <div>
            <Form onFinish={onFinish} layout='vertical' initialValues={portfolioData.contacts}>
                <Form.Item name="name" label="Name">
                    <Input placeholder="Name" />
                </Form.Item>
                <Form.Item name="age" label="Age">
                    <Input placeholder="Age" />
                </Form.Item>
                <Form.Item name="gender" label="Gender">
                    <Input placeholder="Gender" />
                </Form.Item>
                <Form.Item name="email" label="Email">
                    <Input placeholder="Email" />
                </Form.Item>
                <Form.Item name="mobile" label="Mobile">
                    <Input.TextArea placeholder="Mobile" />
                </Form.Item>
                <Form.Item name="country" label="Country">
                    <Input.TextArea placeholder="Country" />
                </Form.Item>
                <Form.Item name="address" label="Address">
                    <Input.TextArea placeholder="Address" />
                </Form.Item>
                <div className='flex justify-end w-full'>
                    <button className='px-10 py-2 bg-primary text-white' type='submit'>Save</button>
                </div>
            </Form>
        </div>
    );
}

export default AdminContact;

