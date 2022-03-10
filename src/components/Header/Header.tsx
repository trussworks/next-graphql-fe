import Link from "next/link"
import Image from "next/image"
import { Header as UswdsHeader } from "@trussworks/react-uswds"

import styles from "./Header.module.scss"

import { useUser } from "hooks/user"

const Header = () => {
  const { user } = useUser()

  return (
    <UswdsHeader basic className={styles.header}>
      <Image src="/temp_logo.png" alt="Next Finder" width={189} height={27} />
      <div className={styles.grow} />
      {user && user.length ? (
        <Link href="/incidents" key="incidents-header-link">
          <a className={styles.user}>{user}</a>
        </Link>
      ) : null}
      <Link href="/login" key="logout-header-link">
        <a>{user && user.length ? "Sign out" : "Sign in"}</a>
      </Link>
    </UswdsHeader>
  )
}

export { Header }
