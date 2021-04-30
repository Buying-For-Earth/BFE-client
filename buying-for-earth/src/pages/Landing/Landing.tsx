import React, { useEffect, useState } from "react";
import "./Landing.scss";

function Landing() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    window.onscroll = () => {
      setScrollY(window.pageYOffset);
    };
  }, []);

  console.log(scrollY);
  return (
    <div className="landing--container">
      <div className="landing-section-0">
        <div className="main-message">친환경 전문 이커머스</div>
        <div className="sub-message">Buying for Earth</div>
      </div>

      <div className="landing-section-1">
        <div className="top-description">
          모든 친환경 제품이 <br />한 곳에 모였습니다!
        </div>
        <div className="bottom-description">
          친환경 제품, 어디서 사야할지 고민하셨죠? <br />
          바잉포어스에서 제품 탐색부터 구매까지 한 번에!
        </div>
      </div>

      <div className="landing-section-2">
        <div className="top-description">
          제품정보를 A부터 Z까지 <br />다 알려드립니다!
        </div>
        <div className="bottom-description">
          친환경 제품이 맞는지 의심하지 마세요. <br />
          재료부터 관리, 분리배출 방법까지 알려드립니다!
        </div>
      </div>

      <div className="landing-section-3">
        <div className="top-description">
          모든 사람의 삶을 <br />
          친환경적으로 바꾸는 그날까지
        </div>
        <div className="bottom-description">
          Next Generation을 위한 이커머스로 <br />더 멀리, 다 함께 사는 삶을
          꿈꿉니다.
        </div>
      </div>
    </div>
  );
}

export default Landing;
