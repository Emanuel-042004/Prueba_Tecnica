import 'react';
import { useSelector } from 'react-redux';
import { Box, Typography, List, ListItem, ListItemText, Paper } from '@mui/material';

const ListaFormularios = () => {
  const forms = useSelector((state) => state.forms);

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
          maxWidth: 600,
        }}
      >
        <Typography variant="h4" color="primary" align="center" gutterBottom>
          Formularios Enviados
        </Typography>
        <List>
          {forms.length > 0 ? (
            forms.map((form, index) => (
                <ListItem key={index} divider>
                <ListItemText
                  primary={`Nombre: ${form.name}`}
                  secondary={
                    <>
                      {`Correo: ${form.email}`}
                      <br />
                      {`Mensaje: ${form.message}`}
                    </>
                  }
                />
              </ListItem>
              
            ))
          ) : (
            <Typography align="center" color="textSecondary">
              No hay formularios enviados.
            </Typography>
          )}
        </List>
      </Paper>
    </Box>
  );
};

export default ListaFormularios;
