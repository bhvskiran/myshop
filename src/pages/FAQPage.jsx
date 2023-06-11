import React, { useState } from "react";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import styles from "../styles/styles";
import { MdArrowForwardIos, MdOutlineClose } from "react-icons/md";
import { faqsData } from "../static/data";

const FAQPage = () => {
  return (
    <div>
      <Header activeHeading={5} />
      <Faq />
      <Footer />
    </div>
  );
};

const Faq = () => {
  const [activeTab, setActiveTab] = useState(0);

  const toggleTab = (tab) => {
    if (activeTab === tab) {
      setActiveTab(0);
    } else {
      setActiveTab(tab);
    }
  };

  return (
    <div className={`${styles.section} my-8`}>
      <h2 className="text-3xl font-bold text-gray-900 mb-8">FAQ</h2>
      <div className="mx-auto space-y-4">
        {faqsData &&
          faqsData.map((eachFaq, index) => (
            <div className="border-b border-gray-300 pb-4" key={index}>
              <button
                className="flex items-center justify-between w-full"
                onClick={() => toggleTab(eachFaq.id)}
              >
                <span className="text-lg font-medium text-gray-900">
                  {eachFaq.faqQues}
                </span>
                {activeTab === eachFaq.id ? (
                  <MdOutlineClose size={25} color="#333" />
                ) : (
                  <MdArrowForwardIos size={25} color="#333" />
                )}
              </button>
              {activeTab === eachFaq.id && (
                <div className="mt-4">
                  <p className="text-base text-gray-500">{eachFaq.desc}</p>
                </div>
              )}
            </div>
          ))}
      </div>
    </div>
  );
};

export default FAQPage;
