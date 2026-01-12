import { FaFacebookF, FaInstagram } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { SiGmail } from 'react-icons/si'

export default function SocialLinks() {
  return (
    <div className="flex gap-2 text-lg my-2">
      <p className="shadow-sm shadow-black/50 dark:shadow-white/20 cursor-pointer hover:scale-105 text-foreground/80 rounded-full size-8 grid place-items-center"><FaFacebookF /></p>
      <p className="shadow-sm shadow-black/50 dark:shadow-white/20 cursor-pointer hover:scale-105 text-foreground/80 rounded-full size-8 grid place-items-center"><FaInstagram /></p>
      <p className="shadow-sm shadow-black/50 dark:shadow-white/20 cursor-pointer hover:scale-105 text-foreground/80 rounded-full size-8 grid place-items-center"><FaXTwitter /></p>
      <p className="shadow-sm shadow-black/50 dark:shadow-white/20 cursor-pointer hover:scale-105 text-foreground/80 rounded-full size-8 grid place-items-center"><SiGmail /></p>
    </div>
  )
}
