import React, { useState, useRef, useCallback } from 'react';
import { FiUser, FiSearch } from 'react-icons/fi';

import * as Yup from 'yup';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import api from 'services/api';
import getValidationErrors from 'utils/getValidationErrors';
import userReposInterface from 'models/repository';
import { useToast } from 'hooks/toast';

import Input from 'components/Atoms/Input';
import Loading from 'components/Atoms/Loading';
import RepositoryCard from 'components/Atoms/RepositoryCard';

import {
  Container,
  Heading,
  ContentWrapper,
  FormContentWrapper,
  Content,
  StyledButton,
} from './styles';

interface DataFormInfo {
  userName: string;
}

const Dashboard: React.FC = () => {
  const [userRepos, setUserRepos] = useState<userReposInterface[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const { addToast } = useToast();

  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: DataFormInfo) => {
    setIsLoading(true);
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        userName: Yup.string().required('Digite o nome de um usuário!'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      const response = await api.get(`/users/${data.userName}/repos`);

      setUserRepos(response.data);
      setIsLoading(false);
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);

        formRef.current?.setErrors(errors);
      }
      addToast({
        type: 'error',
        title: 'Erro ao buscar usuário',
        description: 'Oops... parece que este usuário não existe',
      });
      setIsLoading(false);
    }
  }, []);

  return (
    <Container>
      <Heading>
        <h3>
          Bem vindo ao
          {' '}
          <strong>Just For You</strong>
          {' '}
          Repository explorer :D
        </h3>
      </Heading>
      <ContentWrapper>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <FormContentWrapper>
            <Input
              name="userName"
              icon={FiUser}
              placeholder="Digite o nome do usuário"
              style={{ width: 300 }}
            />
            <StyledButton enabled={!isLoading} type="submit">
              {isLoading ? <Loading /> : <FiSearch size={20} />}
            </StyledButton>
          </FormContentWrapper>
        </Form>
        <Content>
          {userRepos
            && userRepos.map((userRepo) => (
              <RepositoryCard key={userRepo.id} userRepo={userRepo} />
            ))}
        </Content>
      </ContentWrapper>
    </Container>
  );
};

export default Dashboard;
