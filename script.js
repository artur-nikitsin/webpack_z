window.onkeydown = function (event) {
    if (event.code === "Enter") {

        let dateInputValue = document.getElementById("dateInput").value;

        const signs = [
            {
                name: "Овен",
                min_date: "21.03",
                max_date: "20.04"
            },
            {
                name: "Телец",
                min_date: "21.04",
                max_date: "20.05"
            },
            {
                name: "Близнецы",
                min_date: "21.05",
                max_date: "21.06"
            },
            {
                name: "Рак",
                min_date: "22.06",
                max_date: "22.07"
            },
            {
                name: "Лев",
                min_date: "23.07",
                max_date: "23.08"
            },
            {
                name: "Дева",
                min_date: "24.08",
                max_date: "23.09"
            },
            {
                name: "Весы",
                min_date: "24.09",
                max_date: "23.10"
            },
            {
                name: "Скорпион",
                min_date: "24.10",
                max_date: "22.11"
            },
            {
                name: "Стрелец",
                min_date: "23.11",
                max_date: "21.12"
            },
            {
                name: "Козерог",
                min_date: "22.12",
                max_date: "20.01"
            },
            {
                name: "Водолей",
                min_date: "21.01",
                max_date: "20.02"
            },
            {
                name: "Рыбы",
                min_date: "21.02",
                max_date: "20.03"
            },

        ];

        function showThisSign(userDate) {
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

        showThisSign(dateInputValue);


        function writeThisSign(sign) {
            document.getElementById("output").innerText = "Вам соответствует: " + sign;
        }

        function checkDate(date) {
            if (date[0].length > 2 || date[0].length === 0 || date[0]>=32 || date[0]<=0 || date[1].length > 2 || date[1].length === 0 || date[1]>=13 || date[0]<=0) {
                return true;
            }
        }


        function findTheSign(dateToArr, collection) {
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


    }
}
;
