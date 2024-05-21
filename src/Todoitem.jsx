import React from 'react'

const Todoitem = ({todoname, tododate}) => {
  return (
    <div className='items-container'>
            <div class="container">
                <div className='container text-center'>
                    <div class="row kg-row">
                        <div class="col-6">
                           {todoname}
                        </div>
                        <div class="col-4">
                            <input type='date' />
                        </div>
                        <div class="col-2">
                            <button type="button" class="btn btn-danger kg-button">delete</button>

                        </div>
                    </div>

                </div>

            </div>
            </div>
  )
}

export default Todoitem