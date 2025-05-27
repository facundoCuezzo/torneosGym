import { List, ListItemButton, ListItemText } from '@mui/material';

const Menu = () => {
  const opciones = ['MI CUENTA', 'INSCRIPCIÓN CONCURSOS', 'MIS CONCURSOS', 'MIS EJEMPLARES', 'PUNTAJES'];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '65vh' }}>
      <List sx={{ width: '50%', maxWidth: 600, bgcolor: 'background.paper' }}>
        {opciones.map((opcion, index) => (
          <ListItemButton key={index} sx={{ textAlign: 'center' }}>
            <ListItemText primary={opcion} sx={{ textAlign: 'center' }} 
             primaryTypographyProps={{ fontWeight: 'bold' }}
            />
          </ListItemButton>
        ))}
      </List>
    </div>
  );
};

export default Menu;
