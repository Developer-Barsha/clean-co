import React from 'react';

const Landing = () => {
    return (
        <div className="hero min-h-screen bg-secondary">
            <div className="hero-content mt-16 lg:px-10 flex-col lg:flex-row">
                <div>
                    <h1 className="text-5xl font-bold">Box Office News!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
                <img src="https://api.lorem.space/image/movie?w=260&h=400" className="max-w-sm rounded-lg shadow-2xl" alt=''/>
            </div>
        </div>
    );
};

export default Landing;