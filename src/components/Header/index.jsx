import Link from "next/link";
import { LuFilm, LuPlus } from "react-icons/lu";
import Button from "../ui/button";

export default function Header () {
    return (
        <header className="sticky top-0 z-40 w-full  bg-[#1d2839]/95 backdrop-blur-sm 
        border-b">
            <div className=" mx-[100px] flex h-16 items-center justify-between">
                <div className="flex items-center gap-2">
                    <LuFilm className="text-[30px] text-[#6D28D9]"/> 
                    <Link href={"/"} className="text-xl font-bold text-[#F8FAFC]">
                        FLY <span className="text-[#6D26D9]">FLIX</span>
                    </Link>
                </div>
                    <nav className="flex items-center gap-6">
                        <Link href={"/"} className="text-[#f8fafc]/80 hover:text-[#f8fafc] transition-colors">
                            Home
                        </Link>
                        <Link href={"/Filmes"} className="text-[#f8fafc]/80 hover:text-[#f8fafc] transition-colors">
                            Filmes
                        </Link>
                    </nav>
                    <Button>
                        <LuPlus />
                        Add Movies
                    </Button>
            </div>

        </header>
    )
}