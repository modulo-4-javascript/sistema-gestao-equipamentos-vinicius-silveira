import PinDropOutlined from '@mui/icons-material/PinDropOutlined'
import PrecisionManufacturingOutlined from '@mui/icons-material/PrecisionManufacturingOutlined'
import { useLocation, useNavigate } from 'react-router-dom'
import { Logo, MenuList, NavSider, Subtitle, Title } from './styles'

export function Sidebar() {
  const location = useLocation()
  const navigate = useNavigate()
  const selectedKey = location.pathname.startsWith('/localizacoes')
    ? '/localizacoes'
    : '/equipamentos'

  return (
    <NavSider width={280}>
      <Logo>
        <Title>DenkenHub</Title>
        <Subtitle>Gestão de recursos</Subtitle>
      </Logo>

      <MenuList
        mode="inline"
        // Destaca o item ativo de acordo com a URL atual.
        selectedKeys={[selectedKey]}
        onClick={({ key }) => navigate(key)}
        items={[
          {
            key: '/equipamentos',
            icon: <PrecisionManufacturingOutlined fontSize="small" />,
            label: 'Equipamentos',
          },
          {
            key: '/localizacoes',
            icon: <PinDropOutlined fontSize="small" />,
            label: 'Localizações',
          },
        ]}
      />
    </NavSider>
  )
}
