export const formatRows = (data) =>{

const result = []
if (data[0]!== null){
    data.map(el => {
        el.lines.map(i => {
            result.push({
                fileName: el.file,
                text:i.text,
                number:i.number,
                hex:i.hex
            })
        })
})
}

return result
}