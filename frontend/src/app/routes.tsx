import { Navigate, Route, Routes } from 'react-router-dom'
import { EquipamentosPage } from '../features/equipamentos/pages/EquipamentosPage'
import { LocalizacoesPage } from '../features/localizacoes/pages/LocalizacoesPage'

export function AppRoutes() {
  return (
    <Routes>
      {/* A rota raiz manda o usuário para a primeira tela que existe na aplicação. */}
      <Route path="/" element={<Navigate to="/equipamentos" replace />} />

      {/* Esta rota permite acessar a tela principal da feature */}
      <Route path="/equipamentos" element={<EquipamentosPage />} />

      {/* Esta rota mostra que o layout pode ser compartilhado por mais de uma página */}
      <Route path="/localizacoes" element={<LocalizacoesPage />} />

      {/* Qualquer rota desconhecida volta para equipamentos para evitar tela em branco. */}
      <Route path="*" element={<Navigate to="/equipamentos" replace />} />
    </Routes>
  )
}
