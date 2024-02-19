import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image' 
import styles from '../styles/Home.module.css'
import Registar from './signup'

const Home: NextPage = () => {
  return (
    <div>
      <a href="http://localhost:3000/login">アカウントを持っている:LOGIN</a><br></br>
      <a href="http://localhost:3000/signup">アカウントを作る:SIGN UP</a>
    </div>
  )
}

export default Home;