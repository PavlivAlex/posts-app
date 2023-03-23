import React, { useMemo, useState } from 'react';

// helpers
import styled from 'styled-components';
import postsAPI from '../../api/posts';
import { useFetch } from '../../hooks/useFetch';
import { FormikHelpers } from 'formik';
import { FormValuesModel } from '../../components/Forms/TemplateForms/Posts';

// components
import Text from '../../components/Antd/Text';
import Post from '../../components/Additional/Post';
import Button from '../../components/Antd/Button';
import LoaderWrapper from '../../components/Additional/LoaderWrapper';
import PostModalWindow, { PostFormTitleEnum } from '../../components/ModalWindows/PostModalWindow';
import { Content } from 'antd/es/layout/layout';

const Posts = () => {
  const [updateDataTrigger, updatePosts] = useState({});
  const [isModalVisible, setIsModalVisible] = useState(false);

  const { response, loading, error } = useFetch(() => postsAPI.getAllPosts(), [updateDataTrigger]);

  const renderContent = useMemo(() => {
    if (response) {
      return response.map(post => <Post key={post.id} post={post} updatePosts={() => updatePosts({})} />);
    } else {
      return <Text color='red'>{error}</Text>;
    }
  }, [response, error]);

  const initialModalFormValues = useMemo<FormValuesModel>(
    () => ({
      title: '',
      body: '',
    }),
    [],
  );

  const handleCreatePost = async (values: FormValuesModel, helpers?: FormikHelpers<FormValuesModel>) => {
    const response = await postsAPI.createPost(values);
    if (response) {
      updatePosts({});
      helpers?.resetForm();
      setIsModalVisible(false);
    }
  };

  return (
    <PostsContainer>
      <Button onClick={() => setIsModalVisible(true)}>Create New Post</Button>
      <LoaderWrapper loading={loading}>{renderContent}</LoaderWrapper>
      <PostModalWindow
        title={PostFormTitleEnum.Create}
        initialValues={initialModalFormValues}
        isVisible={isModalVisible}
        onSubmit={(values, helpers) => handleCreatePost(values, helpers)}
        closeCallback={() => setIsModalVisible(false)}
      />
    </PostsContainer>
  );
};

const PostsContainer = styled(Content)`
  padding: 20px;
  min-height: calc(100vh - 240px);
  background: ${({ theme }) => theme.gray};
  border-radius: ${({ theme }) => theme.defaultBorderRadius};
  -webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  ${({ theme }) => theme.centerColumnSnippet};
`;

export default Posts;
