import React, {useState, useEffect} from 'react'

import {Link} from 'react-router-dom'
import ReactPaginate from 'react-paginate';


const Home = () => {

  
    useEffect(() => {

        FetchRepos()
        
       }, [])


       const [ReposData, setReposData] = useState([]);
       const [pageNumber, setPageNumber] = useState(0);

       const usersPerPage = 6;
      const pagesVisited = pageNumber * usersPerPage;

      const DisplayUsers = ReposData.slice(pagesVisited, pagesVisited + usersPerPage).map((repo) => {
  
  return (
             

              <div className=" py-1 px-2 text-white bg-emerald-700 opacity-75 rounded-lg shadow inline-block mr-2 mt-5 mb-10">
       

                <h1 key={repo.id}>
                
                <Link  to={`/${repo.name}`}>Repo Name: <span className='repo-name'>{repo.name}</span> </Link></h1>
                <p className='text-dis'><Link to={`/${repo.name}`}>Click to view more details</Link></p>
                </div>
               
            )
  })

       
  const FetchRepos = async () => {
    
    const itemdata = await fetch('https://api.github.com/users/Frugalcodes/repos')
    const ReposData = await itemdata.json()
    
    setReposData(ReposData)

  
    
    
  }

  const pageCount = Math.ceil(ReposData.length / usersPerPage);


  const changePage = ({ selected }) => {
    setPageNumber(selected)
  }

  return (
    <>
        {
          DisplayUsers }
          <ReactPaginate

      previousLabel={"Previous"}
      nextLabel={"Next"}
      pageCount={pageCount}
      onPageChange={changePage}
      containerClassName={"paginationBttns"}
      previousLinkClassName={"previousBttn"}
      nextLinkClassName={"nextBttn"}
      disabledClassName={"paginationDisabled"}
      activeClassName={"paginationActive"}
        />
   
       

    </>
  )
}

export default Home