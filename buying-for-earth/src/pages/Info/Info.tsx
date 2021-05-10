import React, { useState } from 'react';
import ContentHeader from '../../components/ContentHeader';
import './Info.scss';

interface info {
  name: string;
  phone: string;
  request: string;
}

interface Props {
  onInfoInput: (info: info) => void;
}

function Info({ onInfoInput }: Props) {
  const [info, setInfo] = useState({ name: '', phone: '', request: '문 앞' });
  const [radioCheck, setRadioCheck] = useState({
    radio1: true,
    radio2: false,
    radio3: false,
    radio4: false,
  });

  const handleRadio = (e: any) => {
    let obj: any = {};
    let { name } = e.target;
    for (let key in radioCheck) {
      if (key === name) {
        obj[key] = true;
      } else {
        obj[key] = false;
      }
    }
    setRadioCheck(obj);
    setInfo({ ...info, request: e.target.value });
  };

  const onChange = (e: any) => {
    let { name } = e.target;
    setInfo({ ...info, [name]: e.target.value });
  };
  return (
    <>
      <ContentHeader title={'배송정보'} />
      <div className="info--container">
        <div className="input-info">
          <div className="info">
            <div className="info__label">받으실 분</div>
            <input
              type="text"
              className="info__value"
              name="name"
              placeholder="이름을 입력해주세요"
              onChange={onChange}
            />
          </div>
          <div className="info">
            <div className="info__label">휴대폰</div>
            <input
              type="text"
              className="info__value"
              name="phone"
              placeholder="'-'없이 입력해주세요"
              onChange={onChange}
            />
          </div>

          <div className="info">
            <div className="info__label">배송요청사항</div>
            <label htmlFor="">
              <input
                type="radio"
                name="radio1"
                checked={radioCheck.radio1}
                onChange={handleRadio}
                value="문 앞"
              />
              문 앞
            </label>
            <label htmlFor="">
              <input
                type="radio"
                name="radio2"
                checked={radioCheck.radio2}
                onChange={handleRadio}
                value="경비실"
              />
              경비실
            </label>
            <label htmlFor="">
              <input
                type="radio"
                name="radio3"
                checked={radioCheck.radio3}
                onChange={handleRadio}
                value="택배함"
              />
              택배함
            </label>
            <label htmlFor="">
              <input
                type="radio"
                name="radio4"
                checked={radioCheck.radio4}
                onChange={handleRadio}
                value="기타 장소"
              />
              기타 장소
            </label>
          </div>
        </div>
        <div className="info__save" onClick={() => onInfoInput(info)}>
          저장
        </div>
      </div>
    </>
  );
}

export default Info;
