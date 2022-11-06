import React, {useState, useEffect} from 'react'
import {format} from 'date-fns'
import { Link, useParams } from "react-router-dom";
import moment from 'moment/moment';



const Results = () => {



  const { id } = useParams()

  


    useEffect(() => {

        FetchRepo()
       
       }, [])


       const [RepoData, setRepoData] = useState({
          owner: {},
          stargazers_count: 0,
          watchers_count: 0,
          created_at: '',
       });

       
       
  const FetchRepo = async () => {
    
    const data = await fetch(`https:api.github.com/repos/Frugalcodes/${id}`)   
    const RepoData = await data.json()
    
    setRepoData(RepoData)
    console.log (RepoData)
    
  }
     
  return (
    <div>
    <Link  className="py-1 px-2 text-white bg-emerald-700 opacity-75 rounded-lg shadow inline-block mr-2" to="/">GO BACK TO LIST</Link> 
   

    <div className='grid grid-cols-1 gap-5 md:grid-cols- md:grid-cols-3 mt-10'>
    
         <div >
           <article className='p-5 bg-white rounded-lg shadow shadow-emerld-300'>

           <div className="flex items-center">
             <img src={RepoData.owner.avatar_url} alt={RepoData.owner.login} className="w-16 h-16 rounded-full"/>

             <ul className="ml-5">
               <li>
               <h2 className="font-bold text-xl">{RepoData.owner.login}</h2>
               </li>
            
             <div>
            
             <p>{RepoData.name}</p>
             {
              RepoData.private ? <p className="bg-rose-700 py-1 px-2 rounded-lg shadow text-white text-xs inline-block opacity-75">Private</p> : <p
               className="bg-emerald-700 py-1 px-2 rounded-lg shadow text-white text-xs inline-block opacity-75 mr-2"
               >Public</p>
             }
             </div>
             </ul>
             </div>

             <div>
           <p className="mt-5">
             This repository was created on {''} {moment(RepoData.created_at).format('MMMM Do YYYY, h:mm:ss a')} by {''}{RepoData.owner.login}
           </p>
         </div>
        

         <div className="mt-5 flex items-center justify-between text-right">
           <a 
           className="underline text-sm"
           href={RepoData.html_url} target="_blank" rel='noreferrer'>View RepoData</a>

           <ul>
             <li>{RepoData.stargazers_count.toLocaleString()} stars</li>
             <li>{RepoData.watchers_count.toLocaleString()} Watchers</li>
           </ul>
         </div>

        
         <div className="flex items-center justify-between flex-wrap mt-5">
           <ul className="text-xs flex items-center justify-start">
             <li className="py-1 px-2 text-white bg-emerald-700 opacity-75 rounded-lg shadow inline-block mr-2">
               {RepoData.language}
             </li>

             {RepoData.topics &&
              RepoData.topics.map((topic, index) => (
                 <React.Fragment key={index}>
                   <li className="py-1 px-2 text-white bg-emerald-700 opacity-75 rounded-lg shadow inline-block mr-2">
                     {topic}
                   </li>
                 </React.Fragment>
               ))}
           </ul>

           <p>{RepoData.open_issues} issues</p>
         </div>
            
           </article>

          
         </div>
       
     
    </div>
    </div>
  )

   
}

export default Results;