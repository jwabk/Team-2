const playerData = {
    son: {
        name: "손흥민",
        description:
            "빠른 스피드와 양발 슈팅 능력이 강점인 공격수입니다. 측면에서 중앙으로 파고들며 슈팅을 시도하는 플레이에 잘 어울립니다."
    },
    mbappe: {
        name: "음바페",
        description:
            "순간적인 가속과 침투 능력이 뛰어난 선수입니다. 상대 수비 라인 뒤 공간을 노리는 플레이에 강하며 빠른 역습 상황에서 위협적인 모습을 보여줄 수 있습니다."
    },
    haaland: {
        name: "홀란드",
        description:
            "강한 피지컬과 높은 골 결정력이 특징인 스트라이커입니다. 박스 안에서의 슈팅, 몸싸움, 헤더 상황에서 강점을 발휘할 수 있습니다."
    }
};

const modeData = {
    rank: {
        name: "공식 경기",
        description:
            "공식 경기는 다른 유저와 실력을 겨루는 대표적인 경쟁 모드입니다. 승패에 따라 점수와 티어가 달라지기 때문에 자신의 실력을 확인하기 좋습니다."
    },
    manager: {
        name: "감독 모드",
        description:
            "감독 모드는 직접 선수를 조작하기보다 전술과 선수 배치를 중심으로 경기를 운영하는 모드입니다. 포메이션과 전략 설정의 중요성을 느낄 수 있습니다."
    },
    special: {
        name: "스페셜 매치",
        description:
            "스페셜 매치는 일반 경기와는 다른 방식으로 즐길 수 있는 모드입니다. 다양한 규칙과 색다른 경기 방식으로 새로운 재미를 느낄 수 있습니다."
    },
    volta: {
        name: "볼타 라이브",
        description:
            "볼타 라이브는 적은 인원으로 빠르고 자유로운 플레이를 즐길 수 있는 모드입니다. 개인기와 빠른 판단력이 중요한 모드입니다."
    }
};

const playerButtons = document.querySelectorAll(".player-button");
const playerInfo = document.getElementById("playerInfo");

playerButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const selectedPlayer = button.dataset.player;
        const data = playerData[selectedPlayer];

        playerButtons.forEach((item) => {
            item.classList.remove("active");
            item.classList.add("dimmed");
        });

        button.classList.add("active");
        button.classList.remove("dimmed");

        playerInfo.innerHTML = `
      <h3>${data.name}</h3>
      <p>${data.description}</p>
    `;
    });
});

const modeButtons = document.querySelectorAll(".mode-button");
const modeInfo = document.getElementById("modeInfo");

modeButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const selectedMode = button.dataset.mode;
        const data = modeData[selectedMode];

        modeButtons.forEach((item) => {
            item.classList.remove("active");
            item.classList.add("dimmed");
        });

        button.classList.add("active");
        button.classList.remove("dimmed");

        modeInfo.innerHTML = `
      <h3>${data.name}</h3>
      <p>${data.description}</p>
    `;
    });
});