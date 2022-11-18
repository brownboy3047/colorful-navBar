import { useProvider } from "../hooks/useProvider";
import { useFetch } from "../hooks/useFetch";

//* styles
import "./Home.css";

function Home() {
  const url = "https://randomuser.me/api/?results=9";
  const { data, isPending, error } = useFetch(url);

  const { mode } = useProvider();

  //* i use custom hook useFetch() above instead of using the useEffect() directly
  // useEffect(() => {
  //   fetch("https://randomuser.me/api/?results=9")
  //     .then((res) => res.json())
  //     .then((jsonData) => setData(jsonData));
  // }, []);

  // console.log(results);

  return (
    <div className="home">
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading"> Loading... </p>}

      <div className="users">
        {data &&
          data.results.map((user, index) => (
            <div key={index} className={`users-info ${mode}`}>
              <img src={user.picture.medium} alt="avatar" />
              <h3>Title: {user.name.title}</h3>
              <p>First Name: {user.name.first}</p>
              <p>Last Nmae: {user.name.last}</p>
              <p>Age: {user.dob.age}</p>
              <p>Email: {user.email}</p>
              <p>Phone: {user.phone}</p>
              <p>Location: {user.location.city}</p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Home;
