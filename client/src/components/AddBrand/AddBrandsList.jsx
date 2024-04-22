import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { BrandHttp } from '../../http/BrandHttp';

import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';

function BrandRow({ brand }) {

    const [open, setOpen] = React.useState(false);
    const [modelList, setModelList] = useState([])
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    useEffect(() => {
        if(open){
            BrandHttp.getModels({ id: brand._id })
            .then(res => setModelList(res?.data))
        }
     
    }, [brand._id, open])

    const addModel = async () => {
        try {
          const newModel = await BrandHttp.addModel({
            title,
            description,
            brandId: brand._id
          })
    
          setModelList(s => [newModel.data, ...s])
          setTitle('')
          setDescription('')

        } catch (error) {
          alert(error?.response?.data?.message || "Error ")
        }
    
      }

    return (
        <React.Fragment>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">
                    {brand?.title}
                </TableCell>
                <TableCell>{brand.description}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={3}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>

                            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                                {
                                    modelList?.map(model => <ListItem>
                                        <ListItemAvatar>
                                            <Avatar>
                                                <ImageIcon />
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText primary={model.title} secondary={model.description} />
                                    </ListItem>
                                    )
                                }
                            </List>

                            <Box sx={{ display: 'flex', gap: '15px'}}>
                                <TextField id="outlined-basic" size='small' label="Title" variant="outlined" value={title} onChange={e => setTitle(e.target.value)} />
                                <TextField id="outlined-basic" size='small' label="Description" variant="outlined" value={description} onChange={e => setDescription(e.target.value)} />
                                <Button variant="contained"  onClick={addModel}>Добавить модель</Button>
                            </Box>


                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}

BrandRow.propTypes = {
    brand: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
    }).isRequired,
};



export default function AddBrandsList({ brandData }) {



    return (
        <TableContainer component={Paper}>
            <Table aria-label="collapsible table">

                <TableBody>
                    {brandData?.map((brand) => (
                        <BrandRow key={brand?._id} brand={brand} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
