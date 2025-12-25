import React from 'react';
import services from '@/data/services.json';
import ServicesCard from './_component/ServicesCard';

const Servicepage = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 py-12">

            <h2 className="text-3xl font-bold text-center mb-10">
                Our Care Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
                {services.map(service => (
                    <ServicesCard key={service.slug} service={service} />
                ))}
            </div>

        </div>
    );
};

export default Servicepage;
