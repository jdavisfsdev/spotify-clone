import { getProviders, signIn } from 'next-auth/react';

function Login({ providers }) {
  return (
    <div>
      <img
        className="w-52 mb-5"
        src="https://links.papareact.com/9xl"
        alt="spotify logo"
      />
      {Object.values(providers).map((provider) => (
        <div>
          <button>test</button>
        </div>
      ))}
    </div>
  );
}

export default Login;

// Server side rendering, runs on server before the page gets delivered
export async function getServerSideProps() {
  const providers = await getProviders();
  console.log('PROVIDERS', providers);
  return {
    props: {
      providers,
    },
  };
}
