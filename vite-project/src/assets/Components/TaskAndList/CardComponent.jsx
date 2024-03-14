import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardContent, Typography, Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField, List, ListItem, ListItemText, CardActions, Grid, Box } from '@mui/material';
import SideNavBar from '../../layout/Sidbar/Sidenav';


export const CardComponent = ({ name,cardId,onCreateSubtask }) => {
    const [openDialog, setOpenDialog] = useState(false);
    const [subtaskTitle, setSubtaskTitle] = useState('');
   
    const handleSubtaskDialogOpen = () => {
      setOpenDialog(true);
    };
  
    const handleSubtaskDialogClose = () => {
      setOpenDialog(false);
    };
  
    const handleSubtaskTitleChange = (event) => {
      setSubtaskTitle(event.target.value);
    };
  
    const handleCreateSubtask = () => {
      onCreateSubtask(cardId, subtaskTitle); 
      setSubtaskTitle('');
      setOpenDialog(false);
    };
  
    return (
      <Card
        style={{
          backgroundColor: "#f5f5f5",
          borderRadius: 10,
          boxShadow: '0px 2px 4px -1px rgba(0, 0, 0, 0.4), 0px 4px 5px 0px rgba(0, 0, 0, 0.3), 0px 1px 10px 0px rgba(0, 0, 0, 0.2)',
          display: 'flex',
          flexDirection: 'column',
          padding: 15,
          maxWidth: 200, // Adjust width here
          justifyContent:'center'
        }}
      >
        <CardHeader title={name} />
        <Button onClick={handleSubtaskDialogOpen} variant="contained" color="primary">Create Subtask</Button>
        <Dialog open={openDialog} onClose={handleSubtaskDialogClose}>
          <DialogTitle>Create Subtask</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="subtaskTitle"
              label="Subtask Title"
              type="text"
              fullWidth
              value={subtaskTitle}
              onChange={handleSubtaskTitleChange}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleSubtaskDialogClose} color="primary">
              Cancel
            </Button>
            <Button onClick={handleCreateSubtask} color="primary">
              Create
            </Button>
          </DialogActions>
        </Dialog>
      </Card>
    );
  };