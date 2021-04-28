import React from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import './ContentHeader.scss';

type ContentHeaderProps = {
  title: string;
};

function ContentHeader({ title }: ContentHeaderProps) {
  return (
    <div className="content-header">
      <IoIosArrowBack />
      {title}
    </div>
  );
}

export default ContentHeader;
