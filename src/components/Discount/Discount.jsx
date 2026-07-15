import React from 'react'
import Button from '../Button/Button';
import freshFruits from '../../assets/fresh-fruits.png'

const Discount = () => {
  return (
    <section className="bg-zinc-300 bg-contain bg-no-repeat bg-right" style={{backgroundImage: `url(${freshFruits})`}}>
        <div className="py-10 max-w-[1400px] mx-auto flex">
            <span className="text-9xl text-orange-500 h-fit self-center font-bold transform -rotate-90">20%</span>
            <div className="max-w-[700px]">
                <h3 className="text-7xl text-zinc-800 font-bold">First Order Discount!</h3>
                <p className="text-zinc-600 my-6">Enjoy an exclusive first order discount on our grocery website! Shop fresh essentials and save big on your first purchase. Fast delivery and quality guaranteed.</p>
                <Button content="Get a Discount" />
            </div>
        </div>
    </section>
  )
}

export default Discount
