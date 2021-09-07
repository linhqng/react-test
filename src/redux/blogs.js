import * as types from './types/blogs'

const initialState = {
  blogsList: [],
  totalBlogs: 0,
  blog: {},
  isLoading: false,
}

const Blogs = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case types.BLOGS_REQUESTING:
      return {
        ...state,
        isLoading: payload,
      }

    case types.GET_BLOGS_LIST:
      return {
        ...state,
        blogsList: payload,
        isLoading: false,
      }

    case types.GET_TOTAL_BLOGS:
      return {
        ...state,
        totalBlogs: payload,
        isLoading: false,
      }

    case types.GET_BLOG_DETAIL:
      return {
        ...state,
        blog: payload,
        isLoading: false,
      }

    case types.RESET_BLOGS:
      return initialState

    default:
      return { ...state }
  }
}

export default Blogs
