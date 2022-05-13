import React from 'react';
import bucketgirl from './../../assets/images/bucketgirl.png'

const Landing = () => {
    return (
        <div className="hero bg-accent mt-16 py-10">
            <div className="hero-content flex-col lg:flex-row">
                <div>
                    <p className='text-xl'>Best Quality</p>
                    <h1 className="text-5xl font-bold">Professional Cleaning Service</h1>
                    <p className="py-6 max-w-xl">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti.
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
                <div className='h-[60vh] lg:w-1/2'>
                    <img src={bucketgirl} className="h-full shrink-0 mx-auto" alt='' />
                </div>
            </div>
        </div>
    );
};

export default Landing;