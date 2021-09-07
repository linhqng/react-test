/* eslint-disable react-hooks/exhaustive-deps */
import { React, useEffect, useState, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Input from 'components/Input/index'
import Select from 'components/Select/index'
import Pagination from 'components/Pagination'
import Loading from 'components/Loading'
import {
  getBlogsList,
  getTotalBlogs,
  resetBlogsState,
} from 'redux/actions/blogs'

import { sortByOptions, orderByOptions } from './constants'
import BlogItem from './components/BlogItem'

const Blogs = () => {
  const [search, setSearch] = useState('')
  const [sortBy, setSortBy] = useState('id')
  const [order, setOrder] = useState('asc')
  const [page, setPage] = useState(1)

  const dispatch = useDispatch()

  const blogsList = useSelector((state) => state.blogsState.blogsList)
  const totalBlogs = useSelector((state) => state.blogsState.totalBlogs)
  const isLoading = useSelector((state) => state.blogsState.isLoading)

  const filterValues = useMemo(
    () => ({
      search,
      sortBy,
      order,
      page,
    }),
    [search, sortBy, order, page],
  )

  const [
    handleSearchChange,
    handleSortChange,
    handleOrderChange,
    handlePageChange,
  ] = useMemo(
    () => [
      ({ target }) => {
        setSearch(target?.value)
        setPage(1)
        dispatch(getTotalBlogs({ search: target?.value }))
        dispatch(
          getBlogsList({
            ...filterValues,
            search: target?.value,
            page: 1,
          }),
        )
      },
      ({ target }) => {
        setSortBy(target?.value)
        dispatch(getBlogsList({ ...filterValues, sortBy: target?.value }))
      },
      ({ target }) => {
        setOrder(target?.value)
        dispatch(
          getBlogsList({
            ...filterValues,
            order: target?.value,
          }),
        )
      },
      (page) => {
        setPage(page)
        dispatch(getBlogsList({ ...filterValues, page: page }))
      },
    ],
    [search, sortBy, order, page],
  )

  useEffect(() => {
    dispatch(getTotalBlogs())
    dispatch(getBlogsList(filterValues))

    return dispatch(resetBlogsState())
  }, [])

  return (
    <div className="container wrapper">
      <h3 className="text-center">Blogs</h3>
      <div className="row mt-5">
        <div className="col-md-3">
          <Select
            name="sortBy"
            options={sortByOptions}
            label="Sort by"
            className="form-control input-form"
            onChange={handleSortChange}
          />
        </div>
        <div className="col-md-3">
          <Select
            name="orderBy"
            options={orderByOptions}
            label="Order by"
            className="form-control input-form"
            onChange={handleOrderChange}
          />
        </div>
        <div className="col-md-6">
          <Input
            name="search"
            label="Search"
            className="form-control input-form"
            value={search}
            onChange={handleSearchChange}
          />
        </div>
      </div>
      <div className="row blogs mt-5">
        <ul className="list-unstyled">
          {blogsList?.length > 0 ? (
            blogsList.map?.((blog, index) => (
              <BlogItem blog={blog} key={index} />
            ))
          ) : (
            <p>Don't have any blog</p>
          )}
        </ul>
      </div>
      <div className="mt-2 mb-2">
        <Pagination
          totalRecord={totalBlogs}
          currentPage={page}
          handlePageChange={handlePageChange}
        />
      </div>
      <Loading isLoading={isLoading} />
    </div>
  )
}

export default Blogs
