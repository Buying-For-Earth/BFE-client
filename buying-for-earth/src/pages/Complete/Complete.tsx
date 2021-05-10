import React, { useEffect, useState } from 'react';
import { AiFillCheckCircle } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { clear } from '../../modules/cart';
import './Complete.scss';

interface Props {
  name?: string;
  totalPrice?: number;
}
function Complete({ name, totalPrice, history }: Props & RouteComponentProps) {
  const [price, setPrice] = useState(0);
  const dispatch = useDispatch();
  useEffect(() => {
    const path = history.location.pathname.split('/');
    setPrice(Number(totalPrice));
    if (path[1] === 'cart') {
      // 카트삭제
      console.log('clear');
      dispatch(clear());
    }
  }, [history, dispatch]);
  return (
    <div className="complete--container">
      <div className="complete-header">주문완료</div>
      <div className="complete__confirm">
        <div className="confirm__icon">
          <AiFillCheckCircle />
        </div>
        <img src="/images/completeImage.jpg" alt="" className="confirm__img" />
        <div className="confirm__msg">
          {name} 님의 주문이 완료되었습니다.
          <br />
          환경을 생각하는 소비에 감사드립니다!
        </div>
        <div className="confirm__price">
          <div className="confirm__price__label">결제금액</div>
          <div className="confirm__price__value">
            {price.toLocaleString()} 원
          </div>
        </div>
        <div className="confirm__detail">
          <div>
            내가 기여한 환경 포인트
            <br /> <span style={{ color: '#ea910b' }}>
              이산화탄소
            </span> 배출량 <span style={{ color: '#34cdab' }}>10%</span> 저감!
          </div>
        </div>
      </div>
      <div className="wrap">
        <div className="home-btn" onClick={() => history.push('/')}>
          홈으로 이동
        </div>
      </div>
    </div>
  );
}

export default withRouter(Complete);
