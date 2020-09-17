import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Layout } from 'antd'
import HeaderNav from '../../commom/HeaderNav'
import FooterInfo from '../../commom/FooterInfo/FooterInfo'
import SwiperPic from '../../components/SwiperPic/SwiperPic'
import Article from '../../routes/Article/Article'
import Msg from '../../routes/Msg/LeaveMsg'
import About from '../../routes/About/About'
import styles from './style.module.css'
import 'antd/dist/antd.css'



export default function DefaultLayout(props){
    const { Header, Content, Footer } = Layout
    return (
        <div>
            <Router>
                <Layout>
                    {/* 顶部导航 */}
                    <Header className={styles.header}>
                        <HeaderNav/>
                    </Header>
                    {/* 主体 */}
                    <Content className={styles.main}>
                        <Route path={props.match.url+'/'} component={SwiperPic} exact/>
                        <Route path={props.match.url+'/articleList'} component={Article} />
                        <Route path={props.match.url+'/leaveMsg'} component={Msg} />
                        <Route path={props.match.url+'/aboutMe'} component={About} />
                    </Content>
                    {/* 底部 */}
                    <Footer className={styles.footer}>
                        <FooterInfo/>
                    </Footer>
                </Layout>
            </Router>
        </div>
    )
}