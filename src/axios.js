import axios from 'axios'

const instatance = axios.create({

    baseURL:"https://api.themoviedb.org/3"


})

export default instatance;