export default function checkDate(date) {
    if (date[0].length > 2 || date[0].length === 0 || date[0] >= 32 || date[0] <= 0 || date[1].length > 2 || date[1].length === 0 || date[1] >= 13 || date[0] <= 0) {
        return true;
    }

}
;