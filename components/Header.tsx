import Link from "next/link"
import Image from "next/image"
import { Header as UswdsHeader } from "@trussworks/react-uswds"

import styles from "styles/Header.module.scss"

import { useUser } from "utils/user"
const Header = () => {
  const { user } = useUser()

  return (
    <UswdsHeader basic className={styles.header}>
      <Image src="/logo.svg" alt="Sith Finder" width={189} height={27} />
      <div className={styles.grow} />
      <Link href="/cases" key="cases-header-link">
        <a className={styles.user}>{user}</a>
      </Link>
      <Link href="/login" key="logout-header-link">
        <a className={styles.signout}>Sign out</a>
      </Link>
    </UswdsHeader>
  )
}

export { Header }
