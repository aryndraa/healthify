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
		{
			question: "How do you distinguish between a cold and the flu?",
			answer: "Identify the disease through its symptoms. Differentiate between cold and flu.",
		},
		{
			question: "How do you distinguish between a cold and the flu?",
			answer: "Identify the disease through its symptoms. Differentiate between cold and flu.",
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
		<div className="flex flex-col min-w-[973px] w-screen p-[34px] bg-white rounded-[40px] gap-[32px]">
			<div>
				<p className="text--5xl font-semibold mb-[8px]">
					Frequently Asked Question
				</p>
				<p className="">
					We are dedicated to providing thorough and professional
					responses to all of your inquiries.
				</p>
			</div>
			<div>
				{faqData.map((item, index) => (
					<div key={index} className="">
						<motion.div
							className=" text--2xl font-semibold"
							onClick={() => toggleFAQ(index)}
							initial={false}
						>
							<div className="flex justify-between items-center my-6">
								{item.question}
								<div className="bg-[#C5E5FF] w-fit p-4 rounded-full">
									{activeIndex === index ? (
										// SVG "X" saat aktif (close)
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width={24}
											height={24}
											viewBox="0 0 24 24"
										>
											<path
												fill="none"
												stroke="currentColor"
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M18 6L6 18M6 6l12 12"
											/>
										</svg>
									) : (
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width={24}
											height={24}
											viewBox="0 0 24 24"
										>
											<path
												fill="#213170"
												d="M18 12.998h-5v5a1 1 0 0 1-2 0v-5H6a1 1 0 0 1 0-2h5v-5a1 1 0 0 1 2 0v5h5a1 1 0 0 1 0 2"
											/>
										</svg>
									)}
								</div>
							</div>
						</motion.div>
						<AnimatePresence>
							{activeIndex === index && (
								<motion.div
									className=""
									initial={{ opacity: 0, height: 0 }}
									animate={{ opacity: 1, height: "auto" }}
									exit={{ opacity: 0, height: 0 }}
								>
									<p className=" min-w-[787px] text-justify text-[18px] mb-4">
										{item.answer}
									</p>
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
