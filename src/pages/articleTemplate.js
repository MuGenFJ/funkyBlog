import React from 'react'
import headerImg from "../images/headerText.png"
import textAvatar from "../images/assets/text-avatar.png"
import facebookLogo from "../images/assets/Facebook.png"
import instagramLogo from "../images/assets/Instagram.png"
import twitterLogo from "../images/assets/Twitter.png"
import SignUp from '../components/SignUp'
import GreetingBox from '../components/GreetingBox'
import Footer from '../components/Footer'


function articleTemplate() {
    return (
        <div className="readContainer">
            <div className="headerImage">
                <img src={headerImg} alt="header-img"/>
            </div>
            <div className="readMenu">
                <nav>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Blog</li>
                    </ul>
                </nav>
            </div>
            <div className="textContent">
                <div className="title">
                    <h3>TITLE OF THE ARTICLE</h3>
                    <h5>#THOUGHTS</h5>
                </div>
                <div className="textBox">
                    <div className="articleAvatar">
                        <img src={textAvatar} alt="" />
                    </div>
                    <div className="ligneTop"></div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus beatae harum reprehenderit, dolorem deleniti sint quidem illo ratione, vitae et illum distinctio! Id est officia cupiditate earum dignissimos quae optio.
                    Voluptatum quidem maiores consequatur nesciunt fugit! Voluptatum non a, libero dolores animi sapiente fugit, doloribus temporibus consequuntur quod esse porro consequatur expedita sint deserunt ullam. Commodi incidunt officiis deleniti quidem!
                    Tempore, nesciunt fugit? Deserunt nam molestias esse quibusdam? Quos aperiam accusamus eius rem reiciendis? Dignissimos odio vero consequuntur aut magnam reiciendis recusandae eum obcaecati, consequatur ad dolores voluptas ex aspernatur?
                    Natus cum suscipit aliquid eos nihil reiciendis modi nostrum, libero, iste itaque distinctio, asperiores sequi ullam ipsa eveniet beatae animi. Aliquam eveniet asperiores autem harum officia vitae est id. Sit.
                    Cupiditate officia nobis quibusdam perspiciatis placeat, harum libero accusamus quasi debitis modi laudantium autem iusto saepe provident labore possimus quae illo deleniti, enim veritatis ex magni? Cupiditate delectus eum quod!
                    Soluta suscipit voluptas rerum voluptatem, dignissimos officia, totam dolores eligendi praesentium qui nisi corporis odit quas iste libero animi quibusdam consectetur nam odio. Aperiam voluptate, officiis ipsum amet quisquam eius!
                    Impedit corrupti dolore enim maxime aliquam temporibus ut fugit a? Autem, quam libero sed reiciendis accusantium velit eligendi, vero, voluptatum obcaecati aperiam amet ut incidunt et ex ea id consectetur?
                    Nam porro ipsa modi maxime amet fugiat quisquam quos repudiandae veniam commodi sed officia ipsum, debitis, molestias culpa aspernatur quod, nobis voluptatem. Harum, impedit? Vel eaque odio incidunt quo a.
                    Magni pariatur deleniti aliquam ad enim perspiciatis at veniam? Pariatur minus et fugiat quae vero minima voluptatibus, mollitia consectetur qui unde sapiente ratione obcaecati inventore consequuntur, nisi ipsa? Earum, commodi.
                    Corrupti aliquam quos fugit officiis nihil nostrum consectetur exercitationem neque iusto commodi, repellendus dolore quaerat, aperiam a numquam eaque. Voluptatibus ea repellendus quae vitae debitis ex natus quia numquam iusto.
                    Perferendis in blanditiis quas sed ullam rerum accusamus voluptate atque aliquid sit numquam architecto nam reiciendis vel minima veniam doloribus voluptas, necessitatibus, temporibus nihil sunt ipsum neque excepturi! Culpa, quasi.
                    Accusamus eos nihil optio saepe sunt eligendi vero fuga, voluptates laboriosam error labore ducimus. Tenetur exercitationem ea impedit aliquid optio ducimus ipsam perspiciatis, nihil, quia laborum quae harum suscipit itaque.
                    Unde consequatur iure hic culpa impedit soluta quae ipsam recusandae corrupti ipsum iusto, fugiat officia laboriosam maxime nobis optio nostrum. Voluptates unde iure rerum molestias quam mollitia excepturi doloremque quae.
                    Animi quaerat tempore voluptate a vel quisquam consequuntur sed error repudiandae vero, officiis corrupti officia cumque illo? Reprehenderit, accusamus alias facilis, fugit natus quae veniam, libero aliquam rerum quas accusantium.
                    Doloribus voluptatem quam quis assumenda aperiam animi sequi voluptates perspiciatis quod culpa ducimus, blanditiis eaque ut delectus voluptate quaerat doloremque dignissimos inventore quibusdam itaque ullam. Sunt fugit cum beatae unde!
                    Provident, voluptatibus similique exercitationem tempora velit reiciendis deserunt vero. Nobis veniam perspiciatis eligendi fuga possimus officiis, ipsa repellat repellendus rem magni pariatur non ea doloribus magnam ratione? Consectetur, harum officia.
                    Assumenda est labore reprehenderit officiis beatae et, eaque neque voluptatum itaque, non dignissimos cumque dolore, blanditiis ab quibusdam excepturi error temporibus quidem laboriosam laborum! Nihil aliquid illo perferendis quos eos.
                    Autem iste tempore ipsa rem at laudantium tenetur aliquid modi officiis officia. Harum soluta molestiae alias sunt, necessitatibus adipisci. Asperiores animi provident excepturi blanditiis saepe libero quisquam aspernatur a dicta?
                    Neque ea quisquam ipsa quod voluptas impedit voluptatem, aperiam nihil atque iure officia error quibusdam voluptatibus quae sapiente eos adipisci! Sed temporibus earum mollitia velit iusto quaerat, ipsum eveniet rem?
                    Dignissimos, mollitia autem culpa quas fugit itaque magni, numquam alias, facere saepe architecto aut. Quo blanditiis a sunt facere in ab suscipit, similique ullam ducimus. Architecto maiores nobis ducimus blanditiis.
                    </p>
                    <div className="ligneBottom"></div>
                    <p className="date">November 12th 2020</p>
                    <div className="socialLinks">
                        <span>Share Buttons</span>
                        <div className="socialButton">
                            <div className="socialLine"></div>
                            <span><img src={facebookLogo} alt=""/></span>
                            <span><img src={instagramLogo} alt=""/></span>
                            <span><img src={twitterLogo} alt=""/></span>
                        </div>
                    </div>
                </div>
                <SignUp />
                <GreetingBox noNeed />
            </div>
            <Footer />
        </div>
    )
}

export default articleTemplate
