'use client'
import { useState } from "react"
import {motion} from 'framer-motion'

type TFaq = {
  que: string,
  ans: string,
}

const Comp = ({que, ans}: TFaq) => {
  const setBar = {
    open: {
      height: 'auto'
    },
    close: {
      height: '0px'
    }
  }
  const [open, setOpen] = useState(false)
  return(
    <div className="select-none" onClick={() => setOpen(!open)}>
    <div className="flex items-start justify-between">
      <h1 className="text-PrimColor text-sm md:text-xl lg:text-2xl mb-3 lg:mb-5 cursor-default">{que}</h1>
      <p className={`text-PrimColor rotate-90 ${open ?'scale-x-90' : '-scale-x-90'} transition text-sm md:text-lg ml-5 cursor-default`}>◀</p>
    </div> 
 
      <motion.div 
        className="text-PrimColor overflow-hidden [border-bottom:_solid_1px_#555]"
        variants={setBar}
        initial='close'
        animate = {open ? 'open' : 'close'}
        transition={{duration: 0.25, ease: 'easeIn' }}
      >
        <p className="text-sm md:text-lg lg:text-xl text-SecColor my-3">{ans}</p>
      </motion.div>
    </div>
  )
}

const Faq = () => {
  return (
    <section className='px-5 max-w-[1200px] mx-auto'>
      <div className="">
        <h1 className="text-2xl text-PrimColor md:text-3xl lg:text-5xl mb-10 md:mb-16">Frequently asked questions</h1>
      </div>
      <div className="space-y-5 md:space-y-10">
        <Comp
          que="How do I Create an account with RAFT?"
          ans="Visit the RAFT website.
          Look for the 'Sign Up' or 'Create Account' button and click on it.
          Fill in your personal details like name, email, and password in the provided fields.
          Follow the on-screen instructions to complete the account creation process.
          Once done, you'll receive a confirmation email. Click the link in the email to verify your account.
          Congratulations! Your account is now created, and you can log in using your credentials."
        />
        <Comp
          que="How does RAFT ensure the security of my financial data?"
          ans="Encryption: We use encryption protocols to protect data transmission over the internet. This ensures that any information shared between your device and our servers remains secure.
          Secure Servers: Our servers are hosted in secure environments with stringent access controls to prevent unauthorized access.
          Regular Audits and Monitoring: We conduct regular security audits and employ continuous monitoring to detect and address any potential vulnerabilities or threats.
          Strict Access Controls: Access to user data is restricted to authorized personnel only, following the principle of least privilege.
          Compliance with Standards: We adhere to industry best practices and comply with relevant data protection laws and regulations to uphold user privacy."
        />
        <Comp
          que="What types of transactions can I perform with RAFT?"
          ans="Money Transfers: You can transfer funds between your accounts or to other users securely within the platform.
          Bill Payments: Pay your bills directly through RAFT, covering utilities, subscriptions, and more.
          Purchases: Use RAFT for online purchases or in participating stores, leveraging our secure payment gateway.
          Investments: Explore investment options such as buying stocks, mutual funds, or other financial products through partnered investment platforms.
          Charitable Donations: Contribute to charitable causes and organizations through RAFT's donation feature."
        />
        <Comp
          que="What benefits does RAFT offer for wealth management?"
          ans="Portfolio Diversification: Access to a variety of investment options such as stocks, bonds, mutual funds, and more helps diversify your portfolio, reducing risk.
          Financial Planning Tools: Utilize robust financial planning tools and resources within RAFT to set and track your financial goals.
          Expert Advice: Access to financial advisors or AI-driven insights within the platform can assist in making informed investment decisions."
        />
      </div>
    </section>
  )
}

export default Faq