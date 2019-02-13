import signs from "./signs";
import writeThisSign from './writeThisSign';
import checkDate from './checkDate';
import findTheSign  from './findThisSign';

export default function showThisSign(userDate) {
    let dateToArr = userDate.split(".");
    try {
        if (checkDate(dateToArr)) {
            throw new err;
        }
        ;
        let thisSign = findTheSign(dateToArr, signs);
        writeThisSign(thisSign);
    } catch (err) {
        alert("Проверьте правильность введенных данных");
    }

}