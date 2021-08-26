import 'react-slideshow-image/dist/styles.css'
import { Fade } from 'react-slideshow-image';
import styled from 'styled-components';

const HomeDis = styled.div` 
  .slide-container {
    margin-top: 30px;
  }
  .image-container img {
    duration: 1000;
  }

`



function HomeDisplay() {

    const fadeImages = [
        'https://static.wixstatic.com/media/449eb6_b4e42a0e54ea4a3dacdbae0b18ef70bb.jpg/v1/fill/w_473,h_631,al_c,q_80,usm_0.66_1.00_0.01/449eb6_b4e42a0e54ea4a3dacdbae0b18ef70bb.webp',
        'https://www.elessehairandbeauty.co.uk/wp-content/uploads/2021/08/elesse.jpg',
        'https://s3-media0.fl.yelpcdn.com/bphoto/8HcL9TUnO4Zo4_lpTfXq-A/l.jpg',
        'https://res.cloudinary.com/devacurl/image/upload/f_auto,q_auto,h_600,c_scale,d_true,dpr_auto/DevaCurl/all-about-curls_3_carousel_1126x1500',
        'https://res.cloudinary.com/devacurl/image/upload/f_auto,q_auto,h_600,c_scale,d_true,dpr_auto/DevaCurl/all-about-curls_3_carousel_1500x1122',
        'https://static.wixstatic.com/media/a7c72a_9239422998f54716bf82a16b037cf576~mv2_d_3336_3945_s_4_2.jpg/v1/fill/w_672,h_740,al_c,q_85,usm_0.66_1.00_0.01/a7c72a_9239422998f54716bf82a16b037cf576~mv2_d_3336_3945_s_4_2.webp',
        'https://static.wixstatic.com/media/a7c72a_9ca500042be646d494c8954ed1734e4a~mv2.jpg/v1/fit/w_410,h_280,q_90/a7c72a_9ca500042be646d494c8954ed1734e4a~mv2.jpg',
        'https://i.pinimg.com/originals/8d/00/9e/8d009e99e497755c42ae24b8861d07a1.jpg'

    ]

    return (
      <HomeDis> 
        <div className="slide-container">
        <Fade>
          <div className="each-fade">
            <div className="image-container">
              <img src={fadeImages[0]} width="450" height="500" duration="1000" />
            </div>
            {/* <h2>First Slide</h2> */}
          </div>
          <div className="each-fade">
            <div className="image-container">
              <img src={fadeImages[1]} width="450" height="500" duration="1000"/>
            </div>
            {/* <h2>Second Slide</h2> */}
          </div>
          <div className="each-fade">
            <div className="image-container">
              <img src={fadeImages[2]} width="450" height="500" />
            </div>
          
          </div>
          <div className="each-fade">
            <div className="image-container">
              <img src={fadeImages[3]} width="450" height="500" duration="1000"/>
            </div>
        
          </div>
          {/* <div className="each-fade">
            <div className="image-container">
              <img src={fadeImages[4]} width="450" height="500" duration="1000"/>
            </div>
            {/* <h2>Third Slide</h2> */}
          {/* </div> */} 
          <div className="each-fade">
            <div className="image-container">
              <img src={fadeImages[5]} width="450" height="500" duration="1000"/>
            </div>
            {/* <h2>Third Slide</h2> */}
          </div>
          <div className="each-fade">
            <div className="image-container">
              <img src={fadeImages[6]} width="450" height="500" duration="1000"/>
            </div>
            {/* <h2>Third Slide</h2> */}
          </div>
          <div className="each-fade">
            <div className="image-container">
              <img src={fadeImages[7]} width="450" height="500" duration="1000"/>
            </div>
            {/* <h2>Third Slide</h2> */}
          </div>
          {/* <div className="each-fade">
            <div className="image-container">
              <img src={fadeImages[8]} width="450" height="500" duration="1000"/>
            </div>
            {/* <h2>Third Slide</h2> */}
          {/* </div> */} 
        </Fade>
      </div>
    </HomeDis>
    )
}

export default HomeDisplay;