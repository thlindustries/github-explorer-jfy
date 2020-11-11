import React, { useCallback, useState, useEffect } from 'react';
import { FiStar, FiChevronRight } from 'react-icons/fi';
import { IoIosGitBranch, IoMdStar, IoMdStarOutline } from 'react-icons/io';

import { useFavorites } from 'hooks/favorites';
import { useToast } from 'hooks/toast';

import userReposInterface from 'models/repository';

import {
  Container,
  Content,
  RepoInfo,
  Footer,
  GoToWrapper,
  FavoriteContainer,
} from './styles';

interface RepositoryCardProps {
  userRepo: userReposInterface;
  favoriteList?: boolean;
  updateFavorites?(): void;
}

const RepositoryCard: React.FC<RepositoryCardProps> = ({
  userRepo,
  favoriteList = false,
  updateFavorites,
}) => {
  const [favorited, setFavorited] = useState(false);
  const { setFavorite, removeFavorite } = useFavorites();
  const { addToast } = useToast();

  const handleFavorite = useCallback(() => {
    setFavorited(!favorited);
    if (!favorited) {
      setFavorite(userRepo.owner.login, userRepo.name);
      addToast({
        type: 'success',
        title: 'Feito',
        description: 'Este repositório foi adicionado aos favoritos !',
      });
    } else {
      removeFavorite(userRepo.id);
      updateFavorites && updateFavorites();
    }
  }, [favorited]);

  const handleOpenRepo = useCallback(() => {
    window.open(userRepo.html_url);
  }, []);

  useEffect(() => {
    favoriteList && setFavorited(favoriteList);
  }, []);

  return (
    <Container>
      <Content onClick={handleOpenRepo}>
        <img src={userRepo.owner.avatar_url} alt="user" />
        <RepoInfo>
          <h1>{userRepo.full_name}</h1>
          <h3>{`Linguagens utilizadas - ${userRepo.language}`}</h3>
          <p>{userRepo.description}</p>
          <Footer>
            <p>
              <FiStar size={16} color="#c9cc00" />
              {' '}
              {userRepo.stargazers_count}
            </p>
            <p>
              <IoIosGitBranch size={16} color="#005eff" />
              {' '}
              {userRepo.forks_count}
            </p>
          </Footer>
        </RepoInfo>

        <GoToWrapper>
          <FiChevronRight size={26} />
        </GoToWrapper>
      </Content>

      <FavoriteContainer onClick={handleFavorite}>
        {favorited ? (
          <IoMdStar color="#fbff00" size={42} />
        ) : (
          <IoMdStarOutline size={42} />
        )}
        {/* {!favoriteList && <IoMdStarOutline size={42} />}
        {favoriteList || (favorited && <IoMdStar color="#fbff00" size={42} />)} */}
      </FavoriteContainer>
    </Container>
  );
};

export default RepositoryCard;
