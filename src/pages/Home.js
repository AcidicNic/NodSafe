import MainWrapper from '../components/MainWrapper';

function Home() {
  return (
    <MainWrapper tabTitle="Home">
      <div className="hero min-h-screen bg-base-100">
        <div className="hero-content text-center flex-col lg:flex-row">
          <div className="max-w-sm rounded-lg shadow-2xl bg-base-100 h-100 w-100" />
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Home</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button className="btn btn-primary">meow</button>
          </div>
        </div>
      </div>
    </MainWrapper>
  );
}

export default Home;