import { AppLayout } from '../../../../app/layout/AppLayout'
import { Container, Description, Title } from './styles'

export function LocalizacoesPage() {
  return (
    <AppLayout currentPage="Localizações">
      <Container>
        <Title>Localizações</Title>
        <Description>
          Esta página simples existe para demonstrar rotas e reaproveitamento do layout.
        </Description>
      </Container>
    </AppLayout>
  )
}
