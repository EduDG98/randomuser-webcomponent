export const getUser = async () => {
  const response = await fetch("https://randomuser.me/api/");
  const data = await response.json();

  const user = data.results[0];
  const obj = {
    name: ` ${user.name.title} ${user.name.first} ${user.name.last}`,
    email: user.email,
    gender: user.gender,
    picture: user.picture.large,
    city: user.location.city,
    country: user.location.country,
    username: user.login.username
  };
  return obj;
};
