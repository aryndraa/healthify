export function BlogContent({ blog }) {
    return (
        <div className=" items-center lg:items-start flex flex-col lg:flex-row 2xl:items-start gap-4 mb-12">
            <div className="min-w-[220px] max-xl:hidden min-h-[220px] 2xl:w-[549px] 2xl:h-[549px] rounded-[40px] bg-cover bg-center" style={{ backgroundImage: `url(${blog.image})` }}></div>

            <div className="max-w-[1115px] flex flex-col gap-4">
                {/* Header */}
                <div className="bg-white p-12 flex flex-col rounded-[40px] gap-4">
                    <div className="flex gap-4 flex-wrap">
                        {blog.tags.map((tag, index) => (
                            <p key={index} className="Tag">
                                {tag}
                            </p>
                        ))}
                    </div>
                    <p className="text--5xl font-semibold">{blog.title}</p>
                    <p>
                        {blog.date} <strong>by {blog.author}</strong>
                    </p>
                </div>

                {/* Content */}
                <div className="bg-white p-12 flex flex-col rounded-[40px] gap-4">
                    <p className="text--lg">{blog.content[0].orientations}</p>
                    <br />
                    <p className="text--lg font-bold">{blog.content[0].orientTitle}</p>
                    <p className="text--lg">{blog.content[0].orientExplan}</p>
                    <br />
                    <p className="text--lg font-bold">{blog.content[0].benefit}</p>
                    <ul className="text--lg list-disc ml-4">
                        {blog.content[0].listBenefit.map((item, index) => (
                            <li key={index}>{item.text}</li>
                        ))}
                    </ul>
                    <br />
                    <p className="text--lg font-bold">{blog.content[0].Handling}</p>
                    <p className="text--lg">{blog.content[0].HandlingDesc}</p>
                    <ul className="text--lg list-disc ml-4">
                        {blog.content[0].HandlingList.map((item, index) => (
                            <li key={index}>{item.text}</li>
                        ))}
                    </ul>
                    <br />
                    <p className="text--lg font-bold">Kesimpulan</p>
                    <p className="text--lg">{blog.content[0].conclusion}</p>
                </div>
            </div>
        </div>
    );
}
