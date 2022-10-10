import axios from "axios";

const Users = (props) => {
  return (
    <div>
      <div>
        {props.usersList.map((user) => (
          <div key={user.id}>{user.name}</div>
        ))}
      </div>
    </div>
  );
};

export default Users;

export async function getServerSideProps(context) {
  const usersList = await axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.data)
    .catch((err) => []);

  return {
    props: {
      usersList,
    }, // will be passed to the page component as props
  };
}
