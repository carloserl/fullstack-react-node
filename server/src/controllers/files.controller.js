import { getFile, getList } from "../services/services.js"
import { formatElement } from "../utils/utils.js"


export const getFiles = async (req, res) => {
    const {fileName} = req.query

    if (!fileName){
        try {
            const result = await getList()
            const files = result.data.files
            let finalResponse = []
            for (const file of files) {
                try {
                    const resultCsv = await getFile(file)
                    const result = formatElement(file, resultCsv.data);
                    if (result !== null){
                        finalResponse.push(result)
                    }
                } catch (error) {
                    console.log("error", file)
                }
            }
            return res.json({ message: "OK",data: finalResponse });
        } catch (error) {
            return res.status(500).json({
                message: error,
            });
        }
    }else{
        getCsv(req,res,fileName)
     
    }
  
}

export const getFilesList = async (_, res) => {
    try {
        const result = await getList()
        const finalResponse = result.data.files
      
        return res.json({ message: "OK",data: finalResponse });
    } catch (error) {
        return res.status(500).json({
            message: error,
        });
    }
}


const getCsv =  async (req, res,  fileName)  => {
    try {
        const result =  await getFile(fileName)
        const finalResponse = formatElement(fileName, result.data);
      
        return res.json({ message: "OK",data: finalResponse });
    } catch (error) {
        return res.status(500).json({
            message: error,
        });
    }
}




