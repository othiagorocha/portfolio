export function getServerSideProps() { return { props: {} }; }

import { FaArrowRight } from 'react-icons/fa'
import { Container, Content, Infos, Name, Function, Intro, LinkProjects, Logo, Img } from '../../styles/indexStyle'
import Link from 'next/link'

export default function Home() {
  return (
   <Container>
     <Content>
      <Infos>
        <Name>Olá, sou Thiago Rocha</Name>
        <Function>Front End Developer</Function>
        <Intro>Graduado em Desenvolvimento WEB, 
          tenho conhecimento em (HTML, CSS, Javascript, ReactJS, NextJS, entre outros),
          busco atender de forma estratégica as demandas do mercado de trabalho.
        </Intro>
        <Link href="projects">
          <LinkProjects>PROJETOS <FaArrowRight /></LinkProjects>
        </Link>
      </Infos>
      <Logo>
        <Img src="/images/avatar.png" alt="logo" />
      </Logo>
     </Content>
   </Container>
  )
}
