import { useState } from 'react'
import { Button, Form, Input } from 'antd'
import { apiReqs } from '@/api'
import { useNavigate } from 'react-router-dom'
import { KeyOutlined, UserOutlined } from '@ant-design/icons'
import imgLogo from '@/common/images/logo.jpg'
import imgCover from './cover.svg'
import './login.scss'

function Login() {
    // 创建路由hook
    const navigate = useNavigate()

    // 登录按钮loading状态
    const [loading, setLoading] = useState(false)

    // 提交登录
    const loginSubmit = (values) => {
        setLoading(true)

        let data = {
            account: values.account,
            password: values.password,
        }

        apiReqs.signIn({
            data,
            success: (res) => {
                console.log(res)
                navigate('/home')
            },
        })
    }

    return (
        <div className="P-login">
            <div className="login-con">
                <div className="cover-con">
                    <img src={imgLogo} alt="" className="img-logo" />
                    <h2>Vite React APP</h2>
                    <img src={imgCover} alt="" className="img-cover" />
                    
                </div>
                <div className="pannel-con">
                    <h3>Welcome!</h3>
                    <p className="subtext">请登录您的账号</p>
                    <Form onFinish={loginSubmit}>
                        <Form.Item
                            name="account"
                            rules={[
                                { required: true, message: '请输入您的账号' },
                            ]}
                        >
                            <Input
                                size="large"
                                placeholder="请输入账号"
                                prefix={<UserOutlined />}
                                autoComplete="account"
                            />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: '请输入您的密码',
                                },
                            ]}
                        >
                            <Input.Password
                                size="large"
                                placeholder="请输入密码"
                                prefix={<KeyOutlined />}
                                autoComplete="password"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Button
                                type="primary"
                                htmlType="submit"
                                size="large"
                                block={true}
                                loading={loading}
                            >
                                登录
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default Login
