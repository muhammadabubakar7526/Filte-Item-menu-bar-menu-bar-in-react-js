import React from 'react'

const First = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12" id="first">
            {' '}
            Our Menu
          </div>
        </div>
        {/* this is second */}
        <div className="row">
          <div className="container">
            <div className="col-lg-12 col-md-12 col-sm-12 col-12" id="second">
              <button className="btn btn-success mx-3 col-lg-1 col-md-1 col-sm-2 col-2">All</button>
              <button className="btn btn-success mx-3 col-lg-1 col-md-1 col-sm-2 col-2">Breakfase</button>
              <button className="btn btn-success mx-3 col-lg-1 col-md-1 col-sm-2 col-2">Shake</button>
              <button className="btn btn-success mx-3 col-lg-1 col-md-1 col-sm-2 col-2">Lunch</button>
              <button className="btn btn-success mx-3 col-lg-1 col-md-1 col-sm-2 col-2">Dinner</button>
            </div>
          </div>
        </div>

        {/* this is third */}
        <div className='row'>
            <div className='container'>
                <div className='col-lg-12 col-md-12 col-sm-12 col-12' id='third'>
                <div className='col-lg-6 col-md-6 col-sm-12 col-12' id='t1'>left</div>
                <div className='col-lg-6 col-md-6 col-sm-12 col-12' id='t2'>right</div>
                </div>
            </div>
        </div>
        <div className='row'>
            <div className='container'>
                <div className='col-12' id='four'>
                <div className='col-lg-6 col-md-6 col-sm-12 col-12' id='f1'>left</div>
                <div className='col-lg-6 col-md-6 col-sm-12 col-12' id='f2'>right</div>
               

                </div>
            </div>
        </div>
        <div className='row'>
            <div className='container'>
                <div className='col-12' id='five'>
                <div className='col-lg-6 col-md-6 col-sm-12 col-12' id='f3'>left</div>
                <div className='col-lg-6 col-md-6 col-sm-12 col-12' id='f4'>right</div>
               

                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default First
