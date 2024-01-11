import HeroBanner from './heroBanner.jsx/HeroBanner'
import Popular from './popular/Popular'
import './style.scss'
import TopRated from './topRated/TopRated'
import Trending from './trending/Trending'

const Home = () => {
    return (
        <div className='homePage'>
            <HeroBanner />
            <Trending />
            <Popular />
            <TopRated />
            <div style={{height:1000}}></div>
        </div>
    )
}

export default Home
