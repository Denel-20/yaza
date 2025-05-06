// script.js
document.getElementById("afternoon").addEventListener("change", toggleLocationSelection);
document.getElementById("night").addEventListener("change", toggleLocationSelection);
document.getElementById("submit").addEventListener("click", checkAfternoonParticipation);

function toggleLocationSelection() {
    const afternoonChecked = document.getElementById("afternoon").checked;
    const nightChecked = document.getElementById("night").checked;
    const locationSelection = document.getElementById("location-selection");
    const roomLayout = document.getElementById("room-layout");

    if (afternoonChecked || nightChecked) {
        locationSelection.style.display = "block";
    } else {
        locationSelection.style.display = "none";
        roomLayout.style.display = "none"; 

        // ⚡ 선택한 장소 및 좌석 초기화
        document.querySelectorAll("input[name='location']").forEach(radio => radio.checked = false);
        document.querySelectorAll(".chair").forEach(chair => chair.classList.remove("clicked"));
    }
}

// 장소 선택 시 좌석 선택 화면 표시/숨김
document.querySelectorAll("input[name='location']").forEach(radio => {
    radio.addEventListener("change", () => {
        const afternoonChecked = document.getElementById("afternoon").checked;
        const nightChecked = document.getElementById("night").checked;
        const roomLayout = document.getElementById("room-layout");

        if ((afternoonChecked || nightChecked) && radio.value === "homebase") {
            roomLayout.style.display = "block";
        } else {
            roomLayout.style.display = "none";
        }
    });
});

// 하나의 좌석만 선택 가능하도록 설정
document.querySelectorAll(".chair").forEach(chair => {
    chair.addEventListener("click", () => {
        document.querySelectorAll(".chair").forEach(item => item.classList.remove("clicked"));
        chair.classList.add("clicked");
    });
});

// 오후 자율학습을 하지 않는다면 석식 기부 여부를 묻는 창 표시
function checkAfternoonParticipation() {
    const afternoonChecked = document.getElementById("afternoon").checked;

    if (!afternoonChecked) {
        const donateDinner = confirm("석식을 기부하시겠습니까?");
        alert(donateDinner ? "석식을 기부하셨습니다." : "석식을 기부하지 않습니다.");
    } else {
        alert("선택을 완료했습니다.");
    }
}
