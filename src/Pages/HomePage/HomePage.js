import "./HomePage.css"
import image  from "../../images/cartimage.png"
function Home() {
    return (
      <div>
          <div className="App">
          <header><b>WorldWide Frames</b> - <i>See A Better World</i></header>
          <h2><i>Items on Sale</i></h2>
          <h3>Deals of the Day</h3>
          <button>frame set 1</button>
          <button>frame set 2</button>
          <button>frame set 3</button>
          <h3>Sunglasses</h3>
          <button>frame set 4</button>
          <button>frame set 5</button>
        </div>
        <div className="Topright">
          <div className="cart-button">
         <img src={image} alt = ""
         width="55"
         height = "50" />
         </div>
        </div>
      </div>
      
    );
}

export default Home;