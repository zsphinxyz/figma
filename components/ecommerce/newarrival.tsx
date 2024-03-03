import Product from "./product"
import Scroll from "./scroll"
import img1 from '@/assets/ecommerce/product (1).png'
import img2 from '@/assets/ecommerce/product (2).png'
import img3 from '@/assets/ecommerce/product (3).png'
import img4 from '@/assets/ecommerce/product (4).png'

import img5 from '@/assets/ecommerce/product (5).png'
import img6 from '@/assets/ecommerce/product (6).png'
import img7 from '@/assets/ecommerce/product (7).png'
import img8 from '@/assets/ecommerce/product (8).png'

function New() {
  return (
    <div className="">
        <Scroll header="New Arrivals">
            <Product img={img1} desc="T-Shirt with Tape Details" review={4.5} price="120"  />
            <Product img={img2} desc="Skinny Fit Jeans" review={3.5} price="240" discountValue={{price:'260', percent:'-20'}} />
            <Product img={img3} desc="Checkered Shirt" review={4.5} price="180"  />
            <Product img={img4} desc="Sleeve Striped T-Shirt" review={3.5} price="120" discountValue={{price: '160', percent: '-30'}} />
        </Scroll>

        <div className="w-full h-[1px] bg-esec/30 my-5 md:my-20 mx-auto max-w-monitor"/>

        <Scroll header="Top Sellings">
            <Product img={img5} desc="Vertical Striped Shirt" review={5} price="212" discountValue={{price: '232', percent: '-20'}}  />
            <Product img={img6} desc="Courage Graphic T-shirt" review={4.0} price="145" />
            <Product img={img7} desc="Fit Bermuda Shorts" review={3.0} price="80"  />
            <Product img={img8} desc="Faded Skinny Jeans" review={4.5} price="210" />
        </Scroll>

    </div>
  )
}

export default New