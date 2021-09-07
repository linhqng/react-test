import APIService from './APIService'

class BlogsService {
  instance = null

  constructor(instance = new APIService()) {
    this.instance = instance
  }

  getBlogsList(params) {
    const preParams = {
      ...params,
      limit: 10,
    }
    return this.instance.get('blogs', preParams)
  }

  getTotalBlogs(params) {
    return this.instance.get('blogs', params)
  }

  getBlogDetail(id) {
    return this.instance.get(`blogs/${id}`)
  }
}

export default BlogsService
