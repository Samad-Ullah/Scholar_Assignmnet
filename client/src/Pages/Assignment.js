import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router';
import '../Css/assignment.css'
import { Link } from 'react-router-dom';
import { isAuthenticated } from '../API/api'
import Typography from '@mui/material/Typography';
import 'antd/dist/antd.css';
import { Form, Input, Button, Card } from 'antd';
import axios from 'axios';

function Assignment() {

  const [name, setname] = useState("")
  const [country, setcountry] = useState('')
  const [getfullname, setgetfullname] = useState("")
  const [population, setpopulation] = useState("")
  const [currency, setcurrency] = useState("")
  // set endpoint and your API key
  var endpoint = 'convert';
  var access_key = '65a46a3c3c9c4a87ab07b6a72500b80d';

  // define from currency, to currency, and amount
  var from = 'EUR';
  var to = 'GBP';
  var amount = '10';

  const AssignmnetSignout = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("jwt");
      window.location.reload()

    }

  }
  const onFinish = (values) => {
    setcountry(values.name)
    axios.get(`https://restcountries.com/v3.1/name/${country}`)
      .then((res) => {
        // console.log(res.data[0].currencies)
        setgetfullname(res.data[0].altSpellings[2])
        setpopulation(res.data[0].population)
      })
      .catch(error => console.error(`Error : ${error}`))


    axios.get('https://data.fixer.io/api/' + endpoint + '?access_key=' + access_key + '&from=' + from + '&to=' + to + '&amount=' + amount,)
      .then((res) => {
        console.log(res)
      })
      .catch(error => console.error(`Error : ${error}`))

  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };


  return (
    <>
      {isAuthenticated() ? (

        <div>

          <button style={{ fontSize: 18, backgroundColor: "#783114", color: "white", borderRadius: 5, border: "none", alignItems: "right", cursor: "pointer", float: "right" }} onClick={() => AssignmnetSignout()}>Logout</button>


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
                <Input onChange={(e) => setname(e.target.value)} style={{ width: 250, border: "none", borderBottom: "2px solid #783114" }} />
              </Form.Item>
              <Form.Item
                wrapperCol={{
                  offset: 8,
                  span: 16,
                }}

              >
                <br></br>
                <Button style={{ backgroundColor: "#783114", color: "white", borderRadius: 5 }} htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>

          </div>
          <div>
            <table id="table">
              <tr>
                <th>Country Name</th>
                <th>Population</th>
                <th>Currency</th>
                <th>Exchange Rate</th>
              </tr>
              <tr>
                <td>{getfullname}</td>
                <td>{population}</td>
                <td>{ }</td>
                <td>{ }</td>

              </tr>
            </table>
          </div>
        </div>
      ) : (<>

        <div style={{ textAlign: "center", fontSize: 20 }}>
          You are Logout
        </div>
        <div style={{ textAlign: "center", fontSize: 20 }}>
          <Link to="/">Login</Link>
        </div>

      </>)
      }
    </>
  )
}

export default Assignment
