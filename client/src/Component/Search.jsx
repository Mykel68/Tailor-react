import React from 'react'

const Search = () => {
  return (
    <div>
    <div className="container mb-4 pt-3">
        <form class="d-flex search">
            <input class="form-control me-2" type="search" placeholder="Search a product" aria-label="Search"/>
            <button class="btn btn-outline-info" type="submit">Search</button>
        </form>
    </div>
    </div>
  )
}

export default Search
