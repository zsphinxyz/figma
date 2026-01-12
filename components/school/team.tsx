import Header from '@/components/school/header'

import team1 from '@/assets/school/team1.jpg'
import team2 from '@/assets/school/team2.jpg'
import team3 from '@/assets/school/team3.jpg'

import TeamCard from './teamCard'



export default function Team() {
  return (
    <div className='bg-foreground/10 px-1 sm:px-3 py-10 mt-[1px]'>
      <Header text1='Meet Our' text2='Team' />
      <div className="w-full flex flex-col gap-3 md:px-10 md:flex-row md:justify-around">
        <TeamCard img={team1} position='Headmaster' name='Mr. White' />
        <TeamCard img={team2} position='Headmistress' name='Profs McGonagall' />
        <TeamCard img={team3} position='Teacher' name='Mr. Hawking' />
      </div>
    </div>
  )
}
