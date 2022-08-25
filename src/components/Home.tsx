type HomeProps = {
  isLoggin: boolean
}

const Home = ({ isLoggin }: HomeProps) => {
  return (
    <>
      <h1>home page {String(isLoggin)}</h1>
      <h2>welcome to home page</h2>
    </>
  )
}

export default Home
