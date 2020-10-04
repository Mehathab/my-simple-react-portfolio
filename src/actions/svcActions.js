import contentService from '../services/contentService'
const SCOPE = "svcActions/";
const GET_CONTENT = `${SCOPE}GET_CONTENT`;


const svcActions ={
    getContent=(params)=>({
        type: GET_CONTENT,
        payload: {promise: contentService.getContent(params)}
    })
}