import React from 'react'
import about from '../assets/about.png'
import icon1 from '../assets/Icon1.png'
import icon2 from '../assets/Icon2.png'
import icon3 from '../assets/Icon3.png'
import icon4 from '../assets/Icon4.png'

const About = () => {
  return (
    <div className="" id='about'>
        <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8">
            <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
                <div className="">
                    <img src={about} alt="" />
                </div>
                <div className="md:w-3/5 mx-auto">
                    <h2 className="text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5">The unseen of spending three years at Pixelgrade</h2>
                    <p className="md:w-3/4 text-sm text-neutralGrey mb-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus impedit aliquam tempora quibusdam, a, voluptates modi omnis, ex in dicta corrupti accusantium aspernatur alias maxime eos eaque nostrum. Sint ipsa commodi eveniet quam cupiditate mollitia fugit, impedit illo eligendi, accusantium incidunt ex, iure quod sit. Sapiente, animi. Veritatis, beatae numquam mollitia repellat sequi voluptatem quae laboriosam praesentium eos eligendi ducimus veniam nobis facilis, quia asperiores reiciendis est ipsam quis a qui dignissimos atque illum tempore. 
                    Tenetur molestiae inventore provident nobis, minus esse voluptas ex unde repellat non eum blanditiis praesentium veniam architecto. Illo architecto aut consequuntur dolor deleniti numquam cupiditate.</p>

                    <button className="btn-primary">Learn More</button>
                </div>
            </div>
        </div>
        {/* company stats */}
        <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="md:w-1/2">
                <h2 className="text-4xl text-neutralDGrey font-semibold mb-4 md:w-2/3">Helping a local <span className="text-brandPrimary">business reinvent itself</span></h2>
                    <p className="md:w-3/4 text-sm text-neutralGrey mb-8">We reached here with our hard work and dedication </p>
                </div>

                {/* stats */}
                <div className="md:w-1/2 mx-auto flex sm:flex-row flex-col sm:items-center justify-around gap-12">
                    <div className="space-y-8">
                        <div className="flex items-center gap-4">
                            <img src={icon4} alt="" />
                            <div className="">
                                <h4 className="text-2xl text-neutralDGrey font-semibold">1,345,423,765</h4>
                                <p className="">Members</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <img src={icon2} alt="" />
                            <div className="">
                                <h4 className="text-2xl text-neutralDGrey font-semibold">4,242,323</h4>
                                <p className="">Event Bookings</p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-8">
                        <div className="flex items-center gap-4">
                            <img src={icon3} alt="" />
                            <div className="">
                                <h4 className="text-2xl text-neutralDGrey font-semibold">325,423,765</h4>
                                <p className="">Payments</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <img src={icon1} alt="" />
                            <div className="">
                                <h4 className="text-2xl text-neutralDGrey font-semibold">1,345,423,765</h4>
                                <p className="">Membe</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About