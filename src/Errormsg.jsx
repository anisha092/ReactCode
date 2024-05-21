import React from 'react'

const Errormsg = () => {
    let fooditems=['Daal', 'Roti','sabzi','Raita','Salad']

  return (
    <>
        {fooditems.length==0 ? <h3>I'm Hungry</h3>:null }
</>

  )
}

export default Errormsg