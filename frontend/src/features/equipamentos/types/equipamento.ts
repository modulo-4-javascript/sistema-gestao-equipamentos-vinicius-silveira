export type EquipmentStatus = 'Disponível' | 'Em manutenção' | 'Inativo'

export type EquipmentType =
  | 'Informática'
  | 'Imagem'
  | 'Laboratório'
  | 'Rede'
  | 'Impressão'

export type SummaryIconName = 'total' | 'available' | 'maintenance' | 'inactive'

// Tipo principal usado pela tabela de equipamentos.
// Ele descreve o formato mínimo que a tela precisa para renderizar a listagem.
export interface Equipment {
  id: string
  name: string
  type: EquipmentType
  model: string
  status: EquipmentStatus
  location: string
  lastUpdate: string
  serialNumber: string
}

export interface EquipmentSummary {
  id: string
  title: string
  value: number
  icon: SummaryIconName
  lineColor: string
  iconBackground: string
}

// AULA 06 OU 07:
// Quando criarmos a tela de detalhes, podemos descomentar e evoluir estes tipos.
//
// export interface EquipmentDetails extends Equipment {
//   responsible: string
//   createdAt: string
//   notes: string
// }
//
// export interface EquipmentHistoryItem {
//   id: number
//   date: string
//   title: string
//   description: string
// }
