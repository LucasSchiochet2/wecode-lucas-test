import '../styles/Footer.scss'
import {LogoFooterIcon, InstagramIcon, FacebookIcon, TwitterIcon, PinterestIcon, TiktokIcon } from '../utils/icons'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__logo-wrapper">
        <LogoFooterIcon />
      </div>

      <div className="footer__socials">
        <InstagramIcon />
        <FacebookIcon />
        <TwitterIcon />
        <PinterestIcon />
        <TiktokIcon />
      </div>

      <div className="footer__section">
        <h3>Sobre a empresa</h3>
        <a href="#">Quem somos</a>
        <a href="#">Fale conosco</a>
      </div>

      <div className="footer__section">
        <h3>Políticas</h3>
        <a href="#">Política de Privacidade</a>
        <a href="#">Termos de Uso</a>
        <a href="#">Política de Entrega</a>
        <a href="#">Política de Cupom e Descontos</a>
      </div>
    </footer>
  )
}
