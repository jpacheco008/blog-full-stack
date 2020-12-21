import api from './apiConfig'

export const getBlogs = async () => {
  try {
      const response = await api.get('/posts')
      return response.data
  } catch (error) {
      throw error
  }
}

export const getBlog = async id => {
  try {
      const response = await api.get(`/post/${id}`)
      return response.data
  } catch (error) {
      throw error
  }
}

export const createPost = async post => {
  try {
      const response = await api.post('/posts', post)
      return response.data
  } catch (error) {
      throw error
  }
}

export const updatePost = async (id, post) => {
  try {
      const response = await api.put(`/products/${id}`, post)
      return response.data
  } catch (error) {
      throw error
  }
}

export const deletePost = async id => {
  try {
      const response = await api.delete(`/posts/${id}`)
      return response.data
  } catch (error) {
      throw error
  }
}