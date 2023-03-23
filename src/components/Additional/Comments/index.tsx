import React, { useMemo, useState } from 'react';

// helpers
import styled from 'styled-components';
import { IComment } from '../../../interfaces/comment';

// components
import Text from '../../Antd/Text';
import Comment from '../Comment';
import { Content } from 'antd/es/layout/layout';

interface CommentsProps {
  comments: IComment[];
}

const Comments = ({ comments }: CommentsProps) => {
  const [showComments, setShowComments] = useState(true);

  const renderComments = useMemo(() => {
    if (comments?.length) {
      return comments.map(comment => <Comment key={comment.id} comment={comment} />);
    }
  }, [comments]);

  return (
    <Content>
      <>
        {comments?.length ? (
          <ShowCommentsText onClick={() => setShowComments(!showComments)}>
            {showComments ? 'Hide comments' : `View ${comments?.length} comments`}
          </ShowCommentsText>
        ) : (
          <Text color='gray'>No comments</Text>
        )}
        {showComments && renderComments}
      </>
    </Content>
  );
};

const ShowCommentsText = styled(Content)`
  color: gray;
  cursor: pointer;
  font-size: 16px;
`;

export default Comments;
