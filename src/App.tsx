import React, { useEffect, Suspense, lazy, useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { ResetCSS } from '@saltswap/uikit'
import BigNumber from 'bignumber.js'
import { useFetchPublicData } from 'state/hooks'
import DocumentTitle from 'DocumentTitle'
import GlobalStyle from './style/Global'
import Menu from './components/Menu'
import PageLoader from './components/PageLoader'
import 'components/me.css'

// Route-based code splitting
// Only pool is included in the main bundle because of it's the most visited page'
const Home = lazy(() => import('./views/Home'))
const Farms = lazy(() => import('./views/Farms'))
// const Lottery = lazy(() => import('./views/Lottery'))
// const Pools = lazy(() => import('./views/Pools'))
// const Ifos = lazy(() => import('./views/Ifos'))
const NotFound = lazy(() => import('./views/NotFound'))
// const Nft = lazy(() => import('./views/Nft'))

// This config is required for number formating
BigNumber.config({
  EXPONENTIAL_AT: 1000,
  DECIMAL_PLACES: 80,
})

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}))

const App: React.FC = () => {
  const classes = useStyles()
  const { account, connect } = useWallet()
  useEffect(() => {
    if (!account && window.localStorage.getItem('accountStatus')) {
      connect('injected')
    }
  }, [account, connect])
  const [first, setFirst] = useState(
    window.localStorage.getItem('first') === null || window.localStorage.getItem('first') === 'null',
  )
  useEffect(() => {
    if (window.localStorage.getItem('first') !== 'false') {
      Playit()
      setTimeout(() => {
        setFirst(false)
      }, 5000)
    }
    window.localStorage.setItem('first', 'false')
  }, [])

  const Playit = () => {
    const audio = new Audio('/images/trex.mp3')
    audio.play()
  }

  useFetchPublicData()

  return first ? (
    <div role="button" tabIndex={0} onClick={Playit} onKeyPress={Playit}>
      <img width="100%" src="/images/trex.gif" alt="T-rex" />
    </div>
  ) : (
    <div className={classes.root}>
      <Router>
        <DocumentTitle title="JurassicFarm" />
        {/* <CssBaseline /> */}
        <ResetCSS />
        <GlobalStyle />
        <Menu />
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Suspense fallback={<PageLoader />}>
            <Switch>
              <Route path="/" exact>
                <Home />
              </Route>
              <Route path="/farms">
                <Farms />
              </Route>
              <Route path="/pools">
                <Farms tokenMode />
              </Route>
              {/* <Route path="/pools"> */}
              {/*  <Pools /> */}
              {/* </Route> */}
              {/* <Route path="/lottery"> */}
              {/*  <Lottery /> */}
              {/* </Route> */}
              {/* <Route path="/ifo"> */}
              {/*  <Ifos /> */}
              {/* </Route> */}
              {/* <Route path="/nft"> */}
              {/*  <Nft /> */}
              {/* </Route> */}
              {/* Redirect */}
              {/* <Route path="/staking"> */}
              {/*  <Redirect to="/pools" /> */}
              {/* </Route> */}
              {/* <Route path="/syrup"> */}
              {/*  <Redirect to="/pools" /> */}
              {/* </Route> */}
              {/* 404 */}
              <Route component={NotFound} />
            </Switch>
          </Suspense>
        </main>
      </Router>
    </div>
  )
}

export default React.memo(App)
