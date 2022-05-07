import '../resources/styles/globalStyle/common.css'
import '../resources/styles/componentStyle/NavBar.css';
import NavBar from './NavBar'
import FlatContainer from './FlatContainer'
import FreeContainer from './FreeContainer'
import SimpleCard from './SimpleCard'
import SexyHeading from './SexyHeading';
import FlexBanner from './FlexBanner';
import SexyDropdown from './SexyDropdown'

function HomePage() {
    const simpleCardDummy = [
        {
          img:'https://www.svgrepo.com/show/201659/coffee.svg',
          heading: 'Java',
          text: 'Java is a high-level, general-purpose, object-oriented, and secure programming language developed by James Gosling at Sun Microsystems, Inc. in 1991. It is formally known as OAK. In 1995, Sun Microsystem changed the name to Java. In 2009, Sun Microsystem takeover by Oracle Corporation.'
        },
        {
          img:'https://www.svgrepo.com/show/201783/coffee.svg',
          heading: 'Advanced Java',
          text: 'Introduce to advanced concept like Thread, Stream, Functional Programming Style, and More...'
        },
        {
          img:'https://www.svgrepo.com/show/378642/leaf.svg',
          heading: 'Spring Basic',
          text: 'The Spring Framework provides a comprehensive programming and configuration model for modern Java-based enterprise applications - on any kind of deployment platform.'
        },
        {
          img:'https://www.svgrepo.com/show/366450/shutdown-small.svg',
          heading: 'Spring Boot',
          text: 'Spring Boot makes it easy to create stand-alone, production-grade Spring based Applications that you can "just run".'
        },
        {
          img:'https://www.svgrepo.com/show/340116/data-refinery.svg',
          heading: 'Spring Data & Hibernate',
          text: 'Spring Data’s mission is to provide a familiar and consistent, Spring-based programming model for data access while still retaining the special traits of the underlying data store.'
        },
        {
          img:'https://www.svgrepo.com/show/383756/security-protection-police-hat-head.svg',
          heading: 'Spring Security',
          text: 'Spring Security `is a powerful and highly customizable authentication and access-control framework. It is the de-facto standard for securing Spring-based applications.'
        },
    ]

    const sexyDropdownDummy = [
    {
        heading: 'Programming Basic',
        item: ['Variable', 'Syntax', 'Function', 'Callback']
    },
    {
        heading: 'Java',
        item: ['OOP','Object', 'Class', 'Polymorphism', 'Abstract', 'Interface']
    },
    {
        heading: 'Spring',
        item: ['Beans', 'Dependency Injection', 'Inversion of Control' ,'Spring MVC', 'Spring Boot for Web', 'Build an API', 'Web Configuration']
    },
    {
        heading: 'Secure your App',
        item: ['Authentication', 'Authorization','Validation' ,'Secure your API', 'Protect our Data']
    },
    ]

    const flexBannerImg = ['https://www.pinclipart.com/picdir/big/92-925705_java-development-ruby-on-rails-web-development-service.png',
    'https://www.edureka.co/blog/wp-content/uploads/2017/05/dispatcherservlet.png'
    ]


    return (
        <div>
            <NavBar>
                <ul className="main-nav-item-list">
                    <li className="main-nav-item-list-item">Khóa học</li>
                    <li className="main-nav-item-list-item">Bài viết</li>
                    <li className="main-nav-item-list-item">Đăng ký học</li>
                </ul>
            </NavBar>
            <FlatContainer/>
            <SexyHeading style={{margin:"-15% 0 3%"}}>What do we offer ?</SexyHeading>
            <FreeContainer className="flex-row-container" style={{margin:"0 18% 0"}}>
                {simpleCardDummy.map((data, index) => {
                return <SimpleCard key={index} width="30%" data={data}/>
                })}
            </FreeContainer>

            <FreeContainer className="flex-row-container" style={{margin:"0 18% 0"}}>
                <FlexBanner imgData={flexBannerImg[0]} style={{width:"100%", height:"400px"}}/>
            </FreeContainer>

            <SexyHeading style={{margin:"4% 0 2%"}}>Trang bị đầy đủ kiến thức Java</SexyHeading>

            <FreeContainer className="flex-row-container" style={{margin:"0 18% 0"}}>
                {
                sexyDropdownDummy.map((data, index) => {
                    return <SexyDropdown key={index} data={data}/>
                })
                }
            </FreeContainer>

            <FreeContainer className="flex-row-container" style={{margin:"2% 18% 0"}}>
                <FlexBanner imgData={flexBannerImg[1]} hideButton style={{width:"100%", height:"400px", flexDirection:"row-reverse"}}/>
            </FreeContainer>
        </div>
    )
}

export default HomePage;