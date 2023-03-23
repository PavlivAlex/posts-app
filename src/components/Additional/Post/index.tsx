import React, { useState, useMemo } from 'react';

// helpers
import styled from 'styled-components';
import postsAPI from '../../../api/posts';
import { IPost } from '../../../interfaces/post';
import { debounce } from 'lodash';
import { RoutesEnum } from '../../../router/routes';
import { useNavigate } from 'react-router-dom';
import { commentsAPI } from '../../../api/comments';
import { commentsAdapter } from '../../../apiAdapters/comments';
import { FormValuesModel as PostsFormValuesModel } from '../../Forms/TemplateForms/Posts';

// components
import Icon from '../Icon';
import Text from '../../Antd/Text';
import Tooltip from '../../Antd/Tooltip';
import Comments from '../Comments';
import CommentForm, { FormValuesModel as CommentsFormValuesModel } from '../../Forms/TemplateForms/Comments';
import PostModalWindow, { PostFormTitleEnum } from '../../ModalWindows/PostModalWindow';
import { Content } from 'antd/es/layout/layout';
import { CloseOutlined, EditOutlined, ReadOutlined } from '@ant-design/icons';

interface PostProps {
  post: IPost;
  width?: string;
  isPostInfo?: boolean;
  updatePosts: () => void;
}

const Post = ({ post, width = '600px', isPostInfo = false, updatePosts }: PostProps) => {
  const navigate = useNavigate();

  const [isModalVisible, setIsModalVisible] = useState(false);

  const initialFormValues = useMemo<CommentsFormValuesModel>(
    () => ({
      body: '',
    }),
    [],
  );

  const handleAddComment = async (values: CommentsFormValuesModel) => {
    const response = await commentsAPI.addComment(commentsAdapter.addComment(values, post.id));
    if (response) {
      updatePosts();
    }
  };

  const handleRemovePost = async (postId: number) => {
    const response = await postsAPI.deletePost(postId);
    if (response) {
      updatePosts();
      isPostInfo && navigate(RoutesEnum.Posts);
    }
  };

  const handleEditPost = async (values: PostsFormValuesModel) => {
    const response = await postsAPI.updatePost(post.id, values);
    if (response) {
      updatePosts();
      setIsModalVisible(false);
    }
  };

  return (
    <StyledPost width={width}>
      <PostHeader>
        <Text weight={600}>{post.title}</Text>
        <PostSettings>
          {!isPostInfo && (
            <Tooltip title='All information'>
              <Icon component={<ReadOutlined />} onClick={() => navigate(`${RoutesEnum.Posts}/${post.id}`)} />
            </Tooltip>
          )}
          <Tooltip title='Edit post'>
            <Icon component={<EditOutlined />} onClick={() => setIsModalVisible(true)} />
          </Tooltip>
          <Tooltip title='Delete post'>
            <Icon color='red' component={<CloseOutlined />} onClick={() => handleRemovePost(post.id)} />
          </Tooltip>
        </PostSettings>
      </PostHeader>

      <Text>{post.body}</Text>

      {isPostInfo && (
        <>
          {post.comments && <Comments comments={post.comments} />}
          <CommentForm initialFormValues={initialFormValues} onSubmit={debounce(handleAddComment, 200)} />
        </>
      )}
      <PostModalWindow
        title={PostFormTitleEnum.Update}
        submitText='Update'
        isVisible={isModalVisible}
        postId={post.id}
        onSubmit={handleEditPost}
        initialValues={{ title: post.title, body: post.body }}
        closeCallback={() => setIsModalVisible(false)}
      />
    </StyledPost>
  );
};

const StyledPost = styled(Content)<{ width: string }>`
  width: ${({ width }) => width};
  border-left: 2px solid ${({ theme }) => theme.blue};
  background: white;
  margin: ${({ theme }) => theme.marginL};
  padding: ${({ theme }) => theme.paddingM};
  border-radius: ${({ theme }) => theme.defaultBorderRadius};
  -webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
`;

const PostHeader = styled(Content)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: ${({ theme }) => theme.marginS} 0;
  article {
    font-size: ${({ theme }) => theme.fontSizeM};
  }
`;

const PostSettings = styled(Content)`
  flex: initial !important;
  display: flex;
  margin-left: ${({ theme }) => theme.marginS};
`;

export default Post;
