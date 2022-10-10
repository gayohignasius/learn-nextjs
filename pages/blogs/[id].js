import { useRouter } from "next/router";

const UserDetail = () => {
  const router = useRouter();
  const { id } = router.query;

  return <div>Post detail {id}</div>;
};

export default UserDetail;
