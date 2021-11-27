import React,{useState} from 'react'
import {AppstoreAddOutlined} from '@ant-design/icons';
import { Form, Input, Button, Card } from 'antd';
import { Popover } from 'antd';



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

    const [country, setcountry] = useState("")
    const [open, setOpen] = useState(false);

    
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const onFinish = (values) => {
        console.log(values)
        const country = {
            'name': values.country,
    
        };


// add api here       
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };


 
    return (
        <div>
            {/* <AddIcon  */}
            <Popover
        content={<a onClick={handleClose}>Close</a>}
        title="Title"
        trigger="click"
        visible={handleOpen}
      
      >
        <Button type="primary"><AppstoreAddOutlined style={{ fontSize: "50", backgroundColor: "#f5f5e9", borderRadius: 50, color: "#FF668E" }} onClick={handleOpen} /></Button>
      </Popover>
            

            {/* <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Add Country
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
                                label="Name of country"
                                name="country"
                                rules={[
                                    {

                                        message: 'Please input country!',
                                    },
                                ]}
                                style={{ marginLeft: -100, fontWeight: 600 }}
                            >
                                <Input onChange={(e) => setcountry(e.target.value)} style={{ width: 250, border: "none", borderBottom: "2px solid purple" }} />
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
            </Modal> */}
        </div>
    )
}

export default AddCountry
