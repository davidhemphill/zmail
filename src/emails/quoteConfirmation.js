import React from 'react'
import s from '../styles'
import Layout from '../components/layout'
import Header from '../components/header'
import Content from '../components/content'
import SocialLinks from '../components/social'
import CTAButton from '../components/ctaButton'

const appStyles = {
    backgroundColor: '#f7f6f5',
    fontFamily: s.fontFamily,
}

export default class QuoteConfirmation extends React.Component {
    static defaultProps = {
        // name: 'David Hemphill',
        // email: 'davidlee.hemphill@gmail.com',
        // product: 'A Cool Product',
        // size: 'XL',
        // colorCount: '3',
        // currentPrice: '25.99',
        // quantity: '15',
        // needByDate: 'Tomorrow!',
        // additionalSpecs: 'With a smile',
    }

    static options = {
        title: 'Welcome to Lumi!',
        headCSS: 'body { background-color: #f7f6f5 }',
        previewText: 'Welcome to Lumi!'
    }

    static propTypes = {
        name: React.PropTypes.string.isRequired,
        email: React.PropTypes.string.isRequired,
    }

    render () {
        return (
            <Layout>
                <Header />
                <Content>
                    <h2 style={s.h1}>We&rsquo;re On It!</h2>
                    <p style={s.paragraph}>We&rsquo;ve received your quote request and will start processing it shortly. For reference, here are the details you provided:</p>

                    <table width="100%" style={{...s.table, ...{marginTop: '60px'}}}>
                        <tbody>
                            <tr>
                                <td style={s.tableData}><b>Name</b></td>
                                <td style={s.tableData}>{this.props.name}</td>
                            </tr>
                            <tr>
                                <td style={s.tableData}><b>Email</b></td>
                                <td style={s.tableData}>{this.props.email}</td>
                            </tr>
                            <tr>
                                <td style={s.tableData}><b>Product</b></td>
                                <td style={s.tableData}>{this.props.product}</td>
                            </tr>
                            <tr>
                                <td style={s.tableData}><b>Size</b></td>
                                <td style={s.tableData}>{this.props.size}</td>
                            </tr>
                            <tr>
                                <td style={s.tableData}><b>Colors</b></td>
                                <td style={s.tableData}>{this.props.colorCount}</td>
                            </tr>
                            <tr>
                                <td style={s.tableData}><b>Budget</b></td>
                                <td style={s.tableData}>{this.props.currentPrice}</td>
                            </tr>
                            <tr>
                                <td style={s.tableData}><b>Quantity</b></td>
                                <td style={s.tableData}>{this.props.quantity}</td>
                            </tr>
                            <tr>
                                <td style={s.tableData}><b>Need by date</b></td>
                                <td style={s.tableData}>{this.props.needByDate}</td>
                            </tr>
                            <tr>
                                <td style={s.tableData}><b>Notes</b></td>
                                <td style={s.tableData}>{this.props.additionalSpecs}</td>
                            </tr>
                        </tbody>
                    </table>
                </Content>
                <SocialLinks />
            </Layout>
        )
    }
}
