import React from 'react'
import EditStudentForm from './component/EditStudentForm'

const EditPage = async ({params}) => {
    const {id} = await params
  return (
    <EditStudentForm id={id}/>
  )
}

export default EditPage
