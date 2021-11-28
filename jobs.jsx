import {GlobalState} from '../GlobalState'

const state = useContext(GlobalState)
const[jobs,setJobs]=state.categoriesAPI.jobs
useEffect( ()=>{

const  getmyUser=async ()=>{

         const {data:user}= await http.get(MyApiUrl+'/api/users/job')
         setUser(user)
        
        }
     
        const     populateJobs=async()=>{
         try{
         
           
         
             
               
               
               const myjobs=[...jobs];
               
               for(let i=0;i<myjobs.length;i++){
                 if(_.includes(user.saved,myjobs[i]._id)){
                 
                   myjobs[i].liked=true; // I WANT THIS CHANGE TO REFLECT IN RENDER fn() .
                 }
               }
              setJobs(myjobs)
     
     
         
               }
              catch(ex){
                  console.log('hey',ex)
              } 
         
             
             }

               getmyUser()
               populateJobs();
  


       

 
 },[])

render({ <Card jobs={jobs} className="cardsjob" />})

