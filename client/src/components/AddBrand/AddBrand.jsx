import React, { useState, useEffect } from 'react';
import styles from '../../styles/Admin.module.css';
import  AddBrandsList  from './AddBrandsList'
import { BrandHttp } from '../../http/BrandHttp'
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { FilesHttp } from '../../http/FileHttp';

const AddBrand = () => {

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [selectedFile, setSelectedFile] = useState(null);
  const [listBrand, setListBrand] = useState([])

  useEffect(() => {
    BrandHttp.getBrands()
      .then(res => setListBrand(res.data))
      .catch(e => alert(e))
  }, [])

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      setSelectedFile(file);
    }
  };


  const addBrand = async () => {
    try {
      let image = ''

      if (selectedFile) {
        const formData = new FormData()

        formData.append("files", selectedFile)

        image = (await FilesHttp.uploadFile(formData)).data
      }


      const newBrand = await BrandHttp.addBrand({
        image,
        title,
        description
      })

   
      setListBrand(s => [newBrand.data, ...s])

      setTitle('')
      setDescription('')
      setSelectedFile('')
    } catch (error) {
      alert(error?.response?.data?.message || "Error ")
    }

  }

  return (
    <div className={styles.admin}>
      <h4>Марка, модель</h4>
      <div className={styles.admin__brand__add}>
        {selectedFile ? (
          <div className={styles.admin__brand__add_img}>
            <img
              src={URL.createObjectURL(selectedFile)}
              alt="Uploaded File"
              style={{ maxWidth: '100%', maxHeight: '54px' }}
            />
            <p>{selectedFile.name}</p>

          </div>
        )

          : <Button
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
        <TextField id="outlined-basic" size='small' label="Title" variant="outlined" value={title} onChange={e => setTitle(e.target.value)}/>
        <TextField id="outlined-basic" size='small' label="Description" variant="outlined" value={description} onChange={e => setDescription(e.target.value)}/>
        <Button variant="contained" onClick={addBrand}>Добавить бренд</Button>
      </div>
      <AddBrandsList brandData={listBrand} />
    </div>

  )
}


export default AddBrand