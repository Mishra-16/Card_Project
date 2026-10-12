import Card from './components/Card'

const App = () => {

  const jobOpenings = [
  {
    brandlogo: "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3c/Google_Favicon_2025.svg/250px-Google_Favicon_2025.svg.png?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail",
    name: "Google",
    datePosted: "10 days ago",
    post: "Cloud Solution Architect",
    tag1: "Full Time",
    tag2: "Mid Level",
    salary: "$ 35/hr",
    location: "Bangalore, India",
  },
  {
    brandlogo: "https://zonalogo.com/assets/amazon-logo-png-svg.webp?asset=1957",
    name: "Amazon",
    datePosted: "5 days ago",
    post: "Software Development Engineer",
    tag1: "Full Time",
    tag2: "Entry Level",
    salary: "$ 40/hr",
    location: "Hyderabad, India",
  },
  {
    brandlogo: "https://static.dezeen.com/uploads/2021/11/meta-facebook-rebranding-name-news_dezeen_2364_col_sq.jpg",
    name: "Meta",
    datePosted: "2 weeks ago",
    post: "React Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    salary: "$ 70/hr",
    location: "Remote, India",
  },
  {
    brandlogo: "https://e7.pngegg.com/pngimages/180/164/png-clipart-apple-logo-apple-logo-thumbnail.png",
    name: "Apple",
    datePosted: "7 days ago",
    post: "iOS Developer",
    tag1: "Part Time",
    tag2: "Junior Level",
    salary: "$ 35/hr",
    location: "Bangalore, India",
  },
  {
    brandlogo: "https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=700&h=456",
    name: "Netflix",
    datePosted: "3 weeks ago",
    post: "Backend Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    salary: "$ 120/hr",
    location: "Remote, USA",
  },
  {
    brandlogo: "https://static.vecteezy.com/system/resources/thumbnails/027/127/473/small/microsoft-logo-microsoft-icon-transparent-free-png.png",
    name: "Microsoft",
    datePosted: "4 days ago",
    post: "Data Scientist",
    tag1: "Full Time",
    tag2: "Entry Level",
    salary: "$ 160/hr",
    location: "Noida, India",
  },
  {
    brandlogo: "https://iprsoftwaremedia.com/219/files/202512/692f56983d6332f89cbbc58b_nvidia-logo-horiz-wht-16x9/nvidia-logo-horiz-wht-16x9_thmb.png?v=44a60e3f-c4e5-4d8a-879f-ec5121ad6f4b",
    name: "NVIDIA",
    datePosted: "12 days ago",
    post: "AI Software Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    salary: "$ 80/hr",
    location: "Pune, India",
  },
  {
    brandlogo: "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/250px-Facebook_f_logo_%282019%29.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail",
    name: "Facebook",
    datePosted: "5 weeks ago",
    post: "Frontend Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    salary: "$ 50/hr",
    location: "Noida, India",
  },
  {
    brandlogo: "https://upload.wikimedia.org/wikipedia/commons/f/fc/IBM_logo_in.jpg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
    name: "IBM",
    datePosted: "6 days ago",
    post: "Backend Developer",
    tag1: "Contract",
    tag2: "Mid Level",
    salary: "$ 65/hr",
    location: "Hyderabad, India",
  },
  {
    brandlogo: "https://m.media-amazon.com/images/I/41Nx6c+5DhL._AC_UF894,1000_QL80_.jpg",
    name: "Tesla",
    datePosted: "2 days ago",
    post: "Cloud Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    salary: "$ 50/hr",
    location: "Bangalore, India",
  },
];

  return (
    <div className='parent'>
      {jobOpenings.map(function(elem, idx){

        return <div key ={idx}>
          <Card company={elem.name} post={elem.post} tag1={elem.tag1} tag2={elem.tag2} salary={elem.salary} brandLogo={elem.brandlogo} Location={elem.location} datePosted={elem.datePosted}  />
        </div>
        
      })}
    </div>
  )
}

export default App
