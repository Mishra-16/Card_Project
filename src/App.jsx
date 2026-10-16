import Page1 from './components/Page_1/Page1'

const App = () => {

  const users = [
    {
      img:'https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
      intro:'',
      color:'blue',
      tag:'Satisfied'
    }, 
    {
      img:'https://images.unsplash.com/photo-1498758536662-35b82cd15e29?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
      intro:'',
      color:'Lightseagreen',
      tag:'Underserved'
    }, 
    {
      img:'https://images.unsplash.com/photo-1545184180-25d471fe75eb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
      intro:'',
      color:'orange',
      tag:'Underbanked'
    },
    {
      img:'https://plus.unsplash.com/premium_photo-1661284849095-e9061ffc5e73?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
      intro:'',
      color:'pink',
      tag:'Strustured'
    },
    {
      img:'https://plus.unsplash.com/premium_photo-1773833960710-08d2eb111b8c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
      intro:'',
      color:'red',
      tag:'Reliable'
    },
    {
      img:'https://plus.unsplash.com/premium_photo-1666264200711-9a06dbfb0fea?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
      intro:'',
      color:'black',
      tag:'Deserve'
    },
  
  ]
  return (
    <div>
      <Page1 users={users} />
    </div>
  )
}

export default App
