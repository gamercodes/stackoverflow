import {useState, useEffect} from 'react'
import http from '../services/httpService'
import {MyApiUrl} from '../services/httpService'





    function CategoriesAPI() {
        const [jobs, setJobs] = useState([])
        const [callback, setCallback] = useState(false)
    
        const getCategories = async () =>{
            const {data}=await http.get(MyApiUrl+'/api/jobs')
  
          console.log('hello baby')
          
            setJobs(data)
        }
       
        useEffect(() =>{
       
    
  
            getCategories()


           
        },[callback])

        


       
        return {
            jobs: [jobs, setJobs],
            callback: [callback, setCallback]
        }
    }
    
    export default CategoriesAPI





