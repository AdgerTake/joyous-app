import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Home.scss'

const Home = () => {
  const [ initEnd, setInitEnd ] = useState(false) // 控制开场动画结束
  const [ showEnd, setShowEnd ] = useState(false) // 控制开场动画界面
  useEffect(() => {
    let timer1, timer2
    timer1 = setTimeout(() => {
      // setInitEnd(true)
      // timer2 = setTimeout(() => {
      //   setShowEnd(true)
      // }, 10)
    }, 1000)
    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      timer1 = ''
      timer2 = ''
    }
  }, [initEnd, showEnd])
  return (
    <div className='home'>
      {
        !showEnd?
        <section
        >
          <header
            className={`home-begin-header-init ${initEnd?'home-begin-header-open':''}`}
          >
          </header>
          <main
            className={
              `home-begin-main`
            }
          >
            <div
              className={
                'home-begin-main-wrap'
              }
            >
            <span className='s1'></span>
            <span className='s2'></span>
            <span className='s3'></span>
            <span className='s4'></span>
            <span className='s5'></span>
            <span className='s6'></span>
            </div>
          </main>
          <footer
            className={`home-begin-footer-init ${initEnd?'home-begin-footer-open':''}`}
          >
          </footer>
        </section>
        :
        <section
        >
          <Link to='/404'>Go</Link>
        </section>
      }
    </div>
  )
}

export default Home
