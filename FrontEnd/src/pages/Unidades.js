import Banner from '../components/Banner.js'
import BannerUnidade from '../img/banner_unidade.png'
import LocUnidades from '../components/LocUnidades.js'
import Container from 'react-bootstrap/esm/Container.js'
import ImgPadocaCentro from '../img/PadocaCentro.png'
import ImgPadocaIgleses from '../img/PadocaIngleses.png'
import ImgPadocaTapera from '../img/PadocaTapera.png'


function Unidades() {
  return (
    <div>
      <Banner Banner={BannerUnidade}/>
      <Container>
        <LocUnidades NomeLoc="Centro" ImgUnidade={ImgPadocaCentro} MapaLink={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d743.329213571073!2d-48.54911006244101!3d-27.596953449821978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9527383b451a48ed%3A0x28a6c317dfd2eabb!2sPadaria%20Foguinho!5e0!3m2!1spt-BR!2sbr!4v1751807512892!5m2!1spt-BR!2sbr"} />
        <LocUnidades NomeLoc="Ingleses" ImgUnidade={ImgPadocaIgleses} MapaLink={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28324.71530376236!2d-48.42106451432484!3d-27.450903901417554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f131!3m3!1m2!1s0x95276a0030bb652f%3A0xf13aa1edede22dc5!2sPadaria%20e%20Lanchonete%20Princesa%20da%20Ilha!5e0!3m2!1spt-BR!2sbr!4v1751808788157!5m2!1spt-BR!2sbr"}/>
        <LocUnidades NomeLoc="Tapera" ImgUnidade={ImgPadocaTapera} MapaLink={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d226598.62896983576!2d-48.56527269592996!3d-27.450462646427315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f131!3m3!1m2!1s0x95273086a2bfca9b%3A0x23fd683394b77068!2sPadaria%20Casa%20de%20P%C3%A3es!5e0!3m2!1spt-BR!2sbr!4v1751808921329!5m2!1spt-BR!2sbr"} />

      </Container>

    </div>
  )
}

export default Unidades
