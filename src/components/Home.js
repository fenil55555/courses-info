import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getCoursrs } from '../service/CourseService'

export default function Home() {
  const [course, setCoures] = useState([])
  useEffect(() => {
    getCoursrs()
      .then(res => {
        setCoures(res.data)
      })
  },[])
  return (
    <>
      <h2> Product </h2>
      <div className='row container'>
        {course?.map((val) =>
          <div className='col-sm-4' key={val.id}>
            <div className="card" style={{ width: "18rem" }}>
              <img src={val.image} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{val.name}</h5>
                <p className="card-text">Price : {val.price}</p>
                <Link to={`/enquire/${val.id}`} className="btn btn-info">Enquire</Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}
