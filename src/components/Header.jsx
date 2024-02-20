import '../App.css'
import logo from '../assests/images/logo.png'
import {HiHome ,HiMagnifyingGlass,HiStar,HiPlayCircle,HiTv } 
from 'react-icons/hi2'
import { HiPlus,HiDotsVertical} from "react-icons/hi"
import HeaderItem from './HeaderItem'
const Header = () => {
  const menu=[
    {
        name:'HOME',
        icon:HiHome
    },
    {
        name:'SEARCH',
        icon:HiMagnifyingGlass
    },
    {
        name:'WATCH LIST',
        icon:HiPlus
    },
    {
        name:'ORIGINALS',
        icon:HiStar
    },
    {
        name:'MOVIES',
        icon:HiPlayCircle
    },
    {
        name:'SERIES',
        icon:HiTv
    }
]
  return (
    <div className='flex items-center gap-8  justify-between '>
    <div className='flex gap-8 items-center'>
        <img src={logo} className='w-[80px] 
        md:w-[115px] object-cover' />
      <div className='flex gap-8'>
        {menu.map((item)=>(
            <HeaderItem key={item} name={item.name} Icon={item.icon}  />
        ))}
        </div>
        </div>
        <img src='https://img.freepik.com/premium-vector/young-smiling-man-avatar-man-with-brown-beard-mustache-hair-wearing-yellow-sweater-sweatshirt-3d-vector-people-character-illustration-cartoon-minimal-style_365941-860.jpg?size=626&ext=jpg&ga=GA1.1.1378913033.1708407314&semt=ais' alt=""
         className='w-[40px] rounded-full' />

    </div>
  )
}

export default Header
