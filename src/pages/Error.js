import { Link } from 'react-router-dom';

export const Error = () => {
  return (
    <section>
      <h1>404</h1>
      <p>page not found</p>
      <Link to='/'>Home</Link>
    </section>
  );
};
