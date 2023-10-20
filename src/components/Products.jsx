import React from 'react'
// company logos
import logo1 from '../assets/Logo1.png'
import logo2 from '../assets/Logo2.png'
import logo3 from '../assets/Logo3.png'
import logo4 from '../assets/Logo4.png'
import logo5 from '../assets/Logo5.png'
import logo6 from '../assets/Logo6.png'
import pana from '../assets/pana.png'
import image from '../assets/image.png'


const Products = () => {
  return (
    <div className="" id='product'>
        <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8">
            <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
                <div className="">
                    <img src={pana} alt="" />
                </div>
                <div className="md:w-3/5 mx-auto">
                    <h2 className="text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5">How to design your footer like we did</h2>
                    <p className="md:w-3/4 text-sm text-neutralGrey mb-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus impedit aliquam tempora quibusdam, a, voluptates modi omnis, ex in dicta corrupti accusantium aspernatur alias maxime eos eaque nostrum. Sint ipsa commodi eveniet quam cupiditate mollitia fugit, impedit illo eligendi, accusantium incidunt ex, iure quod sit. Sapiente, animi. Veritatis, beatae numquam mollitia repellat sequi voluptatem quae laboriosam praesentium eos eligendi ducimus veniam nobis facilis, quia asperiores reiciendis est ipsam quis a qui dignissimos atque illum tempore. 
                    Tenetur molestiae inventore provident nobis, minus esse voluptas ex unde repellat non eum blanditiis praesentium veniam architecto. Illo architecto aut consequuntur dolor deleniti numquam cupiditate.</p>

                    <button className="btn-primary">Learn More</button>
                </div>
            </div>
        </div>
        {/* company stats */}
        <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="md:w-1/3">
                    <img src={image} alt="" />
                </div>

                {/* stats */}
                <div className="md:w-2/3 mx-auto">
                    <div className="">
                        <p className='md:w-4/5 text-sm text-neutralGrey mb-8 leading-8'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus at magni nobis totam distinctio libero velit, repellat nihil nesciunt perspiciatis
                             saepe consequuntur rem officia molestias dolor esse vitae, sunt commodi maiores molestiae eligendi. Porro vero voluptate, exercitationem eos in quas sint aperiam repellat earum similique dolore voluptates id, consectetur tempora accusamus pariatur quis amet quam dolor labore quo fugiat mollitia doloribus veritatis. Odit vero quas voluptate similique, itaque sed? Natus officiis quia dicta consequatur! Deserunt impedit quod quaerat enim at quibusdam ab natus dignissimos labore, voluptates nesciunt voluptatibus optio cupiditate, 
                            aspernatur modi dolorum, vitae ea unde maxime! Fugiat, voluptate pariatur. Eveniet dolorum nam ad omnis nulla. Exercitationem hic delectus qui at doloremque.</p>
                            <h5 className="text-brandPrimary text-xl font-semibold mb-2">Rollins Shadrack</h5>
                            <p className="text-base text-neutralGrey mb-8">Vigilux Corporation</p>

                            <div className="">
                                <div className="flex items-center gap-8 flex-wrap">
                                    <img src={logo1} alt="" />
                                    <img src={logo2} alt="" />
                                    <img src={logo3} alt="" />
                                    <img src={logo4} alt="" />
                                    <img src={logo5} alt="" />
                                    <img src={logo6} alt="" />
                                    <div className="flex items-center gap-8">
                                        <a href="/" className='font-bold text-brandPrimary hover:text-neutral-700'>Meet all customers</a>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Products