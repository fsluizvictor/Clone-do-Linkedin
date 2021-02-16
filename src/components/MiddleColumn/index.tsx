import React from 'react';

import FeedShare from './FeedShare';
import FeedPost from './FeedPost';
import LoadingFeedPost from '../Shimmer/LoadingFeedPost';

import { Container } from './styles';

const MiddleColumn: React.FC<LoadingProps> = ({ isLoading }) => {
  return (
    <Container className="middle-column">
      {isLoading ? (
        <>
          <LoadingFeedPost />
          <LoadingFeedPost />
          <LoadingFeedPost />
          <LoadingFeedPost />

        </>
      ) : (
          <>
            <FeedShare />
            <FeedPost />
            <FeedPost />
            <FeedPost />
            <FeedPost />
          </>
        )}
    </Container>
  );
};

export default MiddleColumn;
