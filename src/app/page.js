import Carousel from "../components/Carousel";
import styles from "../styles/Header.module.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 
import TestimonialCarousel from "../components/Testionomial";
import Footer from "@/components/Footer";

export default function Home({ Component, pageProps }) {
  const slides = [
    { id: 1, title: "Explore the world", image: "assets/banner1.jpg" },
    { id: 2, title: "Are you ready for the adventure", image: "assets/banner2.jpg",},
    { id: 3, title: "DISCOVER WITH US", image: "assets/banner2.jpg",},
    { id: 4, title: "PLAN YOUR SUMMER HOLIDAYS WITH US", image: "assets/banner2.jpg",},
  ];
  const destination = [
    { id: 1, title: "Manali, India", price: '₹26000', image: "https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/11/Top-4-Indian-skiing-destinations-Solang.webp" },
    { id: 2, title: "Goa, India", price: '₹22000', image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/3e/36/95/baga-sea-beach.jpg?w=600&h=400&s=1" },
    { id: 3, title: "Jaipur, India", price: '₹18000', image: "https://media.istockphoto.com/id/635726330/photo/nahargarh-fort.jpg?s=612x612&w=0&k=20&c=z1hztb9BT6YhxT--G_cW8hBmBHWzrFdwbfM0Pc2jATI=" },
    { id: 4, title: "Udaipur, India", price: '₹21000', image: "https://media.istockphoto.com/id/514102692/photo/udaipur-city-palace-in-rajasthan-state-of-india.jpg?s=612x612&w=0&k=20&c=bYRDPOuf6nFgghl6VAnCn__22SFyu_atC_fiSCzVNtY=" },
    { id: 5, title: "Shimla, India", price: '₹24000', image: "https://media.istockphoto.com/id/1223612773/photo/the-kalka-to-shimla-railway-is-a-2-ft-6-in-narrow-gauge-railway-in-north-india-which.jpg?s=612x612&w=0&k=20&c=vYxFBTbvcLcivcYjtFB-S_P7ETUwgIj0mAk84l9uC1g=" },
    { id: 6, title: "Leh, India", price: '₹30000', image: "https://media.istockphoto.com/id/1218830644/photo/beautiful-lake.jpg?s=612x612&w=0&k=20&c=r5or5KmtrZE5P93cDPG2FzxWQxhZA0qeTInoXJ7qXxA=" },
    { id: 7, title: "Paris, France", price: '€1500', image: "https://t4.ftcdn.net/jpg/02/96/15/35/360_F_296153501_B34baBHDkFXbl5RmzxpiOumF4LHGCvAE.jpg" },
    { id: 8, title: "Tokyo, Japan", price: '¥120000', image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_8IrcN88iYUpY3QI6NvS-sHok22K80gX3KA&s" },
    { id: 9, title: "New York, USA", price: '$1300', image: "https://media.istockphoto.com/id/1454217037/photo/statue-of-liberty-and-new-york-city-skyline-with-manhattan-financial-district-world-trade.jpg?s=612x612&w=0&k=20&c=6V54_qVlDfo59GLEdY2W8DOjLbbHTJ9y4AnJ58a3cis=" },
    // { id: 10, title: "London, UK", price: '£1200', image: "https://via.placeholder.com/500x300?text=London" },
    // { id: 11, title: "Sydney, Australia", price: 'AUD 1800', image: "https://via.placeholder.com/500x300?text=Sydney" },
    // { id: 12, title: "Dubai, UAE", price: 'AED 2500', image: "https://via.placeholder.com/500x300?text=Dubai" },
  ];
  const userSays = [
    {
        id:1,
        name: "Sophia L.",
        text: `"I had the most amazing time on my vacation to Bali! The trip was well-organized, and everything from flights to accommodations was taken care of."`,
        rating: "⭐⭐⭐⭐⭐",
        address:"Gwalior, India",
        image: "https://media.istockphoto.com/id/642738474/photo/beautiful-day-on-mountain.jpg?s=170667a&w=0&k=20&c=6pQe1Oe6QxG06HZiKI2GFRp7_TzP7OMsZch-Ll84DlM="
      },
      {
          id:2,
        name: "Akash Kr.",
        text: "Booking my family vacation to Paris was such a breeze. The itinerary was perfect for all ages, and we had a mix of culture, food, and fun activities.",
        rating: "⭐⭐⭐⭐⭐",
        address:"Bihar, India",
        image: "https://www.shutterstock.com/image-photo/young-boy-sit-front-tent-600nw-2476035215.jpg"
      },
      {
          id:3,
        name: "Mr Patsy.",
        text: "I’ve always wanted to go on a wildlife safari, and this company made my dream come true. The guides were knowledgeable and the accommodation was top-notch.",
        rating: "⭐⭐⭐⭐⭐",
        address:"Noida, India",
        image: "https://media.istockphoto.com/id/1418805995/photo/happy-hiker-taking-selfie-on-the-top-of-the-mountain-young-man-having-fun-on-weekend-activity.jpg?s=612x612&w=0&k=20&c=CkRqugFmMcg_QszQsdVNaCAj-Kpxt5V1v393qZxIfb0="
      },
  ]

  return (
    <>
      <div>
        <Carousel slides={slides} className={'homeClass'} />
      </div>
      <div className='container'>
        <div className="destination">
        <h1>Trending destinations</h1>
        <p>Experience the joy of travel as like-minded wanderers unite at these popular destinations.</p>
        <div className="destination_box">
          {
             destination.map((item)=>{
              return(
                <div className="destination-card" key={item.id}>
                 <img src={item.image} alt="Destination 12" className="destination-image" />
                <div className="destination-info">
                  <div className="destination-name">{item.title}</div>
                  <div className="destination-price">{item.price}</div>
                  <a href="ticket12.html" className="destination-ticket">Buy Ticket</a>
                </div>
              </div>
              )
             }) 
          }
        </div>
        </div>
        </div>
        <div className="parallex_card">
        <div className='container'>
          <h1>Special Offer for destinations</h1>
          <p>Experience the joy of travel as like-minded wanderers unite at these popular destinations.</p>
            <div className="card-container">
              <div className="interactive-card">
                <div className="card-image-wrapper">
                  <img 
                    src="https://t3.ftcdn.net/jpg/03/34/77/78/360_F_334777839_Y7Y5P8FFY5WFo7sTwjeT0vxDbTGxhIo5.jpg" 
                    alt="Current" 
                    className="current-image" 
                  />
                  <img 
                    src="https://static.vecteezy.com/system/resources/thumbnails/029/090/039/small/generative-ai-maldives-travel-destination-water-hotel-resort-bungalows-a-place-for-dreams-photo.jpg" 
                    alt="Hovered" 
                    className="hovered-image" 
                  />
                </div>
                <div className="card-content">
                  <h3>Maldives</h3>
                  <p>It's not possible to ever forget the life moments where, in the morning ocean breeze, you can walk along the beach and pick colorful shells and corals"</p>
                </div>
              </div>
              <div className="interactive-card">
                <div className="card-image-wrapper">
                  <img 
                    src="https://static.toiimg.com/photo/msid-91918900,width-96,height-65.cms" 
                    alt="Current" 
                    className="current-image" 
                  />
                  <img 
                    src="https://t4.ftcdn.net/jpg/06/90/19/09/360_F_690190949_Zm2I8RwH3gc0qbVcqiBCpQBbhPY0OpYd.jpg" 
                    alt="Hovered" 
                    className="hovered-image" 
                  />
                </div>
                <div className="card-content">
                  <h3>jammu and kashmir</h3>
                  <p>Jammu and Kashmir is known as the "Heaven on Earth". It's known for its natural beauty.</p>
                </div>
              </div>
            </div>
            <div className="card-container">
            </div>
            </div>
        </div>
        <div className="testinomonial">
        <div className='container'>
          <TestimonialCarousel userSays={userSays} className={'userSaysClass'}/>
        </div>
        </div>
    </>
  );
}
