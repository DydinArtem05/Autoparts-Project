import React, { useState, useEffect } from 'react'
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { CategoriesHttp } from '../../http/CategoriesHttp';
import CategoriesList from './CategoriesList';

export const Categories = () => {

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [listCategories, setListCategories] = useState([])

  const addCategories = async () => {
    try {

      const newCategories = await CategoriesHttp.addCategories({
        title,
        description
      })

      setListCategories(s => [newCategories.data, ...s])

      setTitle('')
      setDescription('')
    } catch (error) {
      alert(error?.response?.data?.message || "Error ")
    }

  }

  useEffect(() => {
    CategoriesHttp.getCategories()
      .then((res) => {
        setListCategories(res.data);
      })
      .catch((e) => alert(e));
  }, []);


  return (
    <div className='categories admin'>

      <h4>Категории</h4>
      <div className='admin__categories__button'>
        <TextField id="outlined-basic" size="small" label="Title" variant="outlined" value={title} onChange={e => setTitle(e.target.value)} />
        <TextField id="outlined-basic" size="small" label="Description" variant="outlined" value={description} onChange={e => setDescription(e.target.value)} />
        <Button variant="contained" onClick={addCategories}>Add</Button>
      </div>
      <CategoriesList list={listCategories} />
    </div>
  )
}

export default Categories