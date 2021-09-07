/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useCallback } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import Loading from 'components/Loading'
import { getBlogDetail, resetBlogsState } from 'redux/actions/blogs'
import { routes } from 'routes/index'

const BlogDetail = () => {
  const history = useHistory()

  const { id } = useParams()

  const dispatch = useDispatch()

  const blog = useSelector((state) => state.blogsState.blog)
  const isLoading = useSelector((state) => state.blogsState.isLoading)

  const handleGoBack = useCallback(() => {
    history.push(routes.BLOGS)
  }, [])

  useEffect(() => {
    dispatch(getBlogDetail(id))

    return dispatch(resetBlogsState())
  }, [])

  return (
    <div className="container wrapper">
      <div className="row">
        <div className="col-12 text-center">
          <h3 className="text-center">Blog No.{blog?.id}</h3>
        </div>
        <div className="col-12 text-center mt-5">
          <img src={blog?.image} alt={blog?.title} />
        </div>
        <div className="col-12 text-center mt-3">
          <p className="display-6">{blog?.title}</p>
        </div>

        <div className="col-12 text-center mt-3">
          <p style={{ fontSize: '20px' }}>{blog?.content}</p>
        </div>
        <div className="col-12 text-center mt-4">
          <button className="btn btn-dark" onClick={handleGoBack}>
            Go Back
          </button>
        </div>
      </div>
      <Loading isLoading={isLoading} />
    </div>
  )
}

export default BlogDetail
