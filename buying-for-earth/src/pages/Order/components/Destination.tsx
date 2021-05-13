import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import {
  RouteComponentProps,
  useRouteMatch,
  withRouter,
} from 'react-router-dom';
import './Destination.scss';

interface recipient {
  name: string;
  phone: string;
  request: string;
}

interface Props {
  address: string;
  recipient: recipient;
}

function Destination({
  history,
  address,
  recipient,
}: RouteComponentProps & Props) {
  const match = useRouteMatch();
  return (
    <div className="dst--container">
      <div className="dst__header">배송지</div>
      <div className="dst__input">
        <div
          className="dst__input__info"
          onClick={() => {
            history.push(`${match.url}/address`);
          }}
        >
          <div className={address ? 'dst__input__label' : 'empty'}>
            {address ? address : '배송지를 입력해주세요'}
          </div>
          <IoIosArrowForward />
        </div>

        <hr />
        <div
          className="dst__input__info"
          onClick={() => {
            history.push(`${match.url}/info`);
          }}
        >
          <div className={recipient.name ? 'dst__input__label' : 'empty'}>
            {recipient.name ? (
              <>
                <div>
                  {recipient.name}, {recipient.phone}
                </div>
                <div>{recipient.request}</div>
              </>
            ) : (
              '받으실 분 정보를 입력해주세요'
            )}
          </div>
          <IoIosArrowForward />
        </div>
      </div>
    </div>
  );
}

export default withRouter(Destination);
