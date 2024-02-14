import { Footer } from "flowbite-react"
import { BsGithub } from 'react-icons/bs'
import { SiFiverr } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const FooterComp = () => {
    return (
        <Footer container className="p-10 shadow-lg border-t-8 border-teal-400">
            <div className="w-full max-w-[70%] mx-auto">
                {/* top */}
                <div className="flex items-center justify-between">
                    <div className="">
                        <Footer.Brand className='rounded-[7px] bg-gradient-to-l from-[#03858a]' href='https://github.com/prs-dev'>
                            <h1 className='text-2xl font-semibold text-gray-900 p-[6px]'>Prs<span className='text-slate-100'>.dev</span></h1>
                        </Footer.Brand>
                    </div>
                    <div className="flex gap-10">
                        <div className="about flex flex-col gap-3">
                            <h2 className="text-md font-semibold">About Me</h2>
                            <p className="text-sm"><Link to='/about'>Prs blog</Link></p>
                        </div>
                        <div className="follow flex flex-col gap-4">
                            <h2 className="text-md font-semibold">Reach Me</h2>
                            <p className="text-sm"><a href="https://github.com/prs-dev">Github</a></p>
                            <p className="text-sm"><a href="https://linkedin.com/in/pratyush-srivastav">Linkedin</a></p>
                        </div>
                    </div>
                </div>
                <Footer.Divider />
                <div className="flex items-center justify-between rounded-md p-2">
                    <Footer.Copyright by='prs.dev' year={new Date().getFullYear()} />
                    <div className="flex gap-4 items-center">
                        <Footer.Icon href="https://github.com/prs-dev" icon={BsGithub} />
                        <a href="https://www.fiverr.com/prs_dev"><SiFiverr className="text-4xl"/></a>
                        {/* <Footer.Icon href="https://www.fiverr.com/prs_dev" icon={SiFiverr} /> */}
                        <Footer.Icon href="https://linkedin.com/in/pratyush-srivastav" icon={FaLinkedin} />
                    </div>
                </div>
                {/* bottom */}
            </div>
        </Footer>
    )
}

export default FooterComp