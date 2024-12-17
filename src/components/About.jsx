
function About() {
  return (
    <div id="about">
       
       <div className="text-center mt-5">
        <h4>About</h4>
       </div>
        
      <div className="container h-100 mt-5">
        <div className="row row-cols-lg-2 row-cols-md-1">
        <div className="col-lg-5 text-center mt-2 ">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXJA32WU4rBpx7maglqeEtt3ot1tPIRWptxA&s" alt="" className="rounded-circle" />
                </div>
                <div className="col text-center mt-3 md-fs-6 fs-5 text-center">
                    <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum voluptates vel officia suscipit nesciunt a fugiat dolore, facere perspiciatis quas eos sunt iusto, ea qui ratione. Perspiciatis iusto culpa eum!</span>
                    <div className="mt-1">
                      <h2>skill</h2>
                      <div className="">
                      <i className="fa-brands fa-html5 ms-3 fs-1"></i>
                      <i className="fa-brands fa-css3-alt ms-3 fs-1"></i>
                      <i className="fa-brands fa-js ms-3 fs-1"></i>
                      <i className="fa-brands fa-react ms-3 fs-1"></i>
                      <i className="fa-brands fa-php ms-3 fs-1"></i>
                      <i className="fa-brands fa-laravel ms-3 fs-1"></i>
                      <i className="fa-solid fa-database ms-3 fs-1"></i>
                      </div>
                    </div>
                </div>
        </div>
      </div>
    </div>
  )
}

export default About
