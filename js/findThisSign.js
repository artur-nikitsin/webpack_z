 import signs from './signs';

export default function findTheSign(dateToArr, collection) {
    let thisSign = "";
    collection.forEach(function (item, i) {

        let signMaxDate = item.max_date.split(".");

        if (+dateToArr[1] === +signMaxDate[1]) {

            if ((+dateToArr[0]) <= +signMaxDate[0]) {
                thisSign = (signs[i]).name;
            } else {
                thisSign = (signs[i + 1]).name;
            }
        }
    });
    return thisSign;
}