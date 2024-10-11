import React from 'react'
import Pizza from '../static/pizza.jpg'
import burger from '../static/burger.jpg'
import memo from '../static/momo.jpg'
function Category() {
  return (
    <div>
      <section class="categories">
        <div class="container">
            <h2 class="text-center">Explore Foods</h2>

            <a href="#">
            <div class="box-3 float-container">
                <img src={Pizza} alt="Pizza" class="img-responsive img-curve" />

                <h3 class="float-text text-white">Pizza</h3>
            </div>
            </a>

            <a href="#">
            <div class="box-3 float-container">
                <img src={burger} alt="Burger" class="img-responsive img-curve" />

                <h3 class="float-text text-white">Burger</h3>
            </div>
            </a>

            <a href="#">
            <div class="box-3 float-container">
                <img src={memo} alt="Momo" class="img-responsive img-curve" />

                <h3 class="float-text text-white">Momo</h3>
            </div>
            </a>

            <div class="clearfix"></div>
        </div>
    </section>
    </div>
  )
}

export default Category
