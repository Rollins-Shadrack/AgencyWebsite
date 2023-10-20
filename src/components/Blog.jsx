import React from 'react'
import image1 from '../assets/image1.png'
import image2 from '../assets/image2.png'
import image3 from '../assets/image3.png'

const Blog = () => {
    const blogs = [
        {id:1, title:"Creating Streamlined Safeguarding Processes with OneRun", image:image3},
        {id:2, title:"What are your safeguarding responsibilities and how can you manage them?", image:image2},
        {id:3, title:"Revamping the membership model with triathlon Australia", image:image1}
    ]
  return (
    <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-12" id='blog'>
        <div className="text-center md:w-1/2 mx-auto">
            <h2 className="text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5">Caring is the new marketing</h2>
            <p className="text-sm text-neutralGrey mb-8 md:w-3/4 mx-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus impedit aliquam tempora quibusdam, a, voluptates modi omnis, ex in dicta corrupti accusantium aspernatur alias maxime eos eaque nostrum. Sint ipsa commodi eveniet quam cupiditate mollitia fugit, impedit illo eligendi, accusantium incidunt ex, iure quod sit. Sapiente, animi. Veritatis, beatae numquam mollitia repellat sequi voluptatem quae laboriosam praesentium eos eligendi ducimus veniam nobis facilis, quia asperiores reiciendis est ipsam quis a qui dignissimos atque illum tempore. 
            Tenetur molestiae inventore provident nobis, minus esse voluptas ex unde repellat non eum blanditiis praesentium veniam architecto. Illo architecto aut consequuntur dolor deleniti numquam cupiditate.</p>
        </div>

        {/* All blogs */}
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 items-center justify-between">
            {blogs.map(blog => <div className='mx-auto relative mb-12 cursor-pointer' key={blog.id}>
                <img src={blog.image} alt="" className='hover:scale-95 transition-all duration-300' />
                <div className="text-center px-4 py-8 bg-white shadow-lg rounded-md md:w-3/4 mx-auto absolute left-0 right-0 -bottom-12">
                    <h3 className="mb-3 text-neutralGrey font-semibold">{blog.title}</h3>
                    <div className="flex items-center justify-center gap-8">
                        <a href="/" className='font-bold text-brandPrimary hover:text-neutral-700'>Read More</a>
                    </div>
                </div>
            </div>)}
        </div>
    </div>
  )
}

export default Blog