import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {useState} from "react";
export const Registration = () => {
    const [fname,setFname]=useState("")
    const [lname,setLname]=useState("")
    const[mobilenum,setNum]=useState("")
    function sendData(e)
    {
      e.preventDefault();
     
      console.warn({fname,lname,mobilenum})
      let farm={fname,lname,mobilenum}
    fetch('http://localhost:8080/MilkCollection/postfarm' ,{ method:'Post',
     headers :{
      Accept: 'application/json',
      'Content-Type' : 'application/json'
     } ,
     body:JSON.stringify({farm})
    }).then((result)=>{
      result.json().then((resp)=>{
        console.warn("resp",resp)
      })
    })
    }
    return (

        <div className="home" 
        style={{
            display: 'block',
            width: 500,

            marginTop:100,
            marginLeft:700,
            padding: 50,
           color:"black",
           backgroundColor:"white"
        }}>
            <h1   style={{
             textAlign:"center",
             fontSize:"bold"
          
        }}>Farmer Registration Form</h1>
            <Form>
                <Form.Group>
                    <Form.Label>Enter  first name:</Form.Label>
                    <Form.Control type="text"  style={{fontSize:25}}
                        placeholder="Enter your name" onChange={e => setFname(e.target.value)} name="fname" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Enter  last name:</Form.Label>
                    <Form.Control type="text" style={{fontSize:25}}
                        placeholder="Enter last name" onChange={e => setLname(e.target.value)} name="lname"  />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Enter Mobile No:</Form.Label>
                    <Form.Control type="number" style={{fontSize:25}} placeholder="Enter your Mobile number" onChange={e => setNum(e.target.value)} name="mobilenum" />
                </Form.Group>
                <Button variant="primary" type="submit"  style={{fontSize:25,marginTop:"10%",marginLeft:"25%"}} onClick={sendData}>
                     submit form
                </Button>
            </Form>
        </div>
    );
};
