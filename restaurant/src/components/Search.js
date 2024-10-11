import React from 'react'
import backgroundImg from '../static/bg.jpg';
function Search() {
    const background = {
        background: `url(${backgroundImg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        padding: "7% 0"
    }
  return (
    <div>
      <section class="food-search text-center" style={background}>
        <div class="container">

            <form method="POST">
                <input type="search" name="search" placeholder="Search for Food.." required />
                <input type="submit" name="submit" value="Search" className="btn btn-primary" />
            </form>

        </div>
    </section>
    </div>
  )
}

export default Search
