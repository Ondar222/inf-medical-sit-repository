import Link from 'next/link'
import { AiFillPhone, AiOutlineMail } from 'react-icons/ai'
import Image from 'next/image'
import myImageLoader from '../../loader'

const Footer = (props) =>
    <footer className="sticky top-[100vh] dark:bg-gray-200 p-4 font-light">
        <section className="container flex flex-col mx-auto gap-4 text-white dark:text-black">
            <div className="flex flex-wrap justify-between">
                <div className="flex flex-col gap-4">
                    <Link href="/"><a>ИНФЕКЦИОННАЯ БОЛЬНИЦА</a></Link>
                    <Link href="/"><a>Официальный интернет-ресурс</a></Link>

                    <div className="flex flex-col gap-3">
                        <div className="flex flex-row items-center gap-3">
                            <AiFillPhone />+7 -394-22-6-38-48, +7(923)590-13-23
                        </div>
                        <div className="flex flex-row items-center gap-3">
                            <AiOutlineMail /> infeksiatuva@mail.ru
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <Link className="cursor-pointer" href="https://vk.com/ohotnadzor17">
                            <a><Image loader={myImageLoader} alt='some' src="/vk_logo.png" width={30} height={30} className="cursor-pointer dark:grayscale" /></a>
                            
                        </Link>
                        <Link className="cursor-pointer" href="https://t.me/polpredstvotuva">
                            <a><Image loader={myImageLoader} alt='some' src="/tg_logo.png" width={30} height={30} className="cursor-pointer dark:grayscale" /></a>
                        </Link>
                    </div>
                </div>
            </div>
            <hr />
            <div className="">
                <p>Все материалы сайта доступны по лицензии: PERMISSIVE</p>
            </div>
        </section>
    </footer>

export default Footer