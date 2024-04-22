import React, { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { BrandHttp } from '../../http/BrandHttp';
import { Box } from '@mui/material';

export const AddNodeModelBrand = (elem) => {

    const { valueBrand, setValueBrand, valueModel, setValueModel } = elem.props
    const [optionsBrand, setOptionsBrand] = useState([]);
    const [] = useState(optionsBrand[0]);
    const [optionsModel, setOptionsModel] = useState([]);
    const [] = useState(optionsModel[0]);

    useEffect(() => {
        BrandHttp.getBrands()
            .then((res) => setOptionsBrand(res.data))
            .catch((e) => alert(e));
    }, [])

    useEffect(() => {
        if (valueBrand && valueBrand?._id) {
            const id = valueBrand._id;
            BrandHttp.getModels({ id })
                .then((res) => {
                    setOptionsModel(res.data)
                    setValueModel({ title: '' })
                })
                .catch((e) => alert(e));
        }
    }, [valueBrand])

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <Autocomplete
                value={valueBrand}
                onChange={(event, newValue) => {
                    setValueBrand(newValue);
                }}
                options={optionsBrand}
                getOptionLabel={(option) => option.title}
                sx={{ width: 500 }}
                size="small"
                renderInput={(params) => <TextField size="small" {...params} label='Марка' />}
            />

            <Autocomplete
                value={valueModel}
                onChange={(event, newValue) => {
                    setValueModel(newValue);
                }}
                options={optionsModel}
                getOptionLabel={(option) => option.title}
                sx={{ width: 500 }}
                size="small"
                renderInput={(params) => <TextField size="small" {...params} label='Модель' />}
            />
        </Box>
    )
}
