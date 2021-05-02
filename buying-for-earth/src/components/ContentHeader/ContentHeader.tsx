import React from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import './ContentHeader.scss';

type ContentHeaderProps = {
  title: string;
};

function ContentHeader({
  title,
  history,
}: ContentHeaderProps & RouteComponentProps) {
  return (
    <div className="content-header">
      <IoIosArrowBack onClick={() => history.goBack()} />
      {title}
    </div>
  );
}

export default withRouter(ContentHeader);
