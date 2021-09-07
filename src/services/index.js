import APIService from './APIService'
import BlogsService from './BlogsService'

const apiServiceInstance = new APIService()

const blogsService = new BlogsService(apiServiceInstance)

export { blogsService }
