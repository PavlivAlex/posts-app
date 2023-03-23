import React, { useMemo, useState } from 'react';

// helpers
import postsAPI from '../../api/posts';
import { useFetch } from '../../hooks/useFetch';
import { useParams } from 'react-router-dom';

// components
import Post from '../../components/Additional/Post';
import Text from '../../components/Antd/Text';
import LoaderWrapper from '../../components/Additional/LoaderWrapper';

const PostInfo = () => {
  const { id } = useParams();
  const [updateDataTrigger, updatePost] = useState({});

  const { response: post, loading, error } = useFetch(() => postsAPI.getFullInfoAboutPost(Number(id)), [id, updateDataTrigger]);

  const renderFullInfoAboutPost = useMemo(() => {
    if (post) {
      return <Post post={post} width='800px' isPostInfo updatePosts={() => updatePost({})} />;
    } else {
      return <Text color='red'>{error}</Text>;
    }
  }, [post, error]);

  return <LoaderWrapper loading={loading}>{renderFullInfoAboutPost}</LoaderWrapper>;
};

export default PostInfo;
