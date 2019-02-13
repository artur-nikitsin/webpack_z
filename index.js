import showThisSign from './js/showThisSign';

export default function zodiacwebp(){
    window.onkeydown = function (event) {
        if (event.code === "Enter") {

            let dateInputValue = document.getElementById("dateInput").value;
            showThisSign(dateInputValue);

        }
    };
};


