document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);

    // 기존의 기능 유지
    document.getElementById("afternoon").checked = params.get("afternoon") === "true";
    document.getElementById("night").checked = params.get("night") === "true";

    toggleLocationSelection();

    const selectedLocation = params.get("location");
    if (selectedLocation) {
        document.querySelector(`input[name='location'][value='${selectedLocation}']`).checked = true;
        if (selectedLocation === "homebase") {
            document.getElementById("room-layout").style.display = "block";
        }
    }
});

// 기존 기능 유지
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
    }
}


document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);

    // 오후 및 야간 자율학습 체크 상태 설정
    document.getElementById("afternoon").checked = params.get("afternoon") === "true";
    document.getElementById("night").checked = params.get("night") === "true";

    // 선택된 옵션에 따라 위치 선택 화면 표시
    toggleLocationSelection();

    // 장소 선택 상태 설정
    const selectedLocation = params.get("location");
    if (selectedLocation) {
        document.querySelector(`input[name='location'][value='${selectedLocation}']`).checked = true;
        if (selectedLocation === "homebase") {
            document.getElementById("room-layout").style.display = "block";
        }
    }
});

// 옵션 변경 시 화면 업데이트
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

        // 선택 초기화
        document.querySelectorAll("input[name='location']").forEach(radio => radio.checked = false);
        document.querySelectorAll(".chair").forEach(chair => chair.classList.remove("clicked"));
    }
}

// 장소 선택 시 좌석 선택 화면 표시
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

// 하나의 좌석만 선택 가능
document.querySelectorAll(".chair").forEach(chair => {
    chair.addEventListener("click", () => {
        document.querySelectorAll(".chair").forEach(item => item.classList.remove("clicked"));
        chair.classList.add("clicked");
    });
});

// 모달 박스 생성 및 기능 추가
const modal = document.createElement("div");
modal.id = "donation-modal";
modal.innerHTML = `
    <div class="modal-content">
        <h2>석식을 기부하시겠습니까?</h2>
        <button id="confirm-donation"> 기부하기 </button>
        <button id="cancel-donation">기부하지 않기</button>
    </div>
`;
document.body.appendChild(modal);

function showDonationModal() {
    modal.style.display = "flex";
}

// 석식 기부 여부 확인
function checkAfternoonParticipation() {
    const afternoonChecked = document.getElementById("afternoon").checked;
    if (!afternoonChecked) {
        showDonationModal();
    } else {
        alert("선택을 완료했습니다.");
    }
}

document.getElementById("confirm-donation").addEventListener("click", () => {
    alert("석식을 기부하셨습니다.");
    modal.style.display = "none";
});

document.getElementById("cancel-donation").addEventListener("click", () => {
    alert("석식을 기부하지 않습니다.");
    modal.style.display = "none";
});
