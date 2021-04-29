import Head from 'next/head'
import Image from 'next/image'
import { Hero } from '../components/Hero'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <Hero>
      <div style={{ backgroundColor: "var(--purple)" }}>navbar + top title</div>
      <div style={{ backgroundColor: "var(--turquoise)" }}>bottom title + description</div>
    </Hero>
  )
}
