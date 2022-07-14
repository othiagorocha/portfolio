import { Ancora, CloseSideBar, Container, Content, ContentTitle, Menu, NavLinks, Subtitle, Title } from './style'
import { FaBars, FaTimes } from 'react-icons/fa'
import { useState } from 'react'
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Header() {
  const [sidebar, setSidebar] = useState(false);
  const { asPath } = useRouter()

  const showSideBar = () => setSidebar(!sidebar)

  function activeLink(path) {
    return asPath === `/${path}` ? 'active' : ''
  }

  return (
    <Container>
      <Content>
        <ContentTitle>
          <Link href={"/"}>
            <Title>
              Thiago Rocha
            </Title>
          </Link>
          <Subtitle>
            Portfólio Pessoal
          </Subtitle>

        </ContentTitle>
        <Menu>
          <FaBars onClick={showSideBar} />
        </Menu>
        <NavLinks sidebar={sidebar}>
          <CloseSideBar onClick={showSideBar}><FaTimes /></CloseSideBar>
          <Link href='/'>
            <Ancora className={activeLink('')} onClick={showSideBar}>Home</Ancora>
          </Link>
          <Link href='/projects'>
            <Ancora className={activeLink('projects')} onClick={showSideBar}>Projetos</Ancora>
          </Link>
          <Link href='/contact'>
            <Ancora className={activeLink('contact')} onClick={showSideBar}>Contato</Ancora>
          </Link>
        </NavLinks>
      </Content>
    </Container>
  )
}
