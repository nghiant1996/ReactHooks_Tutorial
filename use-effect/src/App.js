import React, { useEffect, useState } from 'react';
import queryString from 'query-string';

import './App.css';
import PostList from './components/PostList/PostList';
import Pagination from './components/Pagination/Pagination';


function App() {

  const [postList, setPostList] = useState([])

  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 10,
    _totalRows: 11
  })

  const [filters, setFilters] = useState({
    _limit: 10,
    _page: 1
  })

  useEffect(() => {
    async function fetchPostList(){

      try {
        //limit=10&page=1

        const paramsString = queryString.stringify(filters);
        const requestUrl = `http://js-post-api.herokuapp.com/api/posts?${paramsString}`;
        const response = await fetch(requestUrl);
        const responseJSON = await response.json();

        console.log(responseJSON)

        const {data, pagination} = responseJSON;
        setPostList(data);
        setPagination(pagination)
      } catch (error) {
        console.log('Failed to fetch post list ' , error.message);
      }
      
    }

    fetchPostList();
  }, [filters])

  function handlePageChange(newPage){
    console.log('New page', newPage)
    setFilters({
      ...filters,
      _page: newPage
    })
  }

  return (
    <div className="App">
      <PostList posts = {postList} />
      <Pagination
        pagination={pagination}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default App;
