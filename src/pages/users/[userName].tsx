import { useRouter } from "next/router";
import { useGetUserByUserName } from "../../querys/useGitHubUsers.query";
import Image from "next/image";

const User = () => {
  const router = useRouter();

  const {
    data: user,
    isLoading: isUserLoadin,
    isError: isUserError,
  } = useGetUserByUserName(router.query.userName as string);

  return (
    <main>
      {!isUserLoadin && !isUserError && user && (
        <>
          <div>
            <Image
              src={user.avatar_url}
              width={200}
              height={200}
              alt={user.name}
            />
            <div>
              <h1>{user.name}</h1>
              <p>{user.login}</p>
            </div>
          </div>
          <table>
            <tbody>
              <tr>
                <td>Name:</td>
                <td>{user.name}</td>
              </tr>
              <tr>
                <td>Location:</td>
                <td>{user.location ?? "N/A"}</td>
              </tr>
              <tr>
                <td>Email:</td>
                <td>{user.email ?? "N/A"}</td>
              </tr>
              <tr>
                <td>Hireable:</td>
                <td>{user.hireable ?? "N/A"}</td>
              </tr>
              <tr>
                <td>Bio:</td>
                <td>{user.bio ?? "N/A"}</td>
              </tr>
              <tr>
                <td>X UserName:</td>
                <td>{user.twitter_username ?? "N/A"}</td>
              </tr>
              <tr>
                <td>Public Repos:</td>
                <td>{user.public_repos ?? "N/A"}</td>
              </tr>
              <tr>
                <td>Public Gist:</td>
                <td>{user.public_gists ?? "N/A"}</td>
              </tr>
              <tr>
                <td>Followers:</td>
                <td>{user.followers ?? "N/A"}</td>
              </tr>
              <tr>
                <td>Following:</td>
                <td>{user.following ?? "N/A"}</td>
              </tr>
            </tbody>
          </table>
        </>
      )}
    </main>
  );
};

export default User;
