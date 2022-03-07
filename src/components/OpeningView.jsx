import React from 'react'
import { ParallaxBanner } from 'react-scroll-parallax'

////////////////////////////////////////////////////
//  OPENING VIEW
////////////////////////////////////////////////////

const OpeningView = () => {
    return (<div  >
        <ParallaxBanner style={{height: '100vh'}}
            layers={[
                { image: 'https://i.ibb.co/LxsnpKT/Makati-night-sky-2022-1.png', speed: -20 },
                {
                    speed: -15,
                    children: (
                        <div className="">
                            <h1 className="">Hello World!</h1>
                        </div>
                    ),
                },
            ]}
            className="aspect-[2/1]"
        >
            <div className="">
                <h1 className="">Hello World!</h1>
            </div>
        </ParallaxBanner>
    </div>)
}

export default OpeningView