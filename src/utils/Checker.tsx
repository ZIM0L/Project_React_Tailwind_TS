interface DataFormat{
    name: string,
    email: string,
    phone: string
}

function DataChecker( data: DataFormat) {
    console.log(data)
}

export default DataChecker