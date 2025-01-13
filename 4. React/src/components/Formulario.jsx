import 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, Box, Typography, Paper } from '@mui/material';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addForm } from '../redux/formSlice';
import { useNavigate } from 'react-router-dom';

const Formulario = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().min(3, 'Mínimo 3 caracteres').required('Nombre requerido'),
      email: Yup.string().email('Formato de email inválido').required('Correo requerido'),
      message: Yup.string().min(10, 'El mensaje debe tener mínimo 10 caracteres').required('Mensaje requerido'),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        
        await axios.post('http://localhost:3000/formularios', values);
        dispatch(addForm(values)); 
        alert('Formulario enviado con éxito');
        resetForm();
      } catch (error) {
        console.error(error);
        alert('Error al enviar el formulario');
      }
    },
  });

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: '#f5f5f5',
      }}
    >
      <Paper
        elevation={3}
        sx={{
          padding: 4,
          borderRadius: 2,
          width: '100%',
          maxWidth: 500,
        }}
      >
        <Typography variant="h4" color="primary" align="center" gutterBottom>
          Formulario
        </Typography>
        <Box component="form" onSubmit={formik.handleSubmit}>
          <TextField
            fullWidth
            label="Nombre"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Correo"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Mensaje"
            name="message"
            multiline
            rows={4}
            value={formik.values.message}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.message && Boolean(formik.errors.message)}
            helperText={formik.touched.message && formik.errors.message}
            margin="normal"
          />
          <Box display="flex" gap={2} mt={2}>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Enviar
            </Button>
            <Button
              type="button"
              variant="outlined"
              color="secondary"
              fullWidth
              onClick={() => navigate('/lista')}
            >
              Ver Lista
            </Button>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default Formulario;
