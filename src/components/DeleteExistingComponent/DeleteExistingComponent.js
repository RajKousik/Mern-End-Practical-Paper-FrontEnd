import React, { useState } from 'react'

const DeleteExistingComponent = () => {

    const [deleteProductId, setDeleteProductId] = useState('')

    const setDeleteHandler = (event) => {
        setDeleteProductId(event.target.value);
    }

    const formHandler = async() => {
        const response = await fetch(`http://localhost:3500/api/v1/shoppingCart/delete`,{
            method:'DELETE',
            crossDomain: true,
            headers: {
                'Content-type':'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify({
                productID: deleteProductId
            })
        })
        console.log(response);
        const data = await response.json()
        // console.log(data);
        if (data.ErrorMessage)
        {
            alert(`${data.ErrorMessage}`)
        }
        // console.log(deleteProductId);
        window.location.href='/'
    }

  return (
    <div>

        <form className='form-container' onSubmit={formHandler}>
            <h2>Delete a Existing product</h2>
            <div className='form-group'>
                <label>Product ID</label>
                <input
                type='text'
                placeholder='Enter the product Name'
                value={deleteProductId}
                onChange={setDeleteHandler}
                required
                />
            </div>
            <div>
                <button type='submit'>Delete</button>
            </div>
        </form>

    </div>
  )
}

export default DeleteExistingComponent