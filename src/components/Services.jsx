import React from 'react'

// company logos
import logo1 from '../assets/Logo1.png'
import logo2 from '../assets/Logo2.png'
import logo3 from '../assets/Logo3.png'
import logo4 from '../assets/Logo4.png'
import logo5 from '../assets/Logo5.png'
import logo6 from '../assets/Logo6.png'

const Services = () => {
    const services = [
        {id:1, title:"Membership Organisations", description:'Our membership management software provides full automation of membership renewals and payments', image:logo2},
        {id:2, title:"National Associations", description:'Our membership management software provides full automation of membership renewals and payments', image:logo1},
        {id:3, title:"Clubs and Groups", description:'Our membership management software provides full automation of membership renewals and payments', image:logo6}
    ]
  return (
    <div className="md:px-14 px-4 py-16 max-w-screen-2xl mx-auto" id='service'>
        <div className="text-center my-8">
            <h2 className="text-4xl text-neutralDGrey font-semibold mb-2">Our Clients</h2>
            <p className="text-neutralGrey">We have been working with some Fortune 700+ clients</p>

            {/* Company Logos */}

            <div className="my-12 flex flex-wrap justify-between items-center gap-8">
                <img src={logo1} alt="" />
                <img src={logo2} alt="" />
                <img src={logo3} alt="" />
                <img src={logo4} alt="" />
                <img src={logo5} alt="" />
                <img src={logo6} alt="" />
            </div>

            {/* service cards */}
            <div className="mt-20 md:w-1/2 mx-auto text-center">
                <h2 className="text-4xl text-neutralDGrey font-semibold mb-2">Manage your entire community in a single system</h2>
                <p className="text-neutralGrey">Who is Vigilux Corp suitable for?</p>
            </div>

            {/* cards */}
            <div className="mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12">
                {services.map(service => <div key={service.id} className='card-primary'>
                    <div className="">
                        <div className="bg-[#cbf9ce] h-14 w-18 mx-auto rounded-tl-3xl rounded-br-3xl flex items-center justify-center h-full">
                            <img className='-ml-5' src={service.image} alt="" />
                        </div>
                        <h4 className='text-2xl font-bold text-neutralDGrey mb-2 px-2'>{service.title}</h4>
                        <p className="text-sm text-neutralGrey">{service.description}</p>
                    </div>
                </div>)}
            </div>
        </div>
    </div>
  )
}

export default Services