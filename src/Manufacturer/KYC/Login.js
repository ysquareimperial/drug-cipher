import React from 'react'
import { Card, Col, Row } from 'react-bootstrap';
import { ArrowLeftCircle, AtSign, FileText } from 'react-feather';
import { useNavigate } from 'react-router-dom';
import logo from "../../image/DRUG CIPHER (2).png";

export default function Login() {
    const navigate = useNavigate()

    return (
        <div className='container'>
            <Card className="KYC_card shadow p-3">
                <div>
                    <Row>
                        <Col md={6} sm={6} xs={6}>
                            <img
                                src={logo}
                                style={{ width: 70, borderRadius: 10 }}
                                alt=""
                                className="shadow"
                                onClick={() => navigate('/')}

                            />{" "}
                            <h4
                                style={{
                                    display: "inline",
                                    color: "rgb(3, 66, 110)",
                                    marginRight: 30,
                                }}
                                className='dc'
                            >
                                DrugCipher
                            </h4>
                        </Col>
                        <Col md={6} sm={6} xs={6}>
                            <ArrowLeftCircle className='shadow p-3' size='4em' style={{ color: 'rgb(3, 66, 110)', float: 'right', cursor: 'pointer' }} onClick={() => navigate(-1)} />
                        </Col>
                    </Row>
                </div>
                <div>
                    <div className='text-center'>
                        <h3 className='register_heading mt-3'>
                            Import Existing Account
                        </h3>
                        <p className='m-0' style={{ color: '#029f41' }}>DrugCipher introduces a sophisticated solution to tackling the issues surrounding pharmaceutical products.</p>
                    </div>
                    <div style={{}} className='mt-5'>
                        <Row>
                            <Col md={6}>
                                <Card className='KYC_card shadow p-4'>
                                    <h5 className="man_card_title mt-4"><AtSign />{' '}Email Recovery</h5>
                                    <p className='login_text ' style={{ marginBottom: 78 }}>Use the link that was sent to your email from drugcipher.com when creating your account. Click the link for your account recovery.</p>
                                    {/* <p>When you click the 'Send Email' button, a recovery mail will be sent to your email that is been registered with your account.</p> */}

                                </Card>
                            </Col>
                            <Col md={6}>
                                <Card className='KYC_card shadow p-4'>
                                    <h5 className="man_card_title mt-4"><FileText />{' '}Passphrase Recovery</h5>
                                    <p className='login_text'>When you click the 'Recover Account' button, you will be asked to input your 15 words passphrase that was generated for your account when registering.</p>
                                    <button className='man_button' onClick={() => navigate('/recorver-passphrase')}>Recover Account</button>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                </div>
            </Card>
            <div className='text-center text-secondary'>
                <p>Copyright © {new Date().getFullYear()} DrugCipher. All rights reserved.</p>
            </div>
        </div>
    )
}