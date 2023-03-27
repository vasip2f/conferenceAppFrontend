import { Box, Button, TextField, Typography } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const history = useNavigate();
    const [inputs, setInputs] = useState({
        name: "",
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setInputs((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
        // console.log(e.target.name, "value", e.target.value)
    };

    const sendRequest = async () => {
        const res = await axios.post('http://localhost:5000/api/signup', {
            name: inputs.name,
            email: inputs.email,
            password: inputs.password
        }).catch((err) => console.log(err));
        const data = await res.data;
        return data;
    };
    const handlesubmit = (e) => {
        e.preventDefault();
        // console.log(inputs);

        //Send Request

        sendRequest().then(() => history("/login"));
    };
    return (
        <div>

            <form onSubmit={handlesubmit}>
                <Box marginLeft="auto" marginRight="auto" width={300}
                    display='flex' flexDirection={'column'}
                    justifyContent="center" alignItems="center" >
                    <Typography variant='h2'>SIGNUP</Typography>
                    <TextField
                        name='name'
                        onChange={handleChange}
                        value={inputs.name}
                        variant='outlined'
                        placeholder='name'
                        margin='normal' />
                    <TextField
                        name='email'
                        onChange={handleChange}
                        type={'email'}
                        value={inputs.email}
                        variant='outlined'
                        placeholder='Your@gmail'
                        margin='normal' />
                    <TextField
                        name='password'
                        onChange={handleChange}
                        type={'password'}
                        value={inputs.password}
                        variant='outlined'
                        placeholder='Password'
                        margin='normal' />
                    <Button variant='contained' type='submit'>Submit</Button>
                </Box>
            </form>
        </div>
    )
}

export default Signup