import Image from 'next/image'
import Container from './components/container'
import HomeBanner from './components/homeBanner'

export default function Home() {
  return (
    // <div className="p-4">
     <h4>
      {/* <Container> */}
        <div>
          <HomeBanner/>
        </div>
      {/* </Container> */}
     </h4>
    // </div>
  )
}
