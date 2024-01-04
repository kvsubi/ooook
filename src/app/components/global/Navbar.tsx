"use client"
import { useEffect, useRef, useState } from "react"
import styles from "../../styles/navbar.module.css"
import Image from "next/image"
import Link from "next/link"
import Loti from "../../../../public/loti-pfp.png"
import { signIn, useSession } from "next-auth/react"
import { signOut } from "next-auth/react"

const Navbar = () => {
    const { data: session } = useSession()
    const [isDropdownOpen, setDropdownOpen] = useState(false)
    const dropdownRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setDropdownOpen(!isDropdownOpen) // Toggle the dropdown state
            }
        }

        document.addEventListener("click", handleClickOutside)

        return () => {
            document.removeEventListener("click", handleClickOutside)
        }
    }, [isDropdownOpen]) // Add isDropdownOpen as a dependency

    const handleDropdownClick = () => {
        if (session) {
            setDropdownOpen(!isDropdownOpen)
        }
    }

    // @ts-ignore
    const username = session?.discordUser.global_name

    return (
        <>
            <div className={styles["navbar"]}>
                <div className={styles["navbar-left"]}>
                    <Link href="/">
                        <Image src={Loti} width="50" height="50" alt="logo" />
                        <span>Loti</span>
                    </Link>
                </div>
                <div className={styles["navbar-center"]}>
                    <div className={styles["navbar-link"]}>
                        <Link href="/commands">Commands</Link>
                    </div>
                    <div className={styles["navbar-link"]}>
                        <Link href="/resources">Resources</Link>
                    </div>
                    <Link href="/purchase" className={styles["navbar-premium"]}>
                        <span>Purchase</span>
                        <Image src="/stars.png" width="20" height="20" alt="stars" />
                    </Link>
                </div>
                <div className={styles["navbar-right"]} onClick={handleDropdownClick}>
                    {session ? (
                        <div className={styles["navbar-user"]}>
                            <Image
                                src={session?.user?.image ?? ""}
                                width="50"
                                height="50"
                                alt="profile picture"
                            />
                            <span className={styles["username"]}>{username ?? "Not Found"}</span>
                        </div>
                    ) : (
                        <div className={styles["navbar-login"]} onClick={() => signIn("discord")}>
                            Login
                        </div>
                    )}
                </div>
            </div>
            {isDropdownOpen && (
                <div className={styles["dropdown"]} ref={dropdownRef}>
                    <div className={styles["dropdown-content-inner"]}>
                        <Link
                            href="/dashboard"
                            className={styles["dropdown-link"]}
                            onClick={() => setDropdownOpen(!isDropdownOpen)}>
                            Dashboard
                        </Link>
                        <Link
                            href="https://discord.gg/invite/loti"
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
                            href="https://docs.loti.dev/"
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
