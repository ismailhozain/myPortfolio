import React from 'react';
import './App.css';
import { Menu, Button } from 'antd';
import {
    DashboardOutlined,
    ToolOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    TrophyOutlined,
    UnlockOutlined,
    DesktopOutlined,
    ProjectOutlined,
    InboxOutlined,
} from '@ant-design/icons';
import 'antd/dist/antd.css';
import {DownOutlined} from '@ant-design/icons';

const {SubMenu} = Menu;

class App extends React.Component {
    state = {
        collapsed: false,
    };
    toggleCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };
    render() {
        return (
            <div>
                <div className="App">
                    <div className={"menuClass"}>
                        <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
                            {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
                        </Button>
                        <Menu
                            defaultSelectedKeys={['1']}
                            mode="inline"
                            theme="dark"
                            inlineCollapsed={!this.state.collapsed}
                        >
                            <Menu.Item key="1">
                                <DashboardOutlined />
                                <span>Home</span>
                            </Menu.Item>
                            <Menu.Item key="2">
                                <DesktopOutlined />
                                <span>About</span>
                            </Menu.Item>
                            <Menu.Item key="3">
                                <UnlockOutlined />
                                <span>Skills</span>
                            </Menu.Item>
                            <Menu.Item key="4">
                                <ToolOutlined />
                                <span>Tools</span>
                            </Menu.Item>
                            <Menu.Item key="5">
                                <TrophyOutlined />
                                <span>Achievements</span>
                            </Menu.Item>
                            <Menu.Item key="6">
                                <ProjectOutlined />
                                <span>Projects</span>
                            </Menu.Item>
                            <Menu.Item key="7">
                                <InboxOutlined />
                                <span>Contact</span>
                            </Menu.Item>
                        </Menu>
                    </div>
                    <div className={"title section"}>
                        <h1 className={"titleText"}>Ismail Hozain</h1>
                        <Button shape={"circle"} type={"primary"}>
                            <DownOutlined/>
                        </Button>
                    </div>
                    <div className={"aboutSection section"}>
                        <h1>About</h1>
                        <p className={"bio"}>I am a freelance programmer and engineer. I mainly handle Web Development
                            but am rapidly expanding my skills and continuing on 4 years of experience programming.</p>
                        <h1>Education</h1>
                        <p>Mckinney High School (Expected 2022)</p>
                    </div>
                    <div className={"skillsSection section"}>
                        <h1>Skills</h1>
                        <h2>Programming</h2>
                        <ul>
                            <li>Javascript</li>
                            <li>React</li>
                            <li>Ant Design</li>
                            <li>Three.js</li>
                            <li>Animejs</li>
                            <li>Firebase</li>
                            <li>Vue.js</li>
                            <li>Python</li>
                            <li>Selenium</li>
                            <li>Java</li>
                            <li>RobotC</li>
                            <li>Arduino</li>
                        </ul>
                        <h2>Engineering</h2>
                        <ul>
                            <li>Industrial design in CAD</li>
                            <li>Electronics and programming circuits in RobotC</li>
                            <li>Pneumatics</li>
                            <li>Modelmaking</li>
                            <li>3d Printing</li>
                            <li>Woodworking</li>
                        </ul>
                    </div>
                    <div className={"faveTools section"}>
                        <h1>Favorite tools</h1>
                        <ul>
                            <li>Webstorm + Pycharm</li>
                            <li>Fusion 360</li>
                            <li>Blender</li>
                            <li>Wireshark</li>
                            <li>Ghidra</li>
                            <li>Burp Suite</li>
                            <li>SQLMap</li>
                            <li>John The Ripper</li>
                            <li>Meshroom</li>
                            <li>Chrome</li>
                        </ul>
                    </div>
                    <div className={"achievementsSection section"}>
                        <h1>Achievements</h1>
                        <h2>TSA 2020</h2>
                        <p>Disclaimer: Competition is still going, these are interim results and qualifications</p>
                        <ul>
                            <li>1st Place Regional(NC.TX) - Transportation Modeling</li>
                        </ul>
                        <h2>TSA 2019</h2>
                        <ul>
                            <li>6th Place Nationals - Cybersecurity</li>
                            <li>2nd Place State(TX) - Transportation Modeling</li>
                            <li>1st Place State(TX) - Software Development</li>
                            <li>2nd Place State(TX) - Systems Control</li>
                        </ul>
                    </div>
                    <div className={"projectSection section"}>
                        <h1>Projects</h1>
                        <ul>
                            <li>WebIDE</li>
                            <li>Maglev Train Model</li>
                            <li>Random and Organized Chaos</li>
                            <li>More are in the works...</li>
                        </ul>
                    </div>
                    <div className={"contactSection section"}>
                        <h1>Find Me in these Places</h1>
                        <ul>
                            <li>Github</li>
                            <li>Email</li>
                            <li>Codepen</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}


export default App;
