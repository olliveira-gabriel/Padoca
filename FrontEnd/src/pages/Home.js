
import Banner from '../components/Banner.js'
import Favoristos from '../components/Favoristos.js'
import CarrosselAvaliacao from '../components/CarrosselAvaliacao.js'
import BannerHolme from "../img/banner home.png"

function Home() {
  return (
    <div>
        <Banner Banner={BannerHolme} />
        <Favoristos/>
        <div className='txt-avalicao'>
          <h1>
              <i className="bi bi-star-fill star-icon"></i>
              Avaliações de clientes
              <i className="bi bi-star-fill star-icon"></i>
          </h1>
        </div>
        <CarrosselAvaliacao/>
    </div>
  )
}

export default Home
