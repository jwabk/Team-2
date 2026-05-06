const playerData = {
    ronaldo: {
        name: "호날두",
        description:
            "호날두는 강력한 슈팅과 뛰어난 위치 선정이 강점인 공격수입니다. 공중볼 경합과 마무리 능력이 뛰어나며, 한 번의 기회도 득점으로 연결할 수 있는 선수입니다.",
        cardImage: "images/ronaldo-card.png",
        cardAlt: "호날두 선수 카드"
    },
    messi: {
        name: "메시",
        description:
            "메시는 정교한 드리블과 패스, 그리고 뛰어난 왼발 마무리가 장점인 선수입니다. 좁은 공간에서도 기회를 만들 수 있으며, 경기 흐름을 바꾸는 능력이 뛰어납니다.",
        cardImage: "images/messi-card.png",
        cardAlt: "메시 선수 카드"
    },
    mbappe: {
        name: "음바페",
        description:
            "음바페는 폭발적인 속도와 침투 능력이 뛰어난 공격수입니다. 상대 수비 뒷공간을 공략하는 데 강하며, 빠른 역습 상황에서 큰 위협이 되는 선수입니다.",
        cardImage: "images/mbappe-card.png",
        cardAlt: "음바페 선수 카드"
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
      <div class="player-card-bg">
        <img
          id="playerCardImage"
          src="${data.cardImage}"
          alt="${data.cardAlt}"
        />
      </div>

      <div class="player-info-content">
        <h3>${data.name}</h3>
        <p>${data.description}</p>
      </div>
    `;

        const playerCardImage = document.getElementById("playerCardImage");

        playerCardImage.classList.remove("animate");

        void playerCardImage.offsetWidth;

        playerCardImage.classList.add("animate");
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