import React, { useState, useEffect } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import DaumPostCode from 'react-daum-postcode';
import ContentHeader from '../../components/ContentHeader';

interface Props {
  onAddressInput: (address: string) => void;
}

function Address({ history, onAddressInput }: Props & RouteComponentProps) {
  const [close, setClose] = useState(false);
  const onCompletePost = (data: any) => {
    let fullAddr = data.address;
    let extraAddr = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddr += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddr +=
          extraAddr !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddr += extraAddr !== '' ? ` (${extraAddr})` : '';
    }
    onAddressInput(fullAddr);
    setClose(true);
  };

  useEffect(() => {
    if (close) {
      history.go(-2);
    }
  }, [history, close]);

  const style: any = {
    height: 'calc(100vh - 3rem)',
  };
  return (
    <>
      <ContentHeader title="주소검색" />
      <div className="address--container">
        <DaumPostCode style={style} onComplete={onCompletePost} autoClose />
      </div>
    </>
  );
}

export default withRouter(Address);
