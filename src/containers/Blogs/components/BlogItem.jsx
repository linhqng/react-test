/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback } from 'react'
import { useHistory, generatePath } from 'react-router-dom'

import { routes } from 'routes/index'

const BlogItem = ({ blog }) => {
  const history = useHistory()

  const moveDetail = useCallback((id) => {
    history.push(generatePath(routes.BLOG_DETAIL, { id }))
  }, [])

  return (
    <li className="media mb-3 blog-item" onClick={() => moveDetail(blog?.id)}>
      <img src={blog?.image} className="mr-3 blog-img" alt="blog" />
      <div className="media-body">
        <h5 className="mt-0 mb-1">{blog?.title}</h5>
        {blog?.content}
      </div>
    </li>
  )
}

export default BlogItem
