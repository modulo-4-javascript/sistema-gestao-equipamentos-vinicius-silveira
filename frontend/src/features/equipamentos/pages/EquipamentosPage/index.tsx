import { message } from 'antd'
import { useState } from 'react'
import { AppLayout } from '../../../../app/layout/AppLayout'
import { EquipmentFilters } from '../../components/EquipmentFilters'
import { EquipmentTable } from '../../components/EquipmentTable'
import { PageHeader } from '../../components/PageHeader'
import { SummaryCards } from '../../components/SummaryCards'
import {
  equipamentosMock,
  resumoEquipamentosMock,
  statusOptions,
  tipoOptions,
} from '../../mocks/equipamentos.mock'
import type { EquipmentStatus, EquipmentType } from '../../types/equipamento'
import { Container } from './styles'

export function EquipamentosPage() {
  const [messageApi, contextHolder] = message.useMessage()

  // Estados dos filtros. Cada campo da área de filtros controla um estado aqui.
  const [searchText, setSearchText] = useState('')
  const [selectedStatus, setSelectedStatus] = useState<EquipmentStatus>()
  const [selectedType, setSelectedType] = useState<EquipmentType>()

  // AULA 06:
  // Base do modal/formulário. Está comentada para a Aula 05 focar na listagem.
  //
  // const [isFormOpen, setIsFormOpen] = useState(false)
  // const [selectedEquipmentId, setSelectedEquipmentId] = useState<string>()

  function handleCreateEquipment() {
    // TODO: vamos completar essa parte durante a aula.
    //
    // Quando chegar a hora do formulário, vamos trocar a mensagem por:
    // setSelectedEquipmentId(undefined)
    // setIsFormOpen(true)
    messageApi.info('O formulário de novo equipamento será criado junto com a turma.')
  }

  function handleClearFilters() {
    // Limpa todos os filtros e volta a tabela para o estado inicial.
    setSearchText('')
    setSelectedStatus(undefined)
    setSelectedType(undefined)
  }

  // AULA 05 - parte prática:
  // Primeiro deixamos a lista sem filtro para a tela aparecer.
  const equipamentosVisiveis = equipamentosMock

  // Depois, descomentamos este bloco para aplicar busca, status e tipo.
  //
  // const equipamentosVisiveis = equipamentosMock.filter((equipamento) => {
  //   const busca = searchText.toLowerCase()
  //
  //   const correspondeBusca =
  //     equipamento.name.toLowerCase().includes(busca) ||
  //     equipamento.model.toLowerCase().includes(busca) ||
  //     equipamento.id.toLowerCase().includes(busca)
  //
  //   const correspondeStatus = selectedStatus
  //     ? equipamento.status === selectedStatus
  //     : true
  //
  //   const correspondeTipo = selectedType ? equipamento.type === selectedType : true
  //
  //   return correspondeBusca && correspondeStatus && correspondeTipo
  // })

  // AULA 06:
  // Quando a tabela tiver ações reais, podemos criar funções assim:
  //
  // function handleEditEquipment(equipmentId: string) {
  //   setSelectedEquipmentId(equipmentId)
  //   setIsFormOpen(true)
  // }

  return (
    <AppLayout currentPage="Equipamentos">
      {contextHolder}
      <Container>
        {/* Cabeçalho da feature: título, descrição e botão principal. */}
        <PageHeader onCreateEquipment={handleCreateEquipment} />

        {/* Cards de resumo: usam dados mockados para simular indicadores do sistema. */}
        <SummaryCards summaries={resumoEquipamentosMock} />

        {/* Filtros controlados: os valores ficam nesta página e são enviados por props. */}
        <EquipmentFilters
          searchText={searchText}
          selectedStatus={selectedStatus}
          selectedType={selectedType}
          statusOptions={statusOptions}
          typeOptions={tipoOptions}
          onSearchChange={setSearchText}
          onStatusChange={setSelectedStatus}
          onTypeChange={setSelectedType}
          onClear={handleClearFilters}
        />

        {/* Tabela principal: recebe a lista que, depois, será filtrada. */}
        <EquipmentTable equipments={equipamentosVisiveis} />

        {/* AULA 06:
            Futuro modal de cadastro/edição. Deixamos comentado para criar ao vivo.

            <EquipmentFormModal
              open={isFormOpen}
              equipmentId={selectedEquipmentId}
              onClose={() => setIsFormOpen(false)}
            />
        */}
      </Container>
    </AppLayout>
  )
}
