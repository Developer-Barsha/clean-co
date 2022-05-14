import React from 'react';
import bucketgirl from './../../assets/images/bucketgirl.png'

const Landing = () => {
    return (
        <>
            <div className="hero bg-accent mt-16 py-10">
                <div className="hero-content flex-col lg:flex-row">
                    <div>
                        <p data-aos='fade-right' data-aos-duration={'1000'} className='text-xl text-primary'>Best Quality</p>
                        <h1 data-aos='fade-right' className="text-5xl font-bold" data-aos-delay='100' data-aos-duration={'900'}>Professional Cleaning Service</h1>
                        <p data-aos='fade-right' className="py-6 max-w-xl" data-aos-delay='500' data-aos-duration={'800'}>
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti.
                        </p>
                        <button data-aos-delay='1000' data-aos='zoom-in' data-aos-duration={'500'} className="btn btn-primary">Get Started</button>
                    </div>
                    <div className='h-[60vh] w-5/6 lg:w-1/2 overflow-hidden'>
                        <img data-aos='fade-left' data-aos-delay='400' data-aos-duration={'1000'} src={bucketgirl} className="h-full w-full shrink-0 mx-auto" alt='' />
                    </div>
                </div>
            </div>
            <div className='p-3 shadow-lg -mt-14 w-5/6 bg-base-300 mx-auto mb-5 rounded-2xl'>
                <h1 className='text-primary text-2xl pb-3 font-bold'>Get Free Estimate</h1>
                <div className='grid lg:grid-cols-4 gap-2 sm:grid-cols-1 md:grid-cols-2 items-center justify-center px-3'>
                    <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                    <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                    <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                    <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                    <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                    <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                    <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                    <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                </div>
                <button className='btn btn-primary mt-2 ml-3'>Get Quote</button>
            </div>
        </>
    );
};

export default Landing;