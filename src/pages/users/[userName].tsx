import { useRouter } from "next/router";
import { useGetUserByUserName } from "../../querys/useGitHubUsers.query";

const User = () => {
  const router = useRouter();

  const { data } = useGetUserByUserName(router.query.userName as string);

  return (
    <main>
      <h1>User {router.query.userName}</h1>
      <p>{JSON.stringify(data, null, 2)}</p>
    </main>
  );
};

export default User;
