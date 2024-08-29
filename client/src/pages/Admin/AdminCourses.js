import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import Modal from 'antd';
import { Modal, Form, Input, message } from 'antd';
import { HideLoading, ReloadData, ShowLoading } from '../../redux/rootSlice';
import axios from 'axios';
import TextArea from 'antd/es/input/TextArea';
//import FormItem from 'antd/es/form/FormItem';
function AdminCourses() {
    const dispatch = useDispatch();
    const { portfolioData } = useSelector((state) => state.root);
    const { courses } = portfolioData;
    const [showAddEditModal, setShowAddEditModal] = React.useState(false);
    const [selectedItemForEdit, setSelectedItemForEdit] = React.useState(null);
    const [type,setType]=React.useState("add");
    const onFinish = async (values) => {
        try {
            dispatch(ShowLoading(true));
            let response
            if (selectedItemForEdit) {
                response = await axios.post('/api/portfolio/update-courses', { ...values, _id: selectedItemForEdit._id, });
            } else {
                response = await axios.post('/api/portfolio/add-courses', values);
            }
            // response = await axios.post("/api/portfolio/add-exp",values);
            dispatch(HideLoading());
            if (response.data.success) {
                message.success(response.data.message);
                setShowAddEditModal(false);
                setSelectedItemForEdit(null);
                dispatch(HideLoading());
                dispatch(ReloadData(true));

            } else {
                message.error(response.data.message);
            }
        } catch (error) {
            dispatch(HideLoading());
            message.error(error.message);
        }

    }

    const onDelete = async (item) => {
        try {
            dispatch(ShowLoading(true));
            const response = await axios.post('/api/portfolio/delete-courses', { _id: item._id });
            dispatch(HideLoading());
            if (response.data.success) {
                message.success(response.data.message);
                dispatch(HideLoading());
                dispatch(ReloadData(true));
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
            <div className='flex justify-end'>
                <button className='bg-primary px-5 py-2 text-white' onClick={() => {
                    setShowAddEditModal(true);
                    setSelectedItemForEdit(null);
                }}>Add courses</button>
            </div>
            <div className='grid grid-cols-3 gap-5 mt-5 sm:grid-cols-1'>
                {courses.map((courses) => (
                    <div key={courses._id} className='shadow border p-5 border-grey-400 flex flex-col gap-5'>
                        <h1 className='text-primary text-xl font-bold'>{courses.tittle}</h1>
                        <hr></hr>
                       
                        <h1>Title : {courses.tittle}</h1>
                        <img src={courses.image} alt="" className='h-60 w-80'/>
                        {/* <h1>Image : {pro.image}</h1> */}
                        <h1>Link : {courses.link}</h1>
                        {/* <h1>technolgies : {courses.technolgies}</h1> */}
                        <h1>Description : {courses.description}</h1>
                        <div className='flex  justify-end gap-5 mt-5'>


                            <button className='bg-red-500 text-white px-5 py-2 ' onClick={() => {
                                onDelete(courses);
                            }}>Delete</button>
                            <button className='bg-primary text-white px-5 py-2 ' onClick={() => {

                                setSelectedItemForEdit(courses);
                                setShowAddEditModal(true);
                                setType('edit');
                            }}>Edit</button>
                        </div>
                    </div>
                ))}
            </div>
            {(type==="add" ||
           selectedItemForEdit) &&(
            <Modal
                open={showAddEditModal}
                title={selectedItemForEdit ? "Edit courses" : "Add courses"}
                footer={null}
                onCancel={() => {
                    setShowAddEditModal(false)
                    setSelectedItemForEdit(null);
                }}>
                <Form layout="vertical" onFinish={onFinish} initialValues={selectedItemForEdit }>

                    {/* <Form.Item name='technolgies' label="Technolgies">
                        <Input placeholder='Technolgies' />
                    </Form.Item> */}
                    <Form.Item name='tittle' label="Tittle">
                        <Input placeholder='Tittle' />
                    </Form.Item>
                    <Form.Item name='image' label="Image URL">
                        <Input placeholder='Image URL' />
                    </Form.Item>
                    <Form.Item name='link' label="Link">
                        <Input placeholder='Link' />
                    </Form.Item>

                    <Form.Item name='description' label="Description">
                        <TextArea placeholder='Description ' />
                    </Form.Item>
                    <div className='flex justify-end'>
                        <button className='border-primary text-primary px-5 py-2' onClick={() => {
                            setShowAddEditModal(false);
                           setSelectedItemForEdit(null);
                        }}>Cancel</button>
                        <button className='bg-primary text-white px-5 py-2'>{selectedItemForEdit ? "Update" : "Add"}</button>
                    </div>
                </Form>
            </Modal>
        )
    }
        </div>
    );
}

export default AdminCourses;











