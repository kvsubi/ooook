"use client"
import { useEffect, useRef, useState } from "react"
import styles from "../../styles/navbar.module.css"
import Image from "next/image"
import Link from "next/link"
import Loti from "../../../../public/coco.png"
import { signIn, useSession } from "next-auth/react"
import { signOut } from "next-auth/react"

const Navbar = () => {
    const { data: session } = useSession()
    const [isDropdownOpen, setDropdownOpen] = useState(false)
    const dropdownRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setDropdownOpen(!isDropdownOpen) 
            }
        }

        document.addEventListener("click", handleClickOutside)

        return () => {
            document.removeEventListener("click", handleClickOutside)
        }
    }, [isDropdownOpen]) 

    const handleDropdownClick = () => {
        if (session) {
            setDropdownOpen(!isDropdownOpen)
        }
    }

    // @ts-ignore

    return (
        <>
            <div className={styles["navbar"]}>
                <div className={styles["navbar-left"]}>
                    <Link href="/">
                        <Image src={Loti} width="50" height="50" alt="logo" />
                        <span>coco</span>
                    </Link>
                    </div>
                <div className={styles["navbar-center"]}>
                    <div className={styles["navbar-link"]}>
                        <Link href="https://discord.gg/kaga">Discord</Link>
                    </div>
                    <div className={styles["navbar-link"]}>
                        <Link href="https://embeds.hellcat.lol">Embeds</Link>
                    </div>
                    <Link href="https://discord.com/oauth2/authorize?client_id=1227709062003687516&permissions=8&scope=bot%20applications.commands" className={styles["navbar-premium"]}>
                        <span>Invite Me</span>
                        <Image src="/stars.png" width="20" height="20" alt="stars" />
                    </Link>
                </div>
            </div>
            {isDropdownOpen && (
                <div className={styles["dropdown"]} ref={dropdownRef}>
                    <div className={styles["dropdown-content-inner"]}>
                        <Link
                            href="https://discord.gg/invite/injoy"
                            className={styles["dropdown-link"]}
                            onClick={() => setDropdownOpen(!isDropdownOpen)}>
                            Support
                        </Link>
                        <Link
                            href="/commands"
                            className={styles["dropdown-link"]}
                            onClick={() => setDropdownOpen(!isDropdownOpen)}>
                            Commands
                        </Link>
                        <Link
                            href="https://docs.hellcat.lol/"
                            className={styles["dropdown-link"]}
                            onClick={() => setDropdownOpen(!isDropdownOpen)}>
                            Docs
                        </Link>
                    </div>
                    <hr />
                    <div className={styles["dropdown-content-inner"]}>
                        <div className={styles["dropdown-logout"]} onClick={() => signOut()}>
                            <span>Logout</span>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Navbar
