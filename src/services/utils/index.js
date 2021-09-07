const REQUEST_METHODS = ['get', 'post', 'put', 'patch', 'delete']

const [getMethod, postMethod, putMethod, patchMethod, deleteMethod] =
  REQUEST_METHODS.map(
    (method) =>
      function anonymous(url, data = {}, config = {}) {
        const { headers = {}, ...restConfig } = config
        const additionConfig = {}

        if (method === 'get') {
          additionConfig.params = data
        } else {
          additionConfig.data = data
        }

        return this.executeRequest({
          url: url,
          method,
          headers: {
            ...headers,
          },
          ...restConfig,
          ...additionConfig,
        })
      },
  )

export { getMethod, patchMethod, postMethod, putMethod, deleteMethod }
