import Head from 'next/head'
import NProgress from 'nprogress'
import Router from 'next/router'
import NavBar from './NavBar'
import React from 'react'
import Drawer from './Drawer'

Router.onRouteChangeStart = (url) => {
  console.log(`Loading: ${url}`)
  NProgress.start()
}
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

export default ({ title = 'Nextjs-Material-ui Demo' }) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <link rel='stylesheet' type='text/css' href='/static/nprogress.css' />
      <style>{`body { margin: 0; background-color:#fafafa;} `}</style>
    </Head>
    <header>
      <nav>
      <NavBar/>
      <Drawer/>
      </nav>
    </header>
  </div>
)
