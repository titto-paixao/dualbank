import React, {useState} from 'react';
import { FiChevronDown, FiEye, FiEyeOff, FiSearch } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import Logo from '../../assets/Logos.svg'
import Chat from '../../assets/icons/ChatText.svg'
import Bell from '../../assets/icons/Bell.svg'
import Calendar from '../../assets/icons/Calendar.svg'

import { Container, Group, GroupRow, Search, Text, EyeOff, User, GroupIcon } from './styles';

const Header: React.FC = () => {
  const [viewBalance, setViewBalance] = useState(false)
  return (
    <Container>
      <Group>
        <img src={Logo} className="logo" alt="DualBank" />
        
        <GroupRow style={{marginRight:15}}  >
          <Group style={{justifyContent:"space-between"}}>
            <Text size={18} color="#172765" weight="400" >Conta Corrente</Text>
            <FiChevronDown color="#172765" size={16} />
          </Group>
          <Group>
            <Text size={12} color="#622EE5" weight="400" style={{marginRight:15}} >Ag.00005-1</Text>
            <Text size={12} color="#622EE5" weight="400" >C.C.0000000020-1</Text>
          </Group>
        </GroupRow>
        
        <GroupRow>
          <Group style={{justifyContent:"space-between"}} >
            <Text size={12} color="#172765" weight="400" >Saldo</Text>
            <Link to="#"onClick={() => setViewBalance(!viewBalance)} >
              {viewBalance ?
                <FiEye color="#172765" size={16} />
                :
                <FiEyeOff color="#172765" size={16} />
              }
            </Link>
          </Group>
          {viewBalance ?
            <EyeOff />
          :
            <Text size={16} color="#69D531" weight="600" >R$40.000,00</Text>
          }
        </GroupRow>
      </Group>

      <Group>
        <Search>
          <input placeholder="Pesquisar" />
          <FiSearch color="#172765" size={16} />
        </Search>

        <GroupIcon>
          <img src={Chat} alt="Menssagens" />
          <img src={Calendar} alt="Calendário" />
          <img src={Bell} alt="Notificações" />
        </GroupIcon>

        <User style={{borderRadius:100}} />
      </Group>

    </Container>
  );
};

export default Header;
