// DataChecker.js
import { DataFormat } from "../interfaces/DataFormat";

//Personal info
function DataChecker(
    data: DataFormat,
    field: boolean[],
): boolean[] {
    //Name
    if (/[A-Za-z]+\s[A-Za-z]+/.test(data.name)) {
        field = [false, ...field.slice(2)];
    } else {
        field =  [true, ...field.slice(2)];
    }

    //email
    if (/[-A-Za-z0-9!#$%&'*+/=?^_`{|}~]+(?:\.[-A-Za-z0-9!#$%&'*+/=?^_`{|}~]+)*@(?:[A-Za-z0-9](?:[-A-Za-z0-9]*[A-Za-z0-9])?\.)+[A-Za-z0-9](?:[-A-Za-z0-9]*[A-Za-z0-9])?/.test(data.email)) {
        field =  [...field.slice(0, 1), false,...field.slice(2)];
    } else {
        field =  [...field.slice(0, 1), true,...field.slice(2)];
    }

    //phone
    if (/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/.test(data.phone)) {
        field =  [...field.slice(0, 2), false];
    } else {
        field =  [...field.slice(0, 2), true];
    }
    return field
}
    
export default DataChecker;
