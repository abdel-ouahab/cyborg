import './Hero.css'
import {PrimaryButton} from '../../components/index'
const Hero = () => {
  return (
    <div className="hero-main">
        <div className="hero-text">
            <h6 className="hero-subtitle">Welcom To Cyborg</h6>
            <h4 className="hero-title"><em>Browse</em> Our Popular Games Hero</h4>
            <PrimaryButton>Browse Now</PrimaryButton>
        </div>
    </div>
  )
}

export default Hero