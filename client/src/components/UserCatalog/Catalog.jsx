import React, { useEffect, useState } from 'react';
import { Button } from '@mui/material';

import { BrandHttp } from '../../http/BrandHttp';

import DescriptionIcon from '@mui/icons-material/Description';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';

import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import FolderIcon from '@mui/icons-material/Folder';
import Box from '@mui/material/Box';

import { NodeHttp } from '../../http/NodeHttp';

import { ProductHttp } from '../../http/ProductHttp';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';

const Catalog = () => {


    const [routesList, setRoutesList] = useState([]);
    const [daugterList, setDaugterList] = useState([]);
    const navigate = useNavigate()


    useEffect(() => {
       
        window.scrollTo(0, 0);
    }, [daugterList.length])

    useEffect(() => {
        if (routesList.length === 0 ) {
            BrandHttp.getBrands()
                .then((res) => setDaugterList(res.data))
                .catch((e) => alert(e));
        }
        else if (routesList.length === 1) {
            const id = routesList?.[routesList.length - 1]._id;
            BrandHttp.getModels({ id })
                .then((res) => {
                    setDaugterList(res.data)
                })
                .catch((e) => alert(e));
        }
        else if (routesList.length === 2) {
            NodeHttp.getMainParentNodes({
                brandId: routesList?.[0]._id,
                modelId: routesList?.[1]._id,
            })
                .then(res => {
                    setDaugterList(res.data)
                })
        }
        else if (routesList?.[routesList.length - 1]?.productId.length) {
            ProductHttp.findAllProductsById(routesList?.[routesList.length - 1]?.productId)
                .then(res => setDaugterList(res.data))
        }

        else {
            NodeHttp.getNodesInGraph(routesList?.[routesList.length - 1]?._id)
                .then(res => setDaugterList(res.data))
        }
    }, [routesList])

    const moveToNextNode = async (item) => {
        if(!routesList?.[routesList.length - 1]?.productId?.length ){
            setRoutesList(s => [...s, item])
            navigate(`/catalog?query="${routesList?.[routesList.length - 1]?._id}"`)
        }
  
    }

    const moveToCurrentNodeInPath = (index) => {
        const newRouteList = routesList.filter((item, id) => id <= index)
        setRoutesList(newRouteList)
    }

    const back = () => {
        if (routesList.length === 0) {
            navigate(-1)
        }
        else {
            setRoutesList(prevArray => prevArray.slice(0, -1));
        }
    }

    useEffect(() => {
        const handlePopstate = () => {
            setRoutesList(prevArray => prevArray.slice(0, -1));
        };

      
        window.addEventListener('popstate', handlePopstate);

     
        return () => {
            window.removeEventListener('popstate', handlePopstate);
        };
    }, []);

    return (
        <div className='admin admin__user'>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: '15px' }}>
                <Button onClick={back} startIcon={<ArrowBackIcon />}>
                    Назад
                </Button>
                <h4>Каталог</h4>
            </Box>

            <h6 className='admin__categories__route'>
                / {routesList.map((item, index) => <span
                    className='admin__categories__route-path'
                    key={item.title}
                    onClick={() => moveToCurrentNodeInPath(index)}
                >{item.title} / </span>)}
            </h6>
            <Box sx={{ minHeight: 300 }}>
                <List >
                    {daugterList.map(item =>
                        <ListItem key={item._id} onClick={() => moveToNextNode(item)} sx={{ cursor: 'pointer', }}>
                            <ListItemAvatar>
                                <Avatar>
                                    {
                                        routesList?.[routesList.length - 1]?.productId?.length ?
                                            <DescriptionIcon /> : <FolderIcon />
                                    }

                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText
                                primary={item?.title}
                            />
                        </ListItem>,
                    )}
                </List>
            </Box>

        </div>
    );
};

export default Catalog;







