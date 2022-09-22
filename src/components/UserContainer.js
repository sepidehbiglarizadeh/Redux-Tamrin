import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../redux/user/userActions";

const UserContainer = () => {
  const userData = useSelector((state) => state.user);
  const { loading, users, error } = userData;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser());
  }, []);

  const renderUsers = () => {
    if (loading) return <p>Loading...</p>;
    if (!loading && error) return <p>{error}</p>;
    if (!loading && !error && userData && users.length)
      return (
        <div>
          <h2>user list :</h2>
          {users.map((user) => <p key={user.id}>{user.name}</p>)}
        </div>
      );
  };

  return <div>{renderUsers()}</div>;
};

export default UserContainer;
