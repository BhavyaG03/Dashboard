import Content from '@/components/Content'
import Nav from '@/components/Nav'
import Sidebar from '@/components/Sidebar'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='flex'>
    <Sidebar></Sidebar>
    <div className='flex w-full flex-col'>
    <Nav></Nav>
    <Content></Content>
    </div>
    </div>
  )
}
