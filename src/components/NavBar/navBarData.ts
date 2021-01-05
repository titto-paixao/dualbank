import HomeLine from '../../assets/icons/HouseLine.svg';
import ChartLineUp from '../../assets/icons/ChartLineUp.svg';
import Question from '../../assets/icons/Question.svg';
import Settings from '../../assets/icons/Settings.svg';
import Charge from '../../assets/icons/Charge.svg';
import CreditCard from '../../assets/icons/CreditCard.svg';
import Pix from '../../assets/icons/Pix.png';
import Transfer from '../../assets/icons/Transfer.svg';
import Payment from '../../assets/icons/Money.svg';
import SaldoActive from '../../assets/icons/ChartPieSlice.svg';
import Saldo from '../../assets/icons/ChartPieSlicePurple.svg';

export const NavBarData = [
  {
    title:'Home',
    path:"/home",
    icon:HomeLine,
    icon_active:HomeLine
  }, {
    title:'Balance',
    path:"/",
    icon:Saldo,
    icon_active:SaldoActive
  }, {
    title:'Investment',
    path:"/investment",
    icon:ChartLineUp,
    icon_active:ChartLineUp
  }, {
    title:'Payment',
    path:"/payment",
    icon:Payment,
    icon_active:Payment
  }, {
    title:'Transfer',
    path:"/transfer",
    icon:Transfer,
    icon_active:Transfer
  }, {
    title:'Pix',
    path:"/pix",
    icon:Pix,
    icon_active:Pix
  }, {
    title:'Cards',
    path:"/cards",
    icon:CreditCard,
    icon_active:CreditCard
  }, {
    title:'Charge',
    path:"/charge",
    icon:Charge,
    icon_active:Charge
  }, {
    title:'Settings',
    path:"/settings",
    icon:Settings,
    icon_active:Settings
  }, {
    title:'Help',
    path:"/help",
    icon:Question,
    icon_active:Question
  }
]