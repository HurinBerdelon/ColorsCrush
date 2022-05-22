import axios from 'axios'

export const api = axios.create({
    baseURL: '/api'
})

export const feedback_api = axios.create({
    baseURL: process.env.FEEDBACKS_BACKEND_URL
})