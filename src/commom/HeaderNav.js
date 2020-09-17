import React , { useState } from 'react'
import { Menu } from 'antd'
import { Link } from 'react-router-dom'
import { HomeOutlined, SafetyCertificateOutlined, MailOutlined} from '@ant-design/icons'
import styles from './style.module.css'
import 'antd/dist/antd.css'

export default function HeaderNav() {

    const [current,setCurrent] = useState("home");

    let handleClick = (e) => {
        setCurrent(e.key)
    }

    return (
        <div className={styles.container}> 
            <div>
                <a className={styles.logo} href="#1">.</a>
            </div>
            <div className={styles.nav}>
                <Menu className={styles.flex} selectedKeys={[current]} onClick={handleClick}>
                    <Menu.Item key="home">
                        <Link to="/home" icon={<HomeOutlined/>}>首页</Link>
                    </Menu.Item>
                    <Menu.Item key="articleList">
                         <Link to="/home/articleList" icon={<SafetyCertificateOutlined/>}>文字</Link>
                    </Menu.Item>
                    <Menu.Item key="leaveMsg">
                        <Link to="/home/leaveMsg" icon={<MailOutlined/>}>留言</Link>
                    </Menu.Item>
                    <Menu.Item key="aboutMe">
                          <Link to="/home/aboutMe">关于</Link>
                    </Menu.Item>
                </Menu>
            </div>
        </div>
    )
}
