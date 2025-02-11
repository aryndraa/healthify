// src/components/FAQ.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FAQ = () => {
	const [activeIndex, setActiveIndex] = useState(null);

	const faqData = [
		{
			question: "Can you find the disease based on symptoms?",
			answer: "Muted stakeholders conversation heads-up reach moving own. One sandwich latest cob are now look support diligence. Should today synergize initiative attached. Winning functional all rundown moments timepoint protocol finance. Say metal one mifflin would offline. By pain next who's hear teams boil hits.",
		},
		{
			question: "How do you distinguish between a cold and the flu?",
			answer: "Identify the disease through its symptoms. Differentiate between cold and flu.",
		},
	];

	const toggleFAQ = (index) => {
		setActiveIndex(activeIndex === index ? null : index);
	};

	return (
		<div className="flex flex-col w-[973px] p-[34px] bg-white rounded-[40px] gap-[32px]">
			<div>
				<p className="text-5xl font-semibold mb-[8px]">
					Frequently Asked Question
				</p>
				<p className="">
					We are dedicated to providing thorough and professional
					responses to all of your inquiries.
				</p>
			</div>
			<div>
				{faqData.map((item, index) => (
					<div key={index} className="mt-6">
						<motion.div
							className=" text-2xl font-semibold"
							onClick={() => toggleFAQ(index)}
							initial={false}
						>
							{item.question}
							{/* gambar  */}
						</motion.div>
						<AnimatePresence>
							{activeIndex === index && (
								<motion.div
									className=""
									initial={{ opacity: 0, height: 0 }}
									animate={{ opacity: 1, height: "auto" }}
									exit={{ opacity: 0, height: 0 }}
								>
									{item.answer}
								</motion.div>
							)}
						</AnimatePresence>
						<hr />
					</div>
				))}
			</div>
		</div>
	);
};

export default FAQ;
