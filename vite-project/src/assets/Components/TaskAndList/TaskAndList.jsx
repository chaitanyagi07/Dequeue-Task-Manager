import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardContent, Typography, Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField, List, ListItem, ListItemText, CardActions, Grid, Box } from '@mui/material';
import SideNavBar from '../../layout/Sidbar/Sidenav';
import { CardComponent } from './CardComponent';


export const TaskAndList = () => {
  const [cards, setCards] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);  
  const [name, setName] = useState('');
  const [editors, setEditors] = useState('');
  const [access, setAccess] = useState('');

  useEffect(() => {
    fetchCards();
  }, []);

  const fetchCards = async () => {
    try {
      const response = await fetch('http://localhost:30001/cards');
      const data = await response.json();
      setCards(data);
    } catch (error) {
      console.error('Error fetching cards:', error);
    }
  };

  const handleCreateCard = async () => {
    try {
      const response = await fetch('http://localhost:30001/cards/task/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, editor: [editors], access: [access] }),
      });
      const data = await response.json();
      setCards([...cards, data]);
      setOpenDialog(false);
    } catch (error) {
      console.error('Error creating card:', error);
    }
  };
  const handleCreateSubtask = (cardId, subtaskTitle) => {
    const updatedCards = cards.map(card => {
      if (card.id === cardId) {
       
         card=card.subtasks ? [...card.subtasks, subtaskTitle] : [subtaskTitle];
        // return {
        //   ...card,
        //   subtasks: updatedSubtasks
        // };  
      }
      // return card;
    });
    // setCards(updatedCards);
  };

  const handleDialogOpen = () => {
    setOpenDialog(true);
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  return ( 
    <Box>
      <SideNavBar></SideNavBar>
      <Grid container gap={3} sx={{marginTop:'120px', marginLeft:'300px'}}>
        {cards.map((card, index) => (
          <Grid item key={index} xs={12} sm={6} md={2}>
            <CardComponent  key={index} cardId={card.id} name={card.name} onCreateSubtask={handleCreateSubtask} />
          </Grid>
        ))}
      </Grid>

      <Button variant="contained" color="primary" onClick={handleDialogOpen} style={{ position: 'fixed', bottom: '20px', right: '20px' }}>
        Create Task
      </Button>

      <Dialog open={openDialog} onClose={handleDialogClose}>
        <DialogTitle>Create Task</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="text"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            margin="dense"
            id="editors"
            label="Editor"
            type="text"
            fullWidth
            value={editors}
            onChange={(e) => setEditors(e.target.value)}
          />
          <TextField
            margin="dense"
            id="access"
            label="Access"
            type="text"
            fullWidth
            value={access}
            onChange={(e) => setAccess(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleCreateCard} color="primary">
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};


