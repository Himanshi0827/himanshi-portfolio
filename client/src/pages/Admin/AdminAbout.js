
import React from 'react';
import axios from 'axios';
import { Form, Input, message } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { ShowLoading, HideLoading } from '../../redux/rootSlice';

function AdminAbout() {
    const dispatch = useDispatch();
    const { portfolioData } = useSelector((state) => state.root);

    const onFinish = async (values) => {
        try {
          const tempskills = values.skills.split(",");
          values.skills= tempskills;
            dispatch(ShowLoading(true));
            const response = await axios.post("/api/portfolio/update-about", {
                ...values,
                _id: portfolioData.abouts._id,
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
            <Form onFinish={onFinish} layout='vertical' initialValues={{...portfolioData.abouts,skills:portfolioData.abouts.skills.join(" , "), }}>
                {/* <Form.Item name="welcomeText" label="About">
                    <Input placeholder="About" />
                </Form.Item> */}
                <Form.Item name="skills" label="Skills">
                    <Input placeholder="Skills" />
                </Form.Item>
                <Form.Item name="lottieURL" label="lottieURL">
                    <Input placeholder="lottieURL" />
                </Form.Item>
                <Form.Item name="description" label="Description">
                    <Input.TextArea placeholder="Description" />
                </Form.Item>
                <Form.Item name="description2" label="Description2">
                    <Input.TextArea placeholder="Description2" />
                </Form.Item>
                <div className='flex justify-end w-full'>
                    <button className='px-10 py-2 bg-primary text-white' type='submit'>Save</button>
                </div>
            </Form>
        </div>
    );
}

export default AdminAbout;

