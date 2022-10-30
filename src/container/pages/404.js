import React from 'react';
import { NavLink } from 'react-router-dom';
import { ErrorWrapper } from './style';
import { Main } from '../styled';
import Heading from '../../components/heading/heading';
import { Button } from '../../components/buttons/buttons';

const NotFound = () => {
  return (
    <Main>
      <ErrorWrapper>
        <img src={require(`../../static/img/pages/404.svg`)} alt="404" />
        <Heading className="error-text" as="h3">
          404
        </Heading>
        <p>Xin lỗi ! Không tìm thấy nội dung mà bạn cần.</p>
        <NavLink to="/hcmute">
          <Button size="default" type="primary" to="/hcmute">
            Trở về trang chủ
          </Button>
        </NavLink>
      </ErrorWrapper>
    </Main>
  );
};

export default NotFound;
