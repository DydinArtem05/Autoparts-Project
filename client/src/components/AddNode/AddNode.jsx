import React, { useEffect, useState } from 'react';
import styles from '../../styles/Admin.module.css';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { BrandHttp } from '../../http/BrandHttp';
import { CategoriesHttp } from '../../http/CategoriesHttp';
import DescriptionIcon from '@mui/icons-material/Description';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import FolderIcon from '@mui/icons-material/Folder';
import Box from '@mui/material/Box';
import { AddNodeModelBrand } from './AddNodeModelBrand'
import { NodeHttp } from '../../http/NodeHttp';
import { AddNodeCategProduct } from './AddNodeCategProduct';
import { ProductHttp } from '../../http/ProductHttp';

const AddFilter = () => {

    const [valueBrand, setValueBrand] = useState({ title: "" });
    const [valueModel, setValueModel] = useState({ title: "" });
    const [valueCat, setValueCat] = useState({ title: "" });
    const [valueProd, setValueProd] = useState({ title: "" });
    const [routesList, setRoutesList] = useState([])
    const [daugterList, setDaugterList] = useState([])

    const [isCategorie, setIsCategorie] = useState(true)
    const [isProduct, setIsProduct] = useState(true)

    console.log(valueBrand, valueModel);

    useEffect(() => {
        if (valueBrand?._id && valueModel?._id) {
            NodeHttp.getMainParentNodes({
                brandId: valueBrand._id,
                modelId: valueModel._id,
            })
                .then(res => {
                    setDaugterList(res.data)
                    setRoutesList([])
                })
        }
        else{
            setRoutesList([])
            setDaugterList([])
        }

    }, [valueBrand, valueModel])

    useEffect(() => {

        if(!valueBrand?._id || !valueModel?._id){
            setIsCategorie(false)
            setIsProduct(false)
        }
        else if (daugterList.length === 0 ) {
            setIsCategorie(true)
            setIsProduct(true)
        } else if (routesList?.[routesList.length - 1]?.productId.length ) {
            setIsCategorie(false)
            setIsProduct(true)
        } else {
            setIsCategorie(true)
            setIsProduct(false)
        }
    
    }, [daugterList, routesList])

    useEffect(() => {
        if (routesList?.[routesList.length - 1]?.productId.length) {
            ProductHttp.findAllProductsById(routesList?.[routesList.length - 1]?.productId)
                .then(res => setDaugterList(res.data))
        }
    }, [routesList])



    const moveToNextNode = async (item) => {
        console.log(item);

        setRoutesList(s => [...s, item])
        if (item?.productId.length === 0) {
            NodeHttp.getNodesInGraph(item?._id)
                .then(res => setDaugterList(res.data))
        }
    }


    const addNode = () => {

        if (valueBrand?._id && valueModel?._id && valueCat?._id) {
            const payload = {
                brandId: valueBrand._id,
                modelId: valueModel._id,
                isMainPatent: !routesList.length,
                parentId: routesList.length ? routesList[routesList.length - 1]?._id : valueModel._id,
                title: valueCat?.title,
            }
            NodeHttp.addNodeToGraph(payload)
                .then(res => setDaugterList(s => [...s, res.data]))
                .catch((error) => {
                    alert(error?.response?.data?.message || "Error ")
                })

        }
    }

    const moveToCurrentNodeInPath = (index) => {

        const newRouteList = routesList.filter((item, id) => id <= index)
        setRoutesList(newRouteList)

        NodeHttp.getNodesInGraph(newRouteList?.[newRouteList.length - 1]?._id)
            .then(res => setDaugterList(res.data))
    }

    const addProductInCategorieNode = async () => {
        if (valueProd?._id) {
            await NodeHttp.addProductNodeToGraph({
                idNode: routesList?.[routesList.length - 1]?._id,
                idProduct: valueProd?._id,
            })
            setDaugterList(s => [...s, { ...valueProd }])
            setValueProd({title: ""})
        }
    }


    return (
        <div className={styles.admin}>
            <h4>Каталог</h4>

            <Box className={styles.categories__input} sx={{ margin: '20px 0' }}>
                <AddNodeModelBrand props={
                    { valueBrand, setValueBrand, valueModel, setValueModel }
                } />
            </Box>
            <h6 className={styles.admin__categories__route}>
                / {routesList.map((item, index) => <span
                    className={styles.admin__categories__route_path}
                    key={item.title}
                    onClick={() => moveToCurrentNodeInPath(index)}
                >{item.title} / </span>)}
            </h6>
            <Box sx={{ height: '300px', overflowY: 'scroll', padding: '10px', borderTop: '1px solid #ccc' }}>
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
                <AddNodeCategProduct props={
                    { valueCat, setValueCat, addNode, valueProd, setValueProd, isCategorie, isProduct, addProductInCategorieNode
                        , valueBrand, valueModel,
                    }
                } />
            </Box>

        </div>
    );
};

export default AddFilter;







