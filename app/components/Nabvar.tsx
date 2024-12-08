import Image from "next/image"
import Link from "next/link"

export default function Navbar(){
    return(
        <>
            <div className="w-full h-[44px] bg-[#7E33E0]">
                <div className="upperNav flex items-center justify-between h-[100%] w-[90%] max-w-[1400px] mx-auto text-white font-medium">
                <div className="flex gap-36 items-center">
                    <div className="flex items-center gap-3">
                        <Image width={20} height={20} src="./envelope.svg" alt="envelope"></Image>
                        <p>mhhasanul@gmail.com</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <Image width={20} height={20} src="./phone-call.svg" alt="call"></Image>
                        <p>(12345)67890</p>
                    </div>
                </div>
                <div className="flex items-center gap-8">
                    <div className="flex items-center gap-1">
                        <p>English</p>
                        <Image className="" src="icon-down.svg" width={15} height={15} alt="icon-down"></Image>
                    </div>
                    <div className="flex items-center gap-1">
                        <p>USD</p>
                        <Image className="" src="icon-down.svg" width={15} height={15} alt="icon-down"></Image>
                    </div>
                    <div className="flex items-center gap-1">
                        <Link className="flex items-center gap-1" href={'/login'}>
                        <p>Login</p>
                        <Image src="user.svg" width={20} height={20} alt="icon-down"></Image>
                        </Link>
                    </div>
                    <div className="flex items-center gap-1">
                        <p>Whitelist</p>
                        <Image src="heart.svg" width={20} height={20} alt="icon-down"></Image>
                    </div>
                    <div className="flex items-center gap-1">
                        <Image src="cart-24-regular.svg" width={25} height={25} alt="icon-down"></Image>
                    </div>
                </div>
                </div>
            </div>


            <div className="w-full h-[80px] ">
                <div className="flex items-center justify-between h-[100%] w-[90%] max-w-[1400px] mx-auto text-white font-medium">
                    <div className="navHead text-black text-4xl">
                        <h1>Hekto</h1>
                    </div>
                    <div className="flex text-black items-center gap-8">
                        <div className="flex gap-1">
                        <Link className="flex gap-1" href={'/'}>Home
                        <Image className="" src="icon-down-black.svg" width={10} height={10} alt="icon-down"></Image>
                        </Link>
                        </div>
                        <div><Link href={''}>Pages</Link></div>
                        <div><Link href={''}>Products</Link></div>
                        <div><Link href={''}>Blog</Link></div>
                        <div><Link href={''}>Shop</Link></div>
                        <div><Link href={''}>Contact</Link></div>
                    </div>
                    <div className="flex text-black">
                        <div className="border-t-2 border-l-2 border-b-2 border-gray-300 ">
                            <input className="h-8" type="text" title="search" name="search" id="" />
                        </div>
                        <div className="bg-[#FB2E86] w-9 h-9 flex items-center justify-center">
                            <Image src="search.svg" width={20} height={20} alt="searchIcon"></Image>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}