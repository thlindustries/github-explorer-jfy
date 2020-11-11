export default interface RepositoryModel {
  id: number;
  html_url: string;
  url: string;
  full_name: string;
  name: string;
  stargazers_count: number;
  language: string;
  description: string;
  forks_count: number;
  owner: {
    avatar_url: string;
    login: string;
  };
}
