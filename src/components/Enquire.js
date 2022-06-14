import React, { useEffect, useState } from 'react'
import { getCoursrsId } from '../service/CourseService';
import {  Navigate, useNavigate ,useParams} from 'react-router-dom';
import { adduser } from '../service/UserService';
export default function Enquire() {
    const formRef = React.useRef(null);
    const [course,setCoures]=useState([]);
    const navigate=useNavigate();
    const [State,setState]=useState({userName:'',email:'',cid:''})
    const handler=(event)=>{

        const {name,value}=event.target;
        setState({...State,[name]:value,cid : formRef.current.cid.value})
    }
    const {id}=useParams();
    useEffect(()=>{
        getCoursrsId(id)
        .then(res=>{
            setCoures(res.data)
        })
    },[])
    const postData=(event)=>{
        event.preventDefault();
        adduser(State)
        .then(res=>{
            if(res.data){
                alert('add enquire')
                navigate('/')
            }
        })
    }
    return (
        <>
        <h1> Enquire </h1>
            <div className='row container'>
                <form onSubmit={postData} ref={formRef}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">User name</label>
                        <input type="text" name="userName" className="form-control"  onChange={handler}/>
                        
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                        <input type="text" name="email" className="form-control"  onChange={handler}/>
                        
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">course</label>
                        <input type="hidden" className="form-control" name="cid"  value={course.id} onChange={handler}/>
                        <input type="text" className="form-control"  value={course.name} readOnly/>
                    </div>
                   
                    <button type="submit" name="course" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </>
    )
}
