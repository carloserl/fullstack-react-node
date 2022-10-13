export const formatElement = (file, element) => {
    const arr = element.split(/\r?\n/);
    let result = null

    if (arr.length > 2) {
        let lines = []
        for (let index = 2; index < arr.length; index++) {
            const arrItem = arr[index].split(',')
            if (arrItem.length > 3) {
                lines.push({
                    "text": arrItem[1],
                    "number": arrItem[2],
                    "hex": arrItem[3]
                })
            }
        }
        return ({
            "file":file,
            "lines":lines
        })
    } 
    return result
}