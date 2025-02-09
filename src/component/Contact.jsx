import { TextField, Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import React,{useState} from "react";
import styled from "styled-components";
import Alert from "@mui/material/Alert";
import { MuiTelInput } from 'mui-tel-input'

const Wrapper = styled.div`
  h2 {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 1.5rem;
    span {
      color: red;
    }
  }

  .contact-cont {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
  .name,
  .contact-details {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;
  }
  // input{
  // height:40px;
  // width:240px;
  // border-radius:20px;
  // border:1px solid dimgrey;
  // padding:10px;
  // outline:none;
  // }
  .contact-form {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 10px;
  }
`;

function Contact() {
  const [value, setValue] =useState('')

  const handleChange = (newValue) => {
    setValue(newValue)
  }

  const handlesubmit = () => {
    if ( value === "") {
      alert('Your message has been sent')
    }
    else{
      alert('Please enter your message')
    }
  }
  return (
    <Wrapper>
      <h2 className="title">
        Contact <span>Me</span>
      </h2>
      <div className="contact-cont">
        <form className="contact-form" onSubmit={handlesubmit}>
          <div className="name">
            {/* <input type="text" className="first-name" placeholder='Enter First Name'/> */}
            <TextField
              id="outlined-basic"
              label="First Name"
              variant="outlined"
            />
            <TextField
              id="outlined-basic"
              label="Last Name"
              variant="outlined"
            />
            {/* <TextField id="filled-basic" label="Filled" variant="filled" /> */}
            {/* <TextField id="standard-basic" label="Standard" variant="standard" /> */}
            {/* <input type="text" className="last-name" placeholder='Enter Last Name'/> */}
          </div>
          <div className="contact-details">
          <MuiTelInput value={value} onChange={handleChange} label="Ph Number"/>
            <TextField id="outlined-basic" label="Email" variant="outlined" />
          </div>
          <TextField
            id="standard-multiline-static"
            label="Multiline"
            multiline
            rows={4}
            fullWidth={true}
            variant="outlined"
          />
        
          <Button variant="contained" endIcon={<SendIcon />} onClick={handlesubmit}>
            Send
          </Button>
        </form>
      </div>
    </Wrapper>
  );
}

export default Contact;
