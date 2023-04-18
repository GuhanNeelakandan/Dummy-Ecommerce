import React from 'react'

function Filter() {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-3'>
                    <div class="mb-3 ">
                        <input type="email" class="form-control shadow-sm mb-5 bg-body-tertiary rounded" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='search' />
                    </div>
                </div>
                <div className='col-3'>
                    <select class="form-select shadow-sm mb-5 bg-body-tertiary rounded" aria-label="Default select example" placeholder='Category'>
                        <option selected>Category</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                <div className='col-3'>
                <select class="form-select shadow-sm mb-5 bg-body-tertiary rounded" aria-label="Default select example">
                        <option selected>Filter Amount</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                <div className='col-3'>
                <select class="form-select shadow-sm mb-5 bg-body-tertiary rounded" aria-label="Default select example">
                        <option selected>Sort</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default Filter