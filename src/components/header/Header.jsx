import "./header.css"
import { DownOutlined, SearchOutlined, HeartOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { Dropdown, Badge, Space } from 'antd';

function Header() {
    const items = [
        {
            label: <a href="!#">1st menu item</a>,
            key: '0',
        },
        {
            label: <a href="!#">2nd menu item</a>,
            key: '1',
        }
    ];

    return (<>
        <div className="wrapper-padding">
            <div className="header-container">
                <div className="logo-custom">
                    <img src="/images/logo.png" alt="" />
                </div>
                <div className="menu-n-search">
                    <Dropdown menu={{ items, }}
                        trigger={['click']}
                    >
                        <a onClick={(e) => e.preventDefault()}>
                            <Space>
                                Menu
                                <DownOutlined />
                            </Space>
                        </a>
                    </Dropdown>
                    <input type="text" placeholder="Search books here" />
                    <SearchOutlined className="search-icon" />
                </div>
                <div className="whislish-n-cart">
                    <Badge count={9} size={"small"}>
                        <HeartOutlined style={{ fontSize: 22 }} />
                    </Badge>
                    <Badge count={9} size={"small"}>
                        <ShoppingCartOutlined style={{ fontSize: 22 }} />
                    </Badge>
                </div>
                <div className="account-user">
                    <div className="avatar-custom">
                        <img src="" alt="" />
                    </div>
                    <div className="username-n-email">
                        <span>Brian</span>
                        <p>briancorner@mail.com</p>
                    </div>
                    <DownOutlined />
                    
                </div>
            </div>
        </div>
    </>);
}

export default Header;