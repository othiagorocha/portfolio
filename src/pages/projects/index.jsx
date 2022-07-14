import { useEffect, useState } from 'react'
import { Container, Content, Ul, Li, TitleProject, Url, Created_at, Description } from './style'
import Link from 'next/link'

export default function Projects() {
  const [itemsApi, setItemsApi] = useState([])

  useEffect(() => {
    let abortController = new AbortController();

    function getGitHubAPI() {
      fetch('https://api.github.com/users/othiagorocha/repos')
        .then(async res => {
          if (!res.ok) {
            throw new Error(res.status)
          }
          var data = await res.json()
          setItemsApi(data)
        })
        .catch(e => console.log(e))
    }

    getGitHubAPI()

    return () => abortController.abort();
  }, [])

  return (
    <Container>
      <Content>
        <Ul>
          {itemsApi.map(item => (
            <Li key={item.id}>
              <TitleProject>{item.name.toUpperCase()}</TitleProject>
              <Description>{item.description}</Description>
                <Url href={item.svn_url}>{item.svn_url}</Url>
              <Created_at>Data de Criação: {Intl.DateTimeFormat('pt-BR')
                .format(new Date(item.created_at))}
              </Created_at>
            </Li>
          ))}
        </Ul>
      </Content>
    </Container>
  )
}