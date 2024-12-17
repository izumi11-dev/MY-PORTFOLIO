
function Home() {
    return (
        <div>
            <div className="container mt-4">
               <div className="row row-cols-1">
                <div className="col text-center mt-5">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXJA32WU4rBpx7maglqeEtt3ot1tPIRWptxA&s" alt="" className="rounded-circle" />
                </div>

                <div className="col text-center mt-5 md-fs-6 fs-5">
                    <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum voluptates vel officia suscipit nesciunt a fugiat dolore, facere perspiciatis quas eos sunt iusto, ea qui ratione. Perspiciatis iusto culpa eum!</span>
                </div>

                <div className="col text-center mt-5">
                    <a href="#" className="btn btn-danger ms-2"><i className="fa-brands fa-github "></i></a>
                    <a href="#" className="btn btn-danger ms-2"><i className="fa-brands fa-twitter"></i></a>
                    <a href="#" className="btn btn-danger ms-2"><i className="fa-brands fa-github "></i></a>
                </div>
               </div>
            </div>
        </div>
    )
}

export default Home
