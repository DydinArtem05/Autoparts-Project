import React, { useEffect, useState } from 'react';
import styles from '../../styles/Admin.module.css';

import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { FilesHttp } from '../../http/FileHttp';
import MultipleSelect from './MultipleSelect';
import { BrandHttp } from '../../http/BrandHttp';
import { CategoriesHttp } from '../../http/CategoriesHttp';
import { ProductHttp } from '../../http/ProductHttp';
import ProductList from './ProductList';

export const AddProducts = () => {
   
    const [price, setPrice] = useState('')
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [selectedFile, setSelectedFile] = useState(null);

    const [categories, setCategories] = useState([])
    const [brand, setBrand] = useState([])
    const [models, setModels] = useState([])

    const [valueCategories, setValueCategories] = useState([])
    const [valueBrand, setValueBrand] = useState([])
    const [valueModels, setValueModels] = useState([])

    const [product, setProduct] = useState([])

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setSelectedFile(file);
        }
    };

    useEffect(() => {
        BrandHttp.getBrands()
            .then((res) => setBrand(res.data))
            .catch((e) => alert(e));

        BrandHttp.getAllModels()
            .then((res) => setModels(res.data))
            .catch((e) => alert(e));

        CategoriesHttp.getCategories()
            .then((res) => {setCategories(res.data);})
            .catch((e) => alert(e));

            ProductHttp.getProduct()
            .then((res) => {setProduct(res.data);})
            .catch((e) => alert(e));
    }, []);

    const addProduct = async () => {
        

        try {
            let image = ''
            console.log(selectedFile);
      
            if (selectedFile) {
              const formData = new FormData()
      
              formData.append("files", selectedFile)
      
              image = (await FilesHttp.uploadFile(formData)).data
            }
      
            console.log(image);
      
            const newProduct = await ProductHttp.addProduct({
              image,
              title,
              description,
              categorieIds: valueCategories?.map(item => item?._id)|| [],
              brandIds:  valueBrand?.map(item => item?._id)|| [],
              modelIds:  valueModels?.map(item => item?._id) || [],
              price,
            
            })
      
         
            setProduct(s => [newProduct.data, ...s])
      
            setTitle('')
            setDescription('')
            setSelectedFile('')
            setCategories([])
            setBrand([])
            setModels([])
            setValueCategories([])
            setValueBrand([])
            setValueModels([])
          } catch (error) {
            alert(error?.response?.data?.message || error)
          }
    }

    return (
        <div className={styles.admin}>
            <h4>Товары</h4>
            <div className={styles.admin__product}>
                {selectedFile ? (
                    <div className={styles.brand__add_img}>
                        <img
                            src={URL.createObjectURL(selectedFile)}
                            alt="Uploaded File"
                            style={{ maxWidth: '100%', maxHeight: '54px' }}
                        />
                        <p>{selectedFile.name}</p>

                    </div>
                )

                    : <Button
                        sx={{ width: '100%', maxWidth: 200, bgcolor: 'background.paper', margin: '0 auto' }}
                        variant="outlined"
                        component="label"
                        onChange={handleFileChange}
                    >
                        Изображение
                        <input
                            type="file"
                            hidden
                        />
                    </Button>
                }
                <div className={styles.admin__product__add}>

                    <TextField id="outlined-basic" size='small' label="Название" variant="outlined" value={title} onChange={e => setTitle(e.target.value)} />
                    <TextField id="outlined-basic" size='small' label="Описание" variant="outlined" value={description} onChange={e => setDescription(e.target.value)} />

                    <TextField type='number' id="outlined-basic" size='small' label="Цена" variant="outlined" value={price} onChange={e => setPrice(e.target.value)} />

                </div>
                <div className={styles.admin__product__add}>
     
                    <MultipleSelect
                        options={brand}
                        placeholder={"Марка"}
                        selectedOptions={valueBrand}
                        setSelectedOptions={setValueBrand}
                    />
                    <MultipleSelect
                        options={models}
                        placeholder={"Модель"}
                        selectedOptions={valueModels}
                        setSelectedOptions={setValueModels}
                    />

                    <MultipleSelect
                        options={categories}
                        placeholder={"Категория"}
                        selectedOptions={valueCategories}
                        setSelectedOptions={setValueCategories}
                    />

                </div>
                <Button variant="contained" onClick={addProduct}>Добавить Товар</Button>
            </div>
            <ProductList list={product}/>
        </div>
    )
}
