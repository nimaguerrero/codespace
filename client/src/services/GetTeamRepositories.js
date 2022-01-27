import { base_url, organization, token } from './Base';

export const GetTeamRepositories = ({ team_slug }) => {
  fetch(`${base_url}/orgs/${organization}/teams/${team_slug}/repos`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })
    .then((r) => r.json())
    .then((data) => {
      console.log(data);
    });
};
