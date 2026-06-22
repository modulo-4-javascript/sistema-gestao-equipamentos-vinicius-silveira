import { Navigate, Route, Routes } from 'react-router-dom'
import { EquipamentosPage } from '../features/equipamentos/pages/EquipamentosPage'
// AULA 06 OU 07:
// Quando criarmos a tela de detalhes, vamos descomentar o import abaixo.
//
// import { EquipamentoDetalhesPage } from '../features/equipamentos/pages/EquipamentoDetalhesPage'

export function AppRoutes() {
  return (
    <Routes>
      {/* A rota raiz manda o usuário para a primeira tela que existe na aplicação. */}
      <Route path="/" element={<Navigate to="/equipamentos" replace />} />

      {/* Esta rota permite acessar a tela principal da feature */}
      <Route path="/equipamentos" element={<EquipamentosPage />} />

      {/* AULA 06 OU 07:
          Futura rota de detalhes. Vamos criar a página e descomentar esta linha.

          <Route path="/equipamentos/:id" element={<EquipamentoDetalhesPage />} />
      */}

      {/* Qualquer rota desconhecida volta para equipamentos para evitar tela em branco. */}
      <Route path="*" element={<Navigate to="/equipamentos" replace />} />
    </Routes>
  )
}
