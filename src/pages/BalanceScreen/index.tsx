import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiEye, FiEyeOff, FiChevronDown } from 'react-icons/fi';

import PlusCircle from '../../assets/icons/PlusCircle.svg'
import Tag from '../../assets/icons/Tag.svg'
import Share from '../../assets/icons/Share.svg'
import Download from '../../assets/icons/FileArrowDown.svg'
import Printer from '../../assets/icons/Printer.svg'
import Refresh from '../../assets/icons/Refresh.svg'
import Shield from '../../assets/icons/ShieldCheck.svg'

import { Container, Header, Group, GroupRow, Text, EyeOff, Circle, Content, Item, DateBalance, Balance } from './styles';

const BalanceScreen: React.FC = () => {
  const [viewFood, setViewFood] = useState(false)
  const [viewRent, setViewRent] = useState(false)
  const [viewMain, setViewMain] = useState(false)
  const [viewBalance, setViewBalance] = useState(false)
  return (
    <Container>
      <Header>

        <Circle colors={["#FFF", "#E5E4E2"]}>
          <img src={Tag} alt="Tag" />
        </Circle>
        
        <Circle colors={["#FFF", "#E5E4E2"]}>
          <img src={PlusCircle} alt="Plus" />
        </Circle>
        
        <Group style={{marginLeft:20, marginRight:20}} >
          <Circle colors={["#622EE5", "#172765"]}>
            <Text size={14} color="#FFF" weight="800" >P</Text>
          </Circle>
          <GroupRow>
            <Group style={{ justifyContent: "space-between", alignItems:"center" }} >
              <Text size={14} color="#172765" weight="400" >Principal</Text>
              <Link to="#" onClick={() => setViewMain(!viewMain)} >
                {viewMain ?
                  <FiEye color="#172765" size={12} style={{marginLeft:10}} />
                  :
                  <FiEyeOff color="#172765" size={12} style={{marginLeft:10}} />
                }
              </Link>
            </Group>
            {viewMain ?
              <EyeOff />
              :
              <Text size={12} color="#69D531" weight="400" >R$40.000,00</Text>
            }
          </GroupRow>
        </Group>

        <Group style={{marginRight:20}} >
          <Circle colors={["#778899", "#172765"]}>
            <Text size={14} color="#FFF" weight="800" >A</Text>
          </Circle>
          <GroupRow>
            <Group style={{ justifyContent: "space-between", alignItems:"center" }} >
              <Text size={14} color="#172765" weight="400" >Aluguel</Text>
              <Link to="#" onClick={() => setViewRent(!viewRent)} >
                {viewRent ?
                  <FiEye color="#172765" size={12} style={{marginLeft:10}} />
                  :
                  <FiEyeOff color="#172765" size={12} style={{marginLeft:10}} />
                }
              </Link>
            </Group>
            {viewRent ?
              <EyeOff />
              :
              <Text size={12} color="#69D531" weight="400" >R$40.000,00</Text>
            }
          </GroupRow>
        </Group>

        <Group>
          <Circle colors={["#FF354E", "#172765"]}>
            <Text size={14} color="#FFF" weight="800" >A</Text>
          </Circle>
          <GroupRow>
            <Group style={{ justifyContent: "space-between", alignItems:"center" }} >
              <Text size={14} color="#172765" weight="400" >Alimentação</Text>
              <Link to="#" onClick={() => setViewFood(!viewFood)} >
                {viewFood ?
                  <FiEye color="#172765" size={12} style={{marginLeft:10}} />
                  :
                  <FiEyeOff color="#172765" size={12} style={{marginLeft:10}} />
                }
              </Link>
            </Group>
            {viewFood ?
              <EyeOff />
              :
              <Text size={12} color="#69D531" weight="400" >R$40.000,00</Text>
            }
          </GroupRow>
        </Group>

      </Header>

      <Content>
        <Group>
          <Text size={28} color="#172765" weight="600" >Saldo Bancário</Text>

          <Item>
            <img src={Printer} alt="Imprimir" />
          </Item>
          <Item>
            <img src={Download} alt="Download" />
          </Item>
          <Item>
            <img src={Share} alt="Compartilhar" />
          </Item>
        </Group>

        <DateBalance style={{marginTop:45}} >
          <GroupRow>
            <Text size={12} color="#622EE5" weight="400" >Data do Saldo</Text>
            <Text size={16} color="#172765" weight="400" >05/01/2021</Text>
          </GroupRow>
          <FiChevronDown color="#172765" size={24} />
        </DateBalance>

        <Group style={{margin:8}} >
          <Text size={14} color="#172765" weight="400" >Saldo atualizado às 16:48</Text>
          <img src={Refresh} alt="Refresh" />
        </Group>

        <Balance style={{marginTop:17}} >
          <Group>
            <img src={Shield} alt="Shield" style={{marginRight:8}} />
            <GroupRow>
              <Text size={12} color="#778899" weight="400" >Saldo disponível</Text>
              <Text size={16} color="#69D531" weight="400" >R$40.000,00</Text>
            </GroupRow>
          </Group>
          <Link to="#" onClick={() => setViewBalance(!viewBalance)} >
            {viewBalance ?
              <FiEye color="#172765" size={24} style={{marginLeft:10}} />
            :
              <FiEyeOff color="#172765" size={24} style={{marginLeft:10}} />
            }
          </Link>
        </Balance>

      </Content>


    </Container>
  );
};

export default BalanceScreen;
