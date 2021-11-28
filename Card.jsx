import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import '../common/utils/jobs.css'
import _ from 'lodash'

import {TiArrowForward} from 'react-icons/ti'

import {HiOutlineCash} from 'react-icons/hi';
import {FaSuitcase} from 'react-icons/fa';
import {ImLocation2} from 'react-icons/im';

const Card = ({jobs, ondelete,onLike,user}) => {

 

    return ( jobs.map(job=> ( 
     
        <div key={job._id}  > 
      

<div className='cardcc1' >





 <button className={job.liked?'btn btn-primary save':'btn savecolor save' } onClick={()=>onLike(job)} >{job.liked?'Saved':'Save'}</button>


</div>

 </div>
))

 );
}
 
export default Card;
