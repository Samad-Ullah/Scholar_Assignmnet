import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';
import 'antd/dist/antd.css';
import { Form, Input, Button, Card } from 'antd';
import Box from '@mui/material/Box';
import Modal from "@mui/material/Modal";


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    color: "gray",
    bgcolor: 'white',
    border: '4px solid #990099',
    boxShadow: 24,
    borderRadius: 5,
    p: 4,
};

function AddCountry() {

    const [open, setopen] = useState(false)
    const [countryName, setcountryName] = useState("")


    const handleOpen = () => setopen(true);
    const handleClose = () => setopen(false);



    const onFinish = (values) => {
        console.log(values)
        const country = {
            'name': values.name,
         

        };


    


    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };


    return (
        <div>
            <AddIcon style={{ fontSize: "50", backgroundColor: "#f5f5e9", borderRadius: 50, color: "#FF668E" }} onClick={handleOpen} />

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Add Country to list
                    </Typography>
                    <div style={{ marginTop: 20 }}>
                        <Form
                            name="basic"
                            labelCol={{
                                span: 9,
                            }}
                            wrapperCol={{
                                span: 6,
                            }}
                            initialValues={{
                                remember: true,
                            }}
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                            autoComplete="off"
                            style={{ marginTop: 40 }}
                        >
                            <Form.Item
                                label="Name of Country"
                                name="name"
                                rules={[
                                    {

                                        message: 'Please input your name!',
                                    },
                                ]}
                                style={{ marginLeft: -100, fontWeight: 600 }}
                            >
                                <Input onChange={(e) => setcountryName(e.target.value)} style={{ width: 250, border: "none", borderBottom: "2px solid purple" }} />
                            </Form.Item>
                            <Form.Item
                                wrapperCol={{
                                    offset: 8,
                                    span: 16,
                                }}

                            >
                                <br></br>
                                <Button style={{ backgroundColor: "purple", color: "white", borderRadius: 5, float: "right" }} htmlType="submit">
                                    Submit
                                </Button>
                            </Form.Item>
                        </Form>

                    </div>

                </Box>
            </Modal>
        </div>
    )
}

export default AddCountry
