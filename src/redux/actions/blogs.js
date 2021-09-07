import { blogsService } from 'services/index'

import * as types from '../types/blogs'

const blogsRequesting = (dispatch) => {
  dispatch({
    type: types.BLOGS_REQUESTING,
    payload: true,
  })
}

export const getBlogsList = (params) => async (dispatch) => {
  try {
    blogsRequesting(dispatch)

    const blogsList = await blogsService.getBlogsList(params)

    dispatch({ type: types.GET_BLOGS_LIST, payload: blogsList })
  } catch (error) {
    return Promise.reject(error)
  }
}

export const getTotalBlogs = (params) => async (dispatch) => {
  try {
    blogsRequesting(dispatch)

    const totalBlogs = await blogsService.getTotalBlogs(params)

    dispatch({ type: types.GET_TOTAL_BLOGS, payload: totalBlogs?.length })
  } catch (error) {
    return Promise.reject(error)
  }
}

export const getBlogDetail = (id) => async (dispatch) => {
  try {
    blogsRequesting(dispatch)

    const blogDetail = await blogsService.getBlogDetail(id)

    dispatch({ type: types.GET_BLOG_DETAIL, payload: blogDetail })
  } catch (error) {
    return Promise.reject(error)
  }
}

export const resetBlogsState = () => {
  return {
    type: types.RESET_BLOGS,
  }
}
