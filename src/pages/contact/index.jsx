import { Container, Content } from './style'
import { FaLinkedin, FaInstagram, FaEnvelope, FaGithub } from 'react-icons/fa'
import ItemContact from '../../../components/ItemContact'

export default function Contact() {
  return (
    <Container>
      <Content>
        <ItemContact 
          IconFa={FaLinkedin} 
          LinkContact="https://www.linkedin.com/in/thiago-rocha-b3071b221/" 
        />
        <ItemContact 
          IconFa={FaGithub} 
          LinkContact="https://github.com/othiagorocha" 
        />
        <ItemContact 
          IconFa={FaInstagram} 
          LinkContact="https://www.instagram.com/othiago.rocha/" 
        />
        <ItemContact 
          IconFa={FaEnvelope} 
          Email="thiagosrocha98@gmail.com" 
        />
      </Content>
    </Container>
  )
}
