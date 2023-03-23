import React from 'react';

// helpers
import styled from 'styled-components';
import { IComment } from '../../../interfaces/comment';

// components
import Text from '../../Antd/Text';
import { Content } from 'antd/es/layout/layout';

interface CommentProps {
  comment: IComment;
}

const Comment = ({ comment }: CommentProps) => {
  return (
    <StyledComment>
      <Text weight={600}>{comment.email}</Text>
      <Text>{comment.body}</Text>
    </StyledComment>
  );
};

const StyledComment = styled(Content)`
  margin: ${({ theme }) => theme.marginL} 0;
`;

export default Comment;
