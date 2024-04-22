import React, { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { BrandHttp } from '../../http/BrandHttp';
import { Box, Button } from '@mui/material';
import { CategoriesHttp } from '../../http/CategoriesHttp';
import { NodeHttp } from '../../http/NodeHttp';
import { ProductHttp } from '../../http/ProductHttp';

export const AddNodeCategProduct = (elem) => {

    const { valueCat, setValueCat, addNode, valueProd, setValueProd, isCategorie, isProduct, addProductInCategorieNode, valueBrand, valueModel, } = elem.props

    const [optionsCat, setOptionsCat] = useState([]);
    const [inputValueCat, setInputValueCat] = useState([]);

    const [optionsProd, setOptionsProd] = useState([]);
    const [inputValueProd, setInputValueProd] = useState([]);
    const [isDisabled, setDisabled]=useState(true) 


    useEffect(() => {

        CategoriesHttp.getCategories()
            .then((res) => setOptionsCat(res.data))
            .catch((e) => alert(e));

        ProductHttp.getProduct()
            .then((res) => setOptionsProd(res.data))
            .catch((e) => alert(e));


    }, [])

    useEffect(() => {
        if(valueBrand?._id, valueModel?._id){
            setDisabled(false)
        }
        else{
            setDisabled(true)
        }
    }, [
        valueBrand, valueModel,
    ])
    // useEffect(() => {
    //     .getCategories()
    //     .then((res) => setOptionsCat(res.data))
    //     .catch((e) => alert(e));

    // }, [])




    return (
        <Box sx={{ display: 'flex', gap: '15px' }}>
            {
                isCategorie && <Box sx={{ display: 'flex', gap: '15px' }}>
                    <Autocomplete
                        value={valueCat}
                        onChange={(event, newValue) => {
                            setValueCat(newValue);
                        }}
disabled={isDisabled}
                        inputValue={inputValueCat}
                        onInputChange={(event, newInputValue) => {
                            setInputValueCat(newInputValue);
                        }}
                        options={optionsCat}
                        getOptionLabel={(option) => option.title}
                        sx={{ width: 200 }}
                        size="small"
                        renderInput={(params) => <TextField size="small" {...params} label='Категория' />}
                    />
                    <Button sx={{ fontSize: '10px' }} variant='contained' size="small" onClick={addNode}>Добавить категорию</Button>
                </Box>
            }
            {
                isProduct && <Box sx={{ display: 'flex', gap: '15px' }}>
                    <Autocomplete
                        value={valueProd}
                        onChange={(event, newValue) => {
                            setValueProd(newValue);
                        }}
                        options={optionsProd}
                        inputValue={inputValueProd}
                        onInputChange={(event, newInputValue) => {
                            setInputValueProd(newInputValue);
                        }}
                        disabled={isDisabled}
                        getOptionLabel={(option) => option.title}
                        sx={{ width: 200 }}
                        size="small"
                        renderInput={(params) => <TextField size="small" {...params} label='Товар' />}
                    />
                    <Button sx={{ fontSize: '10px' }} variant='contained' size="small" onClick={addProductInCategorieNode}>Добавить товар</Button>
                </Box>
            }
        </Box>
    )
}
