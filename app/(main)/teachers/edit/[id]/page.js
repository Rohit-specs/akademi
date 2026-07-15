import React from 'react'
import EditTeacherForm from './component/EditTeacherForm'

const EditPage = async ({params}) => {
    const {id} = await params
  return (
    <EditTeacherForm id={id}/>
  )
}

export default EditPage
