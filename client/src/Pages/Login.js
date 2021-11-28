import React, { useState } from "react";
import "antd/dist/antd.css";
import { Form, Input, Button, Card } from "antd";
import { assLogin, authenticate } from "../API/api";
import { Navigate } from "react-router-dom";
import "../Css/login.css";

const styles = {
  container: {
    marginBottom: 150,
    background: "#FFFFFF",
    borderRadius: 20,
    border: "4px solid #783114",
  },
  heading: {
    textAlign: "center",
    fontWeight: 600,
    color: "gray",
  },
};

function Login() {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [redirectTo, setRedirectTo] = useState(false);

  const assignmentLogin = (assignmentUser) => {
    assLogin(assignmentUser).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        authenticate(data, () => {
          setRedirectTo("/assignmenttask");
        });
      }
    });
  };

  if (redirectTo) {
    return <Navigate to={redirectTo} />;
  }

  //get values from form
  const onFinish = (values) => {
    const assignmentUser = { email: values.email, password: values.password };
    assignmentLogin(assignmentUser);

    console.log(assignmentUser);
  };

  // if error may occur
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <div className="login">
        <h1 style={styles.heading}>Login to SCHOLAR DEN</h1>
        <Card style={styles.container}>
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
          >
            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your email!",
                },
              ]}
            >
              <Input onChange={(e) => setEmail(e.target.value)} />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password onChange={(e) => setPassword(e.target.value)} />
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button
                style={{
                  backgroundColor: "#783114",
                  color: "white",
                  borderRadius: 5,
                }}
                htmlType="submit"
              >
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    </>
  );
}

export default Login;
