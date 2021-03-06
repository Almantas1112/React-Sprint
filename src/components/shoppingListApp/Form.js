import React from 'react'

const Form = ({todo, change, submit, error}) => {
  return (
    <form onSubmit={submit}>
        <div className='form-group row'>
            <div className='col-8'>
                <input type="text" className='form-control-plaintext text-center bg-light' value={todo} onChange={change}/>
                {error && <small className='form-text text-danger'>{error}</small>}
            </div>

            <div className='col-3'>
                <button type='submit' className='btn btn-primary'>Add</button>
            </div>
        </div>
    </form>
  )
}

export default Form