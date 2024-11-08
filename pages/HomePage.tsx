import Footer from "@/components/Footer";
import Header from "@/components/Header";
import LeadTable from "@/components/LeadTable";
import React from "react";

const HomePage = () => {
    return (
        <section className='section'>
            <div className='min-h-[550px] h-[calc(100vh-110px)]'>
                <Header />
                <LeadTable />
            </div>
            <Footer />
        </section>
    );
};

export default HomePage;
