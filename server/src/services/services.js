const config = {
    headers: { Authorization: `Bearer aSuperSecretKey` }
};

import axios from 'axios';

export const getFile = async (file) => {
    return await axios.get(`https://echo-serv.tbxnet.com/v1/secret/file/${file}`, config)
}

export const getList = async ()  => {
    return await axios.get("https://echo-serv.tbxnet.com/v1/secret/files", config)
}
