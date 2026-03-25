import { Box } from '@mui/material';
import Input from '../../components/Input/Input';
import PrimaryButton from '../../components/Button/PrimaryButton';
import { useAuth } from '../../context/useAuth';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


export default function LoginForm() {
    const { login } = useAuth();
    const navigate = useNavigate();

    const [form, setForm] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const success = login(form);

        if (success) {
            navigate("/");
        } else {
            alert("Usuário ou senha inválidos");
        }
    }
    return (
        <Box component="form" onSubmit={handleSubmit} display="flex" flexDirection="column" gap={2} padding={2}>
            <Input label="Email" name="email" value={form.email} type="email" onChange={handleChange} />
            <Input label="Password" name="password" value={form.password} type="password" onChange={handleChange} />

            <PrimaryButton type="submit">
                Entrar
            </PrimaryButton>
        </Box>
    )
}